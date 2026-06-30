# WRPX Jarvis — Build Notes for Developer

## Important instruction
The current `/dashboard` route is already being used for website analytics.

Do not overwrite it.

Create the new business operating system at:

```txt
/jarvis
```

## Suggested stack
Use the existing WRPX website stack where possible.

Recommended modern stack if starting fresh:

- Next.js / React.
- Supabase or PostgreSQL.
- OpenAI API for Jarvis.
- WhatsApp Business Platform / Cloud API.
- Gmail API if email capture is needed.
- PDF generation library.
- Cron/background jobs for reminders.

## First build target
Build a usable internal MVP before advanced automations.

MVP should include:

- `/jarvis` protected page.
- Sidebar layout.
- Home dashboard.
- Leads database.
- Manual lead creation.
- Lead stages.
- Lead detail drawer.
- Notes.
- Tasks/follow-ups.
- Basic Jarvis briefing.
- Analytics insight panel using existing dashboard data.

## UI requirements

- Dark green glass UI.
- Not pure black.
- No blue/purple glow effects.
- Subtle lime accent.
- Rounded cards.
- Soft borders.
- Status pills.
- Responsive design.
- Smooth transitions.

## Authentication
Jarvis must be private.

Options:

- Existing website login.
- Magic link login.
- Password-protected admin route.

## Database priority
Create the following first:

- contacts
- leads
- tasks
- messages
- media
- analytics_events
- jarvis_insights

Then add:

- projects
- quotes
- invoices
- materials
- measurements

## Jarvis AI implementation
Jarvis should not be one giant prompt only.

It should use structured actions:

- Summarise lead.
- Decide next action.
- Analyse photo.
- Draft reply.
- Create insight.
- Price project.
- Draft quote.
- Draft invoice.

Each action should return structured JSON plus human-readable text.

## Suggested Jarvis JSON output pattern

```json
{
  "summary": "Customer wants cupboards and worktops. Photos received. Likes neutral beige tones.",
  "stage": "Ready for Estimate",
  "next_action": "Connor to price from photos",
  "priority": "medium",
  "confidence": "medium",
  "tasks": [
    {
      "title": "Price estimate",
      "due": "today"
    }
  ]
}
```

## Analytics integration
Do not duplicate the current analytics dashboard.

Jarvis should consume the same data and create recommendations.

Example UI card:

```txt
Jarvis Insight

Kitchen Wrapping Cost is getting traffic but no leads.

Recommendation:
Add a stronger WhatsApp CTA near the top and include pricing examples.

Priority: Medium
```

## Naming
Internally the AI is called:

```txt
Jarvis
```

Jarvis should appear in the UI as the business intelligence layer.

Examples:

- Ask Jarvis.
- Jarvis Briefing.
- Jarvis Insight.
- Jarvis Recommendation.
- Jarvis Photo Report.

## Future features
Build the foundation so these can be added later:

- WhatsApp automation.
- AI photo analysis.
- Quote PDFs.
- Invoice PDFs.
- Subcontractor management.
- Commercial project workflows.
- Material stock tracking.
- Profit reporting.
