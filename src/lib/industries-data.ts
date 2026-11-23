import automobile from "@/assets/ind-automobiles-new.png.asset.json";
import mining from "@/assets/ind-mining-new.png.asset.json";
import potableWater from "@/assets/ind-potable-water-new.png.asset.json";
import aerospace from "@/assets/ind-aerospace-new.png.asset.json";
import oilGas from "@/assets/ind-oil-gas.jpg";
import agriculture from "@/assets/ind-agriculture.jpg";

export type IndustryAnchor =
  | "automobile"
  | "mining"
  | "potable-water"
  | "aerospace-defence"
  | "oil-gas"
  | "agriculture";

export type Detail = { label: string; detail: string };

export const INDUSTRY_LINKS: { id: IndustryAnchor; label: string }[] = [
  { id: "automobile", label: "Automobile" },
  { id: "mining", label: "Mining" },
  { id: "potable-water", label: "Potable Water" },
  { id: "aerospace-defence", label: "Aerospace & Defence" },
  { id: "oil-gas", label: "Oil & Gas" },
  { id: "agriculture", label: "Agriculture" },
];

export const INDUSTRY_IMAGES = {
  automobile: automobile.url,
  mining: mining.url,
  potableWater: potableWater.url,
  aerospace: aerospace.url,
  oilGas,
  agriculture,
};

export const AUTOMOBILE = {
  tagline: "Engineered Rubber & Plastic Solutions for Mobility",
  overview:
    "Arul Polymers Pvt. Ltd. is a manufacturer of moulded rubber and plastic components and assemblies for the automotive industry, supporting OEMs, Tier-1 suppliers and emerging EV manufacturers with application-focused, quality-driven solutions.",
  focus:
    "Our components are developed for demanding automotive applications where durability, sealing, vibration control, flexibility, dimensional accuracy and consistent performance are critical.",
  serve: [
    "OEMs",
    "Tier-1 Suppliers",
    "Two-Wheeler & Three-Wheeler",
    "Electric Vehicles",
  ],
  segments: [
    { label: "Two-Wheeler & Three-Wheeler", items: ["TVS Motor Company", "TVSM T1 companies"] },
    { label: "Tier-1 & Industrial Automotive Suppliers", items: ["Wipro Infrastructure Engineering", "Parker Hannifin"] },
    { label: "Electric Vehicle (EV) Sector", items: ["River", "Simple Energy", "Ather Energy"] },
  ],
  customers: ["TVSM", "TVSM T1", "Wipro", "Parker", "River", "Simple Energy", "Ather"],
  applications: [
    { label: "Engine & Powertrain", products: ["Engine gaskets", "Seals", "O-rings", "Rubber-to-metal bonded components", "Vibration-control components"] },
    { label: "Transmission & Driveline", products: ["Bushes", "Seals", "Boots", "Bellows", "Rubber-to-metal bonded parts"] },
    { label: "Suspension & Chassis", products: ["Suspension bushes", "Silent blocks", "Mounting components", "Rubber-metal bonded components"] },
    { label: "Fuel, Air & Fluid Management", products: ["Hoses", "Bellows", "Boots", "Sealing components", "Custom-moulded rubber parts"] },
    { label: "Electrical & EV Applications", products: ["Protective rubber components", "Sealing components", "Insulating/protective components", "Custom-moulded plastic components", "Rubber and plastic assemblies"] },
    { label: "Body & General Applications", products: ["Grommets", "Seals", "Covers", "Bushes", "Dampers", "Custom moulded components"] },
  ],
  capabilityHeadline: "One Supplier. Multiple Material & Component Solutions.",
  capabilityCopy:
    "Arul Polymers combines expertise in moulded rubber components, rubber-to-metal bonded components and plastic injection moulded components, enabling customers to source multiple components and assemblies from a single manufacturing partner.",
  capabilities: [
    "Rubber compression moulding",
    "Rubber transfer moulding",
    "Rubber-to-metal bonding",
    "O-rings and sealing components",
    "Plastic injection moulding",
    "Rubber & plastic assemblies",
    "Custom-designed components",
    "Application-specific component development",
  ],
  strengths: [
    { label: "OEM & Tier-1 Experience", detail: "Experience in supplying components for established automotive and EV companies." },
    { label: "Application Engineering", detail: "Components developed around the customer's functional and performance requirements." },
    { label: "Rubber + Plastic Capability", detail: "A single source for moulded rubber and plastic components and assemblies." },
    { label: "Quality & Consistency", detail: "Manufacturing systems aligned with automotive quality requirements." },
    { label: "New Product Development", detail: "Support from component development through tooling, trials and production." },
    { label: "EV-Ready Manufacturing", detail: "Capability to support the evolving requirements of electric two-wheelers and three-wheelers." },
  ] satisfies Detail[],
  quality: ["IATF 16949", "ISO 9001:2015", "WRAS-UK where applicable"],
  closing: "From Component to Assembly — Engineered for Performance.",
};

