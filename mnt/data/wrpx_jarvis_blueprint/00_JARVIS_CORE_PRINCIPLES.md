# 00 — Jarvis Core Principles

## Purpose of this file

This document defines the permanent build philosophy for Jarvis.

Every future `.md` build phase must reference this file before development starts.

Cursor/Claude must not build isolated features. Every new feature must become part of the wider Jarvis operating system.

---

# Jarvis is the Operating System of WRPX

Jarvis is not a collection of tools, pages, automations, or disconnected modules.

Jarvis is the operating system of WRPX.

It should eventually become the central intelligence that helps run the whole business.

Jarvis should:

- track everything
- connect everything
- cross-reference everything
- remind Connor what needs doing
- understand leads, jobs, quotes, invoices, materials, photos, staff, subcontractors, marketing, and communications
- help WRPX scale from a Connor-led fitting business into a serious commercial architectural wrapping company

Nothing inside Jarvis should feel separate.

Every feature must either:

- save time
- make money
- reduce mistakes
- improve the customer experience
- improve visibility
- make the business easier to scale

If a feature does not do one of those things, do not build it.

---

# Single source of truth

Every important business object should exist once and be referenced everywhere else.

Examples:

- A customer should not be duplicated.
- A lead should belong to one customer/contact.
- A quote should belong to one lead or project.
- An invoice should belong to one job/project.
- Photos should attach to the correct lead/project and be reused later by quoting, AI analysis, installers, and completion records.
- Notes should sit in one activity timeline rather than being scattered across separate places.

Do not create duplicate data structures unless absolutely necessary.

---

# Everything must connect

Jarvis should be designed to connect with:

- WhatsApp Business
- Gmail
- website enquiries
- Facebook Lead Ads
- Facebook Messenger, if technically possible
- Instagram messages, if technically possible
- Google Calendar
- Google Drive
- Google Contacts
- Supabase
- website analytics
- Meta Ads
- Google Business Profile
- quote PDFs
- invoice PDFs
- material calculators
- future installer/subcontractor portals

Future integrations must feed into the same core records, not create separate inboxes or separate systems.

---

# Jarvis should cross-reference information

Jarvis should eventually be able to answer questions like:

- Which leads have sent photos but have not chosen a colour scheme?
- Which quotes have not been chased?
- Which jobs are booked but materials are not ordered?
- Which leads came from Facebook and converted into paid jobs?
- Which website pages generate leads but poor-quality enquiries?
- Which commercial enquiries need a different follow-up approach?
- Which materials are being used most often?
- Which jobs had the best profit margin?
- Which installers completed jobs on time?

Every new data point should be stored in a way that helps Jarvis answer better business questions later.

---

# Jarvis should be proactive

Jarvis should not wait for Connor to ask what needs doing.

Jarvis should surface priorities clearly.

Examples:

- Follow this lead up today.
- This quote is overdue.
- This customer has gone quiet.
- This job has no material order recorded.
- This invoice has not been paid.
- This lead is ready to price.
- This commercial enquiry looks valuable.
- This page is getting traffic but not leads.
- This photo set is missing worktop images.

The dashboard home page should always answer:

> What needs Connor's attention today?

---

# Mobile-first operating system

Connor will use Jarvis heavily on mobile.

Mobile is not an afterthought.

Jarvis must work well when Connor is:

- out measuring
- on-site
- between jobs
- uploading photos
- adding quick reminders
- adding notes after a call
- checking follow-ups
- viewing lead details quickly

Mobile requirements:

- large touch targets
- fast quick-add actions
- full-screen drawers/sheets
- camera upload support
- clean readable cards
- minimal typing where possible
- fast stage updates
- quick reminder creation
- quick note creation

Desktop can show more data.
Mobile must make action faster.

---

# AI-first data design

Even before real AI features are installed, data should be structured for AI later.

Do not bury important information in long text where fields are better.

For example, store these as fields:

- job type
- colour scheme
- pricing route
- photos received
- quote amount
- follow-up date
- stage
- priority
- material selection
- door count
- worktop metres
- customer sentiment

Jarvis can still store summaries and notes, but operational data should remain structured.

---

# Activity timeline

Eventually every important record should have a timeline.

The activity timeline should combine:

- notes
- stage changes
- tasks
- reminders
- uploaded photos
- sent messages
- received messages
- quote events
- invoice events
- payment events
- AI recommendations

This gives Jarvis a full history of what happened.

---

# Do not break existing systems

Every phase must preserve:

- public website pages
- existing `/dashboard` analytics page
- existing `/jarvis` pages unless explicitly changed
- existing database data
- existing UI direction
- existing authentication until the phase explicitly replaces it

Make changes incrementally.

Do not rewrite working features without a clear reason.

---

# Business direction

WRPX is moving toward:

- commercial architectural wraps
- subcontracting
- larger refurbishment projects
- retail, hospitality, offices, landlords, facilities managers, and commercial clients
- future staff and subcontractors
- Connor spending more time running the business and less time on tools

Jarvis must support that future.

Do not design the system as if WRPX only does domestic kitchen wraps.

Build around flexible projects, leads, customers, materials, quotes, jobs, and people.
