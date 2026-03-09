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
    title: "Window Graphics, Wall Wraps & Floor Vinyls: A Commercial Buyer's Guide",
    description:
      "Planning commercial vinyl installation for the first time? A practical guide to window graphics, wall wraps, floor vinyls and shop front applications.",
    date: "2026-03-02",
  },
] as const;

export type BlogSlug = (typeof blogPosts)[number]["slug"];
