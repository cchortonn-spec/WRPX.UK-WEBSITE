import { siteConfig } from "./site-config";

/**
 * Single source of truth for the WRPX Kitchen Wrapping Training + Business Launch offer.
 * Hub copy follows a Godfather Offer structure (Sell Like Crazy) — ASA-safe earnings.
 */
export const trainingProgram = {
  name: "WRPX 5-Day Kitchen Wrapping Training + Business Launch",
  shortName: "Kitchen Wrapping Training",
  price: 1699,
  priceDisplay: "£1,699",
  durationDays: 5,
  durationLabel: "5 days",
  certificateName: "WRPX Certificate of Completion — Architectural Vinyl Installation",
  seoMonthsIncluded: 12,
  yearsExperience: siteConfig.yearsInBusiness,

  /** Landing hero */
  hero: {
    eyebrow: "WRPX · Kitchen wrapping training",
    headline: "Walk out of 5 days with your own kitchen wrapping business",
    subhead:
      "Train on a real live install with Connor's team — then leave with branding, a live website, 12 months of local SEO, supplier setup and ongoing support. One investment. Nothing else to pay for the package.",
    ctaPrimary: "Apply for a place on WhatsApp",
    ctaSecondary: "Call Connor",
    proof: [
      "Years on the tools",
      "Real job — not a classroom",
      "£1,699 all-in",
    ],
  },

  tagline:
    "Not a classroom session. A real 5-day install on a live kitchen job — plus a full business built for you.",

  pitch:
    "Join Connor and the WRPX team on a real kitchen wrapping job. Learn prep, primers, sealants, measuring, pricing and finishing under real conditions. Walk away with branding help, supplier accounts, a live website with 12 months of SEO, and ongoing phone support — so you can start taking work.",

  problem: {
    eyebrow: "The hard truth",
    headline: "You can wrap like a pro and still starve for work",
    body: [
      "A lot of wrap training puts you in a training bay, hands you a certificate, and sends you home. No brand. No website. No suppliers. No one to call when a door lifts on a Friday afternoon.",
      "Skill without a business is half a business. If nobody can find you, there's no work — and no money. That's the trap.",
    ],
  },

  desire: {
    eyebrow: "Picture this",
    headline: "Your name on the van. Enquiries coming in. You're the boss.",
    body: [
      "You finish a kitchen, get paid, and book the next one. Your site is live for kitchen wrapping in your towns. When you're stuck on a primer or a price, you message us — and we answer.",
      "That's not a weekend workshop. That's a life change: work for yourself, build something that can grow, and stop waiting for someone else to give you a shift.",
    ],
  },

  rationale: {
    eyebrow: "Why we package it like this",
    headline: "Because teaching the wrap alone would be selling you short",
    body: [
      "We've been in large-format vinyl and architectural wrapping for years. We've seen people learn the craft… then stall because they never got the business side.",
      "We also need capable installers for overflow work we can't fulfil. So we build operators properly: live-job skill + branding + suppliers + a site that can pull local enquiries + a line to us after you're done.",
      "That's why this offer looks outrageous compared to a weekend classroom. It's meant to.",
    ],
  },

  /** Godfather value stack — feature → benefit; premiums after core */
  offerStack: [
    {
      id: "training",
      kind: "core" as const,
      feature: "5 days on a real kitchen wrapping install",
      benefit:
        "You learn under real pressure — real kitchens, real problems — so you leave knowing how the job actually runs, not how a training bay pretends it does.",
      valueHint: "The skill that gets you paid",
    },
    {
      id: "fundamentals",
      kind: "core" as const,
      feature: "Prep, primers, sealants, products & finishing standards",
      benefit:
        "You know what to use, where to get it, what it costs, and how to finish so the job lasts — the difference between looking amateur and looking pro.",
      valueHint: "Trade secrets we use every day",
    },
    {
      id: "measure-price",
      kind: "core" as const,
      feature: "Measure & price coaching",
      benefit:
        "You can survey a kitchen, price it for your skill level, and quote with confidence — so you're not guessing (or undercharging) on every job.",
      valueHint: "How the money actually works",
    },
    {
      id: "branding",
      kind: "premium" as const,
      feature: "Brand name & logo direction",
      benefit:
        "You look like a real company from day one — clients take you seriously before you've even opened the van doors.",
      valueHint: "Included with your place",
    },
    {
      id: "suppliers",
      kind: "premium" as const,
      feature: "Supplier introductions & trade account help",
      benefit:
        "You're not hunting suppliers blind — we open doors so you can buy like a trade, not like a DIY weekend warrior.",
      valueHint: "Included with your place",
    },
    {
      id: "website",
      kind: "premium" as const,
      feature: "Done-for-you website + live domain",
      benefit:
        "A branded site ready to take enquiries — so when someone googles kitchen wrapping near them, you have somewhere real to send them.",
      valueHint: "Included with your place",
    },
    {
      id: "seo",
      kind: "premium" as const,
      feature: "12 months of local SEO updates",
      benefit:
        "We target your towns and cities for kitchen wrapping so you're not invisible — enquiries can come in while you're getting sharp on the tools.",
      valueHint: "Included with your place",
    },
    {
      id: "support",
      kind: "premium" as const,
      feature: "Ongoing phone & WhatsApp support",
      benefit:
        "Stuck on a tool, product or technique after training? You're not alone — message or call. We're only a phone call away.",
      valueHint: "Included with your place",
    },
    {
      id: "certificate",
      kind: "premium" as const,
      feature: "WRPX Certificate of Completion (if approved)",
      benefit:
        "Confirmation you completed live architectural vinyl installation training with WRPX — not an official accreditation or industry licence.",
      valueHint: "Included with your place",
    },
    {
      id: "subcontract",
      kind: "premium" as const,
      feature: "Subcontract pathway when WRPX has overflow",
      benefit:
        "When we have work we can't fulfil, approved trainees may get offered paid jobs — a chance to earn while you build your own book.",
      valueHint: "When available",
    },
  ],

  priceBlock: {
    eyebrow: "The investment",
    headline: "One payment. A business ready to take work.",
    note: "£1,699. Nothing else to pay for the package as described.",
    reduce:
      "That's less than £33 a week over a year — for live training, a website, a year of SEO, branding, suppliers and a support line.",
    ctaPrimary: "Apply for a place on WhatsApp",
    ctaSecondary: "Call Connor",
  },

  guarantee: {
    eyebrow: "Our guarantee",
    headline: "We stand behind what we said we'd build for you",
    body: "If we don't deliver the agreed website and 12 months of local SEO setup and updates as described in this offer, we'll make it right and keep going until we do. The certificate is awarded on successful completion if approved.",
  },

  scarcity: {
    eyebrow: "Limited places",
    headline: "Places only open when we have a live kitchen install",
    body: "This isn't a classroom with unlimited chairs. You train on a real WRPX job with Connor's team — so intake is limited by the installs we book. When a place opens, it goes to someone ready to apply. If you're serious, message us now and we'll tell you the next available intake.",
  },

  dayTeasers: [
    { day: 1, hook: "Thrown into a live install — vinyl fundamentals on a real kitchen" },
    { day: 2, hook: "Prep that lasts: cleaners, primers, cloths — what actually works" },
    { day: 3, hook: "Application & finishing under real pressure — problem-solving on site" },
    { day: 4, hook: "Measure, price and quote so you can get paid properly" },
    { day: 5, hook: "Business launch: brand, suppliers, website, SEO, support, certificate" },
  ],

  earnings: {
    headline:
      "Once you're fully trained and the business is running smoothly, £1,000 in an average week is realistic",
    body:
      "Kitchen wrapping demand is growing fast. When you can measure, price and finish jobs cleanly — and your website is pulling local enquiries — an average week can bring in £1,000 or more.",
    disclaimer:
      "Earnings vary with skill, location, marketing and how many jobs you take on. No income is guaranteed. Results depend on your effort, local demand and how you run your business.",
  },

  curriculum: [
    {
      day: 1,
      title: "Live job immersion & vinyl fundamentals",
      summary:
        "You're on a real kitchen install from day one — not watching slides. Learn how vinyl behaves, which films we use, and how a professional day on site actually runs.",
      topics: [
        "How architectural vinyl works on kitchen doors, frames and panels",
        "Film types and finishes used on real WRPX jobs (e.g. 3M, CoverStyl)",
        "Site setup, workflow and working around a live client kitchen",
        "Tools of the trade and what each one is for",
      ],
    },
    {
      day: 2,
      title: "Surface preparation that actually lasts",
      summary:
        "Most wrap failures start with bad prep. We teach the products and process we use every day so adhesion holds and the finish stays clean.",
      topics: [
        "Cleaning products that work (and which to avoid)",
        "Primers — when to use them, where, and how much",
        "Microfibre cloths that leave a proper surface",
        "Assessing doors, melamine, MDF and painted cabinets before you wrap",
      ],
    },
    {
      day: 3,
      title: "Application, finishing & problem-solving",
      summary:
        "Hands-on wrapping under real time pressure. Edges, corners, handles, and the problems that only show up on a live job — not in a training bay.",
      topics: [
        "Door and drawer wrapping technique",
        "Edges, returns and finishing to a client-ready standard",
        "Sealants — what we use, where, and why",
        "Fixing bubbles, lifting edges and tricky substrates on the spot",
      ],
    },
    {
      day: 4,
      title: "Measure, price & quote like a pro",
      summary:
        "Skill alone doesn't pay the bills. Learn how to measure a kitchen, price it for your skill level, and present a clear quote.",
      topics: [
        "How to measure a kitchen wrapping job accurately",
        "Pricing by doors, worktops and full kitchens",
        "Building in materials, travel and your time",
        "What to say (and what not to promise) on a survey",
      ],
    },
    {
      day: 5,
      title: "Business launch & your next steps",
      summary:
        "We lock in your branding direction, supplier path, website plan and support line — so you leave with a business ready to take enquiries, not just a skill.",
      topics: [
        "Brand name and logo direction with the WRPX team",
        "Supplier introductions and help opening your trade account",
        "Website build plan, local SEO towns/cities, and 12 months of updates",
        "Ongoing support: phone/WhatsApp for tools, products and job questions",
        "WRPX Certificate of Completion and subcontract work pathway",
      ],
    },
  ],

  inclusions: [
    {
      id: "training",
      title: "5-day live kitchen install training",
      description:
        "Train on a real job with real problems — not a classroom mock-up. One-to-one time with Connor and the WRPX team.",
    },
    {
      id: "fundamentals",
      title: "Vinyl fundamentals & finishing standards",
      description:
        "Prep, primers, sealants, cleaning products, microfibres, tools, and how to finish a job properly so it lasts.",
    },
    {
      id: "measure-price",
      title: "Measure & price training",
      description:
        "How to survey a kitchen, price according to your skill set, and quote with confidence.",
    },
    {
      id: "branding",
      title: "Branding help — name & logo",
      description:
        "We help you shape a professional name and logo direction so you look like a real business from day one.",
    },
    {
      id: "suppliers",
      title: "Supplier introductions & account setup",
      description:
        "We introduce you to the suppliers we trust and help you get your trade account opened.",
    },
    {
      id: "website",
      title: "Done-for-you website + live domain",
      description:
        "A full website built around your branding, ready to take enquiries — with your domain live.",
    },
    {
      id: "seo",
      title: "12 months of local SEO updates",
      description:
        "Weekly and monthly SEO work targeting your towns and cities so you can dominate kitchen wrapping locally.",
    },
    {
      id: "support",
      title: "Ongoing phone & WhatsApp support",
      description:
        "Stuck on a product, tool or technique after training? Message or call. We're only a phone call away.",
    },
    {
      id: "certificate",
      title: "WRPX Certificate of Completion",
      description:
        "If approved, you receive a WRPX certificate confirming you completed architectural vinyl installation training with us. This is not an official accreditation or industry licence.",
    },
    {
      id: "subcontract",
      title: "Subcontract work pathway",
      description:
        "When WRPX has overflow work we can't fulfil, approved trainees may be offered paid subcontract jobs.",
    },
  ],

  costBreakdown: [
    {
      item: "5-day live kitchen wrapping training",
      valueNote: "Real job immersion with Connor & the WRPX team",
    },
    {
      item: "Prep, products & tools guidance",
      valueNote: "Primers, sealants, cleaners, cloths — what to buy and where",
    },
    {
      item: "Measure & price coaching",
      valueNote: "Survey and quote process you can use on every job",
    },
    {
      item: "Brand name & logo direction",
      valueNote: "Professional identity so clients take you seriously",
    },
    {
      item: "Supplier introductions & account help",
      valueNote: "Trade accounts opened with suppliers we work with",
    },
    {
      item: "Full website + live domain",
      valueNote: "Branded site ready for enquiries",
    },
    {
      item: "12 months SEO (local towns & cities)",
      valueNote: "Ongoing updates to help you rank where the work is",
    },
    {
      item: "Ongoing support line",
      valueNote: "Phone / WhatsApp after training — no extra fee",
    },
    {
      item: "WRPX Certificate of Completion",
      valueNote: "Awarded on successful completion (if approved)",
    },
  ],

  whoItsFor: [
    {
      title: "Career changers",
      description:
        "Ready to leave employment and build something of your own — with a clear path into a high-demand trade.",
    },
    {
      title: "Tradespeople adding a service",
      description:
        "Already in kitchens, joinery or decorating and want kitchen wrapping as a profitable add-on.",
    },
    {
      title: "Side-hustlers going full time",
      description:
        "You've got drive and want a skill plus a real business setup — not another weekend workshop.",
    },
  ],

  marketPoints: [
    "Kitchen wrapping is growing fast as homeowners look for a fraction of the cost of a new kitchen.",
    "Demand outpaces the number of skilled installers in most UK towns and cities.",
    "Jumping in now — with a website and local SEO already working for you — puts you ahead of people who only learn the wrap.",
    "WRPX has been wrapping and installing large-format vinyl for years. You train with people who do this every day.",
  ],

  faqs: [
    {
      q: "What's the catch?",
      a: "There isn't a hidden fee for the package as described. £1,699 covers live training, branding help, supplier setup support, website + live domain, 12 months of local SEO, ongoing technique support, and a certificate if approved. Tools and materials for your own future jobs are your trade costs — we show you what we use and where to get them.",
    },
    {
      q: "Is this classroom training?",
      a: "No. You join us on a real 5-day kitchen wrapping install. Real client kitchen. Real problems. That's the point — so you're ready for the work, not a training-bay certificate.",
    },
    {
      q: "Do I need experience?",
      a: "No. We teach fundamentals, prep, application, measuring and pricing from the ground up — on a live job with Connor and the team.",
    },
    {
      q: "Will I really get a website and SEO?",
      a: "Yes — a done-for-you branded site with a live domain, plus 12 months of local SEO updates aimed at your towns and cities. If we don't deliver that as described, our guarantee says we make it right.",
    },
    {
      q: "Do you help me get work after training?",
      a: "Your website and SEO are built to bring local enquiries. Separately, when WRPX has overflow we can't fulfil, approved trainees may be offered paid subcontract jobs when available.",
    },
    {
      q: "Is the certificate an official accreditation?",
      a: "No. It's a WRPX Certificate of Completion for finishing our architectural vinyl installation training. It is not a formal industry accreditation or licence.",
    },
    {
      q: "Where does training happen?",
      a: "On a live WRPX kitchen wrapping job — typically South Yorkshire and surrounding areas. Exact site depends on the booked install that week. We'll confirm when you're accepted.",
    },
    {
      q: "How do I apply?",
      a: "Message us on WhatsApp or call Connor. Places open around live installs, so if you're serious, get in touch and we'll talk through the next intake.",
    },
  ],

  relatedPages: [
    {
      title: "Kitchen Wrapping Training",
      description:
        "The main sales page — live 5-day install, full business setup, price and how to apply.",
      href: "/kitchen-wrapping-training/",
    },
    {
      title: "Training Cost & What's Included",
      description: "£1,699 one price — itemised breakdown of everything you get.",
      href: "/kitchen-wrapping-training-cost/",
    },
    {
      title: "5-Day Training Plan",
      description: "Day-by-day: prep, primers, sealants, measuring, pricing and finishing.",
      href: "/kitchen-wrapping-training-course/",
    },
    {
      title: "Become a Kitchen Wrapper",
      description: "Career change, market demand, and building your own wrapping business.",
      href: "/become-a-kitchen-wrapper/",
    },
  ],

  close: {
    headline: "Ready to build the business — not just learn the wrap?",
    body: "Apply for a place. Train on a live job. Walk out with the setup most classroom sessions never give you.",
  },
} as const;

export type TrainingFaq = (typeof trainingProgram.faqs)[number];
export type OfferStackItem = (typeof trainingProgram.offerStack)[number];
