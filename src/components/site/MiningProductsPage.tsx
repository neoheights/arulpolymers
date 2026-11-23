import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Button } from "@/components/ui/button";
import miningHero from "@/assets/ind-mining-new.png.asset.json";
import { MINING_CATEGORIES, MINING_PRODUCTS, type MiningCategory, type MiningProduct } from "@/lib/mining-products";
import { cn } from "@/lib/utils";
import { Page, Section } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MissingImage({ name }: { name: string }) {
  return (
    <div className="mining-placeholder">
      <ImageIcon className="h-9 w-9 text-blue" aria-hidden="true" />
      <p className="mt-4 font-semibold text-navy">Product image pending</p>
      <p className="mt-2 max-w-xs text-center text-base leading-relaxed text-steel">Approved photography for {name} has not yet been supplied.</p>
    </div>
  );
}

function MiningGallery({ product }: { product: MiningProduct }) {
  if (!product.images.length) return <MissingImage name={product.name} />;
  return <div className="mining-gallery"><ApprovedProductGallery name={product.name} images={product.images} /></div>;
}

function ProductCopy({ product }: { product: MiningProduct }) {
  const category = MINING_CATEGORIES.find((item) => item.id === product.category);
  return (
    <div className="min-w-0">
      <MicroLabel tone="red">{product.number} / {category?.shortTitle}</MicroLabel>
      <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.03] text-navy">{product.name}</h2>
      <p className="product-description mt-6 text-base sm:text-lg">
        {product.description ?? "Detailed product information is awaiting client confirmation."}
      </p>
      {product.details?.map((paragraph) => <p key={paragraph} className="product-description mt-4 text-base">{paragraph}</p>)}
      {product.sourceNote && <p className="mt-5 border-l-2 border-red pl-4 text-sm leading-relaxed text-steel">{product.sourceNote}</p>}
      <Link to="/contact" search={{ subject: `Enquiry — ${product.name}` }} className="btn-navy group mt-8">
        Enquire about this product <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

function ProductSection({ product, index }: { product: MiningProduct; index: number }) {
  return (
    <Section id={product.id} tone={index % 2 ? "cool" : "white"} className="mining-product-section scroll-mt-40">
      <div data-mining-product={product.id} data-category={product.category} className="shell relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {index % 2 === 0 ? (
          <><Reveal><MiningGallery product={product} /></Reveal><Reveal delay={90}><ProductCopy product={product} /></Reveal></>
        ) : (
          <><Reveal className="lg:order-2"><MiningGallery product={product} /></Reveal><Reveal delay={90} className="lg:order-1"><ProductCopy product={product} /></Reveal></>
        )}
      </div>
    </Section>
  );
}

