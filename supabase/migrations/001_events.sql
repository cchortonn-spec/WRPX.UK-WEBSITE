-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (
    event_type in (
      'phone_click',
      'email_click',
      'quote_form',
      'contact_form',
      'page_view'
    )
  ),
  page_url text not null,
  referrer text,
  device text not null default 'unknown' check (
    device in ('mobile', 'desktop', 'tablet', 'unknown')
  ),
  country text,
  city text,
  created_at timestamptz not null default now()
);

create index if not exists events_created_at_idx on public.events (created_at desc);
create index if not exists events_event_type_idx on public.events (event_type);
create index if not exists events_page_url_idx on public.events (page_url);

-- Lock down direct access. The website uses the service role key on the server only.
alter table public.events enable row level security;
