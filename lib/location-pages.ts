import type { AreaSlug } from "./site-config";

export const locationPageData: Record<
  AreaSlug,
  { neighbourhoods: string[]; postcodes: string; priceLine: string }
> = {
  Sheffield: {
    neighbourhoods: ["Hillsborough", "Ecclesfield", "Mosborough", "Woodhouse", "Nether Edge"],
    postcodes: "S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S17, S18, S20, S21, S25, S26, S35, S36",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Doncaster: {
    neighbourhoods: ["Bessacarr", "Balby", "Tickhill", "Mexborough", "Edlington"],
    postcodes: "DN1, DN2, DN3, DN4, DN5, DN6, DN7, DN8, DN9, DN10, DN11, DN12 and nearby",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Barnsley: {
    neighbourhoods: ["Hoyland", "Wombwell", "Cudworth", "Royston", "Penistone"],
    postcodes: "S70, S71, S72, S73, S74, S75 and surrounding areas",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Rotherham: {
    neighbourhoods: ["Wickersley", "Maltby", "Dinnington", "Rawmarsh", "Swinton"],
    postcodes: "S60, S61, S62, S63, S64, S65, S66 and nearby",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Leeds: {
    neighbourhoods: ["Headingley", "Roundhay", "Horsforth", "Pudsey", "Morley"],
    postcodes: "LS1–LS29 and surrounding West Yorkshire areas",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Huddersfield: {
    neighbourhoods: ["Lindley", "Milnsbridge", "Golcar", "Meltham", "Holmfirth"],
    postcodes: "HD1, HD2, HD3, HD4, HD5, HD7, HD8, HD9 and nearby",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
  Chesterfield: {
    neighbourhoods: ["Brampton", "Newbold", "Staveley", "Hasland", "Brimington"],
    postcodes: "S40, S41, S42, S43, S44, S45 and surrounding areas",
    priceLine: "Full kitchens with worktops from around £1,350. Free survey, fixed quote.",
  },
};
