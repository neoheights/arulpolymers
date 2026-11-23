import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import { GROUPS, PRODUCTS, type ProductGroupId } from "@/lib/products-data";
import { cn } from "@/lib/utils";
import { ApprovedProductGallery } from "./ApprovedProductGallery";

/**
 * Clean product catalogue: three cards per row, each card expands on
 * "Read more" to reveal applications and materials.
 */
export function ProductsShowcase() {
  const [open, setOpen] = useState<string | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<ProductGroupId, typeof PRODUCTS>();
    for (const g of GROUPS) map.set(g.id, PRODUCTS.filter((p) => p.group === g.id));
    return Array.from(map.entries());
  }, []);

  return (
    <div className="shell">
      <SectionHead />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {grouped.map(([groupId, items]) =>
          items.map((p) => {
            const isOpen = open === p.slug;
            const groupLabel = GROUPS.find((g) => g.id === groupId)?.label ?? "";
            return (
              <Reveal key={p.slug}>
                <article
                  id={p.slug}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden border border-navy/12 bg-white transition-shadow duration-300",
                    isOpen ? "shadow-lg shadow-navy/10" : "hover:shadow-md hover:shadow-navy/8",
                  )}
                >
                  <ApprovedProductGallery name={p.name} images={p.images.map((image) => image.src)} />

                  <div className="flex flex-1 flex-col p-6">
                    <MicroLabel tone="red">{groupLabel}</MicroLabel>
                    <h3 className="mt-3 text-lg uppercase not-italic leading-snug text-navy">
                      {p.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{p.summary}</p>

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : p.slug)}
                      aria-expanded={isOpen}
                      aria-controls={`${p.slug}-detail`}
                      className="label-micro group mt-5 flex items-center gap-3 self-start text-navy"
                    >
                      {isOpen ? "Show less" : "Read more"}
                      <Arrow
                        className={cn(
                          "transition-transform duration-300",
                          isOpen ? "-rotate-90" : "group-hover:translate-x-1.5",
                        )}
                      />
                    </button>

                    <div
                      id={`${p.slug}-detail`}
                      hidden={!isOpen}
                      className="anim-page-in mt-5 border-t border-navy/12 pt-5"
                    >
                      <dl className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <dt className="label-micro text-steel">Applications</dt>
                          <dd className="mt-2 space-y-1.5 text-sm text-navy">
                            {p.applications.map((a) => (
                              <div key={a} className="flex items-start gap-2">
                                <span className="mt-2 h-px w-3 shrink-0 bg-blue" />
                                {a}
                              </div>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt className="label-micro text-steel">Compounds</dt>
                          <dd className="mt-2 flex flex-wrap gap-2">
                            {p.materials.map((m) => (
                              <span
                                key={m}
                                className="rounded-2xl label-micro border border-navy/15 px-2.5 py-1.5 text-navy"
                              >
                                {m}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>

                      <Link
                        to="/contact"
                        search={{ subject: `Enquiry — ${p.name}` }}
                        className="btn-navy group mt-5 w-full justify-center"
                      >
                        Enquire about this range{" "}
                        <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          }),
        )}
      </div>

      <Reveal>
        <p className="label-micro mt-8 text-steel">
          {PRODUCTS.length} product categories across {GROUPS.length} application groups
        </p>
      </Reveal>
    </div>
  );
}

function SectionHead() {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="label-micro flex items-center gap-3 text-red">
          <span className="h-px w-8 bg-red" />
          Products <span className="text-steel">/ Range</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className="mt-5 uppercase not-italic leading-[1.05] text-navy"
          style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}
        >
          Product engineering.
          <br />
          Small component. Critical responsibility.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
          Every part we mould is engineered for demanding applications — from pneumatic brake systems
          and suspension seals to aerospace gaskets and food-grade industrial components.
        </p>
      </Reveal>
    </div>
  );
}
