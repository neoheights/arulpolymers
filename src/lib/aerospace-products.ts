import { AEROSPACE } from "@/lib/industries-data";
import { latestProductImages } from "@/lib/latest-product-images";

export type AerospaceProductId =
  | "precision-seals"
  | "o-rings"
  | "bellows"
  | "grit-separators"
  | "custom-rubber-components"
  | "plastic-components";

export type AerospaceProduct = {
  id: AerospaceProductId;
  number: string;
  name: string;
  description: string;
  images: string[];
  visual: "seals" | "rings" | "bellows" | "separator" | "custom" | "plastic";
};

const ids: AerospaceProductId[] = [
  "precision-seals",
  "o-rings",
  "bellows",
  "grit-separators",
  "custom-rubber-components",
  "plastic-components",
];

const folders: Record<AerospaceProductId, string | null> = {
  "precision-seals": "precision-seals",
  "o-rings": "o-rings",
  bellows: "bellows",
  "grit-separators": "grit-separators",
  "custom-rubber-components": "custom-rubber-components",
  "plastic-components": null,
};

const visuals: AerospaceProduct["visual"][] = ["seals", "rings", "bellows", "separator", "custom", "plastic"];

export const AEROSPACE_PRODUCTS: AerospaceProduct[] = AEROSPACE.productCapabilities.map(
  (product, index) => {
    const id = ids[index];
    const visual = visuals[index];
    if (!id || !visual) throw new Error("Aerospace product content is incomplete");
    const folder = folders[id];
    return {
      id,
      number: String(index + 1).padStart(2, "0"),
      name: product.label,
      description: product.detail,
      images: folder ? latestProductImages("aerospace-defence", folder) : [],
      visual,
    };
  },
);

export const AEROSPACE_IMAGES = [...new Set(AEROSPACE_PRODUCTS.flatMap((product) => product.images))];