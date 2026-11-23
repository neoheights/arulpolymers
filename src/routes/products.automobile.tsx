import { createFileRoute } from "@tanstack/react-router";
import { AutomobileProductsPage } from "@/components/site/AutomobileProductsPage";

const TITLE = "Automobile Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore automobile rubber and polymer components from Arul Polymers, including bellows, gaskets, seals, suspension parts, bonded parts and more.";

export const Route = createFileRoute("/products/automobile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.capsley.site/products/automobile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.capsley.site/products/automobile" }],
  }),
  component: AutomobileProductsPage,
});
