import { latestProductImages } from "@/lib/latest-product-images";

const productImages = (product: string, ..._legacyArguments: unknown[]) => latestProductImages("automobile", product);

export type AutomobileProduct = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  intro?: string;
  details?: string[];
  sections?: { title: string; paragraphs: string[] }[];
  materials?: { code: string; name: string; property: string }[];
  images: string[];
};

export const AUTOMOBILE_PRODUCTS: AutomobileProduct[] = [
  {
    id: "bellows",
    number: "01",
    name: "Bellows for Hydraulic Systems",
    shortName: "Bellows",
    intro: "Designed to protect moving components from dust, dirt, moisture, oil splashes, and other external contaminants. Our bellows offer flexibility, durability, and reliable performance in demanding industrial and mobile hydraulic applications.",
    images: productImages("bellows", "bellows", 5),
  },
  {
    id: "engine-exhaust",
    number: "02",
    name: "Engine Exhaust System Rubber Parts",
    shortName: "Engine Exhaust",
    intro: "Carburettor Air Intake and Outlet",
    sections: [
      {
        title: "Fuel Inlet Part",
        paragraphs: [
          "Rubber Inlet for Carburetor, developed strictly in accordance with the specifications provided in the customer's technical drawing. The rubber inlet is a critical component that serves as a flexible and airtight connection between the carburetor and the intake manifold or air filter housing in internal combustion engines.",
          "We use high-quality, fuel-resistant elastomers for the inlet to offer excellent durability, thermal stability, and resistance to vibration and fuel vapors. The product meets all dimensional, material, and performance requirements as outlined in the approved customer drawing, ensuring compatibility and optimal performance in the intended application.",
        ],
      },
      {
        title: "Fuel Outlet Part",
        paragraphs: [
          "Rubber Outlet for Carburetor, developed and manufactured in strict accordance with the customer-supplied technical drawing and specifications. This component is designed to ensure a secure and leak-proof connection between the carburetor and adjoining parts, playing a critical role in the fuel-air intake system of internal combustion engines.",
          "Manufactured using high-quality, fuel-resistant elastomers, the rubber outlet offers excellent durability, thermal stability, and resistance to vibration and fuel vapors. The product meets all dimensional, material, and performance requirements as outlined in the approved customer drawing, ensuring compatibility and optimal performance in the intended application.",
        ],
      },
    ],
    images: productImages("engine-exhaust", "engine-exhaust", 5),
  },
  {
    id: "engine-gaskets",
    number: "03",
    name: "Engine Gaskets",
    shortName: "Engine Gaskets",
    intro: "Custom-designed polyacrylic gasket developed specifically for engine applications, in strict compliance with the specifications outlined in the customer-supplied drawing.",
    details: [
      "This gasket is manufactured using high-quality polyacrylic elastomer (ACM), known for its excellent resistance to oil, heat, and oxidation, making it particularly suitable for sealing applications in automotive engine environments.",
    ],
    materials: [{ code: "ACM", name: "Polyacrylic Elastomer", property: "Oil, heat, and oxidation resistance" }],
    images: productImages("engine-gaskets", "engine-gasket", 5),
  },
  {
    id: "ev-rubber-parts",
    number: "04",
    name: "EV Rubber Parts",
    shortName: "EV Rubber Parts",
    sections: [
      {
        title: "Battery Compartment Gaskets",
        paragraphs: [
          "This silicone rubber gasket is custom-engineered for electric vehicle (EV) battery compartments, precisely manufactured to conform to customer-supplied drawings and specifications. Designed with high-performance silicone elastomer, the gasket delivers superior sealing, thermal resistance, and durability, ensuring optimal protection in demanding automotive environments.",
        ],
      },
      {
        title: "Motor Mount Dampers",
        paragraphs: [
          "As the adoption of electric two-wheelers (EVs) accelerates worldwide, ensuring rider comfort and vehicle durability becomes increasingly important. One key component contributing to both is the rubber seat mount, also known as a rubber seat mound. This component is strategically positioned between the seat and the vehicle frame, serving as a vibration damping and load-bearing element.",
        ],
      },
    ],
    images: productImages("ev-rubber-parts", "ev-rubber-part", 6),
  },
  {
    id: "footrest",
    number: "05",
    name: "Footrest",
    shortName: "Footrest",
    intro: "We specialize in the precision manufacturing of two-wheeler footrests, developed strictly as per customer-provided technical drawings and specifications.",
    details: [
      "With a strong commitment to quality, durability, and timely delivery, our manufacturing process combines skilled craftsmanship with modern machinery to meet the demands of OEMs and aftermarket suppliers.",
    ],
    images: productImages("footrest", "footrest", 3),
  },
  {
    id: "fuel-filter",
    number: "06",
    name: "Fuel Filter Rubber Parts",
    shortName: "Fuel Filter",
    intro: "The Fuel Filter Bottom Seal plays a critical role in ensuring fuel containment and preventing leakage at the base of the fuel filter assembly.",
    details: [
      "It is typically manufactured using fuel-resistant elastomeric materials and must meet stringent performance requirements related to fuel compatibility, dimensional accuracy, temperature resistance, and mechanical integrity.",
      "Our manufacturing process begins with a thorough review and validation of customer drawings and technical requirements, including:",
    ],
    images: productImages("fuel-filter", "fuel-filter-seal", 1),
  },
  {
    id: "rubber-metal-bonding",
    number: "07",
    name: "Rubber-to-Metal Bonding Parts",
    shortName: "Rubber-to-Metal",
    intro: "Brake System Parts",
    details: [
      "Rubber bushings, also known as rubber bushes, play a critical role in automotive brake systems by providing flexible cushioning between moving or vibrating components. These elastomeric components absorb shocks, dampen noise and vibration, and reduce wear between metal parts, thereby enhancing the overall performance and lifespan of the braking system.",
      "At our facility, we specialize in the custom manufacturing of rubber bushings based on customer-provided technical drawings and specifications. This approach ensures precise compliance with unique design requirements, performance standards, and dimensional tolerances. Our engineering team works closely with customers to interpret and translate drawings into high-quality, production-ready components using advanced molding technologies and stringent quality control processes.",
    ],
    images: productImages("rubber-metal-bonding", "rubber-metal-bonding", 4),
  },
  {
    id: "o-rings-seals",
    number: "08",
    name: "O-Rings and Seals",
    shortName: "O-Rings & Seals",
    intro: "We specialize in the design, development, and manufacturing of high-performance O-rings and seals tailored specifically for the two-wheeler segment, strictly as per customer-supplied drawings and specifications.",
    details: ["Our facility is equipped to manufacture O-rings and seals using a comprehensive range of rubber compounds, including but not limited to:"],
    materials: [
      { code: "NBR", name: "Nitrile", property: "Fuel and oil resistance" },
      { code: "FKM / Viton", name: "Fluorocarbon", property: "High-temperature and chemical resistance" },
      { code: "VMQ", name: "Silicone", property: "Thermal and weather resilience" },
      { code: "EPDM", name: "EPDM", property: "Ideal for brake systems and coolant lines" },
      { code: "CR", name: "Neoprene", property: "General-purpose sealing and moderate chemical resistance" },
      { code: "NR", name: "Natural Rubber", property: "Applications requiring high tensile strength" },
      { code: "HNBR", name: "Hydrogenated Nitrile", property: "Improved thermal and chemical performance" },
    ],
    images: productImages("o-rings-seals"),
  },
  {
    id: "suspension",
    number: "09",
    name: "Suspension Parts",
    shortName: "Suspension Parts",
    intro: "Two-wheeler rubber absorber parts are critical components designed to absorb shocks, dampen vibrations, and minimize noise generated during vehicle operation. These parts are typically made from high-quality natural rubber and various customized rubber compounds to meet specific performance and durability requirements.",
    details: [
      "Our rubber absorber parts are manufactured precisely as per customer-provided drawings and specifications, ensuring a perfect fit and optimal functionality in a wide range of two-wheeler models. With expertise in working across all types of rubber materials—including NR, NBR, EPDM, SBR, and more—we provide tailored solutions for applications",
    ],
    images: productImages("suspension", "suspension-part", 1),
  },
  {
    id: "swing-arm-bushes",
    number: "10",
    name: "Swing Arm Bushes",
    shortName: "Swing Arm Bushes",
    intro: "We specialize in the precision manufacturing of swing arm bushes for two-wheelers, tailored meticulously to meet customer-specific drawings and technical requirements. The swing arm bush is a critical component in the suspension system of motorcycles and scooters, providing essential support, vibration damping, and smooth articulation between the swing arm and the frame.",
    details: [
      "Our manufacturing process is designed to deliver high-performance, durable, and dimensionally accurate swing arm bushes, using advanced machinery, stringent quality controls, and high-grade materials such as phosphor bronze, steel, or polymer composites depending on the customer's specifications.",
    ],
    images: productImages("swing-arm-bushes", "swing-arm-bush", 4),
  },
  {
    id: "three-wheelers",
    number: "11",
    name: "Three Wheelers",
    shortName: "Three Wheelers",
    intro: "Designed for durability, flexibility, vibration damping, and resistance to wear and environmental conditions. They deliver reliable vehicle performance, improved comfort, and a long service life, meeting the demanding requirements of three-wheeler automotive applications.",
    images: productImages("three-wheelers"),
  },
];