function ProductNavigator({ activeProduct }: { activeProduct: string }) {
  const activeCategory = MINING_CATEGORIES.find((category) => category.products.some((product) => product.id === activeProduct)) ?? MINING_CATEGORIES[0];
  const [mobileCategory, setMobileCategory] = useState<MiningCategory["id"]>(activeCategory?.id ?? "material-handling");
  const selectedCategory = MINING_CATEGORIES.find((category) => category.id === mobileCategory) ?? MINING_CATEGORIES[0];

  return (
    <section id="product-explorer" className="mining-navigator scroll-mt-24 bg-white py-14 sm:py-16">
      <div className="shell">
        <Reveal><MicroLabel>Mining Product Index</MicroLabel></Reveal>
        <Reveal delay={70}><h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.8rem)] leading-none text-navy">Explore by category.</h2></Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {MINING_CATEGORIES.map((category) => {
            const image = category.products.find((product) => product.images[0])?.images[0];
            const active = category.id === activeCategory?.id;
            return (
              <Button key={category.id} variant="ghost" className={cn("mining-category-card group h-44 w-full justify-start overflow-hidden p-0 text-left whitespace-normal", active && "is-active")} onClick={() => scrollToId(category.products[0]?.id ?? category.id)} aria-pressed={active}>
                {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
                <span className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy/10" />
                <span className="relative flex h-full w-full flex-col items-start justify-between p-5 text-white">
                  <span className="label-micro text-white/60">{category.number} / {category.products.length} Products</span>
                  <span className="flex w-full items-end justify-between gap-3"><span className="text-lg font-semibold leading-tight">{category.title}</span><Arrow className="shrink-0 text-red" /></span>
                </span>
              </Button>
            );
          })}
        </div>

        <div className="mt-6 hidden border-y border-navy/10 py-4 lg:block">
          <div className="flex flex-wrap gap-2">
            {MINING_PRODUCTS.map((product) => (
              <Button key={product.id} variant="ghost" size="sm" className={cn("mining-product-chip", activeProduct === product.id && "is-active")} onClick={() => scrollToId(product.id)} aria-pressed={activeProduct === product.id}>
                <span>{product.number}</span>{product.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:hidden">
          <label className="sr-only" htmlFor="mining-category-select">Mining category</label>
          <select id="mining-category-select" value={mobileCategory} onChange={(event) => setMobileCategory(event.target.value as MiningCategory["id"])} className="min-h-12 w-full rounded-md border border-navy/20 bg-white px-3 text-base font-semibold text-navy">
            {MINING_CATEGORIES.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
          </select>
          <label className="sr-only" htmlFor="mining-product-select">Mining product</label>
          <select id="mining-product-select" value="" onChange={(event) => { if (event.target.value) scrollToId(event.target.value); }} className="min-h-12 w-full rounded-md border border-navy/20 bg-white px-3 text-base text-navy">
            <option value="" disabled>Select product</option>
            {selectedCategory?.products.map((product) => <option key={product.id} value={product.id}>{product.number} — {product.name}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
}

export function MiningProductsPage() {
  const [activeProduct, setActiveProduct] = useState(MINING_PRODUCTS[0]?.id ?? "");

  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>("[data-mining-product]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const id = visible?.target.getAttribute("data-mining-product");
      if (id) setActiveProduct(id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  let productIndex = 0;
  return (
    <Page>
      <section className="mining-products-hero">
        <img src={miningHero.url} alt="Mining and mineral-processing operation" className="mining-hero-image absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/30" />
        <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-45" />
        <div className="mining-hero-lines" aria-hidden="true" />
        <div className="shell relative flex min-h-[620px] items-end py-16 lg:min-h-[680px] lg:py-20">
          <div className="max-w-4xl text-white">
            <div className="anim-hero-rise"><MicroLabel tone="light">Products / Mining</MicroLabel></div>
            <h1 className="mining-redesign-title mt-7">
              <span className="mask-line"><span className="block anim-hero-line">Engineered for demanding</span></span>
              <span className="mask-line"><span className="mt-2 block anim-hero-line [animation-delay:100ms]">environments.</span></span>
            </h1>
            <Button size="lg" className="mt-9 anim-hero-rise [animation-delay:220ms]" onClick={() => scrollToId("product-explorer")}>Explore mining products <Arrow /></Button>
          </div>
        </div>
      </section>

      <ProductNavigator activeProduct={activeProduct} />
      <div className="mining-products-flow">
        {MINING_CATEGORIES.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-28">
            <div className="mining-category-divider">
              <div className="shell flex flex-wrap items-end justify-between gap-4 py-10">
                <div><MicroLabel tone="blue">Category {category.number}</MicroLabel><h2 className="mt-4 text-[clamp(2rem,4vw,3.8rem)] leading-none text-navy">{category.title}</h2></div>
                <p className="label-micro text-steel">{category.products.length} Products</p>
              </div>
            </div>
            {category.products.map((product) => {
              const section = <ProductSection key={product.id} product={product} index={productIndex} />;
              productIndex += 1;
              return section;
            })}
          </div>
        ))}
      </div>
    </Page>
  );
}