import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AEROSPACE } from "@/lib/industries-data";
import { AEROSPACE_IMAGES } from "@/lib/aerospace-products";
import aerospaceHero from "@/assets/ind-aerospace-new.png.asset.json";
import { Page, Section } from "./PageShell";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Arrow, MicroLabel, Reveal } from "./primitives";

function scrollToProduct(id: string) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
}

export function AerospaceProductsPage() {
  return (
    <Page>
      <section className="automobile-hero">
        <img src={aerospaceHero.url} alt="Aerospace and defence engineering" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/35" />
        <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-50" />
        <div className="shell relative flex min-h-[620px] items-end py-16 lg:min-h-[680px] lg:py-20">
          <div className="max-w-4xl text-primary-foreground">
            <Reveal><MicroLabel tone="light">Products / Aerospace & Defence</MicroLabel></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                <span className="block">Precision Components.</span>
                <span className="mt-2 block">Engineered for Critical Applications.</span>
              </h1>
            </Reveal>
            <Reveal delay={130}><p className="mt-7 max-w-2xl text-base leading-[1.8] text-primary-foreground/80 sm:text-lg">{AEROSPACE.overview}</p></Reveal>
            <Reveal delay={170}><Button size="lg" className="mt-9" onClick={() => scrollToProduct("aerospace-defence")}>Explore components <Arrow /></Button></Reveal>
          </div>
        </div>
      </section>

      <Section id="aerospace-defence" tone="white" className="automobile-product-section scroll-mt-28">
        <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0"><ApprovedProductGallery name="Aerospace & Defence" images={AEROSPACE_IMAGES} /></Reveal>
          <Reveal delay={90} className="min-w-0">
            <MicroLabel tone="red">Products</MicroLabel>
            <h2 className="mt-5 text-3xl leading-[1.1] text-navy lg:text-5xl">Aerospace & Defence</h2>
            <p className="product-description mt-6 text-base sm:text-lg">{AEROSPACE.overview}</p>
            <Link to="/contact" search={{ subject: "Enquiry — Aerospace & Defence" }} className="btn-navy group mt-8">
              Enquire about Aerospace & Defence <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </Section>

      <section className="aero-trust bg-cool py-12">
        <div className="shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div><MicroLabel>Customer References</MicroLabel><p className="mt-3 text-base text-steel">Aerospace & Defence sector customers</p></div>
          <div className="flex flex-wrap gap-3">{AEROSPACE.customers.map((customer) => <span key={customer} className="aero-trust-name">{customer}</span>)}</div>
        </div>
      </section>

      <section className="aero-closing bg-navy-deep py-16 text-primary-foreground lg:py-20">
        <div className="aero-closing-rings" aria-hidden="true" />
        <div className="shell relative grid items-end gap-10 lg:grid-cols-[1.2fr_auto]">
          <div><MicroLabel tone="light">Aerospace & Defence</MicroLabel><h2 className="mt-6 text-[clamp(2.2rem,4.6vw,4.8rem)] leading-none">Engineering for reliability.</h2><p className="mt-6 max-w-3xl text-base leading-[1.8] text-primary-foreground/70">{AEROSPACE.closing}</p></div>
          <Link to="/contact" className="btn-red group">Discuss your requirement <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link>
        </div>
      </section>
    </Page>
  );
}