import { OIL_GAS } from "@/lib/industries-data";
import { latestProductImages } from "@/lib/latest-product-images";

export type OilGasProductId =
  | "seals-o-rings"
  | "bellows"
  | "viton-seals"
  | "lpg-cylinder-seals"
  | "plastic-caps"
  | "custom-components";

export type OilGasProduct = {
  id: OilGasProductId;
  number: string;
  name: string;
  description: string;
  images: string[];
  visual: "seal" | "bellows" | "viton" | "lpg" | "caps" | "custom";
};

const ids: OilGasProductId[] = [
  "seals-o-rings",
  "bellows",
  "viton-seals",
  "lpg-cylinder-seals",
  "plastic-caps",
  "custom-components",
];

const visuals: OilGasProduct["visual"][] = ["seal", "bellows", "viton", "lpg", "caps", "custom"];

export const OIL_GAS_PRODUCTS: OilGasProduct[] = OIL_GAS.products.map((product, index) => {
  const id = ids[index];
  const visual = visuals[index];
  if (!id || !visual) throw new Error("Oil & Gas product content is incomplete");
  return {
    id,
    number: String(index + 1).padStart(2, "0"),
    name: product.label,
    description: product.detail,
    images: latestProductImages("oil-gas", id),
    visual,
  };
});

export const OIL_GAS_IMAGES = [...new Set(OIL_GAS_PRODUCTS.flatMap((product) => product.images))];

export const OIL_GAS_ENVIRONMENTS = [
  "High Pressure",
  "Extreme Temperature",
  "Hydrocarbons",
  "H₂S",
  "CO₂",
  "Drilling Fluids",
] as const;