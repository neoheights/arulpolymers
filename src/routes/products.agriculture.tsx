import { createFileRoute } from "@tanstack/react-router";
import { AgricultureProductsPage } from "@/components/site/AgricultureProductsPage";

const TITLE = "Agriculture Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers moulded rubber and plastic components for agricultural machinery, agro-processing and rice-processing applications.";

export const Route = createFileRoute("/products/agriculture")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgricultureProductsPage,
});
