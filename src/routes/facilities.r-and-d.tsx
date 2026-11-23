import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import labView from "@/assets/facilities/r-and-d/lab-view.png.asset.json";
import qualityLab from "@/assets/quality-lab.jpg";
import materialMacro from "@/assets/material-macro.jpg";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  ClipImage,
  PageCta,
  TechRule,
} from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const TITLE = "Research & Development | Arul Polymers Pvt. Ltd.";
const DESC =
  "Modern testing facilities and professional people: Arul Polymers has developed critical components including Bonded valve, Electrical resistance components, Shock Mount and Grid separator, and deals critical polymers such as FKM, AEM, ACM, CSM.";

export const Route = createFileRoute("/facilities/r-and-d")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://arul-polymer-engineering.lovable.app/facilities/r-and-d",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arul-polymer-engineering.lovable.app/facilities/r-and-d",
      },
    ],
  }),
  component: RndPage,
});

const TESTS = [
  "Mooney Viscosity",
  "Rheological properties",
  "Hardness",
  "Tensile strength",
  "Elongation",
  "Abrasion Resistance",
  "Tear strength",
  "Peel strength",
  "Chemical analysis",
  "Compression set",
  "Purity test",
  "Melting point",
];

const POLYMERS = [
  "NR",
  "SBR",
  "Nitrile",
  "NBR + PVC",
  "Silicone",
  "FKM",
  "EPDM",
  "Hypalon",
  "Fluorosilicone",
  "HNBR",
  "ECO",
  "FFKM",
  "ACM",
  "AEM",
];

const DEVELOPMENTS = [
  { t: "Bonded valve", d: "Critical component developed in-house." },
  { t: "Electrical resistance components", d: "Passed 8 TΩ." },
  { t: "Shock Mount", d: "A critical component in the suspension systems of motorcycles and scooters." },
  { t: "Grid separator", d: "Developed for the War Ship VARNASTURA project." },
];

function Gauge({
  label,
  from,
  to,
  scaleMax,
}: {
  label: string;
  from: number;
  to: number;
  scaleMax: number;
}) {
  const left = (from / scaleMax) * 100;
  const width = ((to - from) / scaleMax) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="label-micro text-blue">{label}</p>
        <p className="text-lg font-semibold text-navy">
          {from} – {to}
        </p>
      </div>
      <div className="rounded-2xl relative mt-5 h-14 border border-navy/15 bg-white">
        <div className="absolute inset-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "flex-1 border-r border-navy/10",
                i % 5 === 4 && "border-r-navy/25",
              )}
            />
          ))}
        </div>
        <div
          className="absolute inset-y-2 origin-left bg-navy/85 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ left: `${left}%`, width: `${width}%` }}
        >
          <span className="absolute inset-y-0 right-0 w-0.5 bg-red" />
        </div>
      </div>
      <div className="label-micro mt-2 flex justify-between text-steel">
        <span>0</span>
        <span>{scaleMax}</span>
      </div>
    </div>
  );
}

function RndPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Page>
      <PageHero
        eyebrow="Capabilities"
        index="R&D"
        title={
          <>
            Where material science
            <br />
            meets application.
          </>
        }
        statement="Research & Development is at the heart of all our endeavours. Our growth depends on it."
        image={qualityLab}
        imageAlt="Laboratory testing of rubber test specimens"
        meta={[
          { k: "Test Standards", v: "IS · ASTM · DIN" },
          { k: "Hardness Range", v: "20–90 Shore A" },
          { k: "Critical Polymers", v: "FKM · AEM · ACM · CSM" },
        ]}
      />

      {/* R&D story */}
      <Section>
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead index="01" label="R&D Story" title="Developed for critical duty." />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-steel">
              <Reveal>
                <p>
                  Research &amp; Development is at the heart of all our endeavours. Our growth depends
                  on it. With our modern testing facilities &amp; highly professional people, we have
                  developed several critical components like Bonded valve, Electrical resistance
                  components (which passed 8 TΩ), Shock Mount &amp; Grid separator for the War Ship
                  VARNASTURA project. We deal all the critical polymers like FKM, AEM, ACM, CSM etc.
                </p>
              </Reveal>
              <Reveal delay={70}>
                <p>
                  Our Research and Development includes state of the art testing equipment and testing
                  machines that are regularly maintained and calibrated. Various testing procedures
                  are carried out from raw material stage to the final products with these testing
                  facilities.
                </p>
              </Reveal>
            </div>

            <div className="rounded-2xl mt-10 grid gap-px border border-navy/12 bg-navy/12 sm:grid-cols-2">
              {DEVELOPMENTS.map((d) => (
                <div key={d.t} className="group bg-white p-6">
                  <h3 className="text-base not-italic text-navy">{d.t}</h3>
                  <span className="mt-3 block h-px w-8 bg-red transition-all duration-500 group-hover:w-16" />
                  <p className="mt-3 text-sm leading-relaxed text-steel">{d.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ClipImage
              src={labView.url}
              alt="Arul Polymers R&D laboratory with testing equipment along both benches"
              className="aspect-[797/528]"
              imgClassName="group-hover:scale-100"
              frame
              caption="R&D lab view"
            />
          </div>
        </div>
      </Section>

      {/* Testing matrix */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead
            index="02"
            label="Testing Experience"
            title="A test for every stage, from raw material to final product."
            copy="These tests include Mooney Viscosity, Rheological properties, Hardness, Tensile strength, Elongation, Abrasion Resistance, Tear strength, Peel strength, chemical analysis, compression set, purity test, melting point etc."
          />

          <div
            className="rounded-2xl mt-8 grid gap-px border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-3"
            onMouseLeave={() => setActive(null)}
          >
            {TESTS.map((t, i) => (
              <button
                key={t}
                type="button"
                onMouseEnter={() => setActive(t)}
                onFocus={() => setActive(t)}
                onClick={() => setActive(t)}
                className={cn(
                  "relative flex items-center gap-5 bg-white px-6 py-6 text-left transition-colors duration-300",
                  active === t && "bg-navy text-white",
                )}
              >
                <span
                  className={cn(
                    "label-micro w-8 shrink-0",
                    active === t ? "text-red" : "text-steel",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-base font-semibold",
                    active === t ? "text-white" : "text-navy",
                  )}
                >
                  {t}
                </span>
                <span
                  className={cn(
                    "absolute inset-y-0 left-0 w-0.5 bg-red transition-transform duration-500 origin-top",
                    active === t ? "scale-y-100" : "scale-y-0",
                  )}
                />
              </button>
            ))}
          </div>
          <p className="label-micro mt-6 text-steel">
            All tests are carried out to IS, ASTM, DIN or the customer requirement by qualified and
            experienced personnel.
          </p>
        </div>
      </Section>

      {/* Standards strip */}
      <Section tone="navy" className="py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative">
          <MicroLabel tone="light">Tested to</MicroLabel>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            {["IS", "ASTM", "DIN", "Customer Requirements"].map((s, i) => (
              <Reveal key={s} delay={i * 90} className="flex items-center gap-10">
                <span
                  className="leading-none uppercase"
                  style={{ fontSize: "clamp(1.5rem, 3.4vw, 3rem)", fontStyle: "italic", fontWeight: 700 }}
                >
                  {s}
                </span>
                {i < 3 && <span className="hidden h-px w-16 bg-red/70 sm:block" />}
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <TechRule dark />
          </div>
        </div>
      </Section>

      {/* Polymer library */}
      <Section className="relative">
        <img
          src={materialMacro}
          alt="Macro photograph of polymer material"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="shell relative">
          <SectionHead
            index="03"
            label="Polymer Library"
            title="A wide range of polymers."
            copy="We have developed various compounds using a wide range of polymers."
          />
          <div className="rounded-2xl mt-8 grid gap-px border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
            {POLYMERS.map((p, i) => (
              <div key={p} className="group bg-white/90 p-7 backdrop-blur-sm">
                <span className="label-micro text-steel">{String(i + 1).padStart(2, "0")}</span>
                <h3
                  className="mt-5 leading-none uppercase text-navy"
                  style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)" }}
                >
                  {p}
                </h3>
                <span className="mt-5 block h-px w-8 bg-red transition-all duration-[700ms] group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Hardness capability */}
      <Section tone="cool">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            index="04"
            label="Hardness Capability"
            title="Compounds developed across the hardness scale."
            copy="We have developed various compounds for the hardness ranging from 20 – 90 Shore A & 60 to 100 Shore D."
          />
          <div className="space-y-12">
            <Reveal>
              <Gauge label="Shore A" from={20} to={90} scaleMax={100} />
            </Reveal>
            <Reveal delay={120}>
              <Gauge label="Shore D" from={60} to={100} scaleMax={100} />
            </Reveal>
          </div>
        </div>
      </Section>

      <PageCta />
    </Page>
  );
}
