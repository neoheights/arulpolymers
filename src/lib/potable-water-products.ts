import { latestProductImages } from "@/lib/latest-product-images";

const productImages = (product: string) => latestProductImages("potable-water", product);

export type PotableWaterProduct = {
  id: "tyton-gaskets" | "wedge" | "wras-seals-o-rings";
  number: string;
  name: string;
  description: string;
  details: string[];
  application: string;
  images: string[];
  certification?: string;
};

export const POTABLE_WATER_PRODUCTS: PotableWaterProduct[] = [
  {
    id: "tyton-gaskets",
    number: "01",
    name: "Tyton Gaskets",
    description:
      "The Tyton Gasket, also known as a Dual Hardness Gasket, is a specialized sealing component engineered for use in ductile iron pipe systems for potable water applications. Designed to ensure a leak-free, long-lasting connection, this gasket features a dual hardness construction—a soft inner sealing zone for flexibility and a harder outer ring for structural support and retention within the pipe socket.",
    details: [
      "Manufactured using EPDM rubber compounds certified by WRAS (Water Regulations Approval Scheme), the gasket fully complies with the strict hygiene and safety standards required for drinking water systems. The use of WRAS-approved EPDM ensures that the gasket does not leach harmful substances, supports microbiological resistance, and maintains performance across a broad temperature range.",
    ],
    application: "For ductile iron and pipeline applications.",
    images: productImages("tyton-gaskets"),
  },
  {
    id: "wedge",
    number: "02",
    name: "Wedge",
    description:
      "This wedge is specifically engineered for potable water applications, ensuring long-term reliability, safety, and compliance with stringent water quality standards. Manufactured using EPDM rubber certified by the Water Regulations Approval Scheme (WRAS), the wedge offers excellent resistance to aging, chlorinated water, and microbiological growth, making it ideal for use in contact with drinking water.",
    details: [
      "The WRAS certification confirms that all materials in contact with water meet the high standards required for health and safety in water supply systems in the UK and internationally. EPDM rubber is selected for its non-toxic, tasteless, and odorless properties, along with superior durability and flexibility, which help maintain a watertight seal over prolonged service life.",
    ],
    application: "For valves and water control systems.",
    images: productImages("wedge"),
  },
  {
    id: "wras-seals-o-rings",
    number: "03",
    name: "WRAS Approved Seals & O-Rings",
    description:
      "Seals and O-rings play a critical role in ensuring the reliability and safety of water systems, especially in applications involving potable (drinking) water. For such applications, materials must meet stringent hygiene and safety standards to prevent contamination and ensure long-term performance.",
    details: [
      "Our seals and O-rings are manufactured using WRAS-certified EPDM rubber, specifically engineered for use in potable water systems. WRAS (Water Regulations Approval Scheme) certification confirms that the material complies with the UK Water Supply (Water Fittings) Regulations and Byelaws, and is safe for contact with drinking water.",
      "EPDM (Ethylene Propylene Diene Monomer) rubber offers excellent resistance to water, chlorine, and aging, along with outstanding elasticity and durability across a wide temperature range.",
    ],
    application:
      "Our WRAS-certified rubber compounds are suitable for potable/drinking-water applications up to 60°C, supporting the requirements of water infrastructure and drinking-water systems.",
    certification: "WRAS",
    images: productImages("wras-seals-o-rings"),
  },
];