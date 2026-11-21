import { siteConfig } from "@/lib/site-config";

// The email you receive when someone sends an enquiry through the website.
// Emails can't use the website's stylesheet, so the brand colours are written inline here
// (black #050505, white, pink #d40082).

export type LeadType = "domestic" | "commercial";

export type LeadEmailInput = {
  type: LeadType;
  name: string;
  phone: string;
  email?: string;
  /** Postcode or town. */
  location?: string;
  /** Where the lead came from, e.g. "Contact page". */
  source: string;
  contactTime?: string;
  message?: string;
  /** One short line shown under the name, e.g. "Complete kitchen wrap". */
  summary?: string;
  /** Extra rows for the details table (e.g. door style). */
  details?: Array<{ label: string; value: string }>;
  /** Links to photos the customer uploaded. */
  photos?: string[];
};

const PINK = "#d40082";
const INK = "#050505";

const TYPE_LABEL: Record<LeadType, string> = {
  domestic: "Domestic",
  commercial: "Commercial",
};

/** Stops anything a visitor types from being read as HTML. */
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** "07398 395417" -> "447398395417", ready for a WhatsApp link. */
function whatsappNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("44")) return digits;
  if (digits.startsWith("0")) return `44${digits.slice(1)}`;
  return digits;
}

function ukTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function thumbnail(url: string) {
  return url.includes("/upload/")
    ? url.replace("/upload/", "/upload/w_340,h_340,c_fill,q_auto/")
    : url;
}

function row(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:10px 14px 10px 0;border-bottom:1px solid #eeeeee;width:36%;font-size:13px;color:#777777;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:15px;color:${INK};font-weight:600;vertical-align:top;">${valueHtml}</td>
    </tr>`;
}

export function buildLeadEmail(input: LeadEmailInput): { subject: string; html: string } {
  const typeLabel = TYPE_LABEL[input.type];
  const firstName = input.name.trim().split(/\s+/)[0] || input.name;
  const phoneDisplay = escapeHtml(input.phone);
  const telHref = `tel:${input.phone.replace(/[^\d+]/g, "")}`;
  const waText = encodeURIComponent(
    `Hi ${firstName}, it's WRPX. Thanks for getting in touch about your project. When's a good time to chat?`
  );
  const waHref = `https://wa.me/${whatsappNumber(input.phone)}?text=${waText}`;

  const headline =
    input.type === "commercial"
      ? `${escapeHtml(input.name)} has a commercial enquiry`
      : `${escapeHtml(input.name)} wants a quote`;

  const subtitleParts = [typeLabel, input.summary, input.location].filter(Boolean) as string[];
  const subtitle = escapeHtml(subtitleParts.join("  ·  "));

  const subject = `New ${typeLabel} lead: ${input.name}${input.location ? ` (${input.location})` : ""}`;
  const preheader = `${typeLabel} lead · ${input.phone}${input.summary ? ` · ${input.summary}` : ""}`;

  const rows = [
    row("Phone", `<a href="${telHref}" style="color:${INK};text-decoration:none;">${phoneDisplay}</a>`),
    input.email
      ? row(
          "Email",
          `<a href="mailto:${escapeHtml(input.email)}" style="color:${INK};text-decoration:none;">${escapeHtml(input.email)}</a>`
        )
      : "",
    input.location ? row("Location", escapeHtml(input.location)) : "",
    input.contactTime ? row("Best time to contact", escapeHtml(input.contactTime)) : "",
    ...(input.details ?? []).map((detail) => row(detail.label, escapeHtml(detail.value))),
    row("Came from", escapeHtml(input.source)),
    row("Received", escapeHtml(ukTimestamp())),
  ].join("");

  const message = input.message?.trim()
    ? `
      <tr><td style="padding:24px 32px 0 32px;">
        <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#777777;font-weight:700;">About the project</p>
        <div style="border-left:3px solid ${PINK};background:#faf5f9;padding:14px 16px;font-size:15px;line-height:1.55;color:${INK};">
          ${escapeHtml(input.message.trim()).replace(/\n/g, "<br />")}
        </div>
      </td></tr>`
    : "";

  const photos = (input.photos ?? []).length
    ? `
      <tr><td style="padding:24px 32px 0 32px;">
        <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#777777;font-weight:700;">Photos (${input.photos!.length})</p>
        <div style="font-size:0;">
          ${input
            .photos!.map(
              (url) => `
            <a href="${escapeHtml(url)}" style="display:inline-block;margin:0 8px 8px 0;">
              <img src="${escapeHtml(thumbnail(url))}" width="164" height="164" alt="Customer photo" style="display:block;width:164px;height:164px;object-fit:cover;border-radius:6px;border:1px solid #e5e5e5;" />
            </a>`
            )
            .join("")}
        </div>
      </td></tr>`
    : "";

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f2f2f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f2;padding:24px 12px;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">

          <tr><td style="background:${INK};padding:18px 32px;">
            <img src="https://www.wrpx.co.uk/logo.png" width="84" height="42" alt="WRPX" style="display:block;border:0;color:#ffffff;font-size:20px;font-weight:700;" />
          </td></tr>
          <tr><td style="background:${PINK};height:4px;line-height:4px;font-size:0;">&nbsp;</td></tr>

          <tr><td style="padding:32px 32px 8px 32px;">
            <span style="display:inline-block;background:${input.type === "commercial" ? INK : PINK};color:#ffffff;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;padding:6px 12px;border-radius:999px;">${escapeHtml(typeLabel)} lead</span>
            <h1 style="margin:16px 0 6px 0;font-size:28px;line-height:1.2;color:${INK};">${headline}</h1>
            <p style="margin:0;font-size:15px;color:#666666;line-height:1.5;">${subtitle}</p>
          </td></tr>

          <tr><td style="padding:20px 32px 4px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
              <td style="padding-right:6px;" width="50%">
                <a href="${telHref}" style="display:block;background:${PINK};color:#ffffff;text-align:center;text-decoration:none;font-weight:700;font-size:16px;padding:14px 8px;border-radius:8px;">Call ${escapeHtml(firstName)}</a>
              </td>
              <td style="padding-left:6px;" width="50%">
                <a href="${waHref}" style="display:block;background:${INK};color:#ffffff;text-align:center;text-decoration:none;font-weight:700;font-size:16px;padding:14px 8px;border-radius:8px;">WhatsApp</a>
              </td>
            </tr></table>
          </td></tr>

          <tr><td style="padding:24px 32px 0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          </td></tr>

          ${message}
          ${photos}

          <tr><td style="padding:32px;">
            <p style="margin:0;font-size:12px;color:#999999;line-height:1.5;text-align:center;">
              Sent automatically from ${escapeHtml(siteConfig.name)} · wrpx.co.uk<br />
              Reply to this lead as soon as you can: the first to respond usually wins the job.
            </p>
          </td></tr>

        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  return { subject, html };
}
