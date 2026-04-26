# WRPX.UK — Kitchen Wrapping South Yorkshire

Website for WRPX, a kitchen wrapping specialist serving Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.

## Tech stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Build and deploy the output of `next build` to any host that supports Node.js (e.g. Vercel, Netlify).

## Kitchen quote form setup (photos + email)

The `/kitchen-wrapping-quote/` form uploads photos to Cloudinary and then emails you the lead via Resend.

### 1) Add environment variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required keys:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `RESEND_API_KEY`
- `LEAD_TO_EMAIL`

Optional:
- `LEAD_FROM_EMAIL` (a verified sender address in Resend)

### 2) Restart dev server

If dev server is already running, stop and restart:

```bash
npm run dev
```

### 3) Test the form

Open `http://localhost:3000/kitchen-wrapping-quote/` and submit with at least 2 photos.
