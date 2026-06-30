# WRPX Jarvis — Pipeline and Lead Stages

## Main principle
Every lead, estimate, quote and project must have a clear stage.

Nothing should sit in WhatsApp, Gmail or Connor's memory without being tracked.

## Recommended lead stages

| Stage | Colour | Meaning | Jarvis action |
|---|---|---|---|
| New Lead | Lime | Lead has arrived but no action yet | Prepare first reply |
| Waiting for Reply | Grey | First message sent, waiting for customer | Chase after set time |
| Waiting for Photos | Amber | Customer needs to send photos | Auto-follow-up |
| Waiting for Colour / Style | Yellow | Photos received, colour/style not confirmed | Ask colour/style question |
| Waiting for Job Type | Yellow | Need to know worktops, cupboards, both, commercial, other | Ask job type question |
| Ready for Estimate | Green | Enough info to estimate from photos | Notify Connor |
| Survey Needed | Blue | Estimate not enough, needs visit | Prompt Connor to book survey |
| Survey Booked | Blue | Visit booked in calendar | Reminder before visit |
| Measured | Teal | Measurements taken | Prompt pricing |
| Pricing | Purple | Material/pricing being worked out | Help calculate material |
| Quote Sent | Pink | Quote sent to customer | Start follow-up timer |
| Follow Up Due | Orange | Quote needs chasing | Draft follow-up |
| Won | Green | Customer accepted | Create deposit invoice |
| Deposit Due | Red | Deposit requested, not paid | Chase deposit |
| Deposit Paid | Green | Deposit received | Prompt material order |
| Material Ordered | Olive | Material ordered | Track delivery |
| Install Booked | Blue | Installation scheduled | Send install reminder |
| In Progress | Lime | Job currently active | Track notes/photos |
| Completed | Green | Work complete | Create final invoice |
| Final Invoice Sent | Amber | Balance requested | Chase payment |
| Paid | Green | Job paid in full | Ask for review |
| Review Requested | Purple | Review request sent | Chase after set time |
| Closed | Grey | Job complete and archived | Keep record |
| Lost / Not Suitable | Red | Lead not moving forward | Store reason |

## Domestic vs commercial
Jarvis should support both domestic and commercial work.

### Domestic project types
- Kitchen cupboards.
- Kitchen worktops.
- Cupboards and worktops.
- Window film.
- Furniture wrapping.
- General architectural vinyl.

### Commercial project types
- Office architectural wrap.
- Retail display / fixtures.
- Hotel / hospitality surfaces.
- Door wraps.
- Lift interiors.
- Reception desks.
- Commercial window film.
- Subcontract install.
- Multi-site rollout.

## Minimum information before Connor is notified
For domestic photo-based estimates:

- Photos received.
- Customer confirms colour/style direction, even if broad.
- Customer confirms job type: worktops, cupboards, both, or other.

Postcode, phone number and email are not required at this stage because the contact route already exists through Facebook, WhatsApp or email.

## Jarvis qualification logic
Jarvis should only notify Connor when the lead is worth attention.

### Ready for Connor
A lead becomes ready when:

```txt
photos_received = true
AND colour_or_style_known = true
AND job_type_known = true
```

### Needs more information
A lead should remain with Jarvis if:

- No photos have been received.
- Photos are too unclear.
- Job type is unclear.
- Colour/style is unclear.
- Customer asks basic questions Jarvis can answer.

## Follow-up rules

### Waiting for Photos
- Follow up after 24 hours.
- Follow up again after 48 hours.
- Move to Cold after 7 days with no photos.

### Quote Sent
- Follow up after 3 days.
- Follow up after 7 days.
- Follow up after 14 days.
- Move to Long-Term Follow Up after 30 days.

### Deposit Due
- Follow up after 24 hours.
- Alert Connor after 3 days.

### Final Invoice Sent
- Follow up after 3 days.
- Alert Connor after 7 days.

## Key dashboard views

### All Leads
Shows every lead regardless of stage.

### Needs Connor
Only leads that require Connor's attention.

### Waiting on Customer
Photos, colour, job type, quote replies or deposit.

### Quotes Sent
All active quotes waiting for response.

### Won Jobs
Accepted work moving into operations.

### Commercial Pipeline
Commercial enquiries, subcontract opportunities and larger projects.
