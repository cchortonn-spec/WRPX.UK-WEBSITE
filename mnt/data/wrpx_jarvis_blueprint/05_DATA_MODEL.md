# WRPX Jarvis — Data Model

## Core database tables

### users
For Connor, future staff and subcontractors.

Fields:

- id
- name
- email
- role
- phone
- active
- created_at

Roles:

- owner
- admin
- estimator
- installer
- subcontractor

### contacts
Every person or company WRPX speaks to.

Fields:

- id
- contact_type: domestic, commercial, supplier, subcontractor, partner
- name
- company_name
- phone
- email
- whatsapp_id
- source
- notes
- created_at
- updated_at

### leads
Pre-job opportunities.

Fields:

- id
- contact_id
- source: facebook, website, whatsapp, email, referral, manual
- status
- priority
- job_type
- colour_style
- photos_received
- ai_summary
- ai_next_action
- ai_confidence
- last_customer_message_at
- last_follow_up_at
- created_at
- updated_at

### conversations
Message threads from WhatsApp, email, Facebook etc.

Fields:

- id
- contact_id
- lead_id
- project_id
- channel: whatsapp, email, facebook, instagram, manual
- external_thread_id
- created_at
- updated_at

### messages
Individual messages.

Fields:

- id
- conversation_id
- sender_type: customer, wrpx, jarvis, system
- sender_name
- message_text
- has_media
- media_count
- external_message_id
- sent_at
- created_at

### media
Photos, files and attachments.

Fields:

- id
- contact_id
- lead_id
- project_id
- message_id
- file_url
- file_type
- file_name
- ai_description
- uploaded_at

### photo_reports
AI analysis of uploaded photos.

Fields:

- id
- lead_id
- project_id
- estimated_doors
- estimated_drawers
- estimated_panels
- worktops_visible
- door_style
- condition_notes
- missing_photos
- confidence
- ai_report_text
- created_at

### projects
Accepted jobs or serious opportunities.

Fields:

- id
- contact_id
- lead_id
- project_type
- project_name
- address
- status
- survey_date
- install_start_date
- install_end_date
- assigned_user_id
- subcontractor_id
- ai_summary
- created_at
- updated_at

### measurements
Measurements for pricing.

Fields:

- id
- project_id
- item_type: door, drawer, panel, worktop, plinth, commercial_surface, window_film
- width_mm
- height_mm
- depth_mm
- quantity
- notes
- created_at

### materials
Material library.

Fields:

- id
- brand
- code
- name
- category
- finish
- supplier
- cost_per_m_ex_vat
- width_mm
- notes
- active

### project_materials
Materials used on a project.

Fields:

- id
- project_id
- material_id
- quantity_m
- cost_ex_vat
- ordered
- ordered_at
- supplier_reference
- delivery_status

### quotes
Quotes and estimates.

Fields:

- id
- lead_id
- project_id
- quote_type: estimate, measured_quote, commercial_quote
- quote_number
- status
- total_ex_vat
- total_vat
- total_inc_vat
- customer_price
- margin_estimate
- pdf_url
- sent_at
- accepted_at
- rejected_at
- created_at

### invoices
Deposit and final invoices.

Fields:

- id
- project_id
- invoice_type: deposit, final, interim
- invoice_number
- status
- total_due
- amount_paid
- pdf_url
- sent_at
- paid_at
- created_at

### tasks
All reminders and follow-ups.

Fields:

- id
- title
- description
- related_type: lead, project, quote, invoice, material, analytics
- related_id
- assigned_to
- priority
- status
- due_at
- completed_at
- created_by: user, jarvis, system
- created_at

### analytics_events
Website events from current dashboard.

Fields:

- id
- event_type: page_view, phone_click, email_click, whatsapp_click, quote_form, contact_form
- page_title
- page_url
- source
- device
- country
- city
- created_at

### analytics_daily_summary
Daily aggregated analytics.

Fields:

- id
- date
- page_views
- leads
- uk_visitors
- phone_clicks
- email_clicks
- whatsapp_clicks
- quote_forms
- contact_forms
- top_page
- created_at

### jarvis_insights
AI-generated recommendations.

Fields:

- id
- insight_type: lead, sales, finance, seo, operations, material
- title
- summary
- recommendation
- priority
- related_type
- related_id
- status: new, acknowledged, actioned, dismissed
- created_at

## Important relationships

```txt
Contact has many Leads
Contact has many Conversations
Lead can become Project
Project has many Quotes
Project has many Invoices
Project has many Materials
Project has many Measurements
Project has many Tasks
Analytics Events create Jarvis Insights
```
