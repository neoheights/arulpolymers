import { createFileRoute, Link } from "@tanstack/react-router";
import certIsoU1 from "@/assets/site/cert_iso-u1.jpg";
import certIatfU1 from "@/assets/site/cert_iatf-u1.jpg";
import certIsoU2 from "@/assets/site/cert_iso-u2.jpg";
import certIatfU2F from "@/assets/site/cert_iatf-u2-front.jpg";
import certIatfU2B from "@/assets/site/cert_iatf-u2-back.jpg";
import certWras from "@/assets/site/cert_wras.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import { Page, PageHero, Section, SectionHead, PageCta } from "@/components/site/PageShell";
import { Arrow, MicroLabel, Reveal } from "@/components/site/primitives";
import { CertLightbox } from "@/components/site/CertLightbox";
import { useState } from "react";

const TITLE = "Standards | Arul Polymers Pvt. Ltd. — International Quality Standards";
const DESC =
  "Arul Polymers measures up to international quality standards: testing parameters that meet the most stringent standards for a wide global clientele.";

export const Route = createFileRoute("/quality/standards")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://arul-polymer-engineering.lovable.app/quality/standards",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://arul-polymer-engineering.lovable.app/quality/standards" },
    ],
  }),
  component: StandardsPage,
});

const DOCS = [
  { src: certIsoU1, t: "ISO 9001:2015", s: "Unit 1 — TUV SUD South Asia Pvt Ltd" },
  { src: certIatfU1, t: "IATF 16949", s: "Unit 1 — TUV SUD South Asia Pvt Ltd" },
  { src: certIsoU2, t: "ISO 9001:2015", s: "Unit 2 — TUV SUD South Asia Pvt Ltd" },
  { src: certIatfU2F, t: "IATF 16949 (front)", s: "Unit 2 — TUV SUD South Asia Pvt Ltd" },
  { src: certIatfU2B, t: "IATF 16949 (back)", s: "Unit 2 — TUV SUD South Asia Pvt Ltd" },
  { src: certWras, t: "WRAS Approval", s: "NR80E Ebonite — Drinking water application" },
];

function StandardsPage() {
  const [certOpen, setCertOpen] = useState<number | null>(null);
  return (
    <Page>
      <PageHero
        eyebrow="Quality"
        index="Standards"
        title={
          <>
            Measured against
            <br />
            global standards.
          </>
        }
        statement="Our testing parameters are spot on and meet the most stringent standards."
        image={qualityLab}
        imageAlt="Instrument-led inspection of engineered rubber components"
        layout="stack"
        tone="dark"
      />

      {/* Statement */}
      <Section>
        <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHead
            index="01"
            label="Standards Statement"
            title="Measuring up to international quality standards."
          />
          <div className="space-y-6">
            <Reveal>
              <p className="text-2xl leading-[1.3] font-bold text-navy sm:text-[1.75rem]">
                The fact that we cater to a wide global clientele entitles that our quality standards
                are on par with the best.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-steel">
                Our testing parameters are spot on and meet the most stringent standards.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-navy/12 pt-8">
                {["IS", "ASTM", "DIN", "Customer Requirements"].map((s) => (
                  <span
                    key={s}
                    className="leading-none uppercase text-navy italic"
                    style={{ fontSize: "clamp(1.25rem, 2.4vw, 2.1rem)", fontWeight: 700 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Certification documents */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead
            index="02"
            label="Certifications"
            title="Documented and independently certified."
          />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((d, i) => (
              <Reveal key={d.t + i} delay={i * 60}>
                <figure className="rounded-2xl group border border-navy/12 bg-white p-4">
                  <button
                    type="button"
                    onClick={() => setCertOpen(i)}
                    aria-label={`Zoom ${d.t}`}
                    className="relative block w-full cursor-zoom-in overflow-hidden bg-cool outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
                  >
                    <img
                      src={d.src}
                      alt={`${d.t} certificate — ${d.s}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-contain transition-transform duration-[900ms] group-hover:scale-[1.025]"
                    />
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-blue/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:anim-scanline" />
                    <span className="label-micro pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-navy/85 px-3 py-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Click to zoom
                    </span>
                  </button>
                  <figcaption className="mt-5 flex items-end justify-between gap-4 border-t border-navy/10 pt-5">
                    <div>
                      <h3 className="text-base not-italic text-navy">{d.t}</h3>
                      <p className="label-micro mt-2 text-steel">{d.s}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCertOpen(i)}
                      className="label-micro inline-flex shrink-0 items-center gap-2 text-blue transition-colors hover:text-red"
                    >
                      View <Arrow className="w-4" />
                    </button>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" className="py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative flex flex-wrap items-end justify-between gap-8">
          <div>
            <MicroLabel tone="light">Related</MicroLabel>
            <h2 className="mt-5" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
              See how quality is engineered in.
            </h2>
          </div>
          <Link to="/quality" className="btn-outline-light group">
            Quality Overview{" "}
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Section>

      <PageCta />

      <CertLightbox
        items={DOCS}
        index={certOpen}
        onSelect={setCertOpen}
        onClose={() => setCertOpen(null)}
      />
    </Page>
  );
}
