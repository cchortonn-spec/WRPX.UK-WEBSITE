# 10 — Phase 3: Security & Identity

## Before you build

Read these files first:

- `00_JARVIS_CORE_PRINCIPLES.md`
- `01_WRPX_KNOWLEDGE_BASE.md`
- `02_DATA_ARCHITECTURE.md`
- `03_UI_SYSTEM.md`
- `04_AI_RULES.md`

Jarvis is not a collection of tools.

Jarvis is the operating system of WRPX.

Authentication, users, roles, permissions, and audit logs must be designed as part of the wider Jarvis system, not as a standalone login add-on.

---

# Phase purpose

Phase 3 replaces the temporary/password-based Jarvis login with a proper secure authentication and identity system using Clerk.

This phase should protect the private Jarvis business app and prepare WRPX for future staff, office users, estimators, installers, and subcontractors.

The public WRPX website and existing `/dashboard` analytics page must not be broken.

---

# Current context

Existing app:

- Public WRPX website exists.
- Existing analytics dashboard exists at `/dashboard`.
- Jarvis app exists at `/jarvis`.
- Phase 1 created Jarvis foundation.
- Phase 2 created lead operating system features.
- Jarvis currently has a basic/private password login or placeholder security.

Phase 3 should secure Jarvis properly.

---

# Critical rule: No public sign-up

Jarvis is private business software.

There must be no public account creation.

Do not show:

- Create Account
- Register
- Sign Up
- SignUpButton
- public sign-up routes
- organisation creation prompts
- billing prompts

Only invited users should be able to access Jarvis.

Visible signed-out actions should be limited to:

- Sign In
- Forgot Password / password recovery where supported

Signed-in users should see:

- User menu
- Profile/account button
- Log out

---

# Clerk app

Use the Clerk application:

`app_3FuzFXLlHC45BDaoBEHA6q7npFT`

Always pass this app id to Clerk CLI initialisation:

```bash
clerk init --app app_3FuzFXLlHC45BDaoBEHA6q7npFT
```

---

# Preliminary checklist for Cursor/Claude

Before running commands, present this checklist to Connor:

```text
Here's what I'll do to secure Jarvis with Clerk.

1. Install or update the Clerk CLI.
2. Sign in to Clerk from the CLI.
3. Initialise Clerk in this existing project using the Jarvis Clerk app.
4. Protect all /jarvis routes.
5. Remove public sign-up/create-account controls.
6. Add invite-only user access.
7. Add user roles and permission foundations.
8. Add audit logging foundations.
9. Preserve the public website and existing /dashboard analytics.

Shall I proceed?
```

Wait for approval before running commands.

---

# Step 1: Install or update Clerk CLI

From the project root, check whether Clerk CLI is available:

```bash
command -v clerk && clerk --version
```

If available, update it:

```bash
clerk update --yes
```

If unavailable, install using npm unless a different package manager is clearly used:

```bash
npm install -g clerk
```

Equivalent options if needed:

```bash
pnpm install -g clerk
yarn global add clerk
bun add -g clerk
brew install clerk/stable/clerk
curl -fsSL https://clerk.com/install | bash
```

---

# Step 2: Sign in to Clerk

Immediately after installing/updating Clerk CLI, run:

```bash
clerk auth login
```

Do not run `clerk init` before authentication.

Pause while Connor completes the Clerk login flow.

If already signed in, continue.

---

# Step 3: Initialise Clerk

This is an existing project.

Run:

```bash
clerk init --app app_3FuzFXLlHC45BDaoBEHA6q7npFT
```

Let Clerk detect the framework and package manager.

Do not pass `--framework` or `--pm` unless the CLI specifically requires it.

---

# Step 4: Next.js matcher check

If the project uses Next.js, check `proxy.ts` or `middleware.ts` depending on the project version.

Make sure `config.matcher` includes Clerk's auto-proxy path once, after the API/TRPC matcher:

