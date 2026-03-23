# SEO No-Regression Checklist

Use this checklist before merging each SEO batch.

## 1) Route Health
- Existing core pages load: home, kitchen, commercial, window film, contact, gallery.
- Existing location pages still return 200.
- New pages return 200 and are linked from relevant parent pages.

## 2) Navigation Safety
- Header service links work on desktop and mobile.
- Footer service links work and include all intended services.
- No removed links unless explicitly planned.

## 3) Metadata Safety
- Each edited or new page has unique title and description.
- Canonical URL is present and matches route.
- No duplicate canonical targets introduced.

## 4) Internal Linking
- New hub pages link to child pages.
- Child pages link back to their parent hub.
- Key money pages still link to contact page.

## 5) Sitemap and Indexing
- New URLs are included in `app/sitemap.ts`.
- Old URLs are still present where expected.

## 6) Visual and UX Checks
- Hero/H1 sections render correctly on mobile and desktop.
- Buttons and CTAs are still visible and clickable.
- Existing layout and design tokens are unchanged.

## 7) Quality Gate
- `npm run lint` passes.
- `npm run build` passes.
- Manual spot check of changed pages in browser.
