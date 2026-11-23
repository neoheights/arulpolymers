import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { VideoHero } from "@/components/site/VideoHero";
import { Intro, Leadership, Industries, Capabilities, Products } from "@/components/site/SectionsA";
import {
  Manufacturing,
  AerospaceDefence,
  Partners,
  FinalCta,
} from "@/components/site/SectionsB";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Arul Polymers | Advanced Elastomer Engineering Since 1998";
const DESC =
  "Arul Polymers Pvt. Ltd. engineers advanced elastomer and rubber components for aerospace, defence, automotive, industrial, two wheeler and agriculture applications. CEMILAC and DGAQA approved.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <main>
        <VideoHero />
        <Intro />
        <Leadership />
        <Industries />
        <Capabilities />
        <Products />
        <Manufacturing />
        <AerospaceDefence />
        <Partners />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
