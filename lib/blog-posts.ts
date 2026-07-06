/**
 * Blog post metadata for listing and metadata. Content lives in each page.
 */
export const blogPosts = [
  {
    slug: "kitchen-wrapping-cost-guide",
    title: "Kitchen Wrapping Cost Guide — What to Expect in South Yorkshire",
    description:
      "A detailed guide to kitchen wrapping costs: per door, full kitchen, worktops. What affects the price and how to get a fixed quote.",
    date: "2025-02-20",
  },
  {
    slug: "kitchen-wrapping-vs-new-kitchen",
    title: "Kitchen Wrapping vs New Kitchen — Is It Worth It?",
    description:
      "When wrapping makes sense and when to replace. Cost, time and durability compared so you can decide.",
    date: "2025-02-19",
  },
  {
    slug: "kitchen-wrapping-vs-painting",
    title: "Kitchen Wrapping vs Painting — Which Is Better?",
    description:
      "Compare vinyl wrapping and painting for kitchen cabinets. Durability, finish and cost for South Yorkshire homeowners.",
    date: "2025-02-18",
  },
  {
    slug: "how-to-clean-a-wrapped-kitchen",
    title: "How to Clean a Wrapped Kitchen — Care Guide",
    description:
      "Simple care tips to keep your wrapped kitchen looking new. What to use, what to avoid, and how to protect your guarantee.",
    date: "2025-02-17",
  },
  {
    slug: "vinyl-wrap-kitchen-finishes",
    title: "Vinyl Wrap Kitchen Finishes — Ideas and Options",
    description:
      "Matt, gloss, woodgrain, marble and more. A guide to kitchen wrap finishes and how to choose.",
    date: "2025-02-16",
  },
  {
    slug: "kitchen-wrapping-ideas-2026",
    title: "Kitchen Wrapping Ideas for 2026",
    description:
      "Trends and ideas for refreshing your kitchen with vinyl wrap in 2026 — colours, finishes and what South Yorkshire homeowners are choosing.",
    date: "2026-02-20",
  },
  {
    slug: "commercial-vinyl-installer-background-matters",
    title: "Why Your Commercial Vinyl Installer's Background Actually Matters",
    description:
      "Not all commercial vinyl installers are equal. Learn why material knowledge and surface preparation decide whether a finish lasts five years or five months.",
    date: "2026-03-01",
  },
  {
    slug: "window-graphics-wall-wraps-floor-vinyls-commercial-guide",
    title: "Window Graphics, Wall Wraps & Floor Graphics: A Commercial Buyer's Guide",
    description:
      "Planning retail graphics installation for the first time? A practical guide to window graphics, wall wraps, floor graphics and shop front applications.",
    date: "2026-03-02",
  },
  {
    slug: "kitchen-wrapping-vs-kitchen-spraying",
    title: "Kitchen Wrapping vs Kitchen Spraying — Which Is Better?",
    description:
      "An honest comparison of vinyl wrapping and spray painting for kitchen cabinets. Durability, finish range, drying time and cost — which should you choose?",
    date: "2026-07-04",
  },
  {
    slug: "kitchen-island-wrapping-ideas",
    title: "Kitchen Island Wrapping Ideas — Colours, Finishes & Inspiration",
    description:
      "Two-tone kitchens, marble islands, bold colour choices and woodgrain finishes. Popular kitchen island wrap ideas for 2026 with costs and advice.",
    date: "2026-07-04",
  },
  {
    slug: "how-long-does-kitchen-wrapping-last",
    title: "How Long Does Kitchen Wrapping Last?",
    description:
      "The honest answer on kitchen vinyl wrap lifespan — what affects durability and how to get 7–10+ years from a wrapped kitchen.",
    date: "2026-07-01",
  },
  {
    slug: "wardrobe-vinyl-wrap-guide",
    title: "Wardrobe Vinyl Wrap Guide — Ideas, Cost & What to Expect",
    description:
      "Complete guide to wardrobe vinyl wrapping: which wardrobes can be done, best finishes, cost and how long it lasts.",
    date: "2026-07-01",
  },
  {
    slug: "bathroom-cabinet-vinyl-wrap",
    title: "Bathroom Cabinet Vinyl Wrap — Guide, Cost & Best Finishes",
    description:
      "Can you vinyl wrap bathroom cabinets? Yes — here's how it works, which films to use, what it costs and how long it lasts.",
    date: "2026-07-01",
  },
  {
    slug: "kitchen-wrapping-near-me-guide",
    title: "Kitchen Wrapping Near Me — How to Find the Right Installer",
    description:
      "How to find a reliable local kitchen wrapping installer, what questions to ask, and red flags to watch for.",
    date: "2026-07-01",
  },
  {
    slug: "worktop-wrapping-cost",
    title: "Worktop Wrapping Cost Guide 2026 — What to Expect",
    description:
      "How much does worktop wrapping cost in 2026? Detailed price breakdown by kitchen size, what affects the quote, and how wrapping compares to replacement.",
    date: "2026-07-01",
  },
  {
    slug: "grey-kitchen-wrap-ideas",
    title: "Grey Kitchen Wrap Ideas 2026 — Shades, Finishes & How to Choose",
    description:
      "From soft dove grey to dark anthracite — a guide to grey kitchen wrapping, which shades work where, how to pair with worktops, and two-tone ideas.",
    date: "2026-07-02",
  },
  {
    slug: "kitchen-wrapping-rental-properties",
    title: "Kitchen Wrapping for Rental Properties — A Landlord's Guide",
    description:
      "Why South Yorkshire landlords choose vinyl kitchen wrapping between tenancies. Cost, speed, durability and which finishes work best for rental kitchens.",
    date: "2026-07-03",
  },
  {
    slug: "why-sign-companies-use-subcontract-installers",
    title: "Why Sign Companies Use Subcontract Installers — and How to Choose One",
    description:
      "Most sign companies subcontract installation at some point. Here's why the model works, what goes wrong when the wrong installer is chosen, and what to look for in a reliable subcontract installation partner.",
    date: "2026-07-04",
  },
  {
    slug: "how-to-brief-an-installation-subcontractor",
    title: "How to Brief an Installation Subcontractor — A Guide for Sign Companies and Print Firms",
    description:
      "What to include in a brief when subcontracting vinyl installation — material spec, site conditions, white-label requirements, photo documentation and snagging procedure.",
    date: "2026-07-05",
  },
] as const;

export type BlogSlug = (typeof blogPosts)[number]["slug"];
