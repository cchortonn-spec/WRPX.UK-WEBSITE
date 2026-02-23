import { siteConfig } from "./site-config";

export const faqItems = [
  {
    q: "How much does kitchen wrapping cost?",
    a: "Costs vary by kitchen size, finish and whether you include worktops. Typical ranges: from around £45 per door, from £850 for a full kitchen (10–12 doors), from £250 for worktop only. We give a fixed quote after a free survey — no obligation. For a full pricing guide see our Kitchen Wrapping Cost page: https://www.wrpx.co.uk/kitchen-wrapping-cost/",
  },
  {
    q: "Is kitchen wrapping worth it?",
    a: "For dated but sound kitchens, usually yes. You get a new look at 70–80% less than a replacement, in 1–3 days, with no rip-out. It won't change the layout or carcasses. If your units are damaged or you want a full redesign, replacement may be better — we'll say so at the survey.",
  },
  {
    q: "Can you wrap a kitchen island?",
    a: "Yes. We wrap island unit doors, panels and end panels in the same way as the rest of the kitchen. If the island has a worktop, we can wrap that too in marble, stone or wood-effect vinyl. Same guarantee and process.",
  },
  {
    q: "Does kitchen wrapping peel?",
    a: "Not when it's done properly. We use branded films and trade-level prep so adhesion lasts. Our guarantee covers peeling and adhesion failure for the stated period. Peeling is usually caused by poor prep, cheap film or damage — we avoid the first two and specify care to minimise the third.",
  },
  {
    q: "How long does kitchen wrapping last?",
    a: `With correct care and normal use, a professionally wrapped kitchen typically lasts ${siteConfig.guaranteeYears} years or more. We use branded films and trade-level prep so adhesion and colour hold. Our guarantee covers material defects, colour and adhesion for ${siteConfig.guaranteeYears} years.`,
  },
  {
    q: "Is kitchen wrapping as good as a new kitchen?",
    a: "It's a different product. Wrapping transforms the look of your existing kitchen at a fraction of the cost and in 1–3 days. It won't change the layout or the carcasses. For dated but sound cabinets and worktops that you want to refresh, it's often the best option. We'll tell you honestly if a full replacement makes more sense.",
  },
  {
    q: "Can all kitchen doors be wrapped?",
    a: "Most can. Solid wood, melamine, vinyl-wrapped MDF and painted cabinets are suitable. Doors need to be structurally sound and not warped or damaged. We assess every job at the free survey and will say no if wrapping isn't right.",
  },
  {
    q: "What surfaces can't be wrapped?",
    a: "We don't wrap badly damaged or warped doors, surfaces with existing loose veneer or flaking paint, or materials that don't hold adhesive properly. If we're not confident the result will last, we'll tell you.",
  },
  {
    q: "How long does installation take?",
    a: "Typically 1–3 days depending on kitchen size. Doors are removed and wrapped in our workshop; frames and carcass are wrapped in-situ. No rip-out — your kitchen stays in place.",
  },
  {
    q: "Will there be mess or disruption?",
    a: "Minimal. We protect worktops and floors. No demolition, no plaster or plumbing. The kitchen stays functional. We clean up after ourselves.",
  },
  {
    q: "What's the cost compared to a new kitchen?",
    a: "A full wrap is typically 70–80% less than a like-for-like new kitchen. You get a new look without replacing units, worktops or layout. We give a fixed quote after the free survey.",
  },
  {
    q: "Do you provide a guarantee?",
    a: `Yes. ${siteConfig.guaranteeYears}-year guarantee on adhesion failure, colour fade and material defects. It's named on the work. What voids it: customer damage, improper cleaning or modifications.`,
  },
  {
    q: "What areas do you cover?",
    a: "South Yorkshire and surrounding areas: Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield. Contact us with your postcode to confirm we cover you.",
  },
  {
    q: "Can I wrap just the worktop and not the doors?",
    a: "Yes. We can do worktops only — marble, stone or wood-effect vinyl. Heat and scratch resistant. Often done together with doors for a full refresh, but worktop-only is an option.",
  },
  {
    q: "How do I look after a wrapped kitchen?",
    a: "Wipe with a damp cloth and mild detergent. Avoid abrasive pads, strong chemicals and direct high heat (e.g. hot pans on the wrap). Normal daily use is fine.",
  },
  {
    q: "Can the wrap be removed if I change my mind?",
    a: "Yes. Film can be removed. It may leave minimal residue that we can advise on. You're not locked in for life.",
  },
  {
    q: "Do you wrap bedrooms and bathrooms too?",
    a: "Yes. Wardrobes, bedroom units, bathroom vanity units and office furniture. Same process: survey, prep, wrap, guarantee. We can bundle kitchen, worktops and other rooms in one visit.",
  },
] as const;
