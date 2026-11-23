import { createFileRoute } from "@tanstack/react-router";
import { AtmRubberPartsPage } from "@/components/site/AtmRubberPartsPage";

const TITLE = "ATM Rubber Parts | Arul Polymers Pvt. Ltd.";
const DESC =
  "Rubber parts for ATM cash handling and smooth mechanical operation from Arul Polymers Pvt. Ltd.";

export const Route = createFileRoute("/products/atm-rubber-parts")({
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
  component: AtmRubberPartsPage,
});
