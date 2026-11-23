import { latestProductImages } from "@/lib/latest-product-images";

const productImages = (product: string) => latestProductImages("mining", product);

export type MiningCategoryId = "wear-resistance" | "filtration" | "material-handling";

export type MiningProduct = {
  id: string;
  number: string;
  name: string;
  category: MiningCategoryId;
  description?: string;
  details?: string[];
  images: string[];
  sourceNote?: string;
};

export type MiningCategory = {
  id: MiningCategoryId;
  number: string;
  title: string;
  shortTitle: string;
  products: MiningProduct[];
};

const materialHandling: MiningProduct[] = [
  {
    id: "ceramic-embedded-pulley",
    number: "01",
    name: "Ceramic Embedded Pulley",
    category: "material-handling",
    description: "Designed for high-performance mechanical systems requiring superior wear resistance, reduced friction, and long service life. The unique properties of ceramics enhance durability under high-load and high-speed applications.",
    images: productImages("ceramic-embadded-pulley"),
  },
  {
    id: "arul-bond-adhesive",
    number: "02",
    name: "Arul Bond Adhesive",
    category: "material-handling",
    description: "Under our ARUL BOND range, we offer specialised abrasion-resistant solutions for applications exposed to severe wear, developed to protect equipment and components against abrasive materials, impact and continuous material flow.",
    details: [
      "HV520 Hot Bond Solution: HV520 Hot Bond Solution Adhesive is designed for hot-bonding applications in rubber lining and industrial rubber bonding processes. It supports strong adhesion between rubber and suitable prepared substrates, helping achieve reliable bonding and durable performance in demanding industrial environments.",
      "HR-200 Two Part Contact Adhesive: This two-part contact adhesive is designed for reliable bonding of rubber and other compatible materials in industrial applications. It provides strong adhesion, dependable bond strength, and enhanced bonding performance when used with the appropriate surface preparation and application process.",
    ],
    images: [
      ...productImages("arul-bond-adhasive"),
      ...productImages("hv-520-hot-bonding-solution"),
      ...productImages("hr-200-two-part-contact-adhesive"),
    ],
  },
  {
    id: "conveyor-impact-bar",
    number: "03",
    name: "Conveyor Impact Bar",
    category: "material-handling",
    description: "Rubber-based impact solutions designed to absorb material impact at conveyor loading and transfer points, helping protect conveyor systems and improve operational reliability.",
    images: productImages("conveyor-impact-bar"),
  },
];

const wearResistance: MiningProduct[] = [
  {
    id: "ball-mill-liner",
    number: "01",
    name: "Ball Mill Liner",
    category: "wear-resistance",
    description: "Engineered rubber liners for ball mills and grinding applications, designed to provide effective wear resistance, impact absorption and extended service life under demanding mineral-processing conditions.",
    images: productImages("ball-mill-liner"),
  },
  {
    id: "ceramic-wear-pad",
    number: "02",
    name: "Ceramic Wear Pad",
    category: "wear-resistance",
    description: "High-wear-resistant rubber sheets incorporating ceramic elements for applications requiring superior protection against abrasion and sliding wear. Suitable for chutes, transfer points, hoppers and other high-wear areas.",
    images: productImages("ceramic-wear-pad"),
  },
  {
    id: "chute-liners",
    number: "03",
    name: "Chute Liners",
    category: "wear-resistance",
    description: "Engineered chute assemblies and rubber wear-protection solutions for mineral and bulk-material handling applications, helping minimise material impact, abrasion and equipment wear in critical transfer areas.",
    images: [
      ...productImages("chut-liners"),
      ...productImages("rubber-wear-liner"),
      ...productImages("rubber-wear-liner-metal-backing"),
    ],
  },
  {
    id: "slurry-hoses",
    number: "04",
    name: "Slurry Hoses",
    category: "wear-resistance",
    description: "Designed to transport abrasive and high-density mixtures such as slurries, sand, gravel, or mineral ores. Engineered for durability and flexibility, these hoses provide reliable performance in demanding environments such as mining, dredging, tunneling, and processing plants.",
    images: productImages("slurry-hoses"),
  },
  {
    id: "pu-screens",
    number: "05",
    name: "PU Screens",
    category: "wear-resistance",
    description: "Polyurethane screens are engineered using high-grade elastomeric compounds, offering superior abrasion resistance, reduced maintenance needs, and extended service life compared to traditional steel or rubber screens.",
    images: productImages("pu-screens"),
  },
  {
    id: "slurry-pipelines-and-tank",
    number: "06",
    name: "Slurry Pipelines and Tank",
    category: "wear-resistance",
    description: "Our high-performance rubber linings provide excellent abrasion resistance, impact protection, and corrosion resistance, helping to extend equipment service life and reduce maintenance downtime.",
    images: productImages("slurry-pipelines-and-tank"),
  },
];

const filtration: MiningProduct[] = [
  {
    id: "filling-shoe-inlet-feed-collars",
    number: "01",
    name: "Filling Shoe & Inlet Feed Collars",
    category: "filtration",
    description: "Plays a crucial role in sealing the filter plates to prevent slurry leakage and ensure proper pressure build-up during filtration cycles. These gaskets are engineered to withstand abrasive materials and high pressures. They provide a tight seal and aid in uniform slurry distribution.",
    images: productImages("filling-shoe-and-inlet-feed-coller"),
  },
  {
    id: "pinch-valve-sleeves",
    number: "02",
    name: "Pinch Valve Sleeves",
    category: "filtration",
    description: "Specifically designed for handling slurries, abrasive or corrosive materials, as well as applications requiring complete isolation of the flow media from mechanical components.",
    images: productImages("pinch-vale-sleeve"),
  },
];

export const MINING_CATEGORIES: MiningCategory[] = [
  { id: "wear-resistance", number: "01", title: "Wear Resistance Products", shortTitle: "Wear Resistance", products: wearResistance },
  { id: "filtration", number: "02", title: "Filtration Parts", shortTitle: "Filtration Parts", products: filtration },
  { id: "material-handling", number: "03", title: "Material Handling", shortTitle: "Material Handling", products: materialHandling },
];

export const MINING_PRODUCTS = MINING_CATEGORIES.flatMap((category) => category.products);
