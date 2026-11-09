/**
 * Portfolio photos used by the gallery, homepage and service pages.
 * Edit a caption, alt text or town here and it updates everywhere.
 */

export type PortfolioCategory =
  | "kitchens"
  | "bedrooms"
  | "furniture"
  | "bathrooms"
  | "window-film"
  | "commercial";

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "kitchens", label: "Kitchens" },
  { id: "bedrooms", label: "Wardrobes & bedrooms" },
  { id: "furniture", label: "Furniture" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "window-film", label: "Window film" },
  { id: "commercial", label: "Commercial" },
];

export type PortfolioPhoto = {
  src: string;
  alt: string;
  caption: string;
  projectLine?: string;
  categories: PortfolioCategory[];
  town?: string;
  /** Shown in the homepage "Recent projects" grid */
  featured?: boolean;
};

const FROSTED = "/images/commercial-frosted-glass-film-sheffield";
const FURNITURE = "/images/3m-wrapped-furniture-rotherham";
const WARDROBES = "/images/wardrobe-wrapping";
const DRESSING = "/images/dressing-table-wrapping";
const BATH = "/images/bath-panel-wrapping";
const KITCHENS = "/images/kitchen-wrapping-projects";
const WINDOWS = "/images/window-film-projects";
const TRIDENT = "/images/gym-solar-film-liverpool";

