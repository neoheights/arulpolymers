import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Page, Section } from "@/components/site/PageShell";
import { Arrow, MicroLabel, Reveal } from "@/components/site/primitives";
import astmAsset from "@/assets/standards/astm.jpg.asset.json";
import bsiAsset from "@/assets/standards/bsi.png.asset.json";
import dinAsset from "@/assets/standards/din.jpg.asset.json";
import halAsset from "@/assets/standards/hal.jpg.asset.json";
import isiAsset from "@/assets/standards/isi.webp.asset.json";
import jisAsset from "@/assets/standards/jis.webp.asset.json";
import saeAsset from "@/assets/standards/sae.jpg.asset.json";

const TITLE = "Engineering Standards | Arul Polymers Pvt. Ltd.";
const DESC =
  "Reference standards used for technical applications at Arul Polymers, shown through ASTM, BSI, DIN, HAL, ISI, JIS and SAE alongside NFL, DTD, MIL and MSRR.";
const CANONICAL = "https://arulpolymers.capsley.site/facilities/standards";

const STANDARDS = ["NFL", "DTD", "MIL", "MSRR"] as const;
const STANDARD_IMAGES = [
  { name: "ASTM", src: astmAsset.url },
  { name: "BSI", src: bsiAsset.url },
  { name: "DIN", src: dinAsset.url },
  { name: "HAL", src: halAsset.url },
  { name: "ISI", src: isiAsset.url },
  { name: "JIS", src: jisAsset.url },
  { name: "SAE", src: saeAsset.url },
] as const;

export const Route = createFileRoute("/facilities/standards")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: StandardsPage,
});

function StandardsOrbit() {
  return (
    <div className="standards-orbit" aria-label="Standards reference orbit">
      <div className="standards-orbit-glow" aria-hidden="true" />
      <div className="standards-orbit-crosshair" aria-hidden="true" />
      <div className="standards-orbit-ring standards-orbit-ring-outer" aria-hidden="true" />
      <div className="standards-orbit-ring standards-orbit-ring-mid" aria-hidden="true" />
      <div className="standards-orbit-ring standards-orbit-ring-inner" aria-hidden="true" />
      <div className="standards-orbit-ticks" aria-hidden="true" />

      <div className="standards-logo-track">
        {STANDARD_IMAGES.map((standard, index) => (
          <div
            key={standard.name}
            className="standards-logo-position"
            style={{ "--standard-angle": `${index * (360 / STANDARD_IMAGES.length)}deg` } as CSSProperties}
          >
            <div className="standards-logo-badge">
              <img src={standard.src} alt={`${standard.name} standard`} />
              <span>{standard.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="standards-orbit-track" aria-hidden="true">
        {STANDARDS.map((standard, index) => (
          <div key={standard} className={`standards-orbit-position standards-orbit-position-${index + 1}`}>
            <div className="standards-orbit-badge">
              <strong>{standard}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="standards-orbit-core">
        <span className="label-micro text-blue">Recognised Specifications</span>
        <h1>STANDARDS</h1>
        <span className="standards-orbit-rule" aria-hidden="true" />
        <p>Reference standards used for technical applications.</p>
      </div>

      <span className="standards-datum standards-datum-a" aria-hidden="true" />
      <span className="standards-datum standards-datum-b" aria-hidden="true" />
      <span className="standards-datum standards-datum-c" aria-hidden="true" />
    </div>
  );
}


function StandardsPage() {
  return (
    <Page>
      <section className="standards-hero">
        <div className="pointer-events-none absolute inset-0 grid-tech opacity-70" />
        <div className="standards-hero-radial" aria-hidden="true" />
        <div className="shell relative py-12 sm:py-16 lg:py-20">
          <Reveal>
            <MicroLabel tone="red">Facilities / Standards</MicroLabel>
          </Reveal>
          <Reveal delay={90} className="mt-4">
            <StandardsOrbit />
          </Reveal>
        </div>
      </section>

      <Section tone="navy" className="py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <MicroLabel tone="light">Technical Enquiry</MicroLabel>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-6 text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.03]">
                Discuss a specification requirement.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link to="/contact" className="btn-red group">
              Discuss a Requirement
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </Section>

    </Page>
  );
}