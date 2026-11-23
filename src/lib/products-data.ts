import mouldedA from "@/assets/products/moulded-1.jpg";
import mouldedB from "@/assets/products/moulded-2.jpg";
import rtmA from "@/assets/products/rtm-1.jpg";
import suspensionA from "@/assets/products/suspension-1.jpg";
import suspensionB from "@/assets/products/suspension-2.jpg";
import cablesA from "@/assets/products/cables-1.jpg";
import cablesB from "@/assets/products/cables-2.jpg";
import sealsA from "@/assets/products/seals-1.jpg";
import sealsB from "@/assets/products/seals-2.jpg";
import sealsC from "@/assets/products/seals-3.jpg";
import sealsD from "@/assets/products/seals-4.jpg";
import sealsE from "@/assets/products/seals-5.jpg";
import oringsA from "@/assets/products/orings-1.jpg";
import oringsB from "@/assets/products/orings-2.jpg";
import bellowsA from "@/assets/products/bellows-1.jpg";
import bellowsB from "@/assets/products/bellows-2.jpg";
import ceramicA from "@/assets/products/ceramic-1.jpg";
import ceramicB from "@/assets/products/ceramic-2.jpg";
import bowlsA from "@/assets/products/bowls-1.jpg";
import bowlsB from "@/assets/products/bowls-2.jpg";
import bowlsC from "@/assets/products/bowls-3.jpg";
import rangeComposite from "@/assets/products/range-composite.jpg";

export { rangeComposite };

export type ProductGroupId = "automobile" | "aerospace" | "industrial";

export const GROUPS: { id: ProductGroupId; label: string; index: string }[] = [
  { id: "automobile", label: "Automobile Application", index: "01" },
  { id: "aerospace", label: "Aerospace application", index: "02" },
  { id: "industrial", label: "Industrial & Food application", index: "03" },
];

