import { NextResponse } from "next/server";
import {
  createJarvisAuthToken,
  JARVIS_COOKIE_NAME,
} from "@/lib/jarvis-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = typeof body.password === "string" ? body.password : "";

    if (!process.env.JARVIS_PASSWORD) {
      return NextResponse.json(
        { error: "Jarvis password is not configured" },
        { status: 500 }
      );
    }

    if (password !== process.env.JARVIS_PASSWORD) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: JARVIS_COOKIE_NAME,
      value: createJarvisAuthToken(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Jarvis login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
