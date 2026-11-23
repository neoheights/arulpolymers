import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Button } from "@/components/ui/button";
import { POTABLE_WATER_PRODUCTS, type PotableWaterProduct } from "@/lib/potable-water-products";
import { cn } from "@/lib/utils";
import { Page } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import heroWaterBg from "@/assets/products/potable-water/hero-water-bg.jpg";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function WaterGallery({ product }: { product: PotableWaterProduct }) {
  return <div className="water-gallery"><ApprovedProductGallery name={product.name} images={product.images} /></div>;
}

function ProductCopy({ product }: { product: PotableWaterProduct }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="min-w-0">
      <MicroLabel tone="red">{product.number} / Potable Water</MicroLabel>
      <h2 className="mt-5 text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.02] text-navy">{product.name}</h2>
      {product.certification && (
        <div className="water-certification mt-6">
          <ShieldCheck className="h-6 w-6 text-blue" aria-hidden="true" />
          <span><span className="label-micro block text-blue">Verified certification</span><strong className="mt-1 block text-lg text-navy">{product.certification}</strong></span>
        </div>
      )}
      <div className="water-product-overview mt-6">
        <span className="label-micro text-blue">Product overview</span>
        <p className="product-description mt-3 text-base">{product.description}</p>
        {product.details.length > 0 && (
          <>
            <div id={`${product.id}-details`} className={cn("water-product-details", detailsOpen && "is-open")} aria-hidden={!detailsOpen}>
              <div>
                <div className="space-y-4 border-t border-navy/10 pt-5">
                  {product.details.map((paragraph) => <p key={paragraph} className="product-description text-base">{paragraph}</p>)}
                </div>
              </div>
            </div>
            <Button variant="ghost" className="mt-3 h-auto px-0 py-2 text-blue hover:bg-transparent" onClick={() => setDetailsOpen((open) => !open)} aria-expanded={detailsOpen} aria-controls={`${product.id}-details`}>
              {detailsOpen ? "Hide details" : "View complete details"}
              <ChevronDown className={cn("transition-transform duration-300", detailsOpen && "rotate-180")} />
            </Button>
          </>
        )}
      </div>
      <div className="mt-6 border-l-2 border-red pl-5">
        <span className="label-micro text-blue">Approved application</span>
        <p className="mt-2 text-base leading-[1.75] text-navy">{product.application}</p>
      </div>
      <Link to="/contact" search={{ subject: `Enquiry — ${product.name}` }} className="btn-navy group mt-8">
        Enquire about this product <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

function ProductNavigator() {
  return (
    <section id="potable-product-selector" className="product-top-nav scroll-mt-24">
      <div className="shell py-8 lg:py-10">
        <Reveal><MicroLabel>Product Navigator</MicroLabel></Reveal>
        <nav className="mt-5 grid gap-2 sm:grid-cols-3" aria-label="Potable Water products">
          {POTABLE_WATER_PRODUCTS.map((product) => (
            <Button key={product.id} variant="ghost" className="product-top-nav-link h-auto min-h-14 w-full justify-start whitespace-normal text-left" onClick={() => scrollToId(product.id)}>
              <span className="label-micro text-blue">{product.number}</span>
              <span>{product.name}</span>
            </Button>
          ))}
        </nav>
      </div>
    </section>
  );
}

function MobileSelector() {
  return (
    <div className="sticky top-16 z-30 border-y border-navy/10 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <label className="sr-only" htmlFor="potable-product-select">Potable Water product</label>
      <select id="potable-product-select" defaultValue="" onChange={(event) => { if (event.target.value) scrollToId(event.target.value); }} className="mx-auto block min-h-12 w-full max-w-2xl rounded-md border border-navy/20 bg-white px-3 text-base font-semibold text-navy">
        <option value="" disabled>Select a product</option>
        {POTABLE_WATER_PRODUCTS.map((product) => <option key={product.id} value={product.id}>{product.number} — {product.name}</option>)}
      </select>
    </div>
  );
}

export function PotableWaterProductsPage() {
  return (
    <Page>
      <section className="water-products-hero">
        <img src={heroWaterBg} alt="" aria-hidden="true" width={1920} height={1024} className="water-hero-bg" />
        <div className="water-hero-bg-veil" aria-hidden="true" />
        <div className="water-blueprint absolute inset-0" aria-hidden="true" />
        <div className="water-flow-lines" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell relative flex min-h-[480px] items-center py-16 lg:py-20">
          <div className="z-10 max-w-3xl">
            <div className="anim-hero-rise"><MicroLabel>Products / Potable Water</MicroLabel></div>
            <h1 className="mt-7 text-[clamp(2.5rem,5.8vw,5.7rem)] leading-[.96] text-navy">
              <span className="mask-line"><span className="block anim-hero-line">Precision Sealing for</span></span>
              <span className="mask-line"><span className="block anim-hero-line [animation-delay:100ms]">Water Infrastructure.</span></span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-[1.8] text-steel sm:text-lg">Arul Polymers manufactures high-performance moulded rubber components and sealing solutions for potable water and water infrastructure applications.</p>
            <Button size="lg" className="mt-9 anim-hero-rise [animation-delay:220ms]" onClick={() => scrollToId("potable-product-selector")}>Explore products <Arrow /></Button>
          </div>
        </div>
      </section>

      <ProductNavigator />
      <MobileSelector />
      <div className="automobile-products-flow">
        {POTABLE_WATER_PRODUCTS.map((product, index) => (
          <section key={product.id} id={product.id} className={cn("water-product-section scroll-mt-28 py-16 lg:py-24", index % 2 ? "bg-cool" : "bg-background")} data-potable-product={product.id}>
            <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={index % 2 ? "lg:order-2" : ""}><WaterGallery product={product} /></Reveal>
              <Reveal delay={80} className={index % 2 ? "lg:order-1" : ""}><ProductCopy product={product} /></Reveal>
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
}