export type Product = {
  slug: string;
  /** Exact category name as published on arulpolymers.com. */
  name: string;
  group: ProductGroupId;
  summary: string;
  applications: string[];
  materials: string[];
  images: { src: string; alt: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "general-moulded-rubber-components",
    name: "General moulded rubber components",
    group: "automobile",
    summary:
      "Compression and transfer moulded rubber components produced for pneumatic brake applications, suspension systems, heat exchangers and dust cover applications.",
    applications: [
      "Pneumatic brake applications",
      "Suspension systems",
      "Heat exchanger applications",
      "Dust cover applications",
    ],
    materials: ["Natural Rubber", "EPDM", "Vamac", "HNBR", "NBR + PVC"],
    images: [
      { src: mouldedA, alt: "General moulded rubber components manufactured by Arul Polymers" },
      { src: mouldedB, alt: "Range of moulded rubber parts for automotive applications" },
    ],
  },
  {
    slug: "rubber-to-metal-components",
    name: "Rubber to metal components",
    group: "automobile",
    summary:
      "Bonded rubber to metal assemblies where the elastomer is vulcanised directly onto prepared metal inserts for load carrying and sealing duties.",
    applications: [
      "Pneumatic brake applications",
      "Suspension systems",
      "Bonded mounting and sealing assemblies",
    ],
    materials: ["Natural Rubber", "EPDM", "HNBR", "NBR + PVC"],
    images: [{ src: rtmA, alt: "Rubber to metal bonded components manufactured by Arul Polymers" }],
  },
  {
    slug: "suspension-and-seals",
    name: "Suspension & Seals",
    group: "automobile",
    summary:
      "Suspension components and sealing elements engineered for dynamic loads, vibration and long service life in vehicle systems.",
    applications: ["Suspension systems", "Pneumatic brake applications", "Dust cover applications"],
    materials: ["Natural Rubber", "EPDM", "Vamac", "HNBR"],
    images: [
      { src: suspensionA, alt: "Suspension rubber components and seals by Arul Polymers" },
      { src: suspensionB, alt: "Moulded suspension seals for automotive systems" },
    ],
  },
  {
    slug: "control-cables-and-boots",
    name: "Control Cables & Boots",
    group: "automobile",
    summary:
      "Highly precise gaskets, seals, grommets and phase seal adaptors with di-electric strength of > 1000GΩ, used in control cable applications.",
    applications: ["Control cable applications", "Protective boots and dust covers"],
    materials: ["EPDM", "Silicone", "Carboxyl Nitrile Rubber"],
    images: [
      { src: cablesA, alt: "Control cable boots and grommets by Arul Polymers" },
      { src: cablesB, alt: "Precision moulded boots for control cable applications" },
    ],
  },
  {
    slug: "seals-and-gasket",
    name: "Seals & Gasket",
    group: "aerospace",
    summary:
      "Highly precise gaskets, seals, grommets and phase seal adaptors manufactured for aircraft, helicopter and naval applications.",
    applications: ["Aircraft", "Helicopters", "Naval applications", "Filter gasket for mining sector"],
    materials: ["Silicone", "Viton", "Nitrile", "Neoprene", "Fluro Silicone"],
    images: [
      { src: sealsA, alt: "Aerospace seals and gaskets manufactured by Arul Polymers" },
      { src: sealsB, alt: "Precision aerospace gasket components" },
      { src: sealsC, alt: "Moulded seals for aircraft applications" },
      { src: sealsD, alt: "Aerospace grade gasket range" },
      { src: sealsE, alt: "Phase seal adaptors and precision gaskets" },
    ],
  },
  {
    slug: "o-rings-and-bellows",
    name: "O-Rings & Bellows",
    group: "aerospace",
    summary:
      "Highly precise O-Rings, rubber sleeves, gaskets and grommets manufactured from Silicone, Viton, Nitrile, Neoprene and Fluro Silicone rubber.",
    applications: ["Aircraft", "Helicopters", "Naval applications"],
    materials: ["Silicone", "Viton", "Nitrile", "Neoprene", "Fluro Silicone"],
    images: [
      { src: oringsA, alt: "Precision O-Rings manufactured by Arul Polymers" },
      { src: oringsB, alt: "O-Ring range in multiple elastomer compounds" },
      { src: bellowsA, alt: "Rubber bellows and sleeves by Arul Polymers" },
      { src: bellowsB, alt: "Moulded bellows for aerospace applications" },
    ],
  },
  {
    slug: "wear-resistance-ceramic-pad-and-gasket",
    name: "Wear resistance ceramic pad & gasket",
    group: "industrial",
    summary:
      "Wear resistant ceramic pads, gaskets and hoses for material handling, pipe fitting and mining duties where abrasion resistance is critical.",
    applications: [
      "Material handling",
      "Pipe fitting gaskets",
      "Hoses for wear resistance",
      "Filter gasket for mining sector",
    ],
    materials: ["Natural Rubber", "Nitrile", "Neoprene"],
    images: [
      { src: ceramicA, alt: "Wear resistance ceramic pad manufactured by Arul Polymers" },
      { src: ceramicB, alt: "Ceramic backed rubber gasket for abrasive service" },
    ],
  },
  {
    slug: "serving-bowls-and-industrial-seals",
    name: "Serving bowls & Industrial Seals",
    group: "industrial",
    summary:
      "Highly intricate and customized parts for industrial and food applications, including serving bowls and industrial sealing elements.",
    applications: ["Food application serving bowls", "Industrial seals", "Material handling"],
    materials: ["Natural Rubber", "Nitrile", "Neoprene"],
    images: [
      { src: bowlsA, alt: "Serving bowls moulded by Arul Polymers for food applications" },
      { src: bowlsB, alt: "Industrial seals and customized moulded parts" },
      { src: bowlsC, alt: "Food application moulded rubber products" },
    ],
  },
];

/** Materials named on the original products page. */
export const MATERIALS = [
  "Natural Rubber",
  "EPDM",
  "Vamac",
  "HNBR",
  "NBR + PVC",
  "Silicone",
  "Viton",
  "Nitrile",
  "Neoprene",
  "Fluro Silicone",
  "Carboxyl Nitrile",
];

/** Exact "A wide range of Applications" copy from the original site. */
export const APPLICATION_COPY = [
  "Highly precise Gaskets, Seals, Grommet and Phase seal adaptors are having Di-Electric strength of > 1000GΩ, These parts are used in control cable applications, Parts are made out of EPDM, Silicone and Carboxyl Nitrile rubber. Highly precise O-Rings, Rubber sleeve, gasket and grommet are manufactured from Silicone, Viton, Nitrile, Neoprene and Fluro Silcone rubber.",
  "These parts are used in Aircraft, Helicopters and Navel applications. Highly intricate and Customized parts are used in Industrial and food applications such as Material handling, serving bowel, Pipe fitting gaskets, Ceramic pad and Hoses for wear resistant, Filter gasket for mining sector. these parts are made out of Natural, Nitrile and Neoprene rubber.",
];
