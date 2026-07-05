import {
  normalizeWhatsAppPhone,
  WHATSAPP_API_BASE,
} from "@/lib/whatsapp-cloud";

export type WhatsAppTemplateDefinition = {
  id: string;
  label: string;
  description: string;
  templateName: string;
  languageCode: string;
  parameterLabels: string[];
};

function templateFromEnv(
  id: string,
  label: string,
  description: string,
  envName: string | undefined,
  parameterLabels: string[]
): WhatsAppTemplateDefinition | null {
  if (!envName?.trim()) return null;
  return {
    id,
    label,
    description,
    templateName: envName.trim(),
    languageCode: process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() || "en_GB",
    parameterLabels,
  };
}

export function getWhatsAppTemplates(): WhatsAppTemplateDefinition[] {
  return [
    templateFromEnv(
      "welcome",
      "Welcome enquiry",
      "First message after a Facebook Lead Ad form submission",
      process.env.WHATSAPP_WELCOME_TEMPLATE_NAME,
      ["Customer name"]
    ),
    templateFromEnv(
      "follow_up",
      "Follow up",
      "Chase a customer who has not replied",
      process.env.WHATSAPP_FOLLOW_UP_TEMPLATE_NAME,
      ["Customer name"]
    ),
    templateFromEnv(
      "quote_chaser",
      "Quote chaser",
      "Follow up after sending a quote",
      process.env.WHATSAPP_QUOTE_CHASER_TEMPLATE_NAME,
      ["Customer name"]
    ),
  ].filter((item): item is WhatsAppTemplateDefinition => item !== null);
}

export function getWhatsAppTemplateById(id: string) {
  return getWhatsAppTemplates().find((template) => template.id === id) ?? null;
}

type SendTemplateResult = {
  messageId: string;
};

export async function sendWhatsAppTemplateMessage(
  toPhone: string,
  templateName: string,
  languageCode: string,
  bodyParameters: string[]
): Promise<SendTemplateResult> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId || !accessToken) {
    throw new Error(
      "WhatsApp env vars not configured (WHATSAPP_PHONE_NUMBER_ID / WHATSAPP_ACCESS_TOKEN)"
    );
  }

  const normalized = normalizeWhatsAppPhone(toPhone);
  if (!normalized) {
    throw new Error(`Cannot normalize phone number: ${toPhone}`);
  }

  const url = `${WHATSAPP_API_BASE}/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: normalized,
      type: "template",
      template: {
        name: templateName,
        language: { code: languageCode },
        components:
          bodyParameters.length > 0
            ? [
                {
                  type: "body",
                  parameters: bodyParameters.map((text) => ({
                    type: "text",
                    text,
                  })),
                },
              ]
            : undefined,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (errorData as any)?.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`WhatsApp template error: ${errorMessage}`);
  }

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messageId = (data as any)?.messages?.[0]?.id as string | undefined;

  if (!messageId) {
    throw new Error("WhatsApp API did not return a message ID");
  }

  return { messageId };
}
