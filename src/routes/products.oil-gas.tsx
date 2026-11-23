import { createFileRoute } from "@tanstack/react-router";
import { OilGasProductsPage } from "@/components/site/OilGasProductsPage";
import { OIL_GAS_IMAGES } from "@/lib/oil-gas-products";

const TITLE = "Oil and Gas Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers Oil & Gas seals, O-rings, bellows, LPG cylinder seals, plastic caps and custom rubber and plastic components.";

export const Route = createFileRoute("/products/oil-gas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arul-polymer-engineering.lovable.app/products/oil-gas" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(OIL_GAS_IMAGES[0]?.startsWith("https://") ? [
        { property: "og:image", content: OIL_GAS_IMAGES[0] },
        { name: "twitter:image", content: OIL_GAS_IMAGES[0] },
      ] : []),
    ],
    links: [{ rel: "canonical", href: "https://arul-polymer-engineering.lovable.app/products/oil-gas" }],
  }),
  component: OilGasProductsPage,
});