```ts
'/(api|trpc)(.*)',
'/__clerk/:path*',
```

Add `'/__clerk/:path*'` if missing.

Critical rules:

- Next.js 15+: `auth()` is async. Always `await auth()`.
- `ClerkProvider` goes inside `<body>`, not wrapping `<html>`.
- Use `@clerk/nextjs`, not `@clerk/clerk-react`.
- Never expose `CLERK_SECRET_KEY` in client code.
- Do not read or print `.env` files. Ask Connor for missing non-sensitive configuration.

---

# Route protection

All Jarvis routes must be protected:

```text
/jarvis
/jarvis/*
/api/jarvis/*
```

Only authenticated Clerk users can access them.

Public website routes must remain public.

The existing `/dashboard` analytics route should be preserved and not accidentally locked or broken unless Connor explicitly decides to move it behind Clerk later.

---

# Remove old Jarvis password login

Once Clerk is working:

- remove or bypass the old `JARVIS_PASSWORD` login flow for `/jarvis`
- remove old Jarvis login cookies if they are no longer needed
- preserve any analytics dashboard password/cookie if `/dashboard` still uses it
- avoid breaking existing dashboard auth

Do not delete old code until Clerk access is confirmed working.

---

# Invite-only access

Jarvis users should be created/invited by Connor only.

Implementation requirements:

- No public sign-up controls in the UI.
- If Clerk provides hosted sign-up routes, ensure they are not linked from Jarvis.
- Prefer Clerk dashboard invitations for initial owner/admin setup.
- Later, build an internal invite-user screen for Owner/Admin only.

For now, it is acceptable for Connor to manage invitations from Clerk dashboard if faster.

---

# User roles

Create a role system foundation inside the app.

Required roles:

## owner

Connor / business owner.

Can access everything:

- dashboard
- leads
- jobs
- quotes
- invoices
- analytics
- users
- settings
- permissions
- audit logs
- Jarvis AI

## admin

Future senior staff.

Can manage most operations:

- leads
- customers
- quotes
- jobs
- invoices
- tasks
- calendar

Cannot:

- manage owners
- delete critical records without approval
- change system-level settings unless allowed

## office

Future office/admin assistant.

Can:

- manage leads
- add notes
- add reminders
- upload photos
- update stages
- draft/send follow-ups when allowed
- create quotes/invoices if permitted later

Cannot:

- view sensitive profit/margin settings unless allowed
- manage users
- change system settings

## estimator

Future estimator/surveyor.

Can:

- view assigned leads/projects
- add measurements
- upload photos
- create pricing notes
- mark survey complete

Cannot:

- manage users
- change finance settings
- delete records

## installer

Future installer/subcontractor.

Can only access assigned work.

Can view:

- job details
- address
- photos
- materials
- notes
- checklist

Can upload:

- progress photos
- completion photos
- install notes

Cannot view:

- full CRM
- financials
- profit
- marketing
- all leads
- system settings

## readonly

Can inspect assigned/allowed records only.

Cannot edit.

---

# Role storage

Use Clerk user metadata or app database mapping.

Preferred foundation:

- Store Clerk user id.
- Store local user profile record in Supabase.
- Store app role in local database for easy querying and future expansion.
- Keep Clerk as the identity provider.
- Keep Jarvis app permissions in Jarvis database.

Suggested table:

```sql
jarvis_users
```

Suggested fields:

```text
id
clerk_user_id
email
name
role
status
created_at
updated_at
last_seen_at
```

Allowed role values:

```text
owner
admin
office
estimator
installer
readonly
```

Allowed status values:

```text
active
invited
disabled
```

---

# Permission helpers

Create reusable permission helpers.

Examples:

```ts
canViewFinancials(user)
canManageUsers(user)
canEditLead(user, lead)
canViewProject(user, project)
canUploadPhotos(user, relatedRecord)
canViewAnalytics(user)
```

