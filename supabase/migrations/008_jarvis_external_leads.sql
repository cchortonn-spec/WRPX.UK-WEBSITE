-- Run this in Supabase: SQL Editor → New query → paste → Run

-- Meta Facebook Lead Ads ID for deduplication
alter table public.jarvis_leads
  add column if not exists external_lead_id text;

create unique index if not exists jarvis_leads_external_lead_id_idx
  on public.jarvis_leads (external_lead_id)
  where external_lead_id is not null;
