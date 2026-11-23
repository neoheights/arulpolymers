import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Section, SectionHead } from "@/components/site/PageShell";
import { Arrow, MicroLabel, Reveal } from "@/components/site/primitives";
import heroVisual from "@/assets/design/engineering-design-hero.jpg";
import cadVisual from "@/assets/design/cad-engineering-visual.jpg";
import simulationVideo from "@/assets/design/mill-liner-simulation.mp4.asset.json";
import lifterVisual from "@/assets/design/mill-liner-components-diagram.png.asset.json";

const TITLE = "Design | Arul Polymers Pvt. Ltd.";
const DESC =
  "Engineering design supported by licensed Solid Edge CAD software and MillTraj mill liner simulation at Arul Polymers.";

export const Route = createFileRoute("/facilities/design")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arulpolymers.capsley.site/facilities/design",
      },
    ],
  }),
  component: DesignPage,
});

const ORE_DATA = [
  ["Ore Type", "Hematite Ore"],
  ["Ore Hardness", "9–12 kWh/ton"],
  ["Mill Type", "Wet Overflow Ball Mill"],
  ["Feed Size", "10–150 mm"],
  ["Product Size", "150 micron"],
  ["Circulating Load", "12%"],
  ["Ore Density", "2.80"],
] as const;

const MILL_DATA = [
  ["Mill Diameter", "4.724 m"],
  ["Mill Length", "8.200 m"],
  ["Number of Rows", "32"],
  ["Mill Filling", "30%"],
  ["Media Diameter", "80 mm"],
] as const;