export const MINING = {
  subheading:
    "Wear-resistant, impact-resistant and application-specific rubber solutions for demanding mining and mineral-processing environments.",
  overview:
    "Arul Polymers manufactures high-performance moulded rubber components and wear-resistant solutions for the demanding requirements of the mining, mineral processing and bulk material handling industries.",
  focus:
    "Our rubber products are engineered to withstand abrasion, impact, heavy loads, vibration and harsh operating conditions, helping customers improve equipment reliability, reduce maintenance requirements and extend service life.",
  experience:
    "With experience serving leading companies in the mining and mineral processing sectors, Arul Polymers provides application-focused solutions for critical equipment and material-handling systems.",
  categories: [
    {
      label: "Wear Resistant Solutions",
      items: [
        { label: "Ball Mill Rubber Liners", detail: "Engineered rubber liners for ball mills and grinding applications, designed to provide effective wear resistance, impact absorption and extended service life under demanding mineral-processing conditions." },
        { label: "Ceramic-Embedded Rubber Sheets", detail: "High-wear-resistant rubber sheets incorporating ceramic elements for applications requiring superior protection against abrasion and sliding wear. Suitable for chutes, transfer points, hoppers and other high-wear areas." },
        { label: "Abrasion-Resistant Solutions — ARUL BOND", detail: "Under our ARUL BOND range, we offer specialised abrasion-resistant solutions for applications exposed to severe wear, developed to protect equipment and components against abrasive materials, impact and continuous material flow." },
      ],
    },
    {
      label: "Material Handling Solutions",
      items: [
        { label: "Conveyor Impact Bars", detail: "Rubber-based impact solutions designed to absorb material impact at conveyor loading and transfer points, helping protect conveyor systems and improve operational reliability." },
        { label: "Pulley & Roller Rubber Components", detail: "Durable rubber solutions for conveyor pulleys, rollers and material-handling equipment, designed to provide reliable performance under continuous operating conditions." },
        { label: "Chute Assemblies & Wear Protection", detail: "Engineered chute assemblies and rubber wear-protection solutions for mineral and bulk-material handling applications, helping minimise material impact, abrasion and equipment wear in critical transfer areas." },
      ],
    },
  ],
  applications: [
    "Mineral processing plants",
    "Ore handling systems",
    "Crushing and screening plants",
    "Grinding and milling systems",
    "Conveyors and bulk material handling",
    "Chutes and transfer points",
    "Hoppers and bins",
    "High-abrasion material flow areas",
    "Wear protection systems",
  ],
  industriesServed: ["Mining & Minerals", "Steel", "Ore Processing", "Bulk Material Handling"],
  globalReach: ["India", "UAE", "Africa"],
  customers: ["JSW", "Jindal Saw", "BMM", "TH", "MSPL", "TATA Steel"],
  reachNote:
    "We also support customers in international markets, with our products being exported to the UAE and African markets.",
  purpose:
    "At Arul Polymers, our focus is on developing application-specific rubber and wear-resistant solutions that help customers improve equipment life, reduce downtime and achieve dependable performance in challenging mining and mineral-processing environments.",
  closing: "Built for Wear. Engineered for Performance.",
};

