import { Link } from "@tanstack/react-router";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Button } from "@/components/ui/button";
import { OIL_GAS } from "@/lib/industries-data";
import { OIL_GAS_IMAGES } from "@/lib/oil-gas-products";
import { Page } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";

const HERO_COPY = "Rubber parts play a crucial role in the oil and gas industry, where they are used in a wide range of sealing, insulating, and protective applications. These parts must withstand harsh environments, including high pressures, extreme temperatures, and aggressive chemicals such as hydrocarbons, hydrogen sulfide (H₂S), carbon dioxide (CO₂), and drilling fluids.";
function scrollToProducts() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("oil-gas-products")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
}

export function OilGasProductsPage() {
  const heroImage = OIL_GAS_IMAGES[0];
  return <Page>
    <section className="oil-products-hero">
      {heroImage && <img src={heroImage} alt="Arul Polymers Oil and Gas sealing components" className="oil-hero-image" loading="eager" />}
      <div className="oil-hero-veil" aria-hidden="true" /><div className="oil-grid" aria-hidden="true" /><div className="oil-pressure-lines" aria-hidden="true"><span /><span /><span /></div>
      <div className="shell relative flex min-h-[660px] items-center py-16 lg:min-h-[720px]"><div className="max-w-4xl"><div className="anim-hero-rise"><MicroLabel tone="light">Products / Oil & Gas</MicroLabel></div><h1 className="oil-hero-title mt-7 text-primary-foreground"><span className="mask-line"><span className="block anim-hero-line">Reliable Sealing for</span></span><span className="mask-line"><span className="mt-2 block anim-hero-line [animation-delay:100ms]">Harsh Environments.</span></span></h1><p className="mt-7 max-w-3xl text-base leading-[1.8] text-primary-foreground/76 sm:text-lg">{HERO_COPY}</p><Button size="lg" className="mt-9" onClick={scrollToProducts}>Explore products <Arrow /></Button></div></div>
    </section>

    <section id="oil-gas-products" className="oil-product-section scroll-mt-28 bg-background">
      <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="min-w-0"><div className="oil-gallery"><ApprovedProductGallery name="Oil & Gas Products" images={OIL_GAS_IMAGES} /></div></Reveal>
        <Reveal delay={80} className="min-w-0">
          <MicroLabel tone="red">Products</MicroLabel>
          <h2 className="mt-5 text-3xl leading-[1.1] text-navy lg:text-5xl">Oil & Gas Products</h2>
          <p className="product-description mt-6 text-base sm:text-lg">{HERO_COPY}</p>
          <Link to="/contact" search={{ subject: "Enquiry — Oil & Gas Products" }} className="btn-navy group mt-8">Enquire about Oil & Gas products <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link>
        </Reveal>
      </div>
    </section>

    <section className="bg-cool py-12"><div className="shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><MicroLabel>Customer References</MicroLabel><p className="mt-3 text-base text-steel">Oil & Gas sector customers</p></div><div className="flex flex-wrap gap-3">{OIL_GAS.customers.map((customer) => <span key={customer} className="oil-trust-name">{customer}</span>)}</div></div></section>
    <section className="oil-closing bg-navy-deep py-16 text-primary-foreground lg:py-20"><div className="oil-closing-rings" aria-hidden="true" /><div className="shell relative grid items-end gap-10 lg:grid-cols-[1.2fr_auto]"><div><MicroLabel tone="light">Oil & Gas</MicroLabel><h2 className="mt-6 text-[clamp(2.2rem,4.6vw,4.8rem)] leading-none">Discuss your Oil & Gas application.</h2><p className="mt-6 max-w-3xl text-base leading-[1.8] text-primary-foreground/70">{OIL_GAS.serviceCopy}</p></div><Link to="/contact" search={{ subject: "Oil & Gas component enquiry" }} className="btn-red group">Enquire about a component <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link></div></section>
  </Page>;
}