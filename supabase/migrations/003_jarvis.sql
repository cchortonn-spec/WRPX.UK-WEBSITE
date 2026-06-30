-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.jarvis_contacts (
  id uuid primary key default gen_random_uuid(),
  contact_type text not null default 'domestic' check (
    contact_type in (
      'domestic',
      'commercial',
      'supplier',
      'subcontractor',
      'partner'
    )
  ),
  name text not null,
  company_name text,
  phone text,
  email text,
  source text check (
    source in ('facebook', 'website', 'whatsapp', 'email', 'referral', 'manual')
  ),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.jarvis_leads (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references public.jarvis_contacts (id) on delete set null,
  name text not null,
  phone text,
  email text,
  source text not null default 'manual' check (
    source in ('facebook', 'website', 'whatsapp', 'email', 'referral', 'manual')
  ),
  status text not null default 'new_lead' check (
    status in (
      'new_lead',
      'waiting_for_reply',
      'waiting_for_photos',
      'waiting_for_colour_style',
      'waiting_for_job_type',
      'ready_for_estimate',
      'survey_needed',
      'survey_booked',
      'measured',
      'pricing',
      'quote_sent',
      'follow_up_due',
      'won',
      'deposit_due',
      'deposit_paid',
      'material_ordered',
      'install_booked',
      'in_progress',
      'completed',
      'final_invoice_sent',
      'paid',
      'review_requested',
      'closed',
      'lost'
    )
  ),
  priority text not null default 'medium' check (
    priority in ('low', 'medium', 'high', 'urgent')
  ),
  job_type text check (
    job_type in (
      'kitchen_cupboards',
      'kitchen_worktops',
      'cupboards_and_worktops',
      'window_film',
      'furniture_wrapping',
      'architectural_vinyl',
      'commercial_wrap',
      'other'
    )
  ),
  colour_style text,
  photos_received boolean not null default false,
  ai_summary text,
  ai_next_action text,
  last_customer_message_at timestamptz,
  last_follow_up_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.jarvis_lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.jarvis_leads (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.jarvis_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  related_lead_id uuid references public.jarvis_leads (id) on delete set null,
  priority text not null default 'medium' check (
    priority in ('low', 'medium', 'high', 'urgent')
  ),
  status text not null default 'open' check (
    status in ('open', 'completed', 'cancelled')
  ),
  due_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists jarvis_leads_status_idx on public.jarvis_leads (status);
create index if not exists jarvis_leads_source_idx on public.jarvis_leads (source);
create index if not exists jarvis_leads_created_at_idx on public.jarvis_leads (created_at desc);
create index if not exists jarvis_lead_notes_lead_id_idx on public.jarvis_lead_notes (lead_id);
create index if not exists jarvis_tasks_related_lead_id_idx on public.jarvis_tasks (related_lead_id);
create index if not exists jarvis_tasks_status_idx on public.jarvis_tasks (status);
create index if not exists jarvis_tasks_due_at_idx on public.jarvis_tasks (due_at);

alter table public.jarvis_contacts enable row level security;
alter table public.jarvis_leads enable row level security;
alter table public.jarvis_lead_notes enable row level security;
alter table public.jarvis_tasks enable row level security;
