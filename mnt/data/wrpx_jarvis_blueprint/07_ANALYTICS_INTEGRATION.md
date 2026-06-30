# WRPX Jarvis — Website Analytics Integration

## Current situation
WRPX already has a website analytics dashboard at:

```txt
/dashboard
```

This dashboard tracks website activity and lead-related events.

Jarvis should not replace this page initially.

Jarvis should connect to the same analytics data and interpret it.

## Current analytics data visible from screenshots
The existing dashboard includes:

- Total events tracked.
- Page views today.
- Leads today.
- UK visitors.
- International visits.
- Top page right now.
- Phone clicks.
- Email clicks.
- WhatsApp clicks.
- Quote form submissions.
- Contact form submissions.
- Most viewed pages.
- Pages that generate leads.
- Traffic sources.
- Devices.
- Countries.
- Cities.
- Busiest times of day.
- Activity by day.
- Recent activity log.

## Jarvis analytics objective
Jarvis should turn analytics into business actions.

Not just:

```txt
Kitchen Wrapping Cost had 7 views.
```

But:

```txt
Kitchen Wrapping Cost is getting traffic but has generated no leads. I recommend improving the call-to-action and adding a WhatsApp button near the top.
```

## Insights Jarvis should create

### 1. High traffic, low lead page
Triggered when a page gets views but no clicks/forms.

Example:

```txt
Kitchen Wrapping Cost is getting traffic but no leads.
Recommended action: add pricing examples, stronger CTA, and WhatsApp button higher up.
```

### 2. Lead page winner
Triggered when a page generates leads.

Example:

```txt
Contact page generated the only lead this week. Keep tracking this page and consider adding similar CTAs to service pages.
```

### 3. Location opportunity
Triggered when a location page receives traffic.

Example:

```txt
Kitchen Wrapping Chesterfield is receiving visits. This may be a good page to strengthen with more local project photos and a clearer enquiry section.
```

### 4. Commercial opportunity
Triggered when architectural vinyl, furniture wrapping, window film or commercial pages get traffic.

Example:

```txt
Furniture Wrapping received a visit today. If WRPX is moving towards commercial architectural wraps, this page should be developed further.
```

### 5. Device behaviour
Triggered when mobile traffic is high.

Example:

```txt
35% of current traffic is mobile. Make sure WhatsApp and enquiry buttons are visible without scrolling on mobile.
```

### 6. Traffic source quality
Triggered by source changes.

Example:

```txt
Google is currently driving the most website traffic. Facebook is lower but may still be responsible for direct WhatsApp conversations.
```

### 7. Busy time recommendations
Triggered by traffic times.

Example:

```txt
Website activity appears strongest around afternoon periods. Consider posting or launching ads before these times.
```

## Analytics page inside Jarvis
Recommended route:

```txt
/jarvis/analytics
```

Sections:

1. Jarvis SEO briefing.
2. Top opportunities.
3. Pages gaining traction.
4. Pages falling behind.
5. Pages generating leads.
6. Traffic source quality.
7. Mobile vs desktop.
8. Recent activity.

## Required API/data access
Jarvis needs access to the analytics event table powering `/dashboard`.

Minimum endpoint examples:

```txt
GET /api/analytics/summary
GET /api/analytics/pages
GET /api/analytics/events
GET /api/analytics/sources
GET /api/analytics/devices
GET /api/analytics/locations
```

Jarvis AI endpoint:

```txt
POST /api/jarvis/analytics-insights
```

This endpoint should send recent analytics data to Jarvis and return:

- Insight title.
- Summary.
- Recommendation.
- Priority.
- Related page/source/event.
