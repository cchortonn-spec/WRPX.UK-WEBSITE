import type { AreaSlug } from "./site-config";

export const locationPageData: Record<
  AreaSlug,
  { neighbourhoods: string[]; postcodes: string; priceLine: string }
> = {
  Sheffield: {
    neighbourhoods: ["Hillsborough", "Ecclesfield", "Mosborough", "Woodhouse", "Nether Edge"],
    postcodes: "S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S17, S18, S20, S21, S25, S26, S35, S36",
    priceLine: "Most Sheffield kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Doncaster: {
    neighbourhoods: ["Bessacarr", "Balby", "Tickhill", "Mexborough", "Edlington"],
    postcodes: "DN1, DN2, DN3, DN4, DN5, DN6, DN7, DN8, DN9, DN10, DN11, DN12 and nearby",
    priceLine: "Most Doncaster kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Barnsley: {
    neighbourhoods: ["Hoyland", "Wombwell", "Cudworth", "Royston", "Penistone"],
    postcodes: "S70, S71, S72, S73, S74, S75 and surrounding areas",
    priceLine: "Most Barnsley kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Rotherham: {
    neighbourhoods: ["Wickersley", "Maltby", "Dinnington", "Rawmarsh", "Swinton"],
    postcodes: "S60, S61, S62, S63, S64, S65, S66 and nearby",
    priceLine: "Most Rotherham kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Leeds: {
    neighbourhoods: ["Headingley", "Roundhay", "Horsforth", "Pudsey", "Morley"],
    postcodes: "LS1–LS29 and surrounding West Yorkshire areas",
    priceLine: "Most Leeds kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Huddersfield: {
    neighbourhoods: ["Lindley", "Milnsbridge", "Golcar", "Meltham", "Holmfirth"],
    postcodes: "HD1, HD2, HD3, HD4, HD5, HD7, HD8, HD9 and nearby",
    priceLine: "Most Huddersfield kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
  Chesterfield: {
    neighbourhoods: ["Brampton", "Newbold", "Staveley", "Hasland", "Brimington"],
    postcodes: "S40, S41, S42, S43, S44, S45 and surrounding areas",
    priceLine: "Most Chesterfield kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.",
  },
};
