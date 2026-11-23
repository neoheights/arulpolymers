import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "@/components/site/QualityPage";

const TITLE = "Quality & Certifications | Arul Polymers Pvt. Ltd.";
const DESC =
  "Certified quality at Arul Polymers — preview IATF 16949, ISO 9001, ISO 4633, WRAS, BIS Licence and BS EN 681-1 certificates.";

export const Route = createFileRoute("/quality/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arul-polymer-engineering.lovable.app/quality" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://arul-polymer-engineering.lovable.app/quality" }],
  }),
  component: QualityPage,
});
