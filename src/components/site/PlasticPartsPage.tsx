import { Link } from "@tanstack/react-router";
import { latestProductImages } from "@/lib/latest-product-images";
import { ApprovedProductGallery } from "./ApprovedProductGallery";
import { Page } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";

const images = latestProductImages("plastic-parts", "plastic-parts");

export function PlasticPartsPage() {
  return <Page>
    <section className="bg-cool pt-24">
      <div className="shell grid min-w-0 grid-cols-1 items-center gap-12 py-16 lg:min-h-[560px] lg:grid-cols-2 lg:py-20">
        <Reveal><div className="min-w-0"><MicroLabel>Products / Plastic Parts</MicroLabel><h1 className="mt-7 text-[clamp(2.8rem,6vw,6rem)] leading-[.96] text-navy">Plastic Parts.</h1><p className="mt-7 max-w-xl text-base leading-[1.8] text-steel sm:text-lg">Engineering plastic components with integrated metal inserts, combining the strength and durability of metals with the lightweight, corrosion-resistant, and design-flexible properties of plastics.</p><Link to="/contact" search={{ subject: "Enquiry — Plastic Parts" }} className="btn-navy group mt-9">Enquire about this range <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link></div></Reveal>
        <Reveal className="min-w-0" delay={90}><ApprovedProductGallery name="Plastic Parts" images={images} /></Reveal>
      </div>
    </section>
  </Page>;
}