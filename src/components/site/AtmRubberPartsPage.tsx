import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { latestProductImages } from "@/lib/latest-product-images";
import { Page } from "./PageShell";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Arrow, MicroLabel, Reveal } from "./primitives";

const APPROVED_COPY =
  "Rubber parts in an ATM (Automated Teller Machine) play important roles in handling cash and ensuring smooth mechanical operation.";
const atmImages = latestProductImages("atm-rubber-parts", "atm-rubber-parts");
const atmProduct = atmImages[0];

function scrollToProduct() {
  document.getElementById("atm-rubber-parts")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AtmRubberPartsPage() {
  if (!atmProduct) return null;
  return (
    <Page>
      <section className="atm-hero">
        <div className="atm-grid" aria-hidden="true" />
        <div className="atm-traces" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell relative grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[.88fr_1.12fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <Reveal><MicroLabel>Products / ATM</MicroLabel></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-[clamp(3rem,6vw,6.2rem)] leading-[.94] text-navy">
                ATM Rubber
                <span className="block text-blue">Parts.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-[1.8] text-steel sm:text-lg">{APPROVED_COPY}</p>
            </Reveal>
            <Reveal delay={230}>
              <Button size="lg" className="mt-9" onClick={scrollToProduct}>View product <Arrow /></Button>
            </Reveal>
          </div>

          <Reveal delay={100} className="atm-hero-visual">
            <div className="atm-orbit" aria-hidden="true"><span /><span /></div>
            <div className="atm-image-frame">
              <img src={atmProduct} alt="ATM rubber parts for cash handling and mechanical operation" width={1600} height={1200} className="atm-product-image" />
              <div className="atm-image-label"><span>01</span><strong>Cash handling components</strong></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="product-top-nav">
        <div className="shell py-8 lg:py-10"><MicroLabel>Product Navigator</MicroLabel><Button variant="ghost" className="product-top-nav-link mt-5 h-auto min-h-14 w-full justify-start text-left sm:max-w-md" onClick={scrollToProduct}><span className="label-micro text-blue">01</span><span>ATM Rubber Parts</span></Button></div>
      </section>

      <section id="atm-rubber-parts" className="atm-feature scroll-mt-28 bg-background py-16 lg:py-24">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ApprovedProductGallery name="ATM Rubber Parts" images={atmImages} />
          </Reveal>
          <Reveal delay={100}>
            <div>
               <MicroLabel tone="red">01 / ATM Component</MicroLabel>
              <h2 className="mt-5 text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] text-navy">ATM Rubber Parts</h2>
              <p className="product-description mt-6 text-base sm:text-lg">{APPROVED_COPY}</p>
              <Link to="/contact" search={{ subject: "Enquiry — ATM Rubber Parts" }} className="btn-navy group mt-8">
                Enquire about this product <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-14 text-white">
        <div className="shell flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div><MicroLabel tone="light">ATM Applications</MicroLabel><p className="mt-3 text-xl sm:text-2xl">Discuss your component requirement.</p></div>
          <Link to="/contact" search={{ subject: "ATM Rubber Parts requirement" }} className="btn-red group">Contact us <MoveRight className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link>
        </div>
      </section>
    </Page>
  );
}