function TechnicalPanel({ title, rows }: { title: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <Reveal className="design-data-panel">
      <div className="flex items-center justify-between gap-4 border-b border-navy/10 px-5 py-5 sm:px-7">
        <h3 className="text-base not-italic text-navy">{title}</h3>
        <span className="h-2 w-2 shrink-0 bg-red" aria-hidden="true" />
      </div>
      <dl>
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-navy/8 px-5 py-4 last:border-b-0 sm:px-7">
            <dt className="min-w-0 text-sm leading-snug text-steel">{label}</dt>
            <dd className="text-right text-base font-semibold text-blue sm:text-lg">{value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

function DesignPage() {
  return (
    <Page>
      <section className="design-hero">
        <div className="pointer-events-none absolute inset-0 grid-tech opacity-70" />
        <div className="design-hero-arc" aria-hidden="true" />
        <div className="shell relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="relative z-10">
            <Reveal><MicroLabel tone="red">Facilities / Design</MicroLabel></Reveal>
            <Reveal delay={80}>
              <h1 className="design-hero-title mt-7 text-navy">
                <span className="block whitespace-nowrap">Designed with precision.</span>
                <span className="mt-3 block whitespace-nowrap text-blue">Evaluated through simulation.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <span className="mt-8 block h-px w-24 origin-left bg-red anim-draw-x" />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-steel">
                Engineering design supported by Solid Edge CAD software and MillTraj mill liner simulation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="design-hero-visual">
            <div className="group relative block w-full">
              <div className="design-ring design-ring-a" aria-hidden="true" />
              <div className="design-ring design-ring-b" aria-hidden="true" />
              <div className="overflow-hidden rounded-[1.75rem] rounded-br-md border border-navy/12 bg-white p-3 shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--navy-deep)_75%,transparent)] sm:p-5">
                <img src={heroVisual} alt="Engineer reviewing a generic rubber-to-metal component design" width={1536} height={1024} className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead index="01" label="CAD Design" title="Solid Edge" copy="Solid Edge is used for CAD at Arul Polymers." />
            <Reveal delay={130}>
              <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-red bg-cool px-5 py-4 text-sm font-semibold text-navy">
                <span className="h-2 w-2 rounded-full bg-blue" /> Licensed CAD Software
              </div>
            </Reveal>
          </div>
          <Reveal delay={100} className="relative overflow-hidden rounded-[1.75rem] rounded-tr-md border border-blue/20 bg-cool p-3 shadow-[0_26px_60px_-40px_color-mix(in_oklab,var(--navy-deep)_65%,transparent)] sm:p-5">
            <img src={cadVisual} alt="Generic cutaway CAD visualization of a rubber-to-metal component" width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full rounded-[1.25rem] object-cover" />
            <div className="absolute bottom-5 left-5 border-l-2 border-red bg-white/90 px-4 py-3 backdrop-blur-sm">
              <p className="label-micro text-blue">Illustrative CAD visual</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="cool" className="design-simulation-section">
        <div className="pointer-events-none absolute inset-0 grid-tech opacity-40" />
        <div className="shell relative">
          <SectionHead index="02" label="Licensed Simulation Software" title="Mill Liner Simulation" copy="Powered by MillTraj" />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="design-simulation-visual">
              <div className="group relative block w-full rounded-full">
                <div className="design-sim-orbit" aria-hidden="true"><span /><span /><span /></div>
                <div className="design-circle-clip overflow-hidden rounded-full border border-blue/20 bg-white p-4 shadow-[0_28px_70px_-45px_color-mix(in_oklab,var(--navy-deep)_80%,transparent)] sm:p-7">
                  <video src={simulationVideo.url} autoPlay muted loop playsInline preload="metadata" aria-label="Mill liner simulation video" className="aspect-square w-full rounded-full object-cover object-left transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none" />
                </div>
              </div>
            </Reveal>
            <div>
               <Reveal><MicroLabel>Simulation Visual</MicroLabel></Reveal>
               <Reveal delay={80}><h3 className="mt-6 text-[clamp(1.8rem,3vw,3rem)] leading-[1.02] text-navy">Mill liner engineering visualization.</h3></Reveal>
               <Reveal delay={140}><p className="mt-6 text-base leading-relaxed text-steel sm:text-lg">This illustrative cutaway supports the MillTraj section without presenting a client report or project-specific simulation result.</p></Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="shell">
          <SectionHead index="03" label="Example Simulation Input Parameters" title="Report-specific engineering inputs." copy="These values come from one client-supplied report and are presented as example simulation inputs, not universal product specifications." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <TechnicalPanel title="Ore & Operating Data" rows={ORE_DATA} />
            <TechnicalPanel title="Mill Data" rows={MILL_DATA} />
          </div>
        </div>
      </Section>

      <Section tone="cool">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative">
            <div className="group mx-auto block w-full max-w-[26rem] overflow-hidden rounded-[1.5rem] rounded-tr-md border border-navy/12 bg-white p-3 shadow-[0_22px_54px_-38px_color-mix(in_oklab,var(--navy-deep)_70%,transparent)]">
              <img src={lifterVisual.url} alt="Mill liner components diagram: shell plate, fix, grate plate, cone vane, lifter bar assembly, filler ring, pulp lifter and lifter bar arranged around a mill shell" width={1120} height={1600} loading="lazy" className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" />
            </div>
          </Reveal>
          <div>
             <SectionHead index="04" label="Technical Geometry" title="Lifter Design Parameters" copy="Lifter geometry and simulation input specifications are reviewed as part of mill liner simulation." />
            <Reveal delay={140}>
               <p className="mt-7 border-l-2 border-red pl-5 text-base leading-relaxed text-steel">Mill liner components — shell plate, fix, grate plate, cone vane, lifter bar assembly, filler ring, pulp lifter and lifter bar — are shown as a labelled component layout. No dimensions, measurements, or project-specific geometry are shown or implied.</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="navy" className="py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Reveal><MicroLabel tone="light">Engineering Enquiry</MicroLabel></Reveal>
            <Reveal delay={70}><h2 className="mt-6 text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.03]">Discuss Your Engineering Requirement</h2></Reveal>
            <Reveal delay={130}><p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">Connect with Arul Polymers for component design and manufacturing enquiries.</p></Reveal>
          </div>
          <Reveal delay={180}>
            <Link to="/contact" className="btn-red group">Discuss a Requirement <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" /></Link>
          </Reveal>
        </div>
      </Section>
    </Page>
  );
}