Do not scatter permission logic randomly across components.

Keep it central and reusable.

---

# Jarvis role awareness

Jarvis should know who is logged in.

The same Jarvis briefing should change depending on role.

Examples:

Owner sees:

- sales
- profit
- lead pipeline
- marketing
- overdue invoices
- commercial opportunities

Office sees:

- follow-ups
- leads waiting for photos
- quotes to chase
- survey bookings

Installer sees:

- today's jobs
- addresses
- photos
- materials
- checklist

This does not need full AI yet, but the foundation should be built now.

---

# Audit logging foundation

Add audit logging foundation.

Suggested table:

```sql
jarvis_audit_logs
```

Suggested fields:

```text
id
actor_user_id
actor_clerk_user_id
action
entity_type
entity_id
summary
metadata
created_at
```

Log key actions:

- login if easy/supported
- lead created
- lead stage changed
- note added
- task added
- photo uploaded
- user role changed
- user disabled
- quote created/sent later
- invoice created/sent later

Audit logs should support future activity centre.

---

# Login UI requirements

Create/polish Jarvis login screen if using embedded Clerk components.

Style:

- WRPX logo
- Jarvis name
- dark green glass card
- email/password sign in
- no sign-up/create account
- clean mobile layout
- premium Apple-like feel

Text example:

```text
WRPX Jarvis
Private Business Operating System

Sign in
```

No marketing copy.
No public navigation.
No distracting links.

---

# User menu

Signed-in users should see a simple user menu.

Include:

- name/email
- role badge if easy
- account/profile
- log out

Do not expose Clerk billing/organisations unless needed later.

---

# Mobile authentication

Authentication must work cleanly on mobile.

Requirements:

- login card fits iPhone screen
- touch targets are large
- no horizontal overflow
- user menu usable on mobile
- protected route redirect works on mobile
- future passkeys/biometric login should be possible

---

# API protection

Protect server routes:

```text
/api/jarvis/*
```

APIs must verify authenticated user before returning private data.

Where appropriate, APIs should also check role/permission.

Do not rely only on client-side hiding.

---

# Supabase security

If Supabase Row Level Security is not fully integrated with Clerk yet, at minimum ensure app-level API checks are in place.

Future phase may add deeper Clerk/Supabase JWT integration.

Do not expose private Supabase service keys to client code.

---

# Environment variables

Expected Clerk variables may include:

```text
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

Do not print existing env files.
Do not expose secret keys.
Ask Connor to add missing values if needed.

---

# Clerk doctor

After setup, run:

```bash
clerk doctor
```

Fix reported issues.

Then run project checks:

```bash
npm run build
```

Use the project's existing package manager/scripts if different.

---

# What not to build in this phase

Do not build:

- full staff management dashboard
- full subcontractor portal
- full activity centre UI
- full AI chat
- WhatsApp integration
- email integration
- quote PDFs
- invoices
- payments
- organisations/billing

This phase builds the security and identity foundation only.

---

# Acceptance criteria

Phase 3 is complete only when:

- Clerk is installed and configured.
- `/jarvis` requires Clerk authentication.
- `/jarvis/*` requires Clerk authentication.
- `/api/jarvis/*` requires authenticated access.
- Public sign-up/create-account buttons are not visible.
- No public account creation route is linked from Jarvis.
- Existing public website still works.
- Existing `/dashboard` analytics still works.
- Phase 1 and Phase 2 Jarvis features still work after login.
- Owner/admin role foundation exists.
- Future roles are defined in code/data model.
- Permission helper foundation exists.
- Audit log foundation exists.
- Login UI is mobile-friendly and matches Jarvis style.
- Build passes.

---

# Final reminder

Do not build Clerk as a separate login widget.

Build it as the identity layer for the Jarvis operating system.

Jarvis must know who is using it, what they are allowed to see, and what actions they are allowed to take.
