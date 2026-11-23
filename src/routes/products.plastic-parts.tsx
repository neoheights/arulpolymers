import { createFileRoute } from "@tanstack/react-router";
import { PlasticPartsPage } from "@/components/site/PlasticPartsPage";

const TITLE = "Plastic Parts | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore client-approved plastic product photography from Arul Polymers Pvt. Ltd.";

export const Route = createFileRoute("/products/plastic-parts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.capsley.site/products/plastic-parts" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.capsley.site/products/plastic-parts" }],
  }),
  component: PlasticPartsPage,
});
