import { createFileRoute, Link } from "@tanstack/react-router";
import injectionMoulding from "@/assets/facilities/plastics/injection-moulding.jpg.asset.json";
import injectionMouldingMachine from "@/assets/facilities/plastics/injection-moulding-machine.jpg.asset.json";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  PageCta,
} from "@/components/site/PageShell";
import { MicroLabel, Reveal, Arrow } from "@/components/site/primitives";

const TITLE = "Infrastructure Plastics | Arul Polymers Pvt. Ltd.";
const DESC =
  "Plastic injection moulding infrastructure at Arul Polymers Pvt. Ltd. — dedicated injection moulding machines operating on an integrated shop floor.";

export const Route = createFileRoute("/facilities/plastics")({
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
        href: "https://arulpolymers.capsley.site/facilities/plastics",
      },
    ],
  }),
  component: InfrastructurePlasticsPage,
});

const GALLERY = [
  {
    title: "Plastic Injection Moulding Machine",
    image: injectionMouldingMachine.url,
    alt: "Operator at a plastic injection moulding machine on the Arul Polymers shop floor",
    wide: true,
  },
  {
    title: "Injection Moulding",
    image: injectionMoulding.url,
    alt: "Plastic injection moulding machine with material handling equipment at Arul Polymers",
    wide: false,
  },
] as const;

function InfrastructurePlasticsPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Capabilities"
        index="Infrastructure Plastics"
        title={
          <>
            Infrastructure Plastics,
            <br />
            moulded with precision.
          </>
        }
        statement="A dedicated plastics facility with injection moulding machines operating on the Arul Polymers shop floor."
        image={injectionMouldingMachine.url}
        imageAlt="Plastic injection moulding machine on the Arul Polymers shop floor"
        layout="immersive"
      />

      {/* Facility gallery */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead
            index="01"
            label="Facility"
            title="The plastics floor, in detail."
          />
          <div className="mt-8 grid items-start gap-x-5 gap-y-8 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
            {GALLERY.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 60}
                className={item.wide ? "sm:col-span-2" : ""}
              >
                <figure className="group min-w-0">
                  <div
                    className={
                      "relative aspect-[4/3] overflow-hidden rounded-lg border border-navy/10 bg-navy/5 shadow-[0_16px_36px_-26px_rgba(16,32,60,0.55)]" +
                      (item.wide ? " sm:aspect-[16/7] lg:aspect-[21/8]" : "")
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                    />
                  </div>
                  <figcaption className="label-micro mt-3 min-h-4 text-steel">
                    {String(index + 1).padStart(2, "0")} / {item.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Enquiry */}
      <Section tone="navy" className="py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <MicroLabel tone="light">Engineering Enquiry</MicroLabel>
            </Reveal>
            <Reveal delay={70}>
              <h2
                className="mt-6 leading-[1.03]"
                style={{ fontSize: "clamp(1.9rem, 3.4vw, 3.25rem)" }}
              >
                Discuss Your Plastics Requirement
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Connect with Arul Polymers for plastic component moulding enquiries.
              </p>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <Link to="/contact" className="btn-red group">
              Start an Enquiry{" "}
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </Page>
  );
}
