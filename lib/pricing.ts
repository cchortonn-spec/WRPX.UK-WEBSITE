/**
 * Kitchen wrapping prices — single source of truth for the cost page,
 * quote wizard, FAQs, schema and every other kitchen price on the site.
 *
 * All figures are "from around" starting prices, supply and fit, with no VAT to add.
 * Edit here when prices change; don't hard-code £ amounts elsewhere.
 */

export const kitchenPricing = {
  fullKitchen: 1100,
  shakerKitchen: 1450,
  worktopsOnly: 350,
  doorsOnlyFullKitchen: 850,
  shakerDoorsOnly: 1150,
  largerKitchen: 1600,
  island: 300,
  splashback: 150,
  singleDoor: 45,
  drawerFront: 30,
  endPanel: 60,
  doorRepair: 20,
  newKitchenLow: 5000,
  newKitchenHigh: 15000,
} as const;

/** "From around £1,100" */
export const formatFrom = (n: number) =>
  `From around £${n.toLocaleString("en-GB")}`;

/** "£1,100" */
export const formatPounds = (n: number) => `£${n.toLocaleString("en-GB")}`;

export type PriceGuideRow = {
  label: string;
  price: number;
  /** Shown after the price, e.g. "per door" or "each". Empty for most rows. */
  unit: string;
};

/** Full price guide table on /kitchen-wrapping-cost/ */
export const kitchenPriceGuide: readonly PriceGuideRow[] = [
  {
    label: "Full kitchen with worktops (flat doors, about 10 to 12 doors)",
    price: kitchenPricing.fullKitchen,
    unit: "",
  },
  {
    label: "Shaker-style kitchen with worktops",
    price: kitchenPricing.shakerKitchen,
    unit: "",
  },
  {
    label: "Cupboard doors only, full kitchen (flat doors, about 10 to 12 doors)",
    price: kitchenPricing.doorsOnlyFullKitchen,
    unit: "",
  },
  {
    label: "Shaker doors only, full kitchen",
    price: kitchenPricing.shakerDoorsOnly,
    unit: "",
  },
  {
    label: "Larger kitchen with worktops (about 15 to 20 doors)",
    price: kitchenPricing.largerKitchen,
    unit: "",
  },
  {
    label: "Worktops only",
    price: kitchenPricing.worktopsOnly,
    unit: "",
  },
  {
    label: "Kitchen island (sides and top)",
    price: kitchenPricing.island,
    unit: "",
  },
  {
    label: "Splashback or upstands",
    price: kitchenPricing.splashback,
    unit: "",
  },
  {
    label: "Single cupboard door",
    price: kitchenPricing.singleDoor,
    unit: "per door",
  },
  {
    label: "Drawer front",
    price: kitchenPricing.drawerFront,
    unit: "each",
  },
  {
    label: "End panel",
    price: kitchenPricing.endPanel,
    unit: "each",
  },
  {
    label: "Minor door repairs and filling before wrapping",
    price: kitchenPricing.doorRepair,
    unit: "per door",
  },
] as const;
