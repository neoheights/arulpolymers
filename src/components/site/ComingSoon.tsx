import { Link } from "@tanstack/react-router";
import { Page, Section, PageCta } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";

/**
 * Shared frame for pages whose written content is still being finalised.
 * Keeps the site design language while the section structure is being wired up.
 */
export function ComingSoon({
  eyebrow,
  index,
  title,
  note,
}: {
  eyebrow: string;
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <Page>
      <section className="relative overflow-hidden bg-cool">
        <div className="pointer-events-none absolute inset-0 grid-tech" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 glow-soft anim-gradient-shift"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-64 -right-40 h-[42rem] w-[42rem] rounded-full border border-navy/10"
        />
        <div className="shell relative py-16 lg:py-24">
          <Reveal>
            <div className="label-micro flex items-center gap-3 text-red">
              <span className="h-px w-8 bg-red" />
              {eyebrow} <span className="text-steel">/ {index}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="mt-7 max-w-[20ch] leading-[0.98] text-navy"
              style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)" }}
            >
              {title}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <span className="mt-8 block h-px w-24 origin-left bg-red anim-draw-x" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-steel">
              {note ??
                "This section is being prepared. Detailed technical information will be published here shortly."}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-red group">
                Discuss a Requirement{" "}
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link to="/" className="btn-outline-navy group">
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="shell">
          <MicroLabel>In preparation</MicroLabel>
        </div>
      </Section>

      <PageCta />
    </Page>
  );
}
