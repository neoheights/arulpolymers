import { Link } from "@tanstack/react-router";
import clientDiscussion from "@/assets/site/client-discussion.jpg.asset.json";
import { Arrow, MicroLabel } from "./primitives";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = ["Quick Response", "Technical Guidance", "Trusted Support"];

const NODES = [
  { label: "Call", x: 14, y: 22, d: 0 },
  { label: "Mail", x: 78, y: 16, d: 0.6 },
  { label: "Enquiry", x: 88, y: 62, d: 1.2 },
  { label: "Support", x: 34, y: 78, d: 1.8 },
  { label: "Location", x: 62, y: 88, d: 2.4 },
];

function NodeIcon({ name, className }: { name: string; className?: string }) {
  const c = cn("h-4 w-4", className);
  switch (name) {
    case "Call":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.7 3a1 1 0 0 1-.3 1L7 10.4a11 11 0 0 0 5.6 5.6l1.6-1.7c.3-.3.7-.4 1-.3l3 .7c.5.1.8.5.8 1V18c0 .6-.4 1-1 1h-1A14 14 0 0 1 4 6V5Z" />
        </svg>
      );
    case "Mail":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "Location":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "Support":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
          <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M5 4.5h14v11H12l-4.5 4v-4H5z" />
        </svg>
      );
  }
}

export function ContactHero() {
  return (
    <section className="section-curve relative overflow-hidden bg-cool">
      {/* Layered background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-tech opacity-70" />
      <div
        aria-hidden="true"
        className="anim-gradient-shift pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(60% 70% at 82% 12%, color-mix(in oklab, var(--blue) 20%, transparent), transparent 70%), radial-gradient(55% 60% at 8% 88%, color-mix(in oklab, var(--navy) 12%, transparent), transparent 72%), linear-gradient(120deg, transparent 40%, color-mix(in oklab, var(--red) 7%, transparent))",
        }}
      />
      <div
        aria-hidden="true"
        className="anim-spin-slow pointer-events-none absolute -right-48 -top-56 h-[46rem] w-[46rem] rounded-full border border-navy/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-18rem] h-[34rem] w-[34rem] rounded-full border border-blue/15"
      />

      {/* Curved communication lines travelling across the hero */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-blue/40"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 470 C 260 470, 340 250, 620 250 S 980 120, 1220 96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="anim-signal-draw"
        />
        <path
          d="M-20 540 C 300 520, 420 360, 740 340 S 1040 250, 1220 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.55"
          className="anim-signal-draw anim-signal-delay"
        />
        <path
          d="M-20 470 C 260 470, 340 250, 620 250 S 980 120, 1220 96"
          fill="none"
          stroke="var(--red)"
          strokeWidth="2"
          strokeDasharray="6 240"
          className="anim-signal-travel"
        />
      </svg>

      <div className="shell relative">
        <div
          className="grid items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20"
          style={{ minHeight: "min(74vh, 660px)" }}
        >
          {/* Left: message */}
          <div className="relative">
            <div className="anim-hero-rise">
              <MicroLabel tone="red">Contact Us</MicroLabel>
            </div>

            <h1
              className="mt-7 max-w-[20ch] leading-[0.96] text-navy"
              style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.9rem)" }}
            >
              {["Let's engineer", "the right", "conversation."].map((line, i) => (
                <span key={line} className="mask-line block pb-[0.08em] -mb-[0.08em]">
                  <span
                    className="anim-hero-line block"
                    style={{ animationDelay: `${120 + i * 110}ms` }}
                  >
                    {line === "conversation." ? (
                      <>
                        conversation<span className="text-red">.</span>
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <span className="anim-draw-x mt-8 block h-px w-24 origin-left bg-red" />

            <p
              className="anim-hero-rise mt-7 max-w-xl text-lg leading-relaxed text-steel"
              style={{ animationDelay: "520ms" }}
            >
              For product enquiries, tooling discussions, technical support, and manufacturing
              requirements.
            </p>

            <div
              className="anim-hero-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "640ms" }}
            >
              <a href="#enquiry-form" className="btn-red group">
                Send an Enquiry{" "}
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a href="tel:+919994555845" className="btn-outline-navy">
                Call Our Team
              </a>
            </div>

            <ul
              className="anim-hero-rise mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "760ms" }}
            >
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 rounded-full border border-navy/12 bg-white/85 px-3.5 py-2 text-[0.66rem] font-semibold tracking-[0.1em] text-navy uppercase shadow-[0_10px_24px_-20px_rgba(8,59,112,0.7)] backdrop-blur-sm transition-colors duration-300 hover:border-blue/40"
                >
                  <span className="anim-node-pulse h-1.5 w-1.5 rounded-full bg-red" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: connected engineering network */}
          <div
            className="anim-hero-rise relative"
            style={{ animationDelay: "300ms" }}
          >
            <div
              aria-hidden="true"
              className="anim-motion-ring absolute inset-6 rounded-full border border-blue/25"
            />
            <div
              aria-hidden="true"
              className="anim-motion-ring-delay absolute inset-14 rounded-full border border-blue/20"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-navy/12 bg-white/70 p-3 shadow-[0_40px_80px_-58px_rgba(8,59,112,0.75)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={clientDiscussion.url}
                  alt="Arul Polymers technicians discussing an engineering requirement with a client on the factory floor"
                  data-flat=""
                  loading="eager"
                  decoding="async"
                  width={1600}
                  height={1280}
                  className="aspect-[5/4] w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-navy-deep/72 via-navy/30 to-transparent"
                />
                <div aria-hidden="true" className="absolute inset-0 grid-tech-dark opacity-50" />

                {/* network graphic */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {NODES.map((n) => (
                    <line
                      key={n.label}
                      x1="50"
                      y1="50"
                      x2={n.x}
                      y2={n.y}
                      stroke="white"
                      strokeOpacity="0.35"
                      strokeWidth="0.25"
                      strokeDasharray="1.4 1.4"
                    />
                  ))}
                </svg>

                {NODES.map((n) => (
                  <div
                    key={n.label}
                    className="anim-float-soft absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${n.d}s` }}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/25 bg-navy-deep/70 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
                      <NodeIcon name={n.label} className="h-3.5 w-3.5 text-white" />
                      <span className="hidden sm:inline">{n.label}</span>
                    </div>
                  </div>
                ))}

                {/* focal glow hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className="anim-motion-ring absolute inset-0 -m-6 rounded-full border border-red/60"
                  />
                  <span className="anim-node-pulse block h-4 w-4 rounded-full bg-red shadow-[0_0_28px_8px_color-mix(in_oklab,var(--red)_45%,transparent)]" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-3 pt-3 pb-1">
                <span className="label-micro text-steel">Hosur, Tamil Nadu — India</span>
                <Link
                  to="/contact"
                  className="label-micro flex items-center gap-2 text-blue transition-colors duration-300 hover:text-red"
                >
                  Response within 24h <Arrow className="h-2 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
