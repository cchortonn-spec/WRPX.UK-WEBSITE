-- Run this in Supabase: SQL Editor → New query → paste → Run

-- New columns on jarvis_leads
alter table public.jarvis_leads
  add column if not exists colour_scheme text,
  add column if not exists pricing_route text default 'unknown',
  add column if not exists follow_up_date timestamptz,
  add column if not exists follow_up_status text default 'not_set',
  add column if not exists last_follow_up_sent_at timestamptz,
  add column if not exists last_contacted_at timestamptz,
  add column if not exists estimated_amount numeric,
  add column if not exists quoted_amount numeric,
  add column if not exists deposit_amount numeric,
  add column if not exists quote_sent_at timestamptz,
  add column if not exists survey_date timestamptz,
  add column if not exists install_interest_level text default 'unknown',
  add column if not exists pricing_notes text,
  add column if not exists lead_temperature text default 'unknown';

-- Migrate colour_style -> colour_scheme
update public.jarvis_leads
set colour_scheme = colour_style
where colour_scheme is null and colour_style is not null;

-- Drop old constraints BEFORE data migrations (Phase 1 only allows medium, not normal)
alter table public.jarvis_leads drop constraint if exists jarvis_leads_status_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_priority_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_job_type_check;

-- Migrate priority medium -> normal
update public.jarvis_leads set priority = 'normal' where priority = 'medium';

-- Migrate old stages to Phase 2 pipeline stages
update public.jarvis_leads set status = 'new_lead'
where status in ('waiting_for_reply');

update public.jarvis_leads set status = 'waiting_for_colour_job_type'
where status in ('waiting_for_colour_style', 'waiting_for_job_type');

update public.jarvis_leads set status = 'ready_to_price'
where status in ('ready_for_estimate', 'pricing', 'survey_needed');

update public.jarvis_leads set status = 'estimate_sent'
where status = 'pricing' and estimated_amount is not null;

update public.jarvis_leads set status = 'follow_up'
where status = 'follow_up_due';

update public.jarvis_leads set status = 'won'
where status in (
  'deposit_due', 'deposit_paid', 'material_ordered', 'install_booked',
  'in_progress', 'completed', 'final_invoice_sent', 'paid', 'review_requested'
);

update public.jarvis_leads set status = 'not_suitable'
where status = 'closed';

update public.jarvis_leads set status = 'lost'
where status = 'lost';

-- Migrate job types
update public.jarvis_leads set job_type = 'cupboards' where job_type = 'kitchen_cupboards';
update public.jarvis_leads set job_type = 'worktops' where job_type = 'kitchen_worktops';
update public.jarvis_leads set job_type = 'furniture' where job_type = 'furniture_wrapping';
update public.jarvis_leads set job_type = 'commercial_architectural_wrap' where job_type in ('architectural_vinyl', 'commercial_wrap');
update public.jarvis_leads set job_type = 'unknown' where job_type is null;

-- Add Phase 2 constraints (drop first so this script can be re-run safely)
alter table public.jarvis_leads drop constraint if exists jarvis_leads_status_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_priority_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_job_type_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_pricing_route_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_follow_up_status_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_lead_temperature_check;
alter table public.jarvis_leads drop constraint if exists jarvis_leads_install_interest_level_check;

alter table public.jarvis_leads
  add constraint jarvis_leads_status_check check (
    status in (
      'new_lead',
      'waiting_for_photos',
      'photos_received',
      'waiting_for_colour_job_type',
      'ready_to_price',
      'estimate_sent',
      'survey_booked',
      'measured',
      'quote_sent',
      'follow_up',
      'won',
      'lost',
      'not_suitable'
    )
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_priority_check check (
    priority in ('low', 'normal', 'high', 'urgent')
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_job_type_check check (
    job_type is null or job_type in (
      'unknown',
      'cupboards',
      'worktops',
      'cupboards_and_worktops',
      'commercial_architectural_wrap',
      'window_film',
      'furniture',
      'doors',
      'worktops_and_splashbacks',
      'other'
    )
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_pricing_route_check check (
    pricing_route in (
      'unknown',
      'estimate_from_photos',
      'survey_needed',
      'measured_quote',
      'commercial_scope_needed'
    )
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_follow_up_status_check check (
    follow_up_status in ('not_set', 'due', 'sent', 'snoozed', 'complete')
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_lead_temperature_check check (
    lead_temperature in ('unknown', 'cold', 'warm', 'hot')
  );

alter table public.jarvis_leads
  add constraint jarvis_leads_install_interest_level_check check (
    install_interest_level in ('unknown', 'cold', 'warm', 'hot')
  );

-- Lead photos table (Cloudinary URL stored in storage_path for now)
create table if not exists public.jarvis_lead_photos (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.jarvis_leads (id) on delete cascade,
  storage_path text not null,
  file_name text,
  file_type text,
  file_size bigint,
  uploaded_at timestamptz not null default now(),
  caption text,
  photo_type text not null default 'general' check (
    photo_type in (
      'general',
      'full_room',
      'cupboards',
      'worktops',
      'damage',
      'commercial_area',
      'measurements',
      'end_panels',
      'plinths',
      'doors',
      'other'
    )
  ),
  created_by text
);

create index if not exists jarvis_lead_photos_lead_id_idx on public.jarvis_lead_photos (lead_id);
create index if not exists jarvis_leads_follow_up_date_idx on public.jarvis_leads (follow_up_date);
create index if not exists jarvis_leads_status_follow_up_idx on public.jarvis_leads (status, follow_up_status);

alter table public.jarvis_lead_photos enable row level security;
