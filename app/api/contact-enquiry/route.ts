import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { buildLeadEmail } from "@/lib/lead-email";

export const runtime = "nodejs";

// The "Send Enquiry" form on the Contact page posts here.
// It emails the enquiry to LEAD_TO_EMAIL using the same Resend setup as the
// kitchen quote form (/api/kitchen-wrapping-quote).

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(10).max(30),
  postcode: z.string().trim().min(3).max(12),
  description: z.string().trim().max(2000).optional().default(""),
  contact_time: z.enum(["morning", "afternoon", "evening", "any"]).default("any"),
  // Home = domestic (kitchens, wardrobes...). Business = commercial.
  customer_type: z.enum(["domestic", "commercial"]).default("domestic"),
  // Hidden field. People never see it, so only spam bots fill it in.
  company: z.string().optional().default(""),
});

const CONTACT_TIME_LABELS: Record<string, string> = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  any: "Any time",
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const enquiry = parsed.data;

    // Spam bot: pretend it worked, send nothing.
    if (enquiry.company) {
      return NextResponse.json({ ok: true });
    }

    const resendApiKey = requireEnv("RESEND_API_KEY");
    const leadToEmail = requireEnv("LEAD_TO_EMAIL");
    const leadFromEmail = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";
    const resend = new Resend(resendApiKey);

    const { subject, html } = buildLeadEmail({
      type: enquiry.customer_type,
      name: enquiry.name,
      phone: enquiry.phone,
      location: enquiry.postcode,
      source: "Contact page",
      contactTime: CONTACT_TIME_LABELS[enquiry.contact_time],
      message: enquiry.description,
    });

    const emailResult = await resend.emails.send({
      from: `WRPX Leads <${leadFromEmail}>`,
      to: [leadToEmail],
      subject,
      html,
    });

    if (emailResult.error) {
      throw new Error(emailResult.error.message || "Email provider rejected the request.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-enquiry] submit failed:", error);
    return NextResponse.json(
      { error: "Sorry, we couldn't send that. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }
}
