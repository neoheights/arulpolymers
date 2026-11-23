import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Page, Section } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import { Button } from "@/components/ui/button";
import { AUTOMOBILE_PRODUCTS, type AutomobileProduct } from "@/lib/automobile-products";
import { cn } from "@/lib/utils";
import automobileHero from "@/assets/ind-automobiles-new.png.asset.json";

function ProductGallery({ product }: { product: AutomobileProduct }) {
  return <div className="automobile-gallery"><ApprovedProductGallery name={product.name} images={product.images} /></div>;
}

function ProductCopy({ product }: { product: AutomobileProduct }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = Boolean(product.details?.length || product.sections?.length || product.materials?.length);
  return (
    <div className="min-w-0">
      <MicroLabel tone="red">{product.number} / Automobile Component</MicroLabel>
      <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.03] text-navy">{product.name}</h2>
      {product.intro && <p className="product-description mt-6 text-base sm:text-lg">{product.intro}</p>}

      {hasMore && (
        <>
          <Button variant="outline" className="mt-7" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
            {expanded ? "Hide complete details" : "View complete details"}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </Button>
          <div className={cn("automobile-details", expanded && "is-open")}>
            <div className="space-y-7 pt-7">
              {product.details?.map((paragraph) => <p key={paragraph} className="product-description text-base">{paragraph}</p>)}
              {product.sections?.map((section) => (
                <section key={section.title} className="product-description">
                  <h3 className="text-lg not-italic text-navy">{section.title}</h3>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-base leading-[1.8] text-steel">{paragraph}</p>)}
                </section>
              ))}
              {product.materials && (
                <div>
                  <p className="label-micro text-steel">Materials index</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {product.materials.map((material) => (
                      <div key={material.code} className="border border-navy/10 bg-cool p-4">
                        <p className="font-semibold text-blue">{material.code}</p>
                        <p className="mt-1 text-sm font-semibold text-navy">{material.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-steel">{material.property}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}


      <Link to="/contact" search={{ subject: `Enquiry — ${product.name}` }} className="btn-navy group mt-8">
        Enquire about this component <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

function ProductSection({ product, index }: { product: AutomobileProduct; index: number }) {
  return (
    <Section id={product.id} tone={index % 2 ? "cool" : "white"} className="automobile-product-section scroll-mt-28">
      <div className="shell relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {index % 2 === 0 ? (
          <><Reveal><ProductGallery product={product} /></Reveal><Reveal delay={90}><ProductCopy product={product} /></Reveal></>
        ) : (
          <><Reveal className="lg:order-2"><ProductGallery product={product} /></Reveal><Reveal delay={90} className="lg:order-1"><ProductCopy product={product} /></Reveal></>
        )}
      </div>
    </Section>
  );
}

export function AutomobileProductsPage() {
  return (
    <Page>
      <section className="automobile-hero">
        <img src={automobileHero.url} alt="Automobile engineering and component manufacturing" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/35" />
        <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-50" />
        <div className="shell relative flex min-h-[620px] items-end py-16 lg:min-h-[680px] lg:py-20">
          <div className="max-w-4xl text-white">
            <Reveal><MicroLabel tone="light">Products / Automobile</MicroLabel></Reveal>
            <Reveal delay={80}>
              <h1 className="automobile-hero-title mt-7">
                <span className="block whitespace-nowrap">Engineered Components.</span>
                <span className="mt-2 block whitespace-nowrap">Precision in Every Detail.</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <Button size="lg" className="mt-9" onClick={() => document.getElementById("bellows")?.scrollIntoView({ behavior: "smooth" })}>
                Explore components <Arrow />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="product-top-nav scroll-mt-24">
        <div className="shell py-8 lg:py-10">
          <MicroLabel>Product Navigator</MicroLabel>
          <nav className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="Automobile products">
            {AUTOMOBILE_PRODUCTS.map((product) => <Button key={product.id} variant="ghost" className="product-top-nav-link h-auto min-h-14 w-full justify-start whitespace-normal text-left" onClick={() => document.getElementById(product.id)?.scrollIntoView({ behavior: "smooth" })}><span className="label-micro text-blue">{product.number}</span><span>{product.name}</span></Button>)}
          </nav>
        </div>
      </section>

      <div className="automobile-products-flow">
        {AUTOMOBILE_PRODUCTS.map((product, index) => <ProductSection key={product.id} product={product} index={index} />)}
      </div>
    </Page>
  );
}