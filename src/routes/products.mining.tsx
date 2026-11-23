import { createFileRoute } from "@tanstack/react-router";
import { MiningProductsPage } from "@/components/site/MiningProductsPage";

const TITLE = "Mining Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers mining products for material handling, wear resistance, filtration and adhesive applications.";

export const Route = createFileRoute("/products/mining")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.capsley.site/products/mining" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.capsley.site/products/mining" }],
  }),
  component: MiningProductsPage,
});
