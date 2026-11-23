import { createFileRoute } from "@tanstack/react-router";
import { PotableWaterProductsPage } from "@/components/site/PotableWaterProductsPage";

const TITLE = "Potable Water Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers Tyton Gaskets, Wedge products and WRAS Approved Seals & O-Rings for potable water infrastructure.";

export const Route = createFileRoute("/products/potable-water")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.capsley.site/products/potable-water" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.capsley.site/products/potable-water" }],
  }),
  component: PotableWaterProductsPage,
});
