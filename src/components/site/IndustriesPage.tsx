import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { PageCta } from "./PageShell";
import { MicroLabel, Reveal } from "./primitives";
import {
  AEROSPACE,
  AGRICULTURE,
  AUTOMOBILE,
  type Detail,
  INDUSTRY_IMAGES,
  INDUSTRY_LINKS,
  MINING,
  OIL_GAS,
  POTABLE_WATER,
} from "@/lib/industries-data";
import { cn } from "@/lib/utils";

function scrollToIndustry(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `/industries#${id}`);
}

function IndustryNav() {
  const [active, setActive] = useState("automobile");

  useEffect(() => {
    const sections = INDUSTRY_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.1, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Industries on this page" className="sticky top-16 z-40 border-y border-hairline bg-background/95 backdrop-blur-xl">
      <div className="shell overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center gap-1 py-2 sm:justify-center">
          {INDUSTRY_LINKS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToIndustry(item.id)}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "group flex min-h-11 items-center gap-2 rounded-md px-4 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                active === item.id ? "bg-navy text-primary-foreground shadow-sm" : "text-navy hover:bg-blue/8",
              )}
            >
              <span className={cn("font-mono text-[0.65rem]", active === item.id ? "text-primary-foreground/60" : "text-red")}>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-cool pt-16 text-navy">
      <div className="absolute inset-0 grid-tech opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 industries-hero-wash" aria-hidden="true" />
      <div className="shell relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="anim-hero-rise"><MicroLabel tone="red">Industries we serve</MicroLabel></div>
          <h1 className="mt-7 text-[2rem] leading-[1.02] sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
            <span className="block whitespace-nowrap">Engineered across</span>
            <span className="block whitespace-nowrap">critical industries.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-steel sm:text-xl">
            Precision rubber and plastic components developed for automotive, mining, potable water, aerospace and defence, oil and gas, and agriculture.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button onClick={() => scrollToIndustry("automobile")} size="lg">Explore industries <ChevronRight /></Button>
            <Button asChild variant="outline" size="lg"><a href="/contact">Discuss a requirement</a></Button>
          </div>
        </div>
        <div className="industries-hero-scene" aria-label="Industries served by Arul Polymers">
          {INDUSTRY_LINKS.map((item, index) => {
            const images = [
              INDUSTRY_IMAGES.automobile,
              INDUSTRY_IMAGES.mining,
              INDUSTRY_IMAGES.potableWater,
              INDUSTRY_IMAGES.aerospace,
              INDUSTRY_IMAGES.oilGas,
              INDUSTRY_IMAGES.agriculture,
            ];
            const image = images[index] ?? INDUSTRY_IMAGES.automobile;
            return (
              <button key={item.id} type="button" onClick={() => scrollToIndustry(item.id)} className="industries-hero-slice" aria-label={`Go to ${item.label}`}>
                <img src={image} alt="" data-flat="" className="h-full w-full object-cover" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryHeading({ number, label, title, copy, light = false, titleClassName }: { number: string; label: string; title: ReactNode; copy: string; light?: boolean; titleClassName?: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal><MicroLabel tone={light ? "light" : "red"}>{number} / {label}</MicroLabel></Reveal>
       <Reveal delay={70}><h2 className={cn("industry-main-title mt-6 text-balance leading-[1.05]", light ? "text-primary-foreground" : "text-navy", titleClassName)}>{title}</h2></Reveal>
      <Reveal delay={130}><p className={cn("mt-6 text-lg leading-8", light ? "text-primary-foreground/75" : "text-steel")}>{copy}</p></Reveal>
    </div>
  );
}

function ItemGrid({ items, dark = false, columns = 3 }: { items: string[]; dark?: boolean; columns?: number }) {
  return (
    <ul className={cn("grid gap-3", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
      {items.map((item) => (
        <li key={item} className={cn("group flex min-h-16 items-start gap-3 rounded-md border px-4 py-4 text-[0.95rem] font-semibold leading-6 transition-all duration-300 hover:-translate-y-[3px]", dark ? "border-primary-foreground/15 bg-primary-foreground/6 text-primary-foreground" : "border-hairline bg-background text-navy shadow-xs hover:border-blue/30 hover:shadow-sm")}>
          <Check className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-primary-foreground/70" : "text-red")} />{item}
        </li>
      ))}
    </ul>
  );
}

function DetailGrid({ items, dark = false, columns = 3 }: { items: Detail[]; dark?: boolean; columns?: 2 | 3 }) {
  return (
    <ul className={cn("grid gap-4", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
      {items.map((item) => (
        <li
          key={item.label}
          className={cn(
            "rounded-md border p-5 transition-all duration-300 hover:-translate-y-[3px]",
            dark
              ? "border-primary-foreground/15 bg-primary-foreground/6 text-primary-foreground"
              : "border-hairline bg-background shadow-xs hover:border-blue/30 hover:shadow-sm",
          )}
        >
          <p className={cn("flex items-start gap-3 text-[1.02rem] font-bold leading-6", dark ? "text-primary-foreground" : "text-navy")}>
            <Check className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-primary-foreground/70" : "text-red")} />
            {item.label}
          </p>
          <p className={cn("mt-2 pl-7 text-[0.98rem] leading-7", dark ? "text-primary-foreground/70" : "text-steel")}>{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function Note({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <Reveal>
      <p className={cn("max-w-4xl text-lg leading-8", dark ? "text-primary-foreground/75" : "text-steel")}>{children}</p>
    </Reveal>
  );
}

function ClosingBar({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <Reveal className="mt-12">
      <div
        className={cn(
          "flex items-start gap-4 rounded-md border-l-4 border-red px-6 py-6",
          dark ? "bg-primary-foreground/8" : "bg-cool",
        )}
      >
        <p className={cn("text-xl font-bold leading-8 sm:text-2xl", dark ? "text-primary-foreground" : "text-navy")}>{children}</p>
      </div>
    </Reveal>
  );
}

function ChipRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-hairline bg-background py-6">
      <p className="label-micro px-6 text-red">{label}</p>
      <div className="mt-4 flex flex-wrap gap-3 px-6">
        {items.map((item) => (
          <span key={item} className="rounded-md border border-navy/10 bg-cool px-4 py-3 text-[0.95rem] font-semibold text-navy">{item}</span>
        ))}
      </div>
    </div>
  );
}

function CustomerStrip({ label = "Customer experience", names, dark = false }: { label?: string; names: string[]; dark?: boolean }) {
  return (
    <div className={cn("mt-10 border-y py-6", dark ? "border-primary-foreground/15" : "border-navy/10")}>
      <p className={cn("label-micro", dark ? "text-primary-foreground/55" : "text-steel")}>{label}</p>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
        {names.map((name) => <span key={name} className={cn("text-base font-bold", dark ? "text-primary-foreground" : "text-navy")}>{name}</span>)}
      </div>
    </div>
  );
}

function AutomobileSection() {
  return (
    <section id="automobile" className="industry-section scroll-mt-32 bg-background py-20 lg:py-28">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal className="industry-image-frame automobile-reveal"><img src={INDUSTRY_IMAGES.automobile} alt="Automobile manufacturing served by Arul Polymers" className="h-full w-full object-cover" /></Reveal>
            <CustomerStrip label="Who we serve" names={AUTOMOBILE.serve} />
          </div>
          <div>
            <IndustryHeading
              number="01"
              label="Automobile"
              titleClassName="automobile-main-title"
              title={<><span className="block whitespace-nowrap">Precision Rubber &amp;</span><span className="block whitespace-nowrap">Plastic Components for the</span><span className="block whitespace-nowrap">Automotive Industry.</span></>}
              copy={AUTOMOBILE.overview}
            />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-steel">{AUTOMOBILE.focus}</p></Reveal>
            <Reveal delay={220} className="mt-6"><p className="text-xl font-bold italic leading-8 text-blue">{AUTOMOBILE.tagline}</p></Reveal>
          </div>
        </div>
        <div className="mt-16">
          <MicroLabel>Our automotive customers &amp; segments</MicroLabel>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {AUTOMOBILE.segments.map((segment) => (
              <div key={segment.label} className="rounded-md border border-hairline bg-cool p-6 shadow-xs">
                <h3 className="text-lg font-bold leading-7 text-navy">{segment.label}</h3>
                <ul className="mt-4 space-y-2">
                  {segment.items.map((name) => (
                    <li key={name} className="flex items-start gap-3 text-[1.02rem] font-semibold leading-7 text-steel"><Check className="mt-1.5 h-4 w-4 shrink-0 text-red" />{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6"><CustomerStrip label="Customer names" names={AUTOMOBILE.customers} /></div>
        </div>
        <div className="mt-16">
          <MicroLabel>Key automotive products — application-wise</MicroLabel>
          <Tabs defaultValue="Engine & Powertrain" className="mt-6">
            <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto bg-transparent p-0 [scrollbar-width:none]">
              {AUTOMOBILE.applications.map((app) => <TabsTrigger key={app.label} value={app.label} className="min-h-12 rounded-md border border-hairline bg-cool px-5 text-navy data-[state=active]:border-blue data-[state=active]:bg-navy data-[state=active]:text-primary-foreground">{app.label}</TabsTrigger>)}
            </TabsList>
            {AUTOMOBILE.applications.map((app) => <TabsContent key={app.label} value={app.label} className="mt-5 rounded-md border border-hairline bg-cool p-6"><ItemGrid items={app.products} columns={2} /></TabsContent>)}
          </Tabs>
        </div>
        <div className="mt-16 rounded-md border border-blue/20 bg-cool p-7 lg:p-10">
          <MicroLabel>Rubber &amp; plastic manufacturing capability</MicroLabel>
          <h3 className="mt-5 text-2xl leading-9 text-navy sm:text-3xl">{AUTOMOBILE.capabilityHeadline}</h3>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-steel">{AUTOMOBILE.capabilityCopy}</p>
          <div className="mt-8"><ItemGrid items={AUTOMOBILE.capabilities} /></div>
        </div>
        <div className="mt-16">
          <MicroLabel>Why Arul Polymers for automotive applications?</MicroLabel>
          <div className="mt-6"><DetailGrid items={AUTOMOBILE.strengths} /></div>
        </div>
        <div className="mt-12"><MicroLabel>Quality</MicroLabel><div className="mt-6"><ItemGrid items={AUTOMOBILE.quality} /></div></div>
        <ClosingBar>{AUTOMOBILE.closing}</ClosingBar>
      </div>
    </section>
  );
}

function MiningSection() {
  const [active, setActive] = useState(0);
  const category = MINING.categories[active] ?? MINING.categories[0];
  if (!category) return null;
  return (
    <section id="mining" className="industry-section mining-surface scroll-mt-32 overflow-hidden py-20 lg:py-28">
      <div className="mining-flow" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <IndustryHeading number="02" label="Mining & Mineral Processing" titleClassName="mining-main-title" title={<><span className="block whitespace-nowrap">Engineered Rubber Solutions</span><span className="block whitespace-nowrap">for Mining &amp; Mineral Processing.</span></>} copy={MINING.overview} />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-steel">{MINING.subheading}</p></Reveal>
          </div>
          <Reveal className="industry-image-frame mining-wipe"><img src={INDUSTRY_IMAGES.mining} alt="Mining haul equipment in a mineral processing environment" className="h-full w-full object-cover" /></Reveal>
        </div>
        <div className="mt-10 space-y-5">
          <Note>{MINING.focus}</Note>
          <Note>{MINING.experience}</Note>
        </div>
        <div className="mt-14">
          <MicroLabel>Our key product solutions</MicroLabel>
          <div className="mt-6 grid gap-5 lg:grid-cols-[320px_1fr]">
            <div role="tablist" aria-label="Mining solution categories" className="flex gap-2 overflow-x-auto lg:flex-col">
              {MINING.categories.map((item, index) => <Button key={item.label} type="button" variant={active === index ? "default" : "outline"} onClick={() => setActive(index)} role="tab" aria-selected={active === index} className="min-h-14 shrink-0 justify-between text-left lg:w-full">{item.label}<ChevronRight /></Button>)}
            </div>
            <div role="tabpanel" className="min-h-64 rounded-md border border-navy/12 bg-background/90 p-6 shadow-sm lg:p-8">
              <p className="label-micro text-red">{category.label}</p>
              <div className="mt-6"><DetailGrid items={category.items} columns={2} /></div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ChipRow label="Applications" items={MINING.applications} />
          <div className="grid gap-5">
            <ChipRow label="Industries served" items={MINING.industriesServed} />
            <ChipRow label="Global reach" items={MINING.globalReach} />
          </div>
        </div>
        <CustomerStrip label="Industries & customers" names={MINING.customers} />
        <div className="mt-8 space-y-5">
          <Note>{MINING.reachNote}</Note>
          <Note>{MINING.purpose}</Note>
        </div>
        <ClosingBar>{MINING.closing}</ClosingBar>
      </div>
    </section>
  );
}

function PotableWaterSection() {
  return (
    <section id="potable-water" className="industry-section water-surface scroll-mt-32 overflow-hidden py-20 lg:py-28">
      <div className="water-lines" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <IndustryHeading number="03" label="Potable Water" titleClassName="water-main-title" title={<><span className="block whitespace-nowrap">Reliable Rubber Sealing Solutions</span><span className="block whitespace-nowrap">for Potable Water Applications.</span></>} copy={POTABLE_WATER.overview} />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-steel">{POTABLE_WATER.focus}</p></Reveal>
            <Reveal delay={220} className="mt-5"><p className="text-lg leading-8 text-steel">{POTABLE_WATER.detailNote}</p></Reveal>
          </div>
          <Reveal className="industry-image-frame water-reveal"><img src={INDUSTRY_IMAGES.potableWater} alt="Potable drinking water application" className="h-full w-full object-cover" /></Reveal>
        </div>
        <div className="mt-14"><MicroLabel>Our products</MicroLabel><div className="mt-6"><DetailGrid items={POTABLE_WATER.products} /></div></div>
        <div className="mt-12"><MicroLabel>Potable water applications</MicroLabel><div className="mt-6"><ItemGrid items={POTABLE_WATER.applications} /></div></div>
        <div className="mt-12 grid items-start gap-6 rounded-md border border-blue/25 bg-background p-7 shadow-sm md:grid-cols-[auto_1fr] lg:p-10">
          <ShieldCheck className="h-14 w-14 text-blue" />
          <div>
            <p className="label-micro text-red">Certification &amp; quality</p>
            <h3 className="mt-3 text-2xl text-navy sm:text-3xl">WRAS-Certified Rubber Compounds</h3>
            <p className="mt-3 text-lg leading-8 text-steel">{POTABLE_WATER.wrasCopy}</p>
            <p className="mt-3 text-lg leading-8 text-steel">{POTABLE_WATER.wrasNote}</p>
          </div>
        </div>
        <div className="mt-12">
          <MicroLabel>Industry experience</MicroLabel>
          <div className="mt-5"><Note>{POTABLE_WATER.experienceCopy}</Note></div>
          <CustomerStrip label="Customers & projects" names={POTABLE_WATER.experience} />
        </div>
        <div className="mt-12"><MicroLabel>Why Arul Polymers?</MicroLabel><div className="mt-6"><ItemGrid items={POTABLE_WATER.strengths} /></div></div>
        <ClosingBar>{POTABLE_WATER.closing}</ClosingBar>
      </div>
    </section>
  );
}

function AerospaceSection() {
  return (
    <section id="aerospace-defence" className="industry-section aerospace-surface scroll-mt-32 overflow-hidden py-20 lg:py-28">
      <div className="radar-lines" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="industry-image-frame radial-reveal"><img src={INDUSTRY_IMAGES.aerospace} alt="Fighter aircraft representing aerospace and defence applications" className="h-full w-full object-cover" /></Reveal>
          <div>
            <IndustryHeading number="04" label="Aerospace & Defence" titleClassName="aerospace-main-title" title={<><span className="block whitespace-nowrap">Precision Rubber &amp; Plastic</span><span className="block whitespace-nowrap">Components for Aerospace</span><span className="block whitespace-nowrap">&amp; Defence Applications.</span></>} copy={AEROSPACE.overview} />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-steel">{AEROSPACE.focus}</p></Reveal>
            <CustomerStrip label="Aerospace & defence customers" names={AEROSPACE.customers} />
          </div>
        </div>
        <div className="mt-14"><MicroLabel>Our product capabilities</MicroLabel><div className="mt-6"><DetailGrid items={AEROSPACE.productCapabilities} /></div></div>
        <Tabs defaultValue="Sealing Solutions" className="mt-14">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-2 lg:grid-cols-4">{AEROSPACE.panels.map((panel) => <TabsTrigger key={panel.label} value={panel.label} className="min-h-14 rounded-md border border-hairline bg-background px-4 text-navy data-[state=active]:border-blue data-[state=active]:bg-navy data-[state=active]:text-primary-foreground">{panel.label}</TabsTrigger>)}</TabsList>
          {AEROSPACE.panels.map((panel) => <TabsContent key={panel.label} value={panel.label} className="mt-5 rounded-md border border-hairline bg-background p-7"><ItemGrid items={panel.items} columns={2} /></TabsContent>)}
        </Tabs>
        <div className="mt-12"><MicroLabel>Our strengths</MicroLabel><div className="mt-6"><ItemGrid items={AEROSPACE.strengths} /></div></div>
        <div className="mt-12">
          <MicroLabel>Engineering for reliability</MicroLabel>
          <div className="mt-5"><Note>{AEROSPACE.reliabilityCopy}</Note></div>
        </div>
        <ClosingBar>{AEROSPACE.closing}</ClosingBar>
      </div>
    </section>
  );
}

function OilGasSection() {
  return (
    <section id="oil-gas" className="industry-section oil-surface scroll-mt-32 overflow-hidden py-20 text-primary-foreground lg:py-28">
      <div className="pressure-lines" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <IndustryHeading light number="05" label="Oil & Gas" titleClassName="oil-main-title" title={<><span className="block whitespace-nowrap">Precision Sealing for Critical</span><span className="block whitespace-nowrap">Oil &amp; Gas Applications.</span></>} copy={OIL_GAS.overview} />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-primary-foreground/75">{OIL_GAS.focus}</p></Reveal>
            <CustomerStrip dark label="Customers" names={OIL_GAS.customers} />
            <Reveal delay={220} className="mt-6"><p className="text-lg leading-8 text-primary-foreground/75">{OIL_GAS.customerCopy}</p></Reveal>
          </div>
          <Reveal className="industry-image-frame pressure-reveal"><img src={INDUSTRY_IMAGES.oilGas} alt="Oil and gas platform and pipeline infrastructure" className="h-full w-full object-cover" /></Reveal>
        </div>
        <div className="mt-14"><MicroLabel tone="light">Key products &amp; applications</MicroLabel><div className="mt-6"><DetailGrid dark items={OIL_GAS.products} /></div></div>
        <div className="mt-12"><MicroLabel tone="light">Our strengths</MicroLabel><div className="mt-6"><ItemGrid dark items={OIL_GAS.strengths} /></div></div>
        <div className="mt-12">
          <MicroLabel tone="light">Serving critical Oil &amp; Gas applications</MicroLabel>
          <div className="mt-5"><Note dark>{OIL_GAS.serviceCopy}</Note></div>
        </div>
        <ClosingBar dark>{OIL_GAS.closing}</ClosingBar>
      </div>
    </section>
  );
}

function AgricultureSection() {
  return (
    <section id="agriculture" className="industry-section agriculture-surface scroll-mt-32 overflow-hidden py-20 lg:py-28">
      <div className="agri-lines" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="industry-image-frame agriculture-reveal"><img src={INDUSTRY_IMAGES.agriculture} alt="Agricultural tractor working in a field" className="h-full w-full object-cover" /></Reveal>
          <div>
            <IndustryHeading number="06" label="Agriculture" titleClassName="agri-main-title" title={<><span className="block whitespace-nowrap">Reliable Rubber &amp; Plastic</span><span className="block whitespace-nowrap">Components for Agriculture</span><span className="block whitespace-nowrap">and Agro-Processing.</span></>} copy={AGRICULTURE.overview} />
            <Reveal delay={170} className="mt-5"><p className="text-lg leading-8 text-steel">{AGRICULTURE.focus}</p></Reveal>
          </div>
        </div>
        <div className="mt-14"><MicroLabel>Our agricultural industry components</MicroLabel><div className="mt-6"><DetailGrid items={AGRICULTURE.components} /></div></div>
        <div className="mt-12"><ChipRow label="Applications" items={AGRICULTURE.applications} /></div>
        <div className="mt-12"><MicroLabel>Our strengths</MicroLabel><div className="mt-6"><ItemGrid items={AGRICULTURE.strengths} /></div></div>
        <ClosingBar>{AGRICULTURE.closing}</ClosingBar>
      </div>
    </section>
  );
}


export function IndustriesPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start" }), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav solid />
      <main>
        <Hero />
        <IndustryNav />
        <AutomobileSection />
        <MiningSection />
        <PotableWaterSection />
        <AerospaceSection />
        <OilGasSection />
        <AgricultureSection />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}