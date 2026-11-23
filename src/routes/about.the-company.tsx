import { createFileRoute } from "@tanstack/react-router";
import specializedRubberProducts from "@/assets/company/company-specialized-rubber-products.jpg.asset.json";
import materialMacro from "@/assets/material-macro.jpg";
import builtOnRubber from "@/assets/company/company-built-on-rubber.jpg.asset.json";
import bespokeCompounds from "@/assets/company/rubber-steel-bonded-golden.png.asset.json";
import bespokeOrings from "@/assets/company/company-bespoke-o-rings.avif.asset.json";
import arulVajravel from "@/assets/arul-vajravel.png.asset.json";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  ClipImage,
  PageCta,
  CountUp,
  TechRule,
} from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { InsideEngineering, Process } from "@/components/site/SectionsB";
import { LeadershipPortrait } from "@/components/site/LeadershipPortrait";

const TITLE = "The Company | Arul Polymers Pvt. Ltd. — Specialized Rubber Manufacturing";
const DESC =
  "Since 1998 Arul Polymers has manufactured specialized rubber products for aerospace, automobile and industrial sectors, with CEMILAC and DGAQA approval. Part of Arul Rubbers, established 1978.";

export const Route = createFileRoute("/about/the-company")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://arulpolymers.com/about/the-company" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://arulpolymers.com/about/the-company" },
    ],
  }),
  component: CompanyPage,
});

const SPECTRUM = [
  { n: "01", t: "General rubber products", g: "Automobile & Industrial" },
  { n: "02", t: "Rubber to metal bonded parts", g: "Automobile & Industrial" },
  { n: "03", t: "O-rings", g: "Sealing" },
  { n: "04", t: "Seals", g: "Sealing" },
  { n: "05", t: "Bellows", g: "Moulded components" },
  { n: "06", t: "Boots", g: "Moulded components" },
  { n: "07", t: "Suspension parts", g: "Automobile" },
  { n: "08", t: "Ceramic sheets", g: "Wear resistance" },
  { n: "09", t: "Ceramic hoses", g: "Wear resistance" },
];

const COMPOUNDS = [
  { m: "Butyl Rubber", a: "Tubes" },
  { m: "EPDM", a: "Moulding & Conveyor Belts" },
  { m: "Silicone", a: "Printing Rollers & Food Grade Applications" },
  { m: "HNBR", a: "Automotive Tier-2" },
  { m: "ACM", a: "Automotive Tier-2" },
  { m: "AEM", a: "Automotive Tier-2" },
  { m: "XNBR", a: "Automotive Tier-2" },
  { m: "FKM", a: "Automotive Tier-2" },
  { m: "Fluorosilicone (FVMQ)", a: "Aerospace & Fuel System Seals" },
  { m: "ECO", a: "Fuel Hoses & Seals" },
  { m: "FFKM", a: "Extreme Chemical & Heat Sealing" },
];

const GROUP_NUMBERS = [
  { v: 800, s: "+", l: "Tube Holder Plates supplied" },
  { v: 300, s: "", l: "Evaporators supplied" },
  { v: 300, s: "", l: "Re-Boilers supplied" },
  { v: 700, s: "", l: "Dish Ends for Re-Boilers" },
];

const CLIENTS = [
  "All Birla Group companies",
  "Simon India Limited — Delhi",
  "Paradeep Phosphates Limited — Orissa",
  "FACT — Cochin",
  "Mcnally Sayaji Engg Limited — Malur",
  "Lanxess India Pvt Limited — Nagda",
  "Bateman",
];

