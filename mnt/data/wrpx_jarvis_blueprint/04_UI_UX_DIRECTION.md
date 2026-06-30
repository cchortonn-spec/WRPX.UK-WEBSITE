# WRPX Jarvis — UI / UX Direction

## Overall feel
Jarvis should feel like a premium dark operating system for WRPX.

It should not feel like a generic CRM.

The design should feel:

- High-end.
- Calm.
- Fast.
- Intelligent.
- Architectural.
- Clean.
- Built for business operations.

## Existing WRPX analytics dashboard observations
The current analytics dashboard already has a useful visual language:

- Dark background.
- Large stat cards.
- Lime/green accent numbers.
- Rounded panels.
- Transparent/glass-style card surfaces.
- Tables with soft separators.
- Pills for percentages and event types.
- Minimal navigation.
- Strong WRPX branding.

Jarvis should feel connected to this, but more advanced and organised.

## Route separation
The current `/dashboard` page should remain as the website analytics screen.

Jarvis should live at:

```txt
/jarvis
```

This avoids replacing the current analytics dashboard while allowing Jarvis to pull its data.

## Colour system

### Base colours
Use dark green/black tones, but avoid pure black.

Recommended palette:

```txt
Background: #07110D
Panel: #0B1611
Panel glass: rgba(12, 24, 18, 0.72)
Border: rgba(187, 255, 84, 0.12)
Text primary: #F3F5F0
Text secondary: #9CA39B
Muted text: #6F766F
Main accent: #B7FF3C
Soft accent: #5C7C2E
Warning: #F3B84B
Danger: #FF5A5A
Success: #77FF8A
Info: #7CE7D3
Pink/purple should be used minimally or not at all.
```

## Stage colours

| Stage type | Colour direction |
|---|---|
| New / active | Lime |
| Waiting on customer | Amber |
| Needs Connor | Red |
| Quoted | Pink/rose, subtle only |
| Won / paid | Green |
| Survey / booked | Teal |
| Commercial | Deep gold |
| Lost / not suitable | Red/grey |
| Closed | Grey |

## Layout

### Left sidebar
Jarvis should use a proper app layout rather than the marketing website nav.

Recommended sidebar:

```txt
WRPX / Jarvis

Home
Leads
Inbox
Projects
Quotes
Invoices
Calendar
Materials
Analytics
Reports
Settings
```

### Top bar
Top bar should include:

- Search.
- Ask Jarvis input.
- Notifications.
- User/profile.
- Quick create button.

### Home dashboard
Home should start with Jarvis, not charts.

Example:

```txt
Good morning Connor.

I've reviewed everything. Here's what needs your attention.
```

Then cards:

- Qualified leads.
- Follow-ups due.
- Quotes sent.
- Deposit due.
- Installs upcoming.
- Invoices overdue.
- SEO opportunities.

## Reusable UI components

### Cards
Used for stats, tasks, lead summaries and Jarvis insights.

### Pills
Used for stages, source, priority, job type and lead quality.

### Tables
Used for leads, projects, invoices, materials and analytics.

### Kanban columns
Used for pipeline view.

### Drawer panels
Clicking a lead should open a right-side drawer with:

- Conversation.
- AI summary.
- Photos.
- Stage.
- Tasks.
- Quotes/invoices.
- Next action.

### Jarvis panel
A persistent Jarvis panel should be available across the app.

It should allow Connor to type naturally:

```txt
Jarvis, show me all quotes that need chasing.
```

## Animations
Subtle Apple-style motion only.

Recommended:

- Soft card hover.
- Smooth drawer slide-in.
- Gentle page transitions.
- Loading shimmer.
- Pulse for urgent alerts.
- No glowing neon effects.

## Responsive design
Jarvis should work on:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Mobile should prioritise:

- Today's tasks.
- New qualified leads.
- Inbox.
- Quick actions.
- Ask Jarvis.
