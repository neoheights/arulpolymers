import { createFileRoute } from "@tanstack/react-router";
import experienceImg from "@/assets/site/experience.jpg";
import outOfBox from "@/assets/site/out_of_the_box.jpg";
import materialMacro from "@/assets/material-macro.jpg";
import mixingYard from "@/assets/site/machine-mixing-yard-enhanced.jpg";
import mouldingZone from "@/assets/site/machine-moulding-zone-enhanced.jpg";
import {
  Page,
  PageHero,
  Section,
  SectionHead,
  ClipImage,
  PageCta,
} from "@/components/site/PageShell";
import { MicroLabel, Reveal } from "@/components/site/primitives";
import { useScrollProgress } from "@/lib/use-reveal";

const TITLE = "Experience & Expertise | Arul Polymers Pvt. Ltd.";
const DESC =
  "Since 1978, rubber has been the mainstay of our business. Arul Polymers has perfected the science and art of rubber compounding, assuring consistent quality at all times.";

export const Route = createFileRoute("/capabilities/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://arulpolymers.com/capabilities/experience",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arulpolymers.com/capabilities/experience",
      },
    ],
  }),
  component: ExperiencePage,
});

const STEPS = [
  { t: "Ingredients", d: "Varying the ratio of ingredients." },
  { t: "Compounding", d: "Compensating for the interactions." },
  { t: "Testing", d: "Hours of testing to perfect mechanical properties." },
  { t: "Consistency", d: "Consistent quality at all times." },
];

function ExperiencePage() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <Page>
      <PageHero
        eyebrow="Capabilities"
        index="Experience"
        title={
          <>
            Experience measured
            <br />
            in consistency.
          </>
        }
        statement="Simply put, we know rubber. Since 1978, rubber has been the mainstay of our business."
        image={experienceImg}
        imageAlt="Rubber compounding experience at Arul Polymers"
        meta={[
          { k: "Rubber since", v: "1978" },
          { k: "Moulding experience", v: "Close to two decades" },
        ]}
      />

      {/* Since 1978 */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <img
          src={materialMacro}
          alt="Macro rubber texture"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1]"
        />
        <div className="shell relative">
          <MicroLabel>01 / Experience And Expertise Count</MicroLabel>
          <Reveal>
            <p
              className="mt-8 leading-[0.86] text-navy"
              style={{ fontSize: "clamp(4rem, 15vw, 14rem)", fontStyle: "italic", fontWeight: 700 }}
            >
              Since 1978
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal delay={80}>
              <p className="text-2xl leading-[1.3] font-bold text-navy">
                We have perfected the science and art of rubber compounding — an intricate process
                that assures required properties by varying the ratio of ingredients and compensating
                for the interactions.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg leading-relaxed text-steel">
                It can take a number of variations and hours of testing to perfect the mechanical
                properties while maintaining good processing. Our experience and expertise in the field
                virtually guarantees consistent quality at all times.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compounding process visualization */}
      <Section tone="cool">
        <div className="shell">
          <SectionHead
            index="02"
            label="Compounding"
            title="Ingredients in. Consistency out."
          />
          <div ref={ref} className="relative mt-10">
            <div className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-navy/12 lg:block">
              <span
                className="block h-px origin-left bg-red transition-transform duration-300 ease-out"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            <ol className="grid gap-10 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const on = progress > i / STEPS.length;
                return (
                  <li key={s.t} className="relative">
                    <span
                      className="block h-2.5 w-2.5 transition-colors duration-500"
                      style={{ background: on ? "var(--red)" : "var(--steel)" }}
                    />
                    <span className="label-micro mt-6 block text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl uppercase not-italic text-navy">{s.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{s.d}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ClipImage
              src={mixingYard}
              alt="Mixing yard at the Arul Polymers factory"
              className="aspect-[4/3]"
              caption="Mixing yard"
              frame
            />
            <ClipImage
              src={mouldingZone}
              alt="Moulding zone at the Arul Polymers factory"
              className="aspect-[4/3]"
              caption="Moulding zone"
              frame
            />
          </div>
        </div>
      </Section>

      {/* Thinking out of the box */}
      <Section tone="navy">
        <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div className="shell relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHead
              index="03"
              label="Innovation"
              title="Thinking out of the box."
              dark
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/72">
              <Reveal>
                <p>
                  Constant innovation, however big or small it may be, distinguishes our pursuit of
                  excellence. Every step of the way we look at options, processes and methods to
                  optimize quality and speed up production parameters.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="border-l-2 border-red pl-6 text-white">
                  For instance, in the area of moulding, where we have an experience of close to two
                  decades standing, variations are an inherent factor. We have developed, through our
                  own efforts, semi automatic foolproof systems that help optimize the variations.
                </p>
              </Reveal>
            </div>
          </div>
          <ClipImage
            src={outOfBox}
            alt="Innovation in moulding processes at Arul Polymers"
            className="aspect-[4/3]"
          />
        </div>
      </Section>

      <PageCta />
    </Page>
  );
}
