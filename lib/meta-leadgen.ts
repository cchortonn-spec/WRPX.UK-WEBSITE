import { sendWhatsAppTemplateMessage } from "@/lib/whatsapp-templates";

const META_GRAPH_API = "https://graph.facebook.com/v20.0";

export type MetaLeadField = {
  name: string;
  values: string[];
};

export type MetaLeadgenPayload = {
  leadgenId: string;
  pageId: string;
  formId: string;
  createdTime: number;
};

export type ParsedMetaLead = {
  name: string;
  phone: string | null;
  email: string | null;
  rawFields: MetaLeadField[];
};

export function parseLeadgenWebhookValue(
  value: Record<string, unknown>
): MetaLeadgenPayload | null {
  const leadgenId = value.leadgen_id;
  const pageId = value.page_id;
  const formId = value.form_id;
  const createdTime = value.created_time;

  if (
    typeof leadgenId !== "string" ||
    typeof pageId !== "string" ||
    typeof formId !== "string"
  ) {
    return null;
  }

  return {
    leadgenId,
    pageId,
    formId,
    createdTime:
      typeof createdTime === "number"
        ? createdTime
        : Number(createdTime) || Date.now() / 1000,
  };
}

export async function fetchMetaLeadgenDetails(
  leadgenId: string
): Promise<ParsedMetaLead> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("WHATSAPP_ACCESS_TOKEN is required to fetch Meta leads");
  }

  const url = `${META_GRAPH_API}/${leadgenId}?fields=created_time,field_data&access_token=${encodeURIComponent(accessToken)}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (errorData as any)?.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Meta leadgen fetch error: ${errorMessage}`);
  }

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fieldData = ((data as any)?.field_data ?? []) as Array<{
    name: string;
    values: string[];
  }>;

  const rawFields: MetaLeadField[] = fieldData.map((field) => ({
    name: field.name,
    values: field.values ?? [],
  }));

  const findField = (...names: string[]) => {
    for (const name of names) {
      const match = rawFields.find(
        (field) => field.name.toLowerCase() === name.toLowerCase()
      );
      const value = match?.values?.[0]?.trim();
      if (value) return value;
    }
    return null;
  };

  const fullName = findField("full_name", "name", "first_name");
  const phone =
    findField("phone_number", "phone", "mobile", "mobile_number") ?? null;
  const email = findField("email", "email_address") ?? null;

  const name =
    fullName ??
    ([findField("first_name"), findField("last_name")].filter(Boolean).join(" ") ||
      "Facebook Lead");

  return {
    name,
    phone,
    email,
    rawFields,
  };
}

function buildWelcomeParameters(name: string) {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  return [firstName];
}

export async function sendWelcomeTemplateIfConfigured(
  phone: string,
  name: string
): Promise<{ messageId: string; templateName: string } | null> {
  const templateName = process.env.WHATSAPP_WELCOME_TEMPLATE_NAME?.trim();
  if (!templateName) {
    console.warn(
      "Meta leadgen: WHATSAPP_WELCOME_TEMPLATE_NAME not set, skipping welcome message"
    );
    return null;
  }

  const languageCode = process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() || "en_GB";
  const { messageId } = await sendWhatsAppTemplateMessage(
    phone,
    templateName,
    languageCode,
    buildWelcomeParameters(name)
  );

  return { messageId, templateName };
}
