import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import agricultureImage from "@/assets/ind-agriculture.jpg";
import { AGRICULTURE } from "@/lib/industries-data";
import { AGRICULTURE_PRODUCTS, type AgricultureProduct } from "@/lib/agriculture-products";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Page, Section } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";

function ProductCopy({ product }: { product: AgricultureProduct }) {
  return (
    <div className="min-w-0">
      <MicroLabel tone="red">{product.number} / Agriculture Component</MicroLabel>
      <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.03] text-navy">{product.name}</h2>
      {product.intro && <p className="product-description mt-6 text-base sm:text-lg">{product.intro}</p>}
      <Link to="/contact" search={{ subject: `Enquiry — ${product.name}` }} className="btn-navy group mt-8">
        Enquire about this component <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

function ProductSection({ product, index }: { product: AgricultureProduct; index: number }) {
  const gallery = (
    <div className="automobile-gallery">
      <ApprovedProductGallery name={product.name} images={product.images} />
    </div>
  );
  return (
    <Section id={product.id} tone={index % 2 ? "cool" : "white"} className="automobile-product-section scroll-mt-28">
      <div className="shell relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {index % 2 === 0 ? (
          <>
            <Reveal>{gallery}</Reveal>
            <Reveal delay={90}><ProductCopy product={product} /></Reveal>
          </>
        ) : (
          <>
            <Reveal className="lg:order-2">{gallery}</Reveal>
            <Reveal delay={90} className="lg:order-1"><ProductCopy product={product} /></Reveal>
          </>
        )}
      </div>
    </Section>
  );
}

export function AgricultureProductsPage() {
  const firstProduct = AGRICULTURE_PRODUCTS[0];
  return (
    <Page>
      <section className="automobile-hero">
        <img src={agricultureImage} alt="Agricultural machinery in operation" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/35" />
        <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-50" />
        <div className="shell relative flex min-h-[620px] items-end py-16 lg:min-h-[680px] lg:py-20">
          <div className="max-w-4xl text-primary-foreground">
            <Reveal><MicroLabel tone="light">Products / Agriculture</MicroLabel></Reveal>
            <Reveal delay={80}>
              <h1 className="automobile-hero-title mt-7">
                <span className="block">Engineered Components.</span>
                <span className="mt-2 block">For Agriculture.</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <Button size="lg" className="mt-9" onClick={() => firstProduct && document.getElementById(firstProduct.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                Explore components <Arrow />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="automobile-products-flow">
        {AGRICULTURE_PRODUCTS.map((product, index) => <ProductSection key={product.id} product={product} index={index} />)}
      </div>

      <Section id="agriculture-product-range" tone="cool" className="scroll-mt-28">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[1.5rem] rounded-br-md border border-navy/12 bg-background">
              <img src={agricultureImage} alt="Agriculture and agro-processing application" className="aspect-[4/3] h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div>
              <MicroLabel tone="red">Agriculture</MicroLabel>
              <h2 className="mt-5 text-[clamp(2rem,4vw,4rem)] leading-[1.02] text-navy">Agriculture Product Range</h2>
              <div className="product-description mt-6">
                <p className="text-base sm:text-lg">{AGRICULTURE.overview}</p>
                <p className="mt-4 text-base">{AGRICULTURE.focus}</p>
              </div>
              <p className="mt-6 border-l-2 border-red pl-5 text-sm leading-relaxed text-steel">Additional agriculture product photography and catalogue details are being prepared.</p>
              <Link to="/contact" search={{ subject: "Agriculture product enquiry" }} className="btn-navy group mt-8">
                Enquire about this range <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </Page>
  );
}
