-- Run in Supabase SQL Editor if you already created the events table

alter table public.events drop constraint if exists events_event_type_check;

alter table public.events add constraint events_event_type_check check (
  event_type in (
    'phone_click',
    'email_click',
    'whatsapp_click',
    'quote_form',
    'contact_form',
    'page_view'
  )
);
