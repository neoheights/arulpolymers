import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Page } from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import activity1 from "@/assets/csr/activity-1.jpg.asset.json";
import activity2 from "@/assets/csr/activity-2.jpg.asset.json";
import activity3 from "@/assets/csr/activity-3.jpg.asset.json";
import activity4 from "@/assets/csr/activity-4.jpg.asset.json";
import activity5 from "@/assets/csr/activity-5.jpg.asset.json";

const TITLE = "CSR Activities | Arul Polymers Pvt. Ltd.";
const DESC =
  "Explore Arul Polymers' corporate social responsibility activities through genuine photographs of a community meal service.";

const photographs = [
  { image: activity1.url, alt: "Arul Polymers CSR activity with volunteers serving food from cooking pots", caption: "Serving together" },
  { image: activity3.url, alt: "A volunteer serving food to children during Arul Polymers' CSR activity", caption: "Community meal service" },
  { image: activity2.url, alt: "Children waiting with plates at the community meal service", caption: "Coming together" },
  { image: activity5.url, alt: "Volunteers distributing meals to children and adults", caption: "Sharing a meal" },
  { image: activity4.url, alt: "Community members seated at tables during the meal service", caption: "Around the table" },
];

function CsrPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? null : photographs[selected];
  const move = (direction: number) => setSelected((index) => index === null ? null : (index + direction + photographs.length) % photographs.length);

  return <Page>
    <header className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img src={activity1.url} alt="" aria-hidden="true" data-flat="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
      <div className="shell py-14 sm:py-16 lg:py-20">
        <Reveal><MicroLabel tone="light">About Us / Corporate Social Responsibility</MicroLabel></Reveal>
        <Reveal delay={80}><h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">CSR at<br />Arul Polymers<span className="text-red">.</span></h1></Reveal>
        <Reveal delay={160}><p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/90">Our community activities, captured in moments of service and togetherness.</p></Reveal>
        <Button variant="outline" className="mt-8 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => document.getElementById("csr-activities")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Explore Activities <ArrowDown aria-hidden="true" /></Button>
      </div>
    </header>

    <section id="csr-activities" className="scroll-mt-24 rounded-t-[2rem] bg-background py-12 sm:py-16">
      <div className="shell">
        <div className="grid gap-5 border-b border-border pb-8 lg:grid-cols-2 lg:gap-12">
          <Reveal><MicroLabel>CSR Activities</MicroLabel><h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">Community meal service.</h2></Reveal>
          <Reveal delay={100}><p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:pt-9">A photographic glimpse of Arul Polymers’ CSR activity — volunteers serving food and community members sharing a meal.</p></Reveal>
        </div>
        <div className="mt-8 grid items-start gap-5 sm:gap-6 lg:grid-cols-2">
          {photographs.map((photo, index) => <Reveal key={photo.image} delay={index * 60} className={index === 4 ? "lg:col-span-2" : "min-w-0"}>
            <figure className="group overflow-hidden rounded-lg border border-border bg-muted/30">
              <Button variant="ghost" onClick={() => setSelected(index)} aria-label={`Enlarge photograph: ${photo.caption}`} className={`relative block h-auto w-full overflow-hidden rounded-none bg-transparent p-0 hover:bg-transparent ${index === 4 ? "aspect-[13/6]" : "aspect-[4/3]"}`}>
                <img src={photo.image} alt={photo.alt} data-flat="" loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none" />
                <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/95 text-primary" title="Enlarge photograph"><Maximize2 aria-hidden="true" className="h-4 w-4" /></span>
              </Button>
              <figcaption className="border-t border-border bg-background px-5 py-4 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          </Reveal>)}
        </div>
      </div>
    </section>

    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="max-h-[94dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-lg p-4 sm:p-6" onKeyDown={(event) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
        <DialogTitle className="pr-8">{current?.caption}</DialogTitle>
        <DialogDescription>Arul Polymers / CSR activity</DialogDescription>
        {current && <img src={current.image} alt={current.alt} data-flat="" className="max-h-[70dvh] w-full object-contain" />}
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" size="icon" aria-label="Previous CSR photograph" title="Previous photograph" onClick={() => move(-1)}><ChevronLeft /></Button>
          <span className="text-sm text-muted-foreground">{selected === null ? "" : `${selected + 1} / ${photographs.length}`}</span>
          <Button variant="outline" size="icon" aria-label="Next CSR photograph" title="Next photograph" onClick={() => move(1)}><ChevronRight /></Button>
        </div>
      </DialogContent>
    </Dialog>
  </Page>;
}

export const Route = createFileRoute("/about/csr")({
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
  component: CsrPage,
});
