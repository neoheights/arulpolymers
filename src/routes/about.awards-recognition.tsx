import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Page } from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import airia from "@/assets/awards/airia.jpg.asset.json";
import parker from "@/assets/awards/parker.jpg.asset.json";
import airia2021 from "@/assets/awards/airia-2021.jpg.asset.json";
import airiaDomestic2021 from "@/assets/awards/airia-domestic-2021.jpg.asset.json";

const TITLE = "Award & Recognition | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers' AIRIA Export & Domestic Awards from 2021–2022 and 2025–2026, plus the Parker Supplier Excellence Award, with photographs from the award presentations.";

const awards = [
  {
    id: "airia-award",
    organisation: "AIRIA",
    title: "Export & Domestic Awards",
    recognition: "Domestic Award",
    year: "2025–2026",
    image: airia.url,
    alt: "Arul Polymers receiving the AIRIA Domestic Award, with trophy and certificate at the Export & Domestic Awards presentation",
  },
  {
    id: "parker-award",
    organisation: "Parker",
    title: "Supplier Excellence Award",
    recognition: "Supplier Excellence",
    year: "2025–2026",
    image: parker.url,
    alt: "Parker Supplier Excellence Award presentation, with the award trophy being presented to Arul Polymers",
  },
  {
    id: "airia-export-domestic-2021",
    organisation: "AIRIA",
    title: "Export & Domestic Awards",
    recognition: "Award Presentation",
    year: "2021–2022",
    image: airia2021.url,
    alt: "AIRIA Export & Domestic Awards 2021–22 presentation at the 70th Annual General Meeting, with the award trophy and certificate being handed over on stage",
  },
  {
    id: "airia-domestic-2021",
    organisation: "AIRIA",
    title: "Domestic Award",
    recognition: "Domestic Award",
    year: "2021–2022",
    image: airiaDomestic2021.url,
    alt: "Arul Polymers receiving the AIRIA Domestic Award 2021–22 certificate and trophy at the All India Rubber Industries Association Annual General Meeting",
  },
];

function AwardsRecognitionPage() {
  const [selected, setSelected] = useState<(typeof awards)[number] | null>(null);

  return (
    <Page>
      <header className="relative overflow-hidden border-b border-border bg-cool">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-tech opacity-40" />
        <div className="shell relative py-10 sm:py-12 lg:py-14">
          <Reveal><MicroLabel>About Us</MicroLabel></Reveal>
          <Reveal delay={70}>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
              Award &<br className="sm:hidden" /> Recognition<span className="text-red">.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-red" />
              <p className="font-mono text-sm text-steel">2021–2022 · 2025–2026</p>
            </div>
          </Reveal>
        </div>
      </header>

      {awards.map((award, index) => (
        <section key={award.id} id={award.id} className={`scroll-mt-24 py-10 sm:py-14 lg:py-16 ${index === 0 ? "bg-background" : "bg-cool"}`}>
          <div className={`shell grid items-center gap-7 lg:gap-14 ${index === 0 ? "lg:grid-cols-[1.6fr_1fr]" : "lg:grid-cols-[1fr_1.6fr]"}`}>
            <Reveal className={index === 1 ? "lg:order-2" : ""}>
              <figure className="group relative overflow-hidden rounded-lg border border-border bg-background">
                <Button
                  variant="ghost"
                  onClick={() => setSelected(award)}
                  aria-label={`Enlarge ${award.organisation} award photograph`}
                  className="block h-auto w-full rounded-none p-0 hover:bg-transparent"
                >
                  <img src={award.image} alt={award.alt} data-flat="" loading={index === 0 ? "eager" : "lazy"} decoding="async" className="aspect-[3/2] w-full object-contain transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/95 text-primary" title="Enlarge photograph"><Maximize2 aria-hidden="true" /></span>
                </Button>
                <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-steel sm:px-5">
                  <span>{award.organisation} / Award Presentation</span>
                  <span className="font-mono">{award.year}</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <MicroLabel tone="red">{award.organisation}</MicroLabel>
              <h2 className="mt-5 text-3xl leading-[1.15] text-navy sm:text-4xl">{award.title}</h2>
              <dl className="mt-7 border-t border-border">
                <div className="py-4"><dt className="label-micro text-steel">Recognition</dt><dd className="mt-2 text-base text-foreground">{award.recognition}</dd></div>
                <div className="border-t border-border py-4"><dt className="label-micro text-steel">Year</dt><dd className="mt-2 font-mono text-base text-foreground">{award.year}</dd></div>
              </dl>
              <Button variant="link" className="mt-3 h-auto justify-start whitespace-normal p-0 text-left" onClick={() => setSelected(award)}>
                View Award Photograph <ArrowUpRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
        </section>
      ))}

      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="max-h-[94dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-lg p-4 sm:p-6">
          <DialogTitle className="pr-8 text-base leading-snug text-navy sm:text-xl">{selected?.organisation} — {selected?.title}</DialogTitle>
          <DialogDescription className="font-mono">{selected?.year}</DialogDescription>
          {selected && <img src={selected.image} alt={selected.alt} data-flat="" className="max-h-[72dvh] w-full object-contain" />}
        </DialogContent>
      </Dialog>
    </Page>
  );
}

export const Route = createFileRoute("/about/awards-recognition")({
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
  component: AwardsRecognitionPage,
});
