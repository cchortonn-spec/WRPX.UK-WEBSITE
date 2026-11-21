-- Run this in Supabase: SQL Editor → New query → paste → Run
-- Safe to run more than once.
--
-- Adds three columns so the dashboard can count real visitors (not just clicks),
-- see where each visit came from, and see which button was clicked.

alter table public.events add column if not exists session_id text;
alter table public.events add column if not exists source text;
alter table public.events add column if not exists link_location text;

create index if not exists events_session_id_idx on public.events (session_id);
