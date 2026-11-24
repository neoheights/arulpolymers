import { createFileRoute } from "@tanstack/react-router";
import { AerospaceProductsPage } from "@/components/site/AerospaceProductsPage";

const TITLE = "Aerospace & Defence Products | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore precision seals, O-rings, bellows, grit separators, custom rubber components, and plastic assemblies for Aerospace and Defence applications.";

export const Route = createFileRoute("/products/aerospace-defence")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.com/products/aerospace-defence" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arulpolymers.com/products/aerospace-defence" }],
  }),
  component: AerospaceProductsPage,
});