const recentProjects: PortfolioPhoto[] = [
  // Frosted film on glass balustrade panels — commercial lodge decking
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-01.jpg`, alt: "Frosted window film on glass balustrade panels around timber lodge decking, Sheffield", caption: "Frosted glass balustrade film, Sheffield", projectLine: "Commercial job — frosted privacy film on every glass decking panel", categories: ["commercial", "window-film"], town: "Sheffield", featured: true },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-02.jpg`, alt: "Corner view of frosted film on glass decking panels, commercial lodge, Sheffield", caption: "Frosted decking panels, Sheffield", projectLine: "Even, bubble-free frosted finish across the full run", categories: ["commercial", "window-film"], town: "Sheffield" },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-03.jpg`, alt: "Frosted glass balustrade film seen from the decking, Sheffield", caption: "Deck-side view, Sheffield", projectLine: "Privacy for guests while still letting the light through", categories: ["commercial", "window-film"], town: "Sheffield", featured: true },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-04.jpg`, alt: "Frosted privacy film on glass panels between timber posts, Sheffield", caption: "Frosted panels and posts, Sheffield", projectLine: "Film cut neatly to every panel edge and fixing", categories: ["commercial", "window-film"], town: "Sheffield" },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-05.jpg`, alt: "Frosted film glass decking panels on a lodge, side view, Sheffield", caption: "Side elevation, Sheffield", projectLine: "Frosted film on outdoor glass balustrades", categories: ["commercial", "window-film"], town: "Sheffield" },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-06.jpg`, alt: "Close-up of frosted film on a glass balustrade panel, Sheffield", caption: "Panel close-up, Sheffield", projectLine: "Clean edges around the glass clamps", categories: ["commercial", "window-film"], town: "Sheffield" },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-07.jpg`, alt: "Frosted glass decking screen with privacy film, Sheffield", caption: "Frosted privacy screen, Sheffield", projectLine: "Frosted film installed on site in one visit", categories: ["commercial", "window-film"], town: "Sheffield" },
  { src: `${FROSTED}/frosted-film-glass-balustrade-decking-sheffield-08.jpg`, alt: "Long run of frosted glass balustrade panels on lodge decking, Sheffield", caption: "Full decking run, Sheffield", projectLine: "Commercial frosted film installation", categories: ["commercial", "window-film"], town: "Sheffield" },

  // Dining table, side table and TV unit — all wrapped in the same 3M finish
  { src: `${FURNITURE}/3m-wood-effect-wrapped-dining-table-rotherham-01.jpg`, alt: "Dining table wrapped in 3M wood-effect vinyl, matching TV unit behind, Rotherham", caption: "3M wrapped dining table, Rotherham", projectLine: "Dining table, side tables and TV unit wrapped in the same 3M finish so they all match", categories: ["furniture"], town: "Rotherham", featured: true },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-dining-table-rotherham-02.jpg`, alt: "Pedestal dining table wrapped in 3M wood-effect vinyl, Rotherham", caption: "Pedestal dining table, Rotherham", projectLine: "Top, edges and pedestal base all wrapped", categories: ["furniture"], town: "Rotherham" },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-dining-table-rotherham-03.jpg`, alt: "3M wood-effect vinyl wrapped dining table top, Rotherham living room", caption: "Dining table top, Rotherham", projectLine: "Seamless woodgrain across the full table top", categories: ["furniture"], town: "Rotherham" },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-dining-table-rotherham-04.jpg`, alt: "Close-up of 3M woodgrain vinyl on a wrapped dining table edge, Rotherham", caption: "Woodgrain detail, Rotherham", projectLine: "Grain runs cleanly over the edge", categories: ["furniture"], town: "Rotherham" },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-tv-unit-rotherham-01.jpg`, alt: "TV unit wrapped in 3M wood-effect vinyl to match the dining table, Rotherham", caption: "3M wrapped TV unit, Rotherham", projectLine: "Long media unit wrapped to match the dining set", categories: ["furniture"], town: "Rotherham", featured: true },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-tv-unit-rotherham-02.jpg`, alt: "Wrapped TV unit with open shelf in 3M wood-effect vinyl, Rotherham", caption: "TV unit side view, Rotherham", projectLine: "Shelves, sides and drawer fronts wrapped", categories: ["furniture"], town: "Rotherham" },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-tv-unit-rotherham-03.jpg`, alt: "3M vinyl wrapped TV cabinet under a wall-mounted TV, Rotherham", caption: "TV cabinet, Rotherham", projectLine: "Matching woodgrain finish across the room", categories: ["furniture"], town: "Rotherham" },
  { src: `${FURNITURE}/3m-wood-effect-wrapped-side-table-rotherham-01.jpg`, alt: "Side table wrapped in 3M wood-effect vinyl next to a leather sofa, Rotherham", caption: "3M wrapped side table, Rotherham", projectLine: "Side tables wrapped in the same 3M finish", categories: ["furniture"], town: "Rotherham" },

  // Wardrobes and bedroom furniture
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-01.jpg`, alt: "Walnut-effect vinyl wrapped fitted wardrobe and dressing table, Barnsley bedroom", caption: "Walnut wardrobe wrap, Barnsley", projectLine: "Wardrobe, desk and drawers wrapped in matching walnut", categories: ["bedrooms"], town: "Barnsley", featured: true },
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-02.jpg`, alt: "Walnut wrapped dressing table with drawers beside fitted wardrobe, Barnsley", caption: "Walnut desk and drawers, Barnsley", projectLine: "Matching walnut finish across the bedroom furniture", categories: ["bedrooms"], town: "Barnsley" },
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-03.jpg`, alt: "Triple-door wardrobe wrapped in walnut-effect vinyl, Barnsley", caption: "Triple wardrobe, Barnsley", projectLine: "Doors, frame and cornice wrapped", categories: ["bedrooms"], town: "Barnsley" },
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-04.jpg`, alt: "Walnut vinyl wrapped wardrobe with bedside drawers, Barnsley", caption: "Wardrobe and drawers, Barnsley", projectLine: "Walnut-effect bedroom furniture wrap", categories: ["bedrooms"], town: "Barnsley" },
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-05.jpg`, alt: "Close-up of walnut woodgrain wardrobe wrap with chrome handles, Barnsley", caption: "Handle detail, Barnsley", projectLine: "Woodgrain close-up around refitted handles", categories: ["bedrooms"], town: "Barnsley" },
  { src: `${WARDROBES}/walnut-fitted-wardrobe-wrap-barnsley-06.jpg`, alt: "Walnut-effect wrapped chest of drawers, Barnsley", caption: "Chest of drawers, Barnsley", projectLine: "Matching walnut chest of drawers", categories: ["bedrooms", "furniture"], town: "Barnsley" },
  { src: `${WARDROBES}/cream-fitted-bedroom-furniture-wrap-doncaster-01.jpg`, alt: "Cream wrapped fitted over-bed wardrobes and bedside units, Doncaster", caption: "Cream fitted bedroom, Doncaster", projectLine: "Over-bed storage, wardrobes and bedsides in cream", categories: ["bedrooms"], town: "Doncaster", featured: true },
  { src: `${WARDROBES}/cream-fitted-bedroom-furniture-wrap-doncaster-02.jpg`, alt: "Cream wrapped fitted desk and drawers under a bedroom window, Doncaster", caption: "Fitted desk, Doncaster", projectLine: "Built-in desk and drawers wrapped to match", categories: ["bedrooms"], town: "Doncaster" },
  { src: `${WARDROBES}/cream-fitted-bedroom-furniture-wrap-doncaster-03.jpg`, alt: "Cream fitted bedroom furniture wrap with lit display shelf, Doncaster", caption: "Over-bed units, Doncaster", projectLine: "Fitted bedroom furniture in cream", categories: ["bedrooms"], town: "Doncaster" },
  { src: `${WARDROBES}/oak-loft-wardrobe-wrap-rotherham-01.jpg`, alt: "Oak-effect wrapped loft wardrobe and drawers under a sloping ceiling, Rotherham", caption: "Oak loft wardrobe, Rotherham", projectLine: "Eaves wardrobe and drawers in oak woodgrain", categories: ["bedrooms"], town: "Rotherham" },
  { src: `${WARDROBES}/oak-loft-wardrobe-wrap-rotherham-02.jpg`, alt: "Oak vinyl wrapped loft wardrobe door, Rotherham", caption: "Loft wardrobe door, Rotherham", projectLine: "Oak-effect wrap on a sloped-ceiling wardrobe", categories: ["bedrooms"], town: "Rotherham" },
  { src: `${WARDROBES}/white-loft-wardrobe-wrap-chesterfield-01.jpg`, alt: "White wrapped loft wardrobes and drawers under the eaves, Chesterfield", caption: "White loft wardrobes, Chesterfield", projectLine: "Bright white finish for a loft bedroom", categories: ["bedrooms"], town: "Chesterfield" },
  { src: `${WARDROBES}/white-loft-wardrobe-wrap-chesterfield-02.jpg`, alt: "White vinyl wrapped double wardrobe in a loft bedroom, Chesterfield", caption: "Double wardrobe, Chesterfield", projectLine: "White wardrobe doors with long bar handles", categories: ["bedrooms"], town: "Chesterfield" },
  { src: `${WARDROBES}/white-loft-wardrobe-wrap-chesterfield-03.jpg`, alt: "White wrapped drawer unit and wardrobe beside a bed, Chesterfield", caption: "Drawers and wardrobe, Chesterfield", projectLine: "White loft bedroom furniture wrap", categories: ["bedrooms"], town: "Chesterfield" },
  { src: `${WARDROBES}/white-fitted-wardrobe-wrap-sheffield-01.jpg`, alt: "White floor-to-ceiling fitted wardrobe in a child's bedroom, Sheffield", caption: "White fitted wardrobe, Sheffield", projectLine: "Floor-to-ceiling white wardrobe", categories: ["bedrooms"], town: "Sheffield" },

  // Dressing table
  { src: `${DRESSING}/dressing-table-wrap-doncaster-after-01.jpg`, alt: "Dressing table top wrapped in white stone-effect vinyl with sage drawers, Doncaster", caption: "Dressing table wrap, Doncaster", projectLine: "Oak top re-wrapped in a light stone finish", categories: ["bedrooms", "furniture"], town: "Doncaster", featured: true },
  { src: `${DRESSING}/dressing-table-wrap-doncaster-after-02.jpg`, alt: "Wrapped dressing table with Hollywood mirror, Doncaster", caption: "Dressing table and mirror, Doncaster", projectLine: "Stone-effect top with matching mirror base", categories: ["bedrooms", "furniture"], town: "Doncaster" },
  { src: `${DRESSING}/dressing-table-wrap-doncaster-after-03.jpg`, alt: "Close-up of stone-effect vinyl on a dressing table top, Doncaster", caption: "Stone finish detail, Doncaster", projectLine: "Close-up of the wrapped surface", categories: ["bedrooms", "furniture"], town: "Doncaster" },
  { src: `${DRESSING}/dressing-table-wrap-doncaster-before-01.jpg`, alt: "Dressing table with oak top before vinyl wrapping, Doncaster", caption: "Before — oak top, Doncaster", projectLine: "Original oak-effect dressing table", categories: ["bedrooms", "furniture"], town: "Doncaster" },
  { src: `${DRESSING}/dressing-table-wrap-doncaster-in-progress-01.jpg`, alt: "Vinyl being applied to a dressing table top, Doncaster", caption: "During — applying the wrap, Doncaster", projectLine: "New finish going on over the old oak top", categories: ["bedrooms", "furniture"], town: "Doncaster" },

  // Bath panel
  { src: `${BATH}/oak-effect-bath-panel-wrap-chesterfield-01.jpg`, alt: "Shaker bath panel wrapped in oak-effect vinyl, Chesterfield bathroom", caption: "Oak bath panel wrap, Chesterfield", projectLine: "Shaker-style panel wrapped in light oak woodgrain", categories: ["bathrooms"], town: "Chesterfield", featured: true },
  { src: `${BATH}/oak-effect-bath-panel-wrap-chesterfield-02.jpg`, alt: "Oak-effect wrapped bath panel fitted beside tiled wall, Chesterfield", caption: "Fitted bath panel, Chesterfield", projectLine: "Wrapped panel refitted in the bathroom", categories: ["bathrooms"], town: "Chesterfield" },
  { src: `${BATH}/oak-effect-bath-panel-wrap-chesterfield-03.jpg`, alt: "Shaker bath panel being wrapped in oak-effect vinyl, Chesterfield", caption: "During — panel on the bench, Chesterfield", projectLine: "Panel wrapped off the wall for a clean finish", categories: ["bathrooms"], town: "Chesterfield" },

  // Kitchens
  { src: `${KITCHENS}/grey-stone-worktop-wrap-sheffield-01.jpg`, alt: "Kitchen with grey stone-effect worktop wrap and white units, Sheffield", caption: "Grey stone worktop wrap, Sheffield", projectLine: "Worktops and breakfast bar wrapped in grey stone effect", categories: ["kitchens"], town: "Sheffield", featured: true },
  { src: `${KITCHENS}/grey-stone-worktop-wrap-sheffield-02.jpg`, alt: "Breakfast bar wrapped in grey stone-effect vinyl with rounded end, Sheffield", caption: "Breakfast bar, Sheffield", projectLine: "Rounded end wrapped in one piece", categories: ["kitchens"], town: "Sheffield" },
  { src: `${KITCHENS}/grey-stone-worktop-wrap-sheffield-03.jpg`, alt: "Grey stone-effect wrapped peninsula worktop, Sheffield kitchen", caption: "Peninsula worktop, Sheffield", projectLine: "Grey stone worktop wrap, no replacement needed", categories: ["kitchens"], town: "Sheffield" },
  { src: `${KITCHENS}/white-gloss-kitchen-wrap-doncaster-01.jpg`, alt: "White gloss wrapped tall kitchen units with built-in ovens, Doncaster", caption: "White gloss tall units, Doncaster", projectLine: "Tall oven housing and larder units in white gloss", categories: ["kitchens"], town: "Doncaster" },

  // Residential and gym window film
  { src: `${WINDOWS}/solar-control-film-garden-room-rotherham-01.jpg`, alt: "Garden room glazing fitted with solar control window film, Rotherham", caption: "Garden room solar film, Rotherham", projectLine: "Solar control film to cut heat and glare", categories: ["window-film"], town: "Rotherham", featured: true },
  { src: `${WINDOWS}/solar-control-film-garden-room-rotherham-02.jpg`, alt: "Solar window film on garden room doors and windows, Rotherham", caption: "Garden room glazing, Rotherham", projectLine: "Reflective film for daytime privacy", categories: ["window-film"], town: "Rotherham" },
  { src: `${WINDOWS}/solar-control-film-garden-room-rotherham-03.jpg`, alt: "Corner of a garden room with solar control film on the glass, Rotherham", caption: "Corner glazing, Rotherham", projectLine: "Solar film on every pane", categories: ["window-film"], town: "Rotherham" },
  { src: `${WINDOWS}/frosted-privacy-film-garden-room-rotherham-01.jpg`, alt: "Frosted privacy film on a garden room side panel, Rotherham", caption: "Frosted side panel, Rotherham", projectLine: "Frosted film on the neighbour-facing glass", categories: ["window-film"], town: "Rotherham" },
  { src: `${WINDOWS}/frosted-bathroom-window-film-barnsley-01.jpg`, alt: "Frosted privacy film on a white uPVC bathroom window, Barnsley", caption: "Frosted bathroom window, Barnsley", projectLine: "Frosted film instead of replacing the glass", categories: ["window-film"], town: "Barnsley" },
  { src: `${WINDOWS}/frosted-bathroom-window-film-barnsley-02.jpg`, alt: "Bathroom window with frosted window film, outside view, Barnsley", caption: "Outside view, Barnsley", projectLine: "Privacy without blocking daylight", categories: ["window-film"], town: "Barnsley" },
  { src: `${WINDOWS}/frosted-window-film-barnsley-01.jpg`, alt: "Frosted window film on a four-pane window, inside view, Barnsley", caption: "Frosted window, Barnsley", projectLine: "Soft, even light with full privacy", categories: ["window-film"], town: "Barnsley" },
  { src: `${WINDOWS}/frosted-window-film-barnsley-02.jpg`, alt: "Close-up of frosted window film on uPVC window panes, Barnsley", caption: "Frosted panes close-up, Barnsley", projectLine: "Frosted film cut neatly to each pane", categories: ["window-film"], town: "Barnsley" },
  { src: `${WINDOWS}/solar-window-film-stone-cottage-sheffield-01.jpg`, alt: "Solar window film on a stone cottage window, Sheffield", caption: "Stone cottage window film, Sheffield", projectLine: "Solar film on a street-facing window", categories: ["window-film"], town: "Sheffield" },
  { src: `${WINDOWS}/gym-window-film-doncaster-01.jpg`, alt: "Gym entrance with privacy window film on the glazing, Doncaster", caption: "Gym entrance window film, Doncaster", projectLine: "Privacy film for a gym frontage", categories: ["window-film", "commercial"], town: "Doncaster" },
  { src: `${WINDOWS}/gym-window-film-doncaster-02.jpg`, alt: "Mirror-effect window film on a gym shop front, Doncaster", caption: "Gym shop front film, Doncaster", projectLine: "Mirror effect for privacy during training", categories: ["window-film", "commercial"], town: "Doncaster" },
  { src: `${WINDOWS}/gym-window-film-doncaster-03.jpg`, alt: "Treadmills in front of gym windows fitted with privacy film, Doncaster", caption: "Inside the gym, Doncaster", projectLine: "Members keep their privacy, light still comes in", categories: ["window-film", "commercial"], town: "Doncaster" },
  { src: `${WINDOWS}/gym-window-film-doncaster-04.jpg`, alt: "Gym glass door with tinted window film, Doncaster", caption: "Gym door film, Doncaster", projectLine: "Tinted film on the entrance doors", categories: ["window-film", "commercial"], town: "Doncaster" },

  // Trident Gym, Liverpool — solar control film
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-01.jpg`, alt: "Solar control window film on floor-to-ceiling gym windows, Trident Gym Liverpool", caption: "Trident Gym solar film, Liverpool", projectLine: "Solar control film to keep the gym floor cool", categories: ["window-film", "commercial"], town: "Liverpool", featured: true },
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-02.jpg`, alt: "Gym training area with solar film on large windows, Trident Gym Liverpool", caption: "Training floor, Liverpool", projectLine: "Less glare and heat across the whole floor", categories: ["window-film", "commercial"], town: "Liverpool" },
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-03.jpg`, alt: "Gym equipment beside solar control filmed windows, Trident Gym Liverpool", caption: "Weights area, Liverpool", projectLine: "Clear views out with reduced solar heat", categories: ["window-film", "commercial"], town: "Liverpool" },
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-04.jpg`, alt: "Large gym window with solar control film, Trident Gym Liverpool", caption: "Window close-up, Liverpool", projectLine: "Solar film on full-height glazing", categories: ["window-film", "commercial"], town: "Liverpool" },
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-05.jpg`, alt: "Corner gym windows fitted with solar film, Trident Gym Liverpool", caption: "Corner glazing, Liverpool", projectLine: "Commercial solar control film installation", categories: ["window-film", "commercial"], town: "Liverpool" },
  { src: `${TRIDENT}/solar-control-window-film-gym-liverpool-06.jpg`, alt: "Solar control film on upper floor gym windows, Trident Gym Liverpool", caption: "Upper floor glazing, Liverpool", projectLine: "Solar film fitted across the upper floor", categories: ["window-film", "commercial"], town: "Liverpool" },
];

const earlierProjects: PortfolioPhoto[] = [
  // Navy wood-effect + white marble kitchen wrap — Doncaster
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg", alt: "Navy wood-effect kitchen wrap Doncaster — full kitchen with white marble worktop after", caption: "Navy marble kitchen wrap, Doncaster", projectLine: "Navy wood-effect wrap with white marble high-gloss worktop, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-02.jpeg", alt: "Navy wood-effect kitchen wrap Doncaster — L-shaped kitchen with marble splashback after", caption: "Full kitchen view, Doncaster", projectLine: "Completed navy and marble kitchen wrap, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-03.jpeg", alt: "Navy kitchen wrap Doncaster — sink run with brass tap and white marble worktop after", caption: "Sink run, Doncaster", projectLine: "Navy cabinets with white marble worktop and splashback, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-04.jpeg", alt: "Navy wood-effect kitchen wrap Doncaster — worktop and oven area after", caption: "Worktop and oven, Doncaster", projectLine: "White marble worktop wrap with navy wood-effect doors, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-05.jpeg", alt: "Navy kitchen wrap Doncaster — angled view of marble worktop and navy cabinets after", caption: "Angled kitchen view, Doncaster", projectLine: "Navy wood-effect and marble kitchen transformation, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-worktop-detail-01.jpeg", alt: "White marble high-gloss worktop wrap Doncaster — close-up surface detail", caption: "Marble worktop detail, Doncaster", projectLine: "High-gloss white marble-effect vinyl worktop close-up, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-splashback-detail-01.jpeg", alt: "White marble splashback and upstand wrap Doncaster — finish detail", caption: "Marble splashback detail, Doncaster", projectLine: "Marble-effect upstand and splashback wrap finish, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-before-01.jpeg", alt: "Kitchen wrap Doncaster before — grey gloss kitchen before navy marble transformation", caption: "Before — grey kitchen, Doncaster", projectLine: "Original grey gloss kitchen before navy wood-effect wrap, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-before-02.jpeg", alt: "Kitchen wrap Doncaster before — grey base cabinets and dark worktop", caption: "Before — base cabinets, Doncaster", projectLine: "Original kitchen cabinets before vinyl wrap, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-before-03.jpeg", alt: "Kitchen wrap Doncaster before — grey drawer fronts and dark marble worktop", caption: "Before — drawer detail, Doncaster", projectLine: "Original grey kitchen before transformation, Doncaster", categories: ["kitchens"], town: "Doncaster" },
  // Built-in wardrobes — Chesterfield
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-01.jpeg", alt: "Built-in wardrobe Chesterfield — white floor-to-ceiling fitted wardrobe after", caption: "Built-in wardrobe, Chesterfield", projectLine: "White fitted wardrobe, floor-to-ceiling, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-02.jpeg", alt: "Built-in dressing table Chesterfield — white top with teal base after", caption: "Dressing table, Chesterfield", projectLine: "Custom built-in dressing table with drawers, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-03.jpeg", alt: "Built-in wardrobe Chesterfield — fitted wardrobe with bedside drawers after", caption: "Wardrobe and bedside unit, Chesterfield", projectLine: "Integrated wardrobe and bedside drawers, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-04.jpeg", alt: "Built-in wardrobe Chesterfield — full bedroom storage wall after", caption: "Bedroom storage wall, Chesterfield", projectLine: "Full wall fitted wardrobe installation, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-05.jpeg", alt: "Built-in wardrobe Chesterfield — white wardrobe with bedside unit after", caption: "Wardrobe with bedside unit, Chesterfield", projectLine: "Floor-to-ceiling wardrobe with integrated bedside, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-06.jpeg", alt: "Built-in wardrobe Chesterfield — fitted wardrobe door detail after", caption: "Wardrobe door detail, Chesterfield", projectLine: "Flush-panel wardrobe doors with knob handles, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-07.jpeg", alt: "Built-in wardrobe Chesterfield — completed fitted bedroom furniture after", caption: "Fitted bedroom furniture, Chesterfield", projectLine: "Custom built-in wardrobe and storage, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-08.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe interior and finish after", caption: "Wardrobe finish, Chesterfield", projectLine: "Professional fitted wardrobe finish, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-09.jpeg", alt: "Built-in wardrobe Chesterfield — full height wardrobe installation after", caption: "Full height wardrobe, Chesterfield", projectLine: "Ceiling-to-floor built-in wardrobe, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-10.jpeg", alt: "Built-in wardrobe Chesterfield — bedroom fitted storage after", caption: "Bedroom fitted storage, Chesterfield", projectLine: "Bespoke bedroom storage solution, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-11.jpeg", alt: "Built-in wardrobe Chesterfield — custom wardrobe and drawers after", caption: "Custom wardrobe, Chesterfield", projectLine: "Bespoke fitted wardrobe with drawer units, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-12.jpeg", alt: "Built-in wardrobe Chesterfield — completed bedroom makeover after", caption: "Bedroom makeover, Chesterfield", projectLine: "Full bedroom fitted furniture project, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-01.jpeg", alt: "Built-in wardrobe Chesterfield — blue painted wardrobe before", caption: "Before — blue wardrobe, Chesterfield", projectLine: "Original blue painted wardrobe before transformation", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-02.jpeg", alt: "Built-in wardrobe Chesterfield — existing bedroom furniture before", caption: "Before — bedroom furniture, Chesterfield", projectLine: "Original bedroom storage before new installation", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-03.jpeg", alt: "Built-in wardrobe Chesterfield — old wardrobe unit before", caption: "Before — old wardrobe, Chesterfield", projectLine: "Existing wardrobe before bespoke replacement", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-01.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe installation in progress", caption: "During — installation, Chesterfield", projectLine: "Wardrobe unit being fitted on site, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-02.jpeg", alt: "Built-in wardrobe Chesterfield — drawer unit assembly in progress", caption: "During — drawer unit, Chesterfield", projectLine: "Custom drawer unit being assembled, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-03.jpeg", alt: "Built-in wardrobe Chesterfield — fitted furniture work in progress", caption: "During — fitting work, Chesterfield", projectLine: "On-site fitting and assembly, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-04.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe panels being installed", caption: "During — panel install, Chesterfield", projectLine: "Wardrobe panels and carcass installation, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-05.jpeg", alt: "Built-in wardrobe Chesterfield — bedroom furniture installation in progress", caption: "During — bedroom install, Chesterfield", projectLine: "Full bedroom furniture installation underway, Chesterfield", categories: ["bedrooms"], town: "Chesterfield" },
  // Marble worktop wrap — Pontefract
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg", alt: "Marble worktop wrap Pontefract — full kitchen with marble-effect worktop after", caption: "Marble worktop wrap, Pontefract", projectLine: "White marble-effect vinyl worktop and splashback, Pontefract", categories: ["kitchens"], town: "Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-02.jpeg", alt: "Marble worktop wrap Pontefract — hob area with marble splashback after", caption: "Hob and splashback, Pontefract", projectLine: "Marble-effect worktop wrap around hob and splashback, Pontefract", categories: ["kitchens"], town: "Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-03.jpeg", alt: "Marble worktop wrap Pontefract — worktop and herringbone tile detail after", caption: "Worktop detail, Pontefract", projectLine: "Marble vinyl worktop with herringbone tile backsplash, Pontefract", categories: ["kitchens"], town: "Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-04.jpeg", alt: "Marble worktop wrap Pontefract — sink run with marble worktop after", caption: "Sink run, Pontefract", projectLine: "Marble-effect worktop wrap at sink area, Pontefract", categories: ["kitchens"], town: "Pontefract" },
  // Black kitchen wrap — Sheffield
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-before-01.jpeg", alt: "Black kitchen wrap Sheffield — cream kitchen before transformation", caption: "Before — cream kitchen, Sheffield", projectLine: "Original cream kitchen before black vinyl wrap, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-01.jpeg", alt: "Black kitchen wrap Sheffield — full matte black kitchen after", caption: "Black kitchen wrap, Sheffield", projectLine: "Full kitchen vinyl wrap, matte black finish, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-02.jpeg", alt: "Black kitchen wrap Sheffield — black cabinets with marble worktop after", caption: "Black cabinets and worktop, Sheffield", projectLine: "Matte black wrap with marble-effect worktop, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-03.jpeg", alt: "Black kitchen wrap Sheffield — wide kitchen view after", caption: "Wide kitchen view, Sheffield", projectLine: "Completed black kitchen wrap project, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-04.jpeg", alt: "Black kitchen wrap Sheffield — cabinet and appliance detail after", caption: "Cabinet detail, Sheffield", projectLine: "Black vinyl wrap on doors, drawers and frames, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-05.jpeg", alt: "Black kitchen wrap Sheffield — lower cabinet and hob area after", caption: "Hob area, Sheffield", projectLine: "Black wrap finish around cooking zone, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-06.jpeg", alt: "Black kitchen wrap Sheffield — completed kitchen transformation after", caption: "Kitchen transformation, Sheffield", projectLine: "Full before and after kitchen wrap, Sheffield", categories: ["kitchens"], town: "Sheffield" },
  // Kitchen wrap — Titanic Spa, Huddersfield
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-01.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — commercial kitchen during installation", caption: "Kitchen wrap, Titanic Spa", projectLine: "Commercial grey kitchen wrap, Titanic Spa, Huddersfield", categories: ["kitchens", "commercial"], town: "Huddersfield" },
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-02.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — grey kitchen cabinets during fit", caption: "During — cabinet fit, Huddersfield", projectLine: "Grey kitchen wrap installation in progress, Huddersfield", categories: ["kitchens", "commercial"], town: "Huddersfield" },
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-03.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — modern grey kitchen after", caption: "Grey kitchen wrap, Huddersfield", projectLine: "Completed commercial kitchen wrap, Titanic Spa, Huddersfield", categories: ["kitchens", "commercial"], town: "Huddersfield" },
  // Grey kitchen wrap — Rotherham
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-01.png", alt: "Grey kitchen wrap in Rotherham — full kitchen view with wrapped cabinet doors", caption: "Grey kitchen wrap, Rotherham", projectLine: "Full kitchen vinyl wrap, matte grey finish, Rotherham", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-07.png", alt: "Grey kitchen wrap project Rotherham — wide view of wrapped cabinets and worktops", caption: "Wide kitchen view, Rotherham", projectLine: "Completed grey kitchen wrap", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-10.png", alt: "Grey wrapped kitchen in Rotherham — full fitted kitchen angle", caption: "Completed kitchen angle, Rotherham", projectLine: "Finished kitchen wrapping project, Rotherham", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-03.png", alt: "Grey wrapped kitchen cabinets in Rotherham — upper cabinet close-up", caption: "Upper cabinet detail, Rotherham", projectLine: "Upper units wrapped in grey vinyl", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-02.png", alt: "Grey kitchen wrap Rotherham — close-up of wrapped cabinet doors and worktop edge", caption: "Worktop and cabinet detail, Rotherham", projectLine: "Detail finish, wrapped doors and worktop edge", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-04.png", alt: "Grey kitchen cabinet wrap Rotherham — drawer and handle close-up", caption: "Drawer detail, Rotherham", projectLine: "Close-up finish quality on wrapped drawer fronts", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-05.png", alt: "Grey kitchen wrap Rotherham — wrapped cabinet doors with handle detail", caption: "Cabinet door detail, Rotherham", projectLine: "Grey vinyl wrap detail around hardware", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-06.png", alt: "Grey kitchen wrapping in Rotherham — side angle of wrapped base units", caption: "Side angle finish, Rotherham", projectLine: "Wrapped base units and drawer fronts", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-08.png", alt: "Rotherham grey kitchen wrap — long worktop and cabinet run detail", caption: "Long run detail, Rotherham", projectLine: "Worktop and cabinet line finish", categories: ["kitchens"], town: "Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-09.png", alt: "Grey kitchen vinyl wrap Rotherham — lower cabinets and drawers close-up", caption: "Lower cabinet detail, Rotherham", projectLine: "Lower cabinet and drawer wrap detail", categories: ["kitchens"], town: "Rotherham" },
  // Other kitchen work
  { src: "/images/gallery/IMG_8145.webp", alt: "Light grey matt vinyl kitchen wrap, Sheffield — after", caption: "Light grey matt finish, Sheffield", projectLine: "Matt grey vinyl, South Yorkshire, full kitchen, 2 days", categories: ["kitchens"], town: "Sheffield" },
  { src: "/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg", alt: "Kitchen cabinet vinyl wrap South Yorkshire — after", caption: "Cabinet wrap, South Yorkshire", projectLine: "Cabinet doors and frames, 1–2 days", categories: ["kitchens"] },
  { src: "/images/gallery/wrapped-kitchen-doors-worktop-south-yorkshire.jpg", alt: "Wrapped kitchen doors and worktop, South Yorkshire — after", caption: "Doors and worktop, full wrap", projectLine: "Doors + worktop wrap, marble-effect worktop, 2 days", categories: ["kitchens"] },
  { src: "/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg", alt: "Vinyl kitchen door wrapping South Yorkshire — after", caption: "Door wrap project", projectLine: "Door wrap, branded film, South Yorkshire", categories: ["kitchens"] },
  { src: "/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg", alt: "Kitchen wrap before and after South Yorkshire", caption: "Before and after", projectLine: "Full kitchen transformation, South Yorkshire", categories: ["kitchens"] },
  { src: "/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg", alt: "Wrapped kitchen South Yorkshire — after", caption: "Full kitchen wrap", projectLine: "Full kitchen wrap, multiple doors, 2–3 days", categories: ["kitchens"] },
  { src: "/images/gallery/IMG-20230204-WA0011.webp", alt: "Kitchen vinyl wrap project South Yorkshire — after", caption: "Vinyl wrap, South Yorkshire", projectLine: "Vinyl wrap project, South Yorkshire", categories: ["kitchens"] },
  { src: "/images/gallery/Kitchen_Wrapping_Vinyl_Inspiration_700x.progressive.webp", alt: "Kitchen wrapping vinyl inspiration — finishes and colours South Yorkshire", caption: "Vinyl wrap inspiration", projectLine: "Finishes and colour options", categories: ["kitchens"] },
  // White wood-effect worktop wrap — Chesterfield
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-01.png", alt: "White wood-effect worktop wrap in Chesterfield — full counter run view", caption: "Worktop wrap, Chesterfield", projectLine: "White wood-effect vinyl worktop wrap, Chesterfield", categories: ["kitchens"], town: "Chesterfield" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-02.png", alt: "White wood-effect wrapped kitchen worktop Chesterfield — close-up texture detail", caption: "Texture detail, Chesterfield", projectLine: "Close-up of white wood-effect vinyl finish", categories: ["kitchens"], town: "Chesterfield" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-03.png", alt: "Worktop wrapping Chesterfield — white wood-effect worktop edge and surface detail", caption: "Surface detail, Chesterfield", projectLine: "Worktop edge and surface finish", categories: ["kitchens"], town: "Chesterfield" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-04.png", alt: "Chesterfield worktop wrap project — white wood-effect vinyl close-up", caption: "Close-up finish, Chesterfield", projectLine: "White wood-effect wrap close-up", categories: ["kitchens"], town: "Chesterfield" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-05.png", alt: "Kitchen worktop wrap in Chesterfield — completed white wood-effect installation", caption: "Completed worktop view, Chesterfield", projectLine: "Finished white wood-effect worktop wrap", categories: ["kitchens"], town: "Chesterfield" },
  // Butcher block-style worktop wrap — Barnsley
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-01.png", alt: "Butcher block style kitchen worktop wrap in Barnsley — completed corner view", caption: "Butcher block worktop wrap, Barnsley", projectLine: "Wood-effect butcher block style vinyl worktop wrap", categories: ["kitchens"], town: "Barnsley" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-02.png", alt: "Barnsley kitchen wrap project — butcher block style worktop and sage cabinet view", caption: "Wide kitchen view, Barnsley", projectLine: "Worktop and cabinet wrap finish in Barnsley", categories: ["kitchens"], town: "Barnsley" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-03.png", alt: "Kitchen worktop wrapping Barnsley — butcher block style around hob and splashback", caption: "Hob area detail, Barnsley", projectLine: "Butcher block style worktop detail around cooking zone", categories: ["kitchens"], town: "Barnsley" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-04.png", alt: "Barnsley butcher block style worktop wrap — sink area and long run finish", caption: "Sink and long run detail, Barnsley", projectLine: "Wood-effect worktop wrap detail at sink run", categories: ["kitchens"], town: "Barnsley" },
  // Mirror window film — Rotherham
  { src: "/images/gallery/mirror-window-film-rotherham-1.png", alt: "Mirror window film Rotherham — reflective gym window interior", caption: "Mirror window film, Rotherham", projectLine: "One-way mirror film, commercial gym, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-2.png", alt: "Mirror window film Rotherham — reflective storefront with street reflection", caption: "Mirror film storefront, Rotherham", projectLine: "Reflective window film, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-3.png", alt: "Mirror window film Rotherham — commercial window reflection", caption: "Mirror window film installation, Rotherham", projectLine: "One-way mirror film, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-4.png", alt: "Mirror window film Rotherham — gym interior reflective glass", caption: "Mirror film gym, Rotherham", projectLine: "Privacy mirror film, commercial, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-5.png", alt: "Mirror window film Rotherham — reflective gym window street view", caption: "Mirror film, Rotherham", projectLine: "One-way mirror film installation, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-6.png", alt: "Mirror window film Rotherham — reflective commercial window exterior", caption: "Mirror window film, Rotherham", projectLine: "Reflective privacy film, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-7.png", alt: "Mirror window film Rotherham — gym window with hexagonal lights reflection", caption: "Mirror film commercial, Rotherham", projectLine: "Mirror window film, Rotherham", categories: ["window-film", "commercial"], town: "Rotherham" },
  // Glass and partition film
  { src: "/images/gallery/IMG_7106.png", alt: "Glass partition vinyl film South Yorkshire", caption: "Glass partition film", projectLine: "Frosted decorative film", categories: ["window-film", "commercial"] },
  { src: "/images/gallery/IMG_7107.png", alt: "Decorative glass film South Yorkshire", caption: "Glass film project", projectLine: "Privacy / decorative film", categories: ["window-film", "commercial"] },
  { src: "/images/gallery/IMG_7108.png", alt: "Window film installation South Yorkshire", caption: "Window film", projectLine: "Professional application", categories: ["window-film"] },
  { src: "/images/gallery/IMG_7109.png", alt: "Vinyl glass film South Yorkshire", caption: "Glass film", projectLine: "Decorative wrap", categories: ["window-film"] },
  { src: "/images/gallery/IMG_7177.png", alt: "Hexagonal privacy film on glass South Yorkshire", caption: "Hexagonal privacy film", projectLine: "Window film installation", categories: ["window-film"] },
  { src: "/images/gallery/IMG_7178.png", alt: "Decorative window film South Yorkshire", caption: "Window film project", projectLine: "Privacy film", categories: ["window-film"] },
  { src: "/images/gallery/IMG_8416.png", alt: "Decorative vinyl film South Yorkshire", caption: "Decorative film", projectLine: "Vinyl application", categories: ["window-film"] },
  { src: "/images/gallery/IMG_8418.png", alt: "Glass partition film South Yorkshire", caption: "Partition film", projectLine: "Frosted / decorative", categories: ["window-film", "commercial"] },
  { src: "/images/gallery/IMG_8615.png", alt: "Office glass film South Yorkshire", caption: "Office glass film", projectLine: "Frosted / decorative partition", categories: ["window-film", "commercial"] },
  { src: "/images/gallery/IMG_8771.png", alt: "Decorative vinyl film South Yorkshire", caption: "Decorative film", projectLine: "Professional wrap", categories: ["window-film"] },
  // Primark Manchester — totem pole directional signage wrap
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-1.png", alt: "Primark Manchester totem pole wrap — directional signage vinyl", caption: "Totem pole wrap, Primark Manchester", projectLine: "Directional totem pole signage, Primark Manchester", categories: ["commercial"], town: "Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-2.png", alt: "Primark Manchester store totem pole directional wrap — retail wayfinding", caption: "Totem pole signage, Primark Manchester", projectLine: "Vinyl wrap totem poles, customer directions, Manchester", categories: ["commercial"], town: "Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-3.png", alt: "Primark Manchester totem pole vinyl wrap — floor directions", caption: "Totem pole wrap, Primark Manchester", projectLine: "Commercial totem pole wrap, Manchester", categories: ["commercial"], town: "Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-4.png", alt: "Primark Manchester directional totem pole — wrapped signage", caption: "Directional totem pole, Primark Manchester", projectLine: "Retail wayfinding wrap, Primark Manchester", categories: ["commercial"], town: "Manchester" },
  // Commercial vinyl and sign work
  { src: "/images/gallery/IMG_6109.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl wrap project", projectLine: "Professional vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6110.png", alt: "Vinyl and sign wrapping South Yorkshire", caption: "Sign wrap project", projectLine: "Commercial vinyl work", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6111.png", alt: "Vinyl wrap finish South Yorkshire", caption: "Vinyl wrap", projectLine: "Quality finish", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6112.png", alt: "Vinyl wrap project — South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6127.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6128.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Vinyl signage", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6129.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6137.png", alt: "Vinyl and sign work South Yorkshire", caption: "Sign work", projectLine: "Professional wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_6138.png", alt: "Vinyl wrap South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_7186.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Sign / vinyl work", categories: ["commercial"] },
  { src: "/images/gallery/IMG_7187.png", alt: "Vinyl wrap installation South Yorkshire", caption: "Vinyl installation", projectLine: "Professional wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_7195.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Commercial vinyl", categories: ["commercial"] },
  { src: "/images/gallery/IMG_7196.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_7197.png", alt: "Commercial vinyl and sign work South Yorkshire", caption: "Commercial project", projectLine: "Vinyl wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8265.png", alt: "Promotional vinyl wrap South Yorkshire", caption: "Promotional wrap", projectLine: "Large-format vinyl", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8266.png", alt: "Vinyl signage South Yorkshire", caption: "Signage project", projectLine: "Sign wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8267.png", alt: "Vinyl wrap and sign work South Yorkshire", caption: "Sign wrap", projectLine: "Commercial installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8397.png", alt: "Retail vinyl display South Yorkshire", caption: "Retail display", projectLine: "Vinyl wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8399.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Professional vinyl", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8401.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8403.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Professional installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8406.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8419.png", alt: "Vinyl wrap South Yorkshire", caption: "Wrap project", projectLine: "Professional vinyl", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8422.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Sign and vinyl work", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8600.png", alt: "Vinyl signage installation South Yorkshire", caption: "Signage installation", projectLine: "Vinyl wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8603.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Professional application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8610.png", alt: "Large-format vinyl wrap South Yorkshire", caption: "Large-format wrap", projectLine: "Commercial vinyl", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8705.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Professional wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8717.png", alt: "Promotional vinyl South Yorkshire", caption: "Promotional vinyl", projectLine: "Sign wrap", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8718.png", alt: "Vinyl wrap installation South Yorkshire", caption: "Installation", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8719.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8720.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Vinyl signage", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8767.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8776.png", alt: "Vinyl wrap South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation", categories: ["commercial"] },
  { src: "/images/gallery/IMG_8778.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional vinyl", categories: ["commercial"] },
];

/** Every portfolio photo, newest projects first */
export const portfolioPhotos: PortfolioPhoto[] = [...recentProjects, ...earlierProjects];

export const featuredPhotos = portfolioPhotos.filter((p) => p.featured);

/**
 * Look up photos by file name (without folder or extension), in the order given.
 * Throws at build time if a name is mistyped, so broken images never ship.
 */
export function photosByName(...names: string[]): PortfolioPhoto[] {
  return names.map((name) => {
    const photo = portfolioPhotos.find((p) => p.src.split("/").pop()?.replace(/\.[^.]+$/, "") === name);
    if (!photo) throw new Error(`Portfolio photo not found: ${name}`);
    return photo;
  });
}