export const POTABLE_WATER = {
  overview:
    "Arul Polymers manufactures high-performance moulded rubber components and sealing solutions for potable water and water infrastructure applications.",
  focus:
    "With WRAS-certified rubber compounds for drinking-water applications up to 60°C, we provide reliable and durable sealing products designed to meet the demanding requirements of water supply, pipeline and water treatment systems.",
  detailNote:
    "Our components are developed with a focus on sealing integrity, dimensional accuracy, long service life and resistance to water and environmental conditions.",
  products: [
    { label: "Wedge Seals", detail: "For valves and water control systems." },
    { label: "Tyton Gaskets", detail: "For ductile iron and pipeline applications." },
    { label: "Rubber Seals & Gaskets", detail: "Moulded sealing components for water systems." },
    { label: "Custom-Moulded Rubber Components", detail: "Developed for specific water-application requirements." },
    { label: "Rubber Components for Valves & Pipeline Systems", detail: "Sealing components for valve and pipeline assemblies." },
    { label: "Specialised Sealing Components", detail: "For water infrastructure." },
    { label: "Custom-Engineered Rubber Components", detail: "Developed to customer drawings and specifications." },
  ] satisfies Detail[],
  applications: [
    "Drinking Water Supply Systems",
    "Ductile Iron Pipeline Systems",
    "Valves and Valve Assemblies",
    "Water Distribution Networks",
    "Water Treatment Plants",
    "Desalination Plants",
    "Water Infrastructure Projects",
    "Pipeline Joint Sealing Systems",
  ],
  wrasCopy:
    "Our WRAS-certified rubber compounds are suitable for potable/drinking-water applications up to 60°C, supporting the requirements of water infrastructure and drinking-water systems.",
  wrasNote:
    "Combined with our quality systems and moulding expertise, Arul Polymers delivers consistent and dependable sealing solutions for critical water applications.",
  experienceCopy:
    "We supply rubber components for potable water and water infrastructure applications to customers and projects in India and international markets, including the UAE. Our customer base includes companies such as McWane and Jindal Saw, with components also supplied for applications associated with desalination plants in the UAE.",
  experience: ["McWane", "Jindal Saw", "UAE desalination-related applications"],
  strengths: [
    "WRAS-certified rubber compounds for potable-water applications",
    "Expertise in precision moulded rubber components",
    "Custom-designed sealing solutions",
    "Consistent dimensional and material quality",
    "Capability to develop components as per customer drawings/specifications",
    "Experience in demanding water infrastructure applications",
    "Supply capability for domestic and international markets",
  ],
  closing:
    "From pipeline sealing to advanced water infrastructure, Arul Polymers delivers dependable rubber solutions where sealing performance matters.",
};

export const AEROSPACE = {
  overview:
    "Arul Polymers manufactures high-performance moulded rubber and plastic components and assemblies for demanding Aerospace and Defence applications, where reliability, dimensional accuracy and material performance are critical.",
  focus:
    "Our components are developed to meet stringent application requirements and are supplied for specialised applications across the Aerospace & Defence sector.",
  productCapabilities: [
    { label: "Precision Seals", detail: "Engineered sealing solutions for demanding operating environments." },
    { label: "O-Rings", detail: "Precision-moulded O-rings for reliable sealing performance." },
    { label: "Bellows", detail: "Flexible protective and sealing components for dynamic applications." },
    { label: "Grit Separators", detail: "Developed for the warships VARNASTURA project." },
    { label: "Custom Rubber Components", detail: "Application-specific moulded components developed to customer drawings and specifications." },
    { label: "Plastic Components & Assemblies", detail: "Precision injection-moulded components for specialised applications." },
  ] satisfies Detail[],
  panels: [
    { label: "Sealing Solutions", items: ["Seals", "O-Rings", "Specialised sealing components"] },
    { label: "Flexible Components", items: ["Bellows", "Protective covers", "Flexible moulded components"] },
    { label: "Rubber Components", items: ["Custom moulded rubber parts", "Application-specific components"] },
    { label: "Plastic Components & Assemblies", items: ["Injection-moulded components", "Custom plastic assemblies"] },
  ],
  strengths: [
    "Precision moulding of rubber and plastic components",
    "Customised solutions based on customer drawings and specifications",
    "Selection and development of application-specific elastomer compounds",
    "Consistent dimensional and functional performance",
    "Quality-focused manufacturing and inspection processes",
    "Capability to support prototype, development and production requirements",
  ],
  customers: ["HAL", "BEL", "DRDO"],
  reliabilityCopy:
    "At Arul Polymers, we understand that Aerospace & Defence components demand consistent quality, reliability and repeatable performance. Our focus is on developing and manufacturing components that meet the specific functional requirements of critical applications.",
  closing:
    "From precision sealing components to specialised rubber and plastic assemblies, Arul Polymers delivers engineered solutions for demanding Aerospace & Defence applications.",
};

