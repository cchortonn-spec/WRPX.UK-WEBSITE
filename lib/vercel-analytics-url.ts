const SENSITIVE_QUERY_KEYS = new Set([
  "name",
  "phone",
  "postcode",
  "description",
  "contact_time",
  "email",
  "mobile",
  "firstname",
  "lastname",
  "first_name",
  "last_name",
  "city",
]);

function isSensitiveKey(key: string): boolean {
  const lower = key.toLowerCase();
  if (SENSITIVE_QUERY_KEYS.has(lower)) return true;
  return (
    lower.includes("email") ||
    lower.includes("phone") ||
    lower.includes("mobile") ||
    lower.includes("postcode") ||
    lower.includes("address") ||
    lower === "name" ||
    lower.endsWith("name")
  );
}

function isSensitiveValue(value: string): boolean {
  if (value.includes("@")) return true;
  return value.replace(/\D/g, "").length >= 7;
}

/**
 * Drop form fields and other personal data from URLs before they are sent to
 * Vercel. The contact enquiry form submits name, phone, postcode and description
 * as query parameters. Campaign parameters such as utm_* are left in place.
 */
export function redactAnalyticsUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl, "https://www.wrpx.co.uk");
    for (const key of [...url.searchParams.keys()]) {
      const value = url.searchParams.get(key) ?? "";
      if (isSensitiveKey(key) || isSensitiveValue(value)) {
        url.searchParams.delete(key);
      }
    }
    if (isSensitiveValue(url.hash)) {
      url.hash = "";
    }
    const relative = `${url.pathname}${url.search}${url.hash}`;
    if (/^https?:\/\//i.test(rawUrl)) {
      return `${url.origin}${relative}`;
    }
    return relative || "/";
  } catch {
    return rawUrl.split(/[?#]/)[0] || "/";
  }
}
