import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import {
  uploadLeadPhotoToCloudinary,
} from "@/lib/cloudinary-upload";
import {
  PHOTO_TYPES,
  type JarvisLeadPhoto,
  type PhotoType,
} from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
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
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
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
      .select("id")
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
        created_by: "connor",
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

    return NextResponse.json({ photo: photo as JarvisLeadPhoto }, { status: 201 });
  } catch (error) {
    console.error("Jarvis photos POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
