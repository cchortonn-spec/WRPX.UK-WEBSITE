# Indexing Recovery Log (Safe, No-Deletion)

This checklist is for the "Crawled - currently not indexed" issue shown in Search Console.
No pages are deleted and no URLs are changed.

## Affected URLs (current focus)
- `https://www.wrpx.co.uk/architectural-vinyl-finishes/` (service-support page: sample books + finish selection)
- `https://www.wrpx.co.uk/architectural-vinyl-film/` (core service page: installation scope + suitability)

## Technical Signal Check (completed in codebase)
- Both pages have explicit canonical URLs to themselves.
- Both pages now have explicit `robots` metadata: `index: true`, `follow: true`.
- Both pages are included in `app/sitemap.ts`.
- Global crawl rules in `app/robots.ts` allow crawling for site content.

## Content/Intent Separation Applied
- `architectural-vinyl-finishes` emphasizes style selection and sample books.
- `architectural-vinyl-film` emphasizes installation service and suitability.
- Each page now links to the other with clear intent so Google sees distinct purpose.

## Internal Linking Strengthening Applied
- Homepage now links to both:
  - finish sample page
  - architectural film installation page
- Existing header navigation already includes both routes.

## Manual Search Console Steps (do after deploy)
1. Open URL Inspection for each affected URL.
2. Click **Request Indexing** for each URL.
3. Go to Page Indexing -> "Crawled - currently not indexed" -> **Validate Fix**.

## Weekly Monitoring (2-4 weeks)
Track this once per week:

| Week | Crawled - currently not indexed count | Indexed count change | Notes |
|---|---:|---:|---|
| Week 1 |  |  |  |
| Week 2 |  |  |  |
| Week 3 |  |  |  |
| Week 4 |  |  |  |

Escalate only if there is no improvement by week 4.
