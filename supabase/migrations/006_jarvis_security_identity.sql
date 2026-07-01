-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.jarvis_users (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null unique,
  email text not null,
  name text,
  role text not null default 'readonly' check (
    role in ('owner', 'admin', 'office', 'estimator', 'installer', 'readonly')
  ),
  status text not null default 'invited' check (
    status in ('active', 'invited', 'disabled')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_seen_at timestamptz
);

create table if not exists public.jarvis_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references public.jarvis_users (id) on delete set null,
  actor_clerk_user_id text,
  action text not null,
  entity_type text,
  entity_id text,
  summary text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists jarvis_users_clerk_user_id_idx on public.jarvis_users (clerk_user_id);
create index if not exists jarvis_users_email_idx on public.jarvis_users (email);
create index if not exists jarvis_users_role_idx on public.jarvis_users (role);
create index if not exists jarvis_audit_logs_actor_user_id_idx on public.jarvis_audit_logs (actor_user_id);
create index if not exists jarvis_audit_logs_entity_idx on public.jarvis_audit_logs (entity_type, entity_id);
create index if not exists jarvis_audit_logs_created_at_idx on public.jarvis_audit_logs (created_at desc);

alter table public.jarvis_users enable row level security;
alter table public.jarvis_audit_logs enable row level security;
