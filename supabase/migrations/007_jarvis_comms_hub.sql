-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.jarvis_conversations (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.jarvis_leads (id) on delete set null,
  contact_name text not null,
  contact_phone text,
  contact_email text,
  channel text not null default 'manual' check (
    channel in ('whatsapp', 'email', 'sms', 'facebook', 'manual')
  ),
  external_thread_id text,
  last_message_at timestamptz,
  last_message_preview text,
  unread_count integer not null default 0,
  status text not null default 'open' check (status in ('open', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.jarvis_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.jarvis_conversations (id) on delete cascade,
  direction text not null check (direction in ('inbound', 'outbound')),
  body text,
  status text not null default 'sent' check (
    status in ('pending', 'sent', 'delivered', 'read', 'failed')
  ),
  media_url text,
  media_type text,
  external_message_id text,
  sent_by_user_id uuid references public.jarvis_users (id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists jarvis_conversations_lead_id_idx
  on public.jarvis_conversations (lead_id);

create index if not exists jarvis_conversations_last_message_at_idx
  on public.jarvis_conversations (last_message_at desc nulls last);

create index if not exists jarvis_conversations_channel_idx
  on public.jarvis_conversations (channel);

create index if not exists jarvis_messages_conversation_id_idx
  on public.jarvis_messages (conversation_id);

create index if not exists jarvis_messages_created_at_idx
  on public.jarvis_messages (created_at asc);

alter table public.jarvis_conversations enable row level security;
alter table public.jarvis_messages enable row level security;
