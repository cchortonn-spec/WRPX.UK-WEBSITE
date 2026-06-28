import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const DASHBOARD_COOKIE_NAME = "wrpx_dashboard_auth";

function getDashboardToken() {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    throw new Error("Missing environment variable: DASHBOARD_PASSWORD");
  }

  return createHash("sha256")
    .update(`wrpx-dashboard:${password}`)
    .digest("hex");
}

export function isDashboardAuthenticated(cookieValue?: string) {
  if (!cookieValue || !process.env.DASHBOARD_PASSWORD) {
    return false;
  }

  try {
    const expected = getDashboardToken();
    const actual = Buffer.from(cookieValue, "utf8");
    const expectedBuffer = Buffer.from(expected, "utf8");

    if (actual.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(actual, expectedBuffer);
  } catch {
    return false;
  }
}

export async function getDashboardAuthFromCookies() {
  const cookieStore = await cookies();
  return isDashboardAuthenticated(cookieStore.get(DASHBOARD_COOKIE_NAME)?.value);
}

export function createDashboardAuthToken() {
  return getDashboardToken();
}
