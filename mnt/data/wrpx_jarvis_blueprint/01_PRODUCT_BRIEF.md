# WRPX Jarvis Web App — Product Brief

## Working name
**Jarvis**

Jarvis is the AI operating system for WRPX. It is not just a chatbot. It is the central intelligence layer that helps run the business: leads, WhatsApp, emails, quotes, invoices, reminders, SEO analytics, follow-ups, jobs, finance, materials and future subcontractors.

## Main objective
Build a private web app on the WRPX website that becomes the central hub of the business.

The app should help Connor move from being the person doing everything manually into running a scalable architectural wrapping business with clear systems, tracked leads, automated follow-ups and AI-assisted decisions.

## Route
The current website already uses:

```txt
/dashboard
```

for website analytics.

The new Jarvis business dashboard should use a different private route:

```txt
/jarvis
```

Recommended future routes:

```txt
/jarvis
/jarvis/leads
/jarvis/inbox
/jarvis/projects
/jarvis/quotes
/jarvis/invoices
/jarvis/materials
/jarvis/calendar
/jarvis/analytics
/jarvis/settings
```

## What Jarvis must do
Jarvis should:

- Track every lead from Facebook, website, email and WhatsApp.
- Use WhatsApp as the main communication hub where possible.
- Store customer conversations against one lead/customer record.
- Track lead stages clearly.
- Create estimates and quotes.
- Help price jobs from measurements, photos and material rules.
- Generate PDF quotes and invoices.
- Send reminders and follow-ups.
- Connect with the existing website analytics dashboard.
- Give SEO and lead-generation recommendations.
- Alert Connor when something needs attention.
- Eventually help manage subcontractors and commercial projects.

## Core idea
The app should feel like Connor is talking to Jarvis:

> Jarvis, what needs chasing today?

> Jarvis, price this job.

> Jarvis, which pages are falling behind?

> Jarvis, create the deposit invoice.

## Design direction
The UI should feel premium, dark and modern.

Style notes:

- Dark, but not pure black.
- Subtle dark green glass UI.
- Soft panels and cards.
- Green pill shapes and status labels.
- No blue/purple glowing SaaS style.
- No harsh neon.
- Subtle Apple-style animation.
- Clean spacing.
- Responsive layout.
- Colour-coded stages that become easy to recognise.

## The existing analytics dashboard
The current `/dashboard` page tracks:

- Page views today.
- Leads today.
- UK visitors.
- Top page right now.
- Phone clicks.
- Email clicks.
- WhatsApp clicks.
- Quote forms.
- Contact forms.
- Most viewed pages.
- Pages generating leads.
- Traffic sources.
- Devices.
- Countries.
- Cities.
- Busiest times of day.
- Activity by day.
- Recent activity log.

Jarvis should connect to this data and turn it into recommendations, not just display numbers.

Example:

> The Contact page has generated the only lead this week. Kitchen Wrapping Cost is getting traffic but no leads. I recommend improving the call-to-action on that page and adding a WhatsApp button higher up.