export const OIL_GAS = {
  overview:
    "Arul Polymers manufactures high-performance moulded rubber and plastic components and assemblies for demanding Oil & Gas applications, where sealing integrity, leak prevention and long-term service reliability are critical.",
  focus:
    "Our product range includes precision-engineered seals, bellows, O-rings, Viton® seals for domestic LPG cylinders, and leak-proof plastic caps, developed to meet application-specific performance and quality requirements.",
  customerCopy:
    "We supply components to leading organisations including Hindustan Petroleum (HPCL), Bharat Petroleum (BPCL) and ONGC, supporting applications where dependable sealing and protection are essential.",
  products: [
    { label: "Seals & O-Rings", detail: "Reliable sealing solutions for fluid and gas-handling applications." },
    { label: "Bellows", detail: "Flexible protective and sealing components for demanding operating environments." },
    { label: "Viton® Seals", detail: "High-performance sealing solutions for applications requiring enhanced resistance to fuels, oils and chemicals." },
    { label: "Domestic LPG Cylinder Seals", detail: "Precision-moulded sealing components designed for reliable gas containment." },
    { label: "Leak-Proof Plastic Caps", detail: "Engineered plastic components providing secure closure and protection." },
    { label: "Custom Rubber & Plastic Components", detail: "Application-specific components and assemblies developed to customer requirements." },
  ] satisfies Detail[],
  strengths: [
    "Precision moulding of rubber and engineering plastic components",
    "Application-oriented material selection",
    "High-quality sealing and leak-prevention solutions",
    "Capability to develop customised components and assemblies",
    "Consistent manufacturing and quality control",
    "Experience in supplying components for critical Oil & Gas applications",
    "LERCE-approved components, wherever applicable to the relevant product/application",
  ],
  customers: ["HPCL", "BPCL", "ONGC"],
  serviceCopy:
    "With our expertise in rubber and plastic moulding, Arul Polymers delivers dependable components designed to support safe, leak-free and reliable operation across Oil & Gas applications.",
  closing: "Our focus is simple: Precision moulding. Reliable sealing. Proven performance.",
};

export const AGRICULTURE = {
  overview:
    "Arul Polymers manufactures moulded rubber and plastic components and assemblies for agricultural machinery, agro-processing equipment, and rice-processing applications.",
  focus:
    "Our products are engineered to provide durability, flexibility, wear resistance, sealing performance, and reliable operation in demanding agricultural environments.",
  components: [
    { label: "Rubber Seals & O-Rings", detail: "For leak prevention and reliable sealing in agricultural equipment and machinery." },
    { label: "Rubber Bellows", detail: "Flexible protective components for moving and mechanical assemblies." },
    { label: "Rice Rollers", detail: "Specialised rubber rollers for rice milling and grain-processing applications, designed for consistent performance and wear resistance." },
    { label: "Custom-Moulded Rubber Components", detail: "Application-specific components developed according to customer drawings, specifications, and performance requirements." },
    { label: "Plastic Components & Assemblies", detail: "Injection-moulded plastic parts for agricultural machinery and agro-processing equipment." },
    { label: "Rubber & Plastic Assemblies", detail: "Integrated components designed for reliable performance and ease of installation." },
  ] satisfies Detail[],
  applications: [
    "Agricultural Machinery",
    "Rice Mills",
    "Grain Processing Equipment",
    "Agro-Processing Machinery",
    "Irrigation Equipment",
    "Agricultural Implements",
    "Material Handling Equipment",
  ],
  strengths: [
    "Customised rubber and plastic component manufacturing",
    "High-quality moulding and controlled manufacturing processes",
    "Components designed for wear, flexibility and sealing applications",
    "Development based on customer drawings and specifications",
    "Capability to manufacture both individual components and assemblies",
    "Support for OEM and industrial applications",
  ],
  closing:
    "Arul Polymers — Engineered Rubber & Plastic Components for Agriculture and Agro-Processing.",
};
