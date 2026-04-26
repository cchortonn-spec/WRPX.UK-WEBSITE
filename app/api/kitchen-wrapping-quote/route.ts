import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const quoteSchema = z.object({
  quoteType: z.enum(["complete", "cabinet", "worktop"]),
  doorStyle: z.enum(["", "j-pull", "shaker", "flat", "other"]),
  doors: z.string().optional().default(""),
  drawers: z.string().optional().default(""),
  worktopMetres: z.string().optional().default(""),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(10),
  city: z.string().min(2),
});

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

async function uploadImageToCloudinary(file: File) {
  const cloudName = requireEnv("CLOUDINARY_CLOUD_NAME");
  const apiKey = requireEnv("CLOUDINARY_API_KEY");
  const apiSecret = requireEnv("CLOUDINARY_API_SECRET");

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  const bytes = Buffer.from(await file.arrayBuffer());

  return await new Promise<{ secure_url: string }>((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      {
        folder: "wrpx-kitchen-quotes",
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed"));
          return;
        }
        resolve({ secure_url: result.secure_url });
      }
    );
    upload.end(bytes);
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw = {
      quoteType: String(formData.get("quoteType") || ""),
      doorStyle: String(formData.get("doorStyle") || ""),
      doors: String(formData.get("doors") || ""),
      drawers: String(formData.get("drawers") || ""),
      worktopMetres: String(formData.get("worktopMetres") || ""),
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      mobile: String(formData.get("mobile") || ""),
      city: String(formData.get("city") || ""),
    };

    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const photos = formData.getAll("photos").filter((entry) => entry instanceof File) as File[];
    if (photos.length < 2) {
      return NextResponse.json(
        { error: "Please upload at least 2 kitchen photos." },
        { status: 400 }
      );
    }

    const uploaded = await Promise.all(photos.map((file) => uploadImageToCloudinary(file)));
    const imageLinks = uploaded.map((file) => file.secure_url);

    const resendApiKey = requireEnv("RESEND_API_KEY");
    const leadToEmail = requireEnv("LEAD_TO_EMAIL");
    const leadFromEmail = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";
    const resend = new Resend(resendApiKey);

    const lead = parsed.data;

    const emailResult = await resend.emails.send({
      from: `WRPX Quotes <${leadFromEmail}>`,
      to: [leadToEmail],
      subject: `New Kitchen Wrapping Quote - ${lead.firstName} ${lead.lastName}`,
      replyTo: lead.email,
      html: `
        <h2>New kitchen wrapping quote</h2>
        <p><strong>Quote type:</strong> ${lead.quoteType}</p>
        <p><strong>Door style:</strong> ${lead.doorStyle || "not provided"}</p>
        <p><strong>Doors:</strong> ${lead.doors || "not provided"}</p>
        <p><strong>Drawers:</strong> ${lead.drawers || "not provided"}</p>
        <p><strong>Worktop metres:</strong> ${lead.worktopMetres || "not provided"}</p>
        <hr />
        <p><strong>Name:</strong> ${lead.firstName} ${lead.lastName}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Mobile:</strong> ${lead.mobile}</p>
        <p><strong>City:</strong> ${lead.city}</p>
        <hr />
        <h3>Uploaded photos</h3>
        <ul>
          ${imageLinks
            .map((url, index) => `<li><a href="${url}">Photo ${index + 1}</a></li>`)
            .join("")}
        </ul>
      `,
    });

    if (emailResult.error) {
      throw new Error(
        emailResult.error.message ||
          "Email provider rejected the request. Check your Resend sender settings."
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[kitchen-wrapping-quote] submit failed:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit quote right now. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
