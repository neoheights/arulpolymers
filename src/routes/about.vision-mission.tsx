import { createFileRoute } from "@tanstack/react-router";
import visionBannerAsset from "@/assets/vision-industries-banner.png.asset.json";
import indAerospace from "@/assets/ind-aerospace.jpg";
import missionPlantAsset from "@/assets/mission-plant.jpg.asset.json";
import { Page, PageHero, Section, PageCta } from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";

const TITLE = "Vision & Mission | Arul Polymers Pvt. Ltd.";
const DESC =
  "Arul Polymers aims to take the leadership stance in the Aerospace, Defence & Automobile segment globally, meeting customer requirements for moulded rubber components with innovation and technology.";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://arulpolymers.com/about/vision-mission",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arulpolymers.com/about/vision-mission",
      },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <Page>
      <PageHero
        eyebrow="About"
        index="Purpose"
        title={
          <>
            Purpose engineered
            <br />
            for what comes next.
          </>
        }
        statement="Our vision and mission set the direction for every compound we develop and every component we mould."
        image={visionBannerAsset.url}
        imageAlt="Arul Polymers serves aerospace, defence, automobiles, oil & gas, mining and industrial sectors"
        layout="stack"
      />

      {/* Vision */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-deep py-12 text-white lg:py-20">
        <img
          src={indAerospace}
          alt="Aerospace application of engineered elastomer components"
          loading="lazy"
          className="anim-float absolute inset-0 h-full w-full scale-[1.02] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />

        <div className="shell relative">
          <Reveal>
            <p
              className="leading-none text-white/12"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)", fontStyle: "italic", fontWeight: 700 }}
            >
              01
            </p>
          </Reveal>
          <Reveal delay={70}>
            <MicroLabel tone="light" className="-mt-4">
              Our Vision
            </MicroLabel>
          </Reveal>

          <div className="mt-10 max-w-4xl space-y-6">
            <Reveal delay={120}>
              <p
                className="leading-[1.14] italic"
                style={{ fontSize: "clamp(1.5rem, 2.9vw, 2.6rem)", fontWeight: 700 }}
              >
                To take the leadership stance in the Aerospace, Defence &amp; Automobile segment in
                the global context by our worldwide presence &amp; extending our brand of excellence
                across a wide spectrum of world class product.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <span className="block h-px w-28 bg-red anim-draw-x" />
            </Reveal>
            <Reveal delay={240}>
              <p className="max-w-2xl text-lg leading-relaxed text-white/72">
                To ensure that benefits of our growth impact not only our customer but also our
                people and society at large.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-tech opacity-60" />
        <div className="shell relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="lg:order-2">
            <div className="rounded-2xl relative overflow-hidden outline outline-1 -outline-offset-1 outline-navy/10">
                <img
                  src={missionPlantAsset.url}
                  alt="Moulding and finishing shop floor at Arul Polymers"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/50 to-transparent anim-scan" />
            </div>
          </div>

          <div className="lg:order-1">
            <Reveal>
              <p
                className="leading-none text-navy/8"
                style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontStyle: "italic", fontWeight: 700 }}
              >
                02
              </p>
            </Reveal>
            <Reveal delay={70}>
              <MicroLabel className="-mt-3">Our Mission</MicroLabel>
            </Reveal>
            <div className="mt-9 space-y-6 text-lg leading-relaxed text-steel">
              <Reveal delay={120}>
                <p className="text-2xl leading-[1.25] italic font-bold text-navy not-italic sm:text-[1.75rem]">
                  To meet customer requirements for moulded rubber components leveraging on our strong
                  innovative spirit, technology and the ability to meet the specific requirements with
                  customized products.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  APPL offers the timely, flexible service and competitive pricing that deliver the
                  superior measurable values to all our stakeholders in alliance with APPL with long
                  time focus.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  We are also committed to develop, encourage and reward superior performance of our
                  employees.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </Page>
  );
}
