import { createFileRoute } from "@tanstack/react-router";
import { RUBBER_FACTORY_IMAGES, RUBBER_LAB_IMAGE } from "@/lib/rubber-facility-images";
import { FacilityPhotoCarousel } from "@/components/site/FacilityPhotoCarousel";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  ClipImage,
  PageCta,
} from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";

const TITLE = "Infrastructure Rubber | Arul Polymers Pvt. Ltd.";
const DESC =
  "A spacious integrated shop floor with mixing yard, mixing mill, kneaders and a moulding zone with semi automatic carbon batching facilities — infrastructure built for precision rubber processing.";

export const Route = createFileRoute("/facilities/rubber")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://arul-polymer-engineering.lovable.app/facilities/rubber",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arul-polymer-engineering.lovable.app/facilities/rubber",
      },
    ],
  }),
  component: InfrastructureRubberPage,
});

const NARRATIVE = [
  {
    k: "Introduction",
    p: "As befitting a company that seeks to stay on the cutting edge of rubber processing technology we have made major investments in building strong infrastructure which essentially is the backbone of our efforts to stay competitive and relevant to the needs of the market. Our facilities are on par with the best in the world with state of the art machinery and highly skilled professionals to ensure the highest quality standards are maintained.",
  },
  {
    k: "Shop Floor",
    p: "The shop floor is spacious and houses all our manufacturing facilities, integrated to ensure seamless functionality. These include the mixing yard with mixing mill and kneaders, and moulding zone with semi automatic carbon batching facilities.",
  },
  {
    k: "Quality Control",
    p: "Constant quality control checks are carried out to ensure standards are met.",
  },
  {
    k: "Continuous Improvement",
    p: "We regularly update information, processes and technologies to stay relevant to the needs of the customers.",
  },
  {
    k: "Experience",
    p: "Above all, is our experience in the field that certainly makes the difference. Rubber compounding is both a science and an art and we have perfected both. Our products reflect it and our customers acknowledge it at all times.",
  },
];

function InfrastructureRubberPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Capabilities"
        index="Infrastructure Rubber"
        title={
          <>
            Infrastructure Rubber
            <br />
            built for precision.
          </>
        }
        statement="Major investments in strong infrastructure — the backbone of our efforts to stay competitive and relevant to the needs of the market."
        image={RUBBER_FACTORY_IMAGES[0] ?? ""}
        imageAlt="Arul Polymers rubber manufacturing shop floor"
        layout="immersive"
      />

      {/* Narrative */}
      <Section>
        <div className="shell">
          <SectionHead label="Factory Narrative" title="Built around the process." />
          <div className="mt-8 border-t border-navy/12">
            {NARRATIVE.map((n, i) => (
              <Reveal key={n.k} delay={i * 50}>
                <div className="grid gap-4 border-b border-navy/12 py-8 lg:grid-cols-[16rem_1fr] lg:gap-8">
                  <p className="label-micro pt-1 text-blue">
                    {n.k}
                  </p>
                  <p className="max-w-3xl text-lg leading-relaxed text-steel">{n.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Manufacturing photographs */}
      <Section tone="navy">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative">
          <SectionHead label="Manufacturing Flow" title="An integrated shop floor." dark />
          <div className="mt-8">
            <FacilityPhotoCarousel images={RUBBER_FACTORY_IMAGES} label="Manufacturing Flow" />
          </div>
        </div>
      </Section>


      {/* QC */}
      <Section>
        <div className="shell grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <MicroLabel>Quality Control</MicroLabel>
            <Reveal>
              <h2 className="mt-6" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}>
                Checked constantly, updated continuously.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
                Constant quality control checks are carried out to ensure standards are met and we
                regularly update information, processes and technologies to stay relevant to the needs
                of the customers.
              </p>
            </Reveal>
          </div>
          <ClipImage
            src={RUBBER_LAB_IMAGE ?? ""}
            alt="Quality control laboratory at Arul Polymers"
            className="aspect-[4/3]"
            frame
          />
        </div>
      </Section>

      <PageCta />
    </Page>
  );
}
