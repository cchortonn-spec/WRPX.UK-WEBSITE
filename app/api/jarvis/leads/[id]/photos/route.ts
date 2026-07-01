import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { uploadLeadPhotoToCloudinary } from "@/lib/cloudinary-upload";
import { canUploadPhotos } from "@/lib/jarvis-permissions";
import {
  PHOTO_TYPES,
  type JarvisLeadPhoto,
  type PhotoType,
} from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  try {
    const { id } = await context.params;
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_lead_photos")
      .select("*")
      .eq("lead_id", id)
      .order("uploaded_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: "Could not load photos" }, { status: 500 });
    }

    return NextResponse.json({ photos: (data ?? []) as JarvisLeadPhoto[] });
  } catch (error) {
    console.error("Jarvis photos GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canUploadPhotos(session.user)) {
    return jarvisForbidden();
  }

  try {
    const { id } = await context.params;
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Photo file is required" }, { status: 400 });
    }

    const photoType =
      typeof formData.get("photo_type") === "string" &&
      PHOTO_TYPES.includes(formData.get("photo_type") as PhotoType)
        ? (formData.get("photo_type") as PhotoType)
        : "general";

    const caption =
      typeof formData.get("caption") === "string"
        ? formData.get("caption")?.toString().trim() || null
        : null;

    const supabase = getSupabaseAdmin();
    const { data: lead } = await supabase
      .from("jarvis_leads")
      .select("id, name")
      .eq("id", id)
      .single();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const uploaded = await uploadLeadPhotoToCloudinary(file, id);

    const { data: existingLead } = await supabase
      .from("jarvis_leads")
      .select("status")
      .eq("id", id)
      .single();

    const { data: photo, error } = await supabase
      .from("jarvis_lead_photos")
      .insert({
        lead_id: id,
        storage_path: uploaded.secure_url,
        file_name: file.name,
        file_type: file.type || uploaded.format || "image",
        file_size: uploaded.bytes,
        caption,
        photo_type: photoType,
        created_by: session.user.email,
      })
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ error: "Could not save photo" }, { status: 500 });
    }

    await supabase
      .from("jarvis_leads")
      .update({
        photos_received: true,
        status:
          existingLead?.status === "waiting_for_photos"
            ? "photos_received"
            : existingLead?.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    await logJarvisAudit({
      actor: session.user,
      action: "photo_uploaded",
      entityType: "lead",
      entityId: id,
      summary: `Uploaded photo to ${lead.name}`,
      metadata: { photo_id: photo.id, photo_type: photoType },
    });

    return NextResponse.json({ photo: photo as JarvisLeadPhoto }, { status: 201 });
  } catch (error) {
    console.error("Jarvis photos POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