function CompanyPage() {
  return (
    <Page>
      <PageHero
        eyebrow="About"
        index="The Company"
        title={
          <>
            Built on rubber.
            <br />
            Driven by precision.
          </>
        }
        statement="A leading name in the manufacture of specialized rubber products — with acceptance in the Aerospace industry earned through strong technical and design capabilities."
        image={builtOnRubber.url}
        imageAlt="Rubber-to-metal bonded components manufactured by Arul Polymers"
        meta={[
          { k: "Established", v: "1998" },
          { k: "Airworthiness", v: "CEMILAC · DGAQA" },
          { k: "Base", v: "Hosur, Tamil Nadu" },
        ]}
      />

      {/* 01 — Leadership */}
      <Section className="py-12 lg:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:gap-10">
          <div>
            <MicroLabel>01 / Leadership</MicroLabel>

            <Reveal delay={80}>
              <p
                className="mt-8 leading-none text-red"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", fontStyle: "italic", fontWeight: 700 }}
              >
                Mr. Arul Vajravel
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="label-micro mt-3 text-navy">Director</p>
            </Reveal>

            <Reveal delay={200}>
              <h2
                className="mt-10 leading-[1.05]"
                style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)" }}
              >
                Engineering with purpose.
                <br />
                <span className="text-steel">Leading with precision.</span>
              </h2>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-steel lg:text-lg">
                Mr. Arul Vajravel guides Arul Polymers with a strong focus on precision manufacturing,
                polymer engineering, quality, and continuous improvement.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-steel lg:text-lg">
                His leadership strengthens the company’s capabilities across automotive, aerospace,
                and industrial applications through disciplined processes, technical expertise, and
                customer-focused innovation.
              </p>
            </Reveal>

            <Reveal delay={380}>
              <blockquote className="mt-10 border-l-2 border-red pl-6">
                <p
                  className="leading-[1.2] text-navy"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontStyle: "italic", fontWeight: 700 }}
                >
                  “Precision is built into every process.”
                </p>
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={120} className="order-first flex justify-start lg:order-last lg:justify-end">
            <LeadershipPortrait
              src={arulVajravel.url}
              alt="Mr. Arul Vajravel — Director, Arul Polymers Pvt. Ltd."
              caption="Mr. Arul Vajravel — Director"
            />
          </Reveal>
        </div>
      </Section>

      {/* 02 — Company story */}
      <Section>
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <MicroLabel>02 / Company Story</MicroLabel>
            <Reveal>
              <h2 className="mt-6 leading-[1.04]" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.1rem)" }}>
                Specialized rubber products, proven in the most demanding sectors.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-9 space-y-3">
                {["Aerospace", "Automotive", "Industrial", "Customized Compounds", "R&D"].map(
                  (k) => (
                    <li
                      key={k}
                      className="group flex items-center gap-4 border-b border-navy/10 pb-3 text-sm font-semibold text-navy"
                    >
                      <span className="h-px w-6 bg-red transition-all duration-500 group-hover:w-12" />
                      {k}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-7 text-lg leading-relaxed text-steel">
            <Reveal>
              <p>
                Since inception in the year 1998, we have proved our mettle as a leading name in the
                manufacture of specialized rubber products. In fact, we have proved our standing by
                finding acceptance in the Aerospace industry by virtue of our strong technical and
                design capabilities. A measure of our quality standards is evident from the fact that
                we have earned the approval from{" "}
                <strong className="font-semibold text-navy">
                  CEMILAC (Centre for Military Airworthiness and Certification)
                </strong>{" "}
                &amp;{" "}
                <strong className="font-semibold text-navy">
                  DGAQA (Directorate General of Aeronautical Quality Assurance)
                </strong>
                .
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p>
                Apart from the Aerospace industry, we also have a major presence across the automobile
                and industrial sectors for general Rubber products, Rubber to metal bonded parts,
                O-rings, Seals, Bellows, boots, suspension parts, Ceramic sheets &amp; Ceramic Hoses.
              </p>
            </Reveal>

            <ClipImage
              src={specializedRubberProducts.url}
              alt="Specialized rubber products manufacturing area at Arul Polymers"
              className="aspect-[16/9] w-full"
              frame
            />

            <Reveal>
              <p>
                As part of our commitment to be a full and complete rubber supplier, we offer many
                specialties and bespoke tailor made compounds to meet customer requirements. These
                include Butyl Rubber for Tubes, EPDM for Moulding &amp; Conveyor Belts, Silicone for
                Printing Rollers &amp; Food Grade Applications.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p>
                We also offer HNBR, ACM, AEM/VAMAC, XNBR &amp; FKM for automotive Tier-2 suppliers. We
                provide customized solutions with the help of our state of the art R&amp;D to
                industries that are cost effective, efficient and contribute to flawless performance.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="border-l-2 border-red pl-6 text-navy">
                Our Ebonite Rubber Compound was certified by WRAS – UK for the Drinking Water
                Application.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 03 — Engineering spectrum */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead
            index="03"
            label="Engineering Spectrum"
            title="An index of what we manufacture."
            copy="Component families across automobile, industrial and aerospace applications."
          />
          <div className="mt-8 border-t border-navy/12">
            {SPECTRUM.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <div className="group relative grid grid-cols-[3rem_1fr] items-baseline gap-x-6 border-b border-navy/12 py-5 sm:grid-cols-[4rem_1fr_auto]">
                  <span className="label-micro text-steel transition-colors group-hover:text-red">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-semibold not-italic text-navy sm:text-xl">{s.t}</h3>
                  <span className="label-micro col-start-2 mt-2 text-steel sm:col-start-3 sm:mt-0">
                    {s.g}
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-red transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 — Materials */}
      <Section className="bg-white">
        <div className="shell">
          <SectionHead
            index="04"
            label="Materials Expertise"
            title="Bespoke compounds, matched to the application."
          />
        </div>
        <div className="relative mt-8">
          <img
            src={materialMacro}
            alt="Macro texture of raw elastomer compound"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          />
          <div className="rounded-2xl shell relative grid gap-px border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
            {COMPOUNDS.map((c) => (
              <div
                key={c.m}
                className="group bg-white p-7 transition-colors duration-500 hover:bg-cool"
              >
                <p className="label-micro text-blue">Polymer</p>
                <h3 className="mt-4 text-xl not-italic text-navy">{c.m}</h3>
                <span className="mt-4 block h-px w-8 bg-red transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-sm leading-relaxed text-steel">{c.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shell mt-8 grid gap-6 sm:grid-cols-2">
          <ClipImage
            src={bespokeCompounds.url}
            alt="Rubber-to-steel bonded parts with a subtle golden finish on their outer metal sleeves"
            className="aspect-[4/3]"
            caption="Rubber to metal bonded parts"
            frame
          />
          <ClipImage
            src={bespokeOrings.url}
            alt="Precision moulded seals and O-rings in assorted sizes"
            className="aspect-[4/3]"
            caption="Seals & O-rings"
            frame
          />
        </div>
      </Section>

      {/* 05 — The Group heritage */}
      <Section tone="navy">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative">
          <SectionHead
            index="05"
            label="The Group"
            title="A rubber lineage that begins in 1978."
            dark
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <ol className="relative space-y-12 border-l border-white/15 pl-8">
              {[
                { y: "1978", t: "Arul Rubbers", d: "Leading Rubber Lining Industry in the country, based in Hosur, Tamil Nadu." },
                { y: "1998", t: "Arul Polymers Pvt Ltd", d: "Established as a manufacturer of specialized rubber products." },
                { y: "Present day", t: "Specialized polymer engineering", d: "Customized compounds and critical components for aerospace, automobile and industrial sectors." },
              ].map((s, i) => (
                <Reveal as="li" key={s.y} delay={i * 90}>
                  <span className="absolute -left-[5px] mt-2 block h-2.5 w-2.5 bg-red" />
                  <p
                    className="leading-none text-white"
                    style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", fontStyle: "italic", fontWeight: 700 }}
                  >
                    {s.y}
                  </p>
                  <h3 className="mt-4 text-lg not-italic text-white/95">{s.t}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{s.d}</p>
                </Reveal>
              ))}
            </ol>

            <div className="space-y-7 text-base leading-relaxed text-white/72">
              <Reveal>
                <p>
                  Arul Polymers Pvt Ltd was originally part of Arul Rubbers, established in the year
                  1978, and it is a leading Rubber Lining Industry in the country — especially for
                  MSFE equipment like Re-boilers, Tube plates, Evaporators, MSRL Pipes and Fittings
                  for anti-corrosive and anti-abrasion applications. The company is based in Hosur,
                  Tamil Nadu.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <p>
                  As specialists in the supply of MSRL equipment for Multi Stage Fusion Evaporator
                  (MSFE) projects, Arul Rubbers has executed major projects for Staple Fibre and
                  Viscose Rayon manufacturers in India, Thailand and Indonesia.
                </p>
              </Reveal>
              <Reveal delay={110}>
                <p>
                  These are the equipment used in Spin Bath application to withstand high
                  temperatures of 130 °C. The company&apos;s core competence in all aspects of rubber
                  lining, employing various rubber compounds based on service conditions and customer
                  specifications, has put them in the limelight with a wide rostrum of clients both in
                  India and abroad.
                </p>
              </Reveal>

              <div className="rounded-2xl grid grid-cols-2 gap-px border border-white/15 bg-white/15">
                {GROUP_NUMBERS.map((n) => (
                  <div key={n.l} className="bg-navy-deep p-6">
                    <p
                      className="leading-none text-white"
                      style={{ fontSize: "clamp(1.9rem, 3vw, 2.75rem)", fontStyle: "italic", fontWeight: 700 }}
                    >
                      <CountUp to={n.v} suffix={n.s} />
                    </p>
                    <p className="label-micro mt-3 text-white/50">{n.l}</p>
                  </div>
                ))}
              </div>

              <div>
                <MicroLabel tone="light">Client References</MicroLabel>
                <ul className="mt-5 grid gap-2.5 text-sm sm:grid-cols-2">
                  {CLIENTS.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-red" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/50">…apart from others.</p>
              </div>

              <TechRule dark />
            </div>
          </div>
        </div>
      </Section>

      <InsideEngineering />

      <Process />

      <PageCta />
    </Page>
  );
}
