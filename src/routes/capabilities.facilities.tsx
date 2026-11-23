import { createFileRoute } from "@tanstack/react-router";
import rd1 from "@/assets/site/r-and-d-1-enhanced.jpg";
import rd2 from "@/assets/site/r-and-d-2-enhanced.jpg";
import mixingYard from "@/assets/site/machine-mixing-yard-enhanced.jpg";
import kneader from "@/assets/site/machine-kneader-enhanced.jpg";
import mixingMill from "@/assets/site/machine-mixing-mill-enhanced.jpg";
import mouldingZone from "@/assets/site/machine-moulding-zone-enhanced.jpg";
import insideComponent from "@/assets/inside-component.jpg";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  ClipImage,
  PageCta,
} from "@/components/site/PageShell";
import { Reveal } from "@/components/site/primitives";

const TITLE = "Facilities | Arul Polymers Pvt. Ltd. — Equipped to Excel";
const DESC =
  "World class facilities, the finest technologies and process systems, constant upgrading, strong R&D and testing parameters position Arul Polymers on the cutting edge.";

export const Route = createFileRoute("/capabilities/facilities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://arulpolymers.com/capabilities/facilities",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arulpolymers.com/capabilities/facilities",
      },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Capabilities"
        index="Facilities"
        title={
          <>
            Equipped
            <br />
            to excel.
          </>
        }
        statement="We have invested in the finest technologies and process systems to ensure that every product that rolls out of our factory meets the highest quality standards."
        image={mixingYard}
        imageAlt="Actual mixing yard at the Arul Polymers factory"
        layout="immersive"
      />

      {/* Equipment story */}
      <Section>
        <div className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHead index="01" label="Equipped to Excel" title="Facilities on the cutting edge." />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-steel">
              <Reveal>
                <p>
                  Our facilities are world class and we have invested in the finest technologies and
                  process systems to ensure that every product that rolls out of our factory meets the
                  highest quality standards.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="border-l-2 border-red pl-6 text-navy">
                  Constant upgrading of facilities, strong R&amp;D and testing parameters all add up to
                  position us on the cutting edge.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <ClipImage src={rd1} alt="Testing and process equipment" className="aspect-[3/2]" frame />
            <ClipImage src={rd2} alt="Process control equipment" className="aspect-[3/2]" frame />
          </div>
        </div>
      </Section>

      {/* Editorial gallery */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead index="02" label="Facility Experience" title="Inside the plant." />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ClipImage
              src={mouldingZone}
              alt="Actual moulding zone at the Arul Polymers factory"
              className="aspect-[16/9] lg:h-full"
              frame
            />
            <ClipImage
              src={kneader}
              alt="75L kneader at the Arul Polymers factory"
              className="aspect-[3/4] lg:h-full"
              caption="75 L Kneader"
              frame
            />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ClipImage
              src={mixingMill}
              alt="Mixing mill at the Arul Polymers factory"
              className="aspect-[4/3]"
              caption="Mixing mill"
              frame
            />
            <ClipImage
              src={insideComponent}
              alt="Macro machine and component detail"
              className="aspect-[4/3]"
              caption="Component detail"
              frame
            />
          </div>
        </div>
      </Section>

      {/* Innovation */}
      <Section tone="graphite">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 1200 400"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${60 + i * 70} C 300 ${20 + i * 70}, 700 ${140 + i * 60}, 1200 ${40 + i * 72}`}
              stroke="white"
              strokeOpacity="0.25"
              strokeWidth="1"
              fill="none"
              style={{ animation: `draw-line ${5 + i}s ease-in-out infinite alternate` }}
              strokeDasharray="1000"
            />
          ))}
        </svg>
        <div className="shell relative max-w-4xl">
          <SectionHead index="03" label="Innovation" title="Innovation is the key." dark />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/72">
            <Reveal>
              <p>
                As a company that responds to customer requirements with customized solutions,
                innovation rides high with us. This challenge is what drives us and going by our track
                record no challenge is challenge enough for us.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <PageCta />
    </Page>
  );
}
