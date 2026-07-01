import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { deleteLeadPhotoFromCloudinary } from "@/lib/cloudinary-upload";
import { canUploadPhotos } from "@/lib/jarvis-permissions";
import { PHOTO_TYPES, type PhotoType } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string; photoId: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canUploadPhotos(session.user)) {
    return jarvisForbidden();
  }

  try {
    const { id, photoId } = await context.params;
    const body = await request.json();
    const updates: Record<string, unknown> = {};

    if (typeof body.caption === "string") {
      updates.caption = body.caption.trim() || null;
    }
    if (
      typeof body.photo_type === "string" &&
      PHOTO_TYPES.includes(body.photo_type as PhotoType)
    ) {
      updates.photo_type = body.photo_type;
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_lead_photos")
      .update(updates)
      .eq("id", photoId)
      .eq("lead_id", id)
      .select("*")
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Could not update photo" }, { status: 500 });
    }

    return NextResponse.json({ photo: data });
  } catch (error) {
    console.error("Jarvis photo PATCH error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canUploadPhotos(session.user)) {
    return jarvisForbidden();
  }

  try {
    const { id, photoId } = await context.params;
    const supabase = getSupabaseAdmin();

    const { data: photo } = await supabase
      .from("jarvis_lead_photos")
      .select("storage_path")
      .eq("id", photoId)
      .eq("lead_id", id)
      .single();

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    await deleteLeadPhotoFromCloudinary(photo.storage_path);

    const { error } = await supabase
      .from("jarvis_lead_photos")
      .delete()
      .eq("id", photoId)
      .eq("lead_id", id);

    if (error) {
      return NextResponse.json({ error: "Could not delete photo" }, { status: 500 });
    }

    const { count } = await supabase
      .from("jarvis_lead_photos")
      .select("*", { count: "exact", head: true })
      .eq("lead_id", id);

    if ((count ?? 0) === 0) {
      await supabase
        .from("jarvis_leads")
        .update({ photos_received: false, updated_at: new Date().toISOString() })
        .eq("id", id);
    }

    await logJarvisAudit({
      actor: session.user,
      action: "photo_deleted",
      entityType: "lead",
      entityId: id,
      summary: "Deleted lead photo",
      metadata: { photo_id: photoId },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Jarvis photo DELETE error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
