const WHATSAPP_API_VERSION = "v20.0";
const WHATSAPP_API_BASE = `https://graph.facebook.com/${WHATSAPP_API_VERSION}`;

/**
 * Normalise any UK phone number input to the WhatsApp Cloud API format —
 * digits only, with country code, no leading +.
 *
 * Examples:
 *   07398395417   → 447398395417
 *   +447398395417 → 447398395417
 *   447398395417  → 447398395417 (already correct)
 *   +33612345678  → 33612345678  (non-UK international)
 */
export function normalizeWhatsAppPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");

  if (!digits) return null;

  // UK mobile/landline typed without country code: 07xxx (11 digits)
  if (digits.startsWith("0") && digits.length === 11) {
    return "44" + digits.slice(1);
  }

  // Already includes country code (10+ digits, no leading zero)
  if (!digits.startsWith("0") && digits.length >= 10) {
    return digits;
  }

  return null;
}

type SendTextResult = {
  messageId: string;
};

/**
 * Send a plain text WhatsApp message via the Cloud API.
 * Returns the WhatsApp message ID (wamid.xxx) on success.
 * Throws an error with a descriptive message on failure.
 *
 * Only works within a 24-hour customer service window (i.e. after the
 * customer has messaged you first). For outbound-initiated messages use
 * approved templates instead.
 */
export async function sendWhatsAppTextMessage(
  toPhone: string,
  body: string
): Promise<SendTextResult> {
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
      type: "text",
      text: { body },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (errorData as any)?.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`WhatsApp API error: ${errorMessage}`);
  }

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messageId = (data as any)?.messages?.[0]?.id as string | undefined;

  if (!messageId) {
    throw new Error("WhatsApp API did not return a message ID");
  }

  return { messageId };
}
