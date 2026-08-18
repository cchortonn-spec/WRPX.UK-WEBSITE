import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const JARVIS_COOKIE_NAME = "wrpx_jarvis_auth";

function getJarvisToken() {
  const password = process.env.JARVIS_PASSWORD;
  if (!password) {
    throw new Error("Missing environment variable: JARVIS_PASSWORD");
  }

  return createHash("sha256").update(`wrpx-jarvis:${password}`).digest("hex");
}

export function isJarvisAuthenticated(cookieValue?: string) {
  if (!cookieValue || !process.env.JARVIS_PASSWORD) {
    return false;
  }

  try {
    const expected = getJarvisToken();
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

export async function getJarvisAuthFromCookies() {
  const cookieStore = await cookies();
  return isJarvisAuthenticated(cookieStore.get(JARVIS_COOKIE_NAME)?.value);
}

export function createJarvisAuthToken() {
  return getJarvisToken();
}
