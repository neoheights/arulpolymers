import { latestProductImages } from "@/lib/latest-product-images";
import type { AutomobileProduct } from "@/lib/automobile-products";

const productImages = (product: string) => latestProductImages("agriculture", product);

/** Agriculture catalogue shares the approved product data shape used site-wide. */
export type AgricultureProduct = AutomobileProduct;

export const AGRICULTURE_PRODUCTS: AgricultureProduct[] = [
  {
    id: "tiller-tyre",
    number: "01",
    name: "Tiller Tyre",
    shortName: "Tiller Tyre",
    intro: "Manufacturing tiller tyres as per customer drawings requires a highly customized approach, integrating engineering precision with flexible production capabilities to meet specific design and performance criteria.",
    images: productImages("tiller-tyre"),
  },
];
