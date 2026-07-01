# 02 — Data Architecture

## Purpose of this file

This document defines how Jarvis data should be structured.

Cursor/Claude must use this as a guide when adding new tables, APIs, UI screens, automations, and AI features.

Jarvis is not a collection of tools. Jarvis is the operating system of WRPX. Data should therefore connect across the whole system.

---

# Core objects

Jarvis should be structured around these main objects:

1. Contacts
2. Leads
3. Projects / Jobs
4. Quotes / Estimates
5. Invoices / Payments
6. Tasks / Reminders
7. Communications
8. Photos / Files
9. Materials
10. Measurements
11. Users / Staff
12. Analytics / Marketing Events
13. Activity Logs
14. AI Insights

---

# Contacts

A contact is a person or organisation WRPX communicates with.

A contact can be:

- domestic customer
- commercial client
- supplier
- subcontractor
- installer
- architect
- landlord
- property manager
- facilities manager
- office staff

A contact can have many leads/projects over time.

Avoid duplicate contacts.

---

# Leads

A lead is a potential opportunity.

A lead should belong to a contact where possible.

A lead can become a project/job later.

Lead data should include:

- contact_id
- source
- stage
- job_type
- colour_scheme
- photos_received
- pricing_route
- priority
- interest_level
- follow_up_date
- last_contacted_at
- next_action
- Jarvis summary
- estimated amount
- quoted amount
- survey date

---

# Projects / Jobs

A project/job is confirmed or active work.

Do not design only for kitchens.

A project may be:

- kitchen wrap
- worktop wrap
- commercial architectural wrap
- window film project
- office refurbishment
- retail fit-out
- hotel/apartment work
- subcontracted install

Project data should include:

- contact_id
- lead_id
- project_type
- status
- location
- start date
- end date
- installer/subcontractor
- materials
- measurements
- photos
- quote
- invoices
- completion checklist
- profit/margin

---

# Quotes and estimates

Quotes and estimates should be separate records, not only text in notes.

A lead/project may have multiple quote versions.

Quote data should include:

- quote number
- customer
- project/lead
- status
- quote type: estimate or measured quote
- line items
- material costs
- labour/fee
- subtotal
- VAT handling if needed
- total
- deposit amount
- valid until date
- sent date
- accepted date
- PDF file path

---

# Invoices and payments

Invoice records should connect to projects/jobs and quotes.

Invoice data should include:

- invoice number
- invoice type: deposit/final/interim
- project_id
- contact_id
- amount
- due date
- paid status
- paid date
- PDF file path

---

# Tasks and reminders

Tasks should be generic enough to attach to different objects.

A task may belong to:

- lead
- project
- quote
- invoice
- contact
- user

Task data should include:

- title
- description
- due date
- status
- priority
- assigned user
- related object type
- related object id
- created by
- completed by

---

# Communications

Future communications should feed into one timeline.

Communication sources may include:

- WhatsApp
- Gmail
- Facebook Messenger
- Instagram
- website forms
- phone call logs
- manual notes

Communication records should include:

- contact_id
- lead_id or project_id where known
- source
- direction: inbound/outbound
- message text
- media attachments
- timestamp
- sender
- recipient
- AI summary
- sentiment where useful

---

# Photos and files

Photos/files should attach to leads/projects but remain reusable.

Photo types:

- general
- full room
- cupboards
- drawers
- worktops
- end panels
- plinths
- damage
- commercial area
- measurements
- completion photo
- other

Files may include:

- quote PDFs
- invoice PDFs
- drawings
- plans
- RAMS
- insurance documents
- supplier sheets

---

# Measurements

Measurements should be structured for future AI/material/cutting calculations.

Measurement records should include:

- related lead/project
- item type: door/drawer/panel/plinth/worktop/MDF/commercial surface
- width
- height
- depth if needed
- quantity
- unit
- material type
- grain direction requirement
- notes

Avoid storing measurements only as paragraphs.

---

# Materials

Material records should eventually track:

- supplier
- brand
- range
- code
- colour/name
- price per metre
- roll width
- stock status
- pattern/grain direction
- notes

Material usage should connect to quotes and projects.

---

# Activity logs

Every meaningful action should eventually create an activity log.

Examples:

- lead created
- stage changed
- note added
- photo uploaded
- task created
- quote sent
- invoice created
- payment marked paid
- user logged in
- permissions changed
- Jarvis generated insight

Activity logs should include:

- actor type: user/system/Jarvis
- actor id
- action
- related object type
- related object id
- timestamp
- metadata

---

# AI insights

AI/rule-based insights should be stored or generated consistently.

Insight data should include:

- title
- summary
- recommendation
- priority
- related object type
- related object id
- status: active/dismissed/resolved
- created_at

---

# Data design rule

When adding a new feature, always ask:

1. What existing object does this belong to?
2. Does this need a new table, or should it reference an existing table?
3. Will Jarvis need to cross-reference this later?
4. Will this work for domestic and commercial work?
5. Will this work for future staff/subcontractors?
