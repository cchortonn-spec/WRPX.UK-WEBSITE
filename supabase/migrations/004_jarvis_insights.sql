-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.jarvis_insights (
  id uuid primary key default gen_random_uuid(),
  insight_type text not null check (
    insight_type in ('lead', 'sales', 'seo', 'operations', 'finance', 'material')
  ),
  title text not null,
  summary text not null,
  recommendation text not null,
  priority text not null default 'medium' check (
    priority in ('low', 'medium', 'high')
  ),
  related_type text,
  related_id text,
  status text not null default 'new' check (
    status in ('new', 'acknowledged', 'actioned', 'dismissed')
  ),
  created_at timestamptz not null default now()
);

create index if not exists jarvis_insights_status_idx on public.jarvis_insights (status);
create index if not exists jarvis_insights_type_idx on public.jarvis_insights (insight_type);
create index if not exists jarvis_insights_created_at_idx on public.jarvis_insights (created_at desc);

alter table public.jarvis_insights enable row level security;
