import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

/** Standard internal page frame: solid nav, page-in transition, global footer. */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav solid />
      <main className="anim-page-in pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

/**
 * Reusable internal hero framework. `layout` varies the composition so no two
 * pages open the same way.
 */
export function PageHero({
  eyebrow,
  index,
  title,
  statement,
  image,
  imageAlt,
  meta,
  layout = "split",
  tone = "light",
}: {
  eyebrow: string;
  index: string;
  title: ReactNode;
  statement: string;
  image: string;
  imageAlt: string;
  meta?: { k: string; v: string }[];
  layout?: "split" | "immersive" | "stack";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark" || layout === "immersive";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-navy-deep text-white" : "bg-cool text-graphite",
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0", dark ? "grid-tech-dark" : "grid-tech")} />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 anim-gradient-shift",
          dark ? "glow-soft-dark opacity-80" : "glow-soft",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-64 -right-40 h-[42rem] w-[42rem] rounded-full border",
          dark ? "border-white/10" : "border-navy/10",
        )}
      />

      {layout === "immersive" && (
        <>
          <img
            src={image}
            alt={imageAlt}
            data-flat=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/35" />
        </>
      )}

      <div className="shell relative">
        <div
          className={cn(
            "grid items-center gap-8 py-12 lg:py-20",
            layout === "split" && "lg:grid-cols-[1.05fr_0.95fr]",
            layout === "stack" && "lg:grid-cols-1",
          )}
          style={{ minHeight: "min(70vh, 640px)" }}
        >
          <div>
            <Reveal>
              <div className="label-micro flex items-center gap-3 text-red">
                <span className="h-px w-8 bg-red" />
                {eyebrow} <span className={dark ? "text-white/40" : "text-steel"}>/ {index}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className={cn(
                  "mt-7 max-w-[18ch] leading-[0.96]",
                  layout === "stack" ? "max-w-[24ch]" : "",
                )}
                style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
              >
                {title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <span className="mt-8 block h-px w-24 origin-left bg-red anim-draw-x" />
              <p
                className={cn(
                  "mt-8 max-w-xl text-lg leading-relaxed",
                  dark ? "text-white/72" : "text-steel",
                )}
              >
                {statement}
              </p>
            </Reveal>

            {meta && meta.length > 0 && (
              <Reveal delay={240}>
                <dl
                  className={cn(
                    "mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t pt-7",
                    dark ? "border-white/15" : "border-navy/12",
                  )}
                >
                  {meta.map((m, mi) => (
                    <div key={`${m.k}-${mi}`}>
                      <dt className={cn("label-micro", dark ? "text-white/45" : "text-steel")}>
                        {m.k}
                      </dt>
                      <dd
                        className={cn(
                          "mt-2 text-base font-semibold",
                          dark ? "text-white" : "text-navy",
                        )}
                      >
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
          </div>

          {layout === "split" && (
            <ClipImage
              src={image}
              alt={imageAlt}
              eager
              className="aspect-[4/3] w-full"
              frame
            />
          )}

          {layout === "stack" && (
            <ClipImage
              src={image}
              alt={imageAlt}
              eager
              className="aspect-[21/9] w-full"
              frame
            />
          )}
        </div>
      </div>
    </section>
  );
}

/** Image that reveals through a horizontal clip and lifts very slightly on hover. */
export function ClipImage({
  src,
  alt,
  className,
  imgClassName,
  eager = false,
  frame = false,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  frame?: boolean;
  caption?: string;
}) {
  const { ref, shown } = useReveal<HTMLElement>(0.15);
  return (
    <figure ref={ref as never} className={cn("group relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-blue/8 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
      />
      <div
        className={cn(
          "clip-x relative h-full w-full overflow-hidden rounded-[1.5rem] bg-navy/5 hover-lift",
          shown && "clip-x-in",
          frame && "border border-navy/10 shadow-[0_16px_36px_-26px_rgba(16,32,60,0.55)]",
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "h-full w-full rounded-[1.5rem] object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
            imgClassName,
          )}
        />
      </div>
      {caption && (
        <figcaption className="label-micro mt-3 text-steel">{caption}</figcaption>
      )}
    </figure>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
  curve = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "cool" | "navy" | "graphite";
  id?: string;
  /** Soft curved top edge that layers over the previous section. */
  curve?: boolean;
}) {
  const dark = tone === "navy" || tone === "graphite";
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-14 sm:py-16 lg:py-20",
        curve && "section-curve",
        tone === "white" && "bg-white",
        tone === "cool" && "bg-cool",
        tone === "navy" && "bg-navy-deep text-white",
        tone === "graphite" && "bg-graphite text-white",
        className,
      )}
    >
      {/* layered, subtle background wash */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 anim-gradient-shift",
          dark ? "glow-soft-dark opacity-70" : "glow-soft opacity-80",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full",
          dark
            ? "border border-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
            : "border border-navy/8",
        )}
      />
      <div className="relative">{children}</div>
    </section>
  );
}

export function SectionHead({
  index,
  label,
  title,
  copy,
  dark = false,
  className,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <MicroLabel tone={dark ? "light" : "blue"}>
          {index ? `${index} / ${label}` : label}
        </MicroLabel>
      </Reveal>
      <Reveal delay={70}>
        <h2
          className="mt-6 leading-[1.02]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={130}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              dark ? "text-white/70" : "text-steel",
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Counts a factual number up once, when scrolled into view. */
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!shown || done.current) return;
    done.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/** Consistent closing CTA, matching the home page enquiry style. */
export function PageCta() {
  return (
    <Section tone="navy" className="py-12 lg:py-18">
      <div className="pointer-events-none absolute inset-0 grid-tech-dark" />
      <div className="shell relative grid items-end gap-10 lg:grid-cols-[1.2fr_auto]">
        <div>
          <Reveal>
            <MicroLabel tone="light">Engineering Enquiry</MicroLabel>
          </Reveal>
          <Reveal delay={70}>
            <h2
              className="mt-6 max-w-[22ch] leading-[1.03]"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 3.25rem)" }}
            >
              Have an application we can engineer for?
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Discuss your rubber component or polymer requirement with the Arul Polymers team.
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
  );
}

/** Thin technical divider that draws in on view. */
export function TechRule({ dark = false }: { dark?: boolean }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.5);
  return (
    <div
      ref={ref}
      className={cn(
        "h-px w-full origin-left transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        dark ? "bg-white/15" : "bg-navy/12",
        shown ? "scale-x-100" : "scale-x-0",
      )}
    />
  );
}
