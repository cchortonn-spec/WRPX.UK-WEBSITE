import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { requireDeleteConfirmation } from "@/lib/jarvis-delete";
import { canEditLead } from "@/lib/jarvis-permissions";
import type {
  JarvisConversation,
  JarvisConversationDetail,
  JarvisLead,
  JarvisMessage,
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

    const { data: conversation, error } = await supabase
      .from("jarvis_conversations")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !conversation) {
      return NextResponse.json(
        { error: "Conversation not found" },
        { status: 404 }
      );
    }

    const { data: messages, error: messagesError } = await supabase
      .from("jarvis_messages")
      .select("*")
      .eq("conversation_id", id)
      .order("created_at", { ascending: true });

    if (messagesError) {
      console.error("Jarvis messages list error:", messagesError);
      return NextResponse.json(
        { error: "Could not load messages" },
        { status: 500 }
      );
    }

    let lead: JarvisLead | null = null;
    if (conversation.lead_id) {
      const { data: leadData } = await supabase
        .from("jarvis_leads")
        .select("*")
        .eq("id", conversation.lead_id)
        .single();
      lead = (leadData as JarvisLead) ?? null;
    }

    if (conversation.unread_count > 0) {
      await supabase
        .from("jarvis_conversations")
        .update({ unread_count: 0, updated_at: new Date().toISOString() })
        .eq("id", id);
    }

    const detail: JarvisConversationDetail = {
      ...(conversation as JarvisConversation),
      messages: (messages ?? []) as JarvisMessage[],
      lead,
    };

    return NextResponse.json({ conversation: detail });
  } catch (error) {
    console.error("Jarvis conversation GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canEditLead(session.user)) {
    return jarvisForbidden();
  }

  try {
    const body = await request.json().catch(() => null);
    const confirmationError = requireDeleteConfirmation(body);
    if (confirmationError) return confirmationError;

    const { id } = await context.params;
    const supabase = getSupabaseAdmin();

    const { data: conversation } = await supabase
      .from("jarvis_conversations")
      .select("id, contact_name, channel")
      .eq("id", id)
      .maybeSingle();

    if (!conversation) {
      return NextResponse.json(
        { error: "Conversation not found" },
        { status: 404 }
      );
    }

    const { error } = await supabase
      .from("jarvis_conversations")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Jarvis conversation delete error:", error);
      return NextResponse.json(
        { error: "Could not delete conversation" },
        { status: 500 }
      );
    }

    await logJarvisAudit({
      actor: session.user,
      action: "conversation_deleted",
      entityType: "conversation",
      entityId: id,
      summary: `Deleted conversation with ${conversation.contact_name}`,
      metadata: { channel: conversation.channel },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Jarvis conversation DELETE error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
