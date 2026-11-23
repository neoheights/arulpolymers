import { useState } from "react";
import precisionElastomerBushes from "@/assets/precision-elastomer-bushes-yellow.png";
import indAerospaceNew from "@/assets/ind-aerospace-new.png.asset.json";
import indAutomobilesNew from "@/assets/ind-automobiles-new.png.asset.json";
import indIndustrial from "@/assets/ind-industrial.jpg";
import indMiningNew from "@/assets/ind-mining-new.png.asset.json";
import indOilGas from "@/assets/ind-oil-gas.jpg";
import indPotableWaterNew from "@/assets/ind-potable-water-new.png.asset.json";
import indAgriculture from "@/assets/ind-agriculture.jpg";
import wheelHubObserver from "@/assets/products/wheel-hub-observer.jpg.asset.json";
import swingArmBush from "@/assets/products/swing-arm-bush.jpg.asset.json";
import rubberInletCorroborator from "@/assets/products/rubber-inlet-corroborator.jpg.asset.json";
import capMaterialAsset from "@/assets/capabilities/material-engineering.webp.asset.json";
import capDesignAsset from "@/assets/capabilities/design-development.png.asset.json";
import capManufacturingAsset from "@/assets/capabilities/precision-manufacturing.jpg.asset.json";
import capPrecisionProcessOneAsset from "@/assets/capabilities/precision-process-01.jpg.asset.json";
import capPrecisionProcessTwoAsset from "@/assets/capabilities/precision-process-02.jpg.asset.json";
import capQualityAsset from "@/assets/capabilities/quality-assurance.jpg.asset.json";
import arulVajravel from "@/assets/arul-vajravel.png.asset.json";
import { cn } from "@/lib/utils";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import { ClipImage } from "./PageShell";
import { LeadershipPortrait } from "./LeadershipPortrait";

/* ---------------- SECTION 2 — INTRODUCTION ---------------- */

export function Intro() {
  return (
    <section
      id="about"
      className="section-curve relative isolate overflow-hidden border-t border-hairline py-14 lg:py-20"
      style={{
        background:
          "linear-gradient(140deg, #FBFCFE 0%, #F7F9FC 45%, #EDF1F7 100%)",
      }}
    >
      {/* Layer 3 — blueprint grid */}
      <span
        aria-hidden
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, black 0%, black 55%, transparent 100%)",
        }}
      />
      {/* Layer 4 — soft blue studio glow behind the visual */}
      <span
        aria-hidden
        className="anim-glow-drift pointer-events-none absolute -left-24 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--blue) 16%, transparent) 0%, transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--navy) 10%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Decorative technical accents */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-16 hidden h-56 w-56 rounded-full border border-navy/10 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-28 hidden h-32 w-32 rounded-full border border-blue/15 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-24 bg-navy/15 lg:block"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[22%] bottom-14 hidden text-navy/20 lg:block"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <path d="M14 0v28M0 14h28" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      {/* Layer 5 — faint grain */}
      <span
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
      />

      <div className="shell relative grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <MicroLabel>Who we are</MicroLabel>
          <h2 className="relative mt-8 text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.02] font-extrabold text-navy">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-14 hidden select-none text-[6rem] leading-none font-extrabold tracking-tight text-navy/[0.018] lg:block"
            >
              ELASTOMER
            </span>
            Rubber is the material.
            <span className="mt-3 block font-semibold text-steel">
              Engineering is what we deliver.
            </span>
          </h2>
          <div className="mt-8 hidden lg:block">
            <div className="group relative h-72 overflow-hidden rounded-[4px] bg-navy-deep ring-1 ring-navy/15 shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--navy)_60%,transparent)] transition-transform duration-500 hover:-translate-y-1">
              <span className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.08]" />
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/25" />
              <div className="anim-product-float absolute inset-0 flex items-center justify-center">
                <img
                  src={precisionElastomerBushes}
                  alt="Two precision rubber-to-metal bonded elastomer bushes with yellow-coated outer sleeves"
                  className="h-[78%] w-[78%] object-contain drop-shadow-[0_22px_20px_rgba(0,0,0,0.4)]"
                />
              </div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-navy-deep/20" />
              <span className="pointer-events-none absolute inset-0 border border-white/10" />
              <span className="label-micro absolute bottom-4 left-4 text-white/70">
                Precision elastomer component
              </span>
            </div>
          </div>

        </Reveal>

        <Reveal delay={120} className="lg:pt-24">
          <p className="text-lg leading-relaxed text-graphite lg:text-xl">
            Since 1998, Arul Polymers has engineered specialised elastomer and rubber components for
            demanding applications where precision, durability and dependable performance matter.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-8 border-t border-navy/12 bg-white/55 p-6 pt-8 backdrop-blur-[2px] sm:grid-cols-2">
            {[
              ["Established", "1998"],
              ["Core industries", "05"],
              [
                "Recognition & Certification",
                "CEMILAC / DGAQA \n · IATF 16949  \n· ISO 9001  \n· WRAS  · EN 681",
              ],
              ["Location", "Hosur, Tamil Nadu"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className="relative sm:pl-4 sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:h-full sm:before:w-px sm:before:bg-navy/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <dt className="label-micro text-steel">{k}</dt>
                <dd className="mt-2 text-lg font-bold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
          <a href="#capabilities" className="btn-outline-navy mt-8">
            Discover Arul Polymers <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- SECTION 3 — LEADERSHIP ---------------- */

export function Leadership() {
  return (
    <section
      id="leadership"
      className="section-curve relative isolate overflow-hidden border-t border-hairline py-10 lg:py-14"
      style={{ background: "linear-gradient(150deg,#FFFFFF 0%,#FAFCFE 55%,#F1F5FA 100%)" }}
    >
      {/* blueprint grid */}
      <span
        aria-hidden
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          maskImage: "radial-gradient(110% 80% at 80% 10%, black 0%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(110% 80% at 80% 10%, black 0%, transparent 85%)",
        }}
      />
      {/* animated motion-ring medallion filling upper-right empty space */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 hidden h-[30rem] w-[30rem] lg:block"
        style={{
          background:
            "radial-gradient(circle at 60% 35%, color-mix(in oklab, var(--blue) 18%, transparent) 0%, color-mix(in oklab, var(--navy) 8%, transparent) 45%, transparent 72%)",
        }}
      >
        {/* motion rings — pulse outward from centre */}
        <span className="absolute inset-10 rounded-full border border-navy/[0.10] anim-motion-ring" />
        <span className="absolute inset-10 rounded-full border border-blue/[0.12] anim-motion-ring-delay" />
        <span className="absolute inset-10 rounded-full border border-red/[0.08] anim-motion-ring-delay-2" />

        {/* static anchor rings */}
        <span className="absolute inset-14 rounded-full border border-navy/[0.08]" />
        <span className="absolute inset-24 rounded-full border border-blue/[0.10]" />
        <span className="absolute inset-36 rounded-full border border-navy/[0.06]" />

        {/* rotating technical tick ring */}
        <svg
          className="absolute inset-12 h-[calc(100%-6rem)] w-[calc(100%-6rem)] text-navy/15 anim-spin-slow"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 12" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="100"
              y1="12"
              x2="100"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.5"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
        </svg>

        {/* red accent dot */}
        <span className="absolute top-[18%] left-[26%] h-2 w-2 rounded-full bg-red/50" />
        {/* technical crosshair */}
        <svg
          className="absolute top-[22%] left-[30%] text-navy/20"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M16 0v32M0 16h32" stroke="currentColor" strokeWidth="1" />
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* diagonal gradient bar */}
        <span
          className="absolute top-[34%] left-[18%] h-px w-24 origin-left -rotate-45 bg-gradient-to-r from-blue/30 to-transparent"
        />
        <span
          className="absolute top-[40%] left-[22%] h-px w-16 origin-left -rotate-45 bg-gradient-to-r from-red/25 to-transparent"
        />
      </div>
      {/* soft radial glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-[26rem] w-[26rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--blue) 14%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* connecting hairlines */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-28 bg-navy/12 lg:block" />

      <div className="shell relative grid items-start gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-10">
        <div className="lg:pt-2">
          <MicroLabel>Leadership</MicroLabel>

          <Reveal delay={80}>
            <p
              className="mt-5 leading-none text-red"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.1rem)", fontStyle: "italic", fontWeight: 700 }}
            >
              Mr. Arul Vajravel
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="label-micro mt-2.5 flex items-center gap-3 text-navy">
              <span className="h-px w-6 bg-red" />
              Director
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="mt-6 leading-[1.06] text-navy"
              style={{ fontSize: "clamp(1.55rem, 2.5vw, 2.2rem)" }}
            >
              Engineering with purpose.
              <br />
              <span className="text-steel">Leading with precision.</span>
            </h2>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel">
              Mr. Arul Vajravel guides Arul Polymers with a strong focus on precision manufacturing,
              polymer engineering, quality, and continuous improvement.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-3.5 max-w-xl text-base leading-relaxed text-steel">
              His leadership strengthens the company’s capabilities across automotive, aerospace,
              and industrial applications through disciplined processes, technical expertise, and
              customer-focused innovation.
            </p>
          </Reveal>

          <Reveal delay={380}>
            <blockquote className="relative mt-7 max-w-xl border-l-2 border-red bg-white/70 py-3 pl-6 backdrop-blur-[2px]">
              <p
                className="leading-[1.2] text-navy"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontStyle: "italic", fontWeight: 700 }}
              >
                “Precision is built into every process.”
              </p>
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-first flex justify-start lg:order-last lg:justify-center lg:pt-1">
          <LeadershipPortrait
            src={arulVajravel.url}
            alt="Mr. Arul Vajravel — Director, Arul Polymers Pvt. Ltd."
            caption="Mr. Arul Vajravel — Director"
          />
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- SECTION 3 — INDUSTRIES ---------------- */

const INDUSTRIES = [
  {
    name: "Aerospace & Defence",
    img: indAerospaceNew.url,
    desc: "Components engineered for airworthiness-critical environments, supported by CEMILAC and DGAQA recognition.",
  },
  {
    name: "Automobiles",
    img: indAutomobilesNew.url,
    desc: "Sealing, damping and bonded components developed for volume production and durability cycles.",
  },
  {
    name: "Industrial",
    img: indIndustrial,
    desc: "Elastomer parts for process equipment operating under pressure, heat and chemical exposure.",
  },
  {
    name: "Mining",
    img: indMiningNew.url,
    desc: "Wear resistant liners, ceramic backed pads and filter gaskets built for abrasion, impact and continuous duty.",
  },
  {
    name: "Oil & Gas",
    img: indOilGas,
    desc: "Seals, O-rings and gaskets compounded for pressure, hydrocarbons and aggressive media in process pipelines.",
  },
  {
    name: "Potable Water",
    img: indPotableWaterNew.url,
    desc: "WRAS approved compounds for sealing components in contact with drinking water and treatment systems.",
  },
  {
    name: "Agriculture",
    img: indAgriculture,
    desc: "Robust components built for dust, load and continuous field operation.",
  },
];

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="section-curve relative overflow-hidden bg-cool py-14 lg:py-20">
      <div className="shell">
        <Reveal>
          <MicroLabel>Industries we serve</MicroLabel>
          <h2 className="mt-7 max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] font-extrabold text-navy">
            Engineered across critical industries.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <div className="shell hidden gap-1 lg:flex lg:h-[32rem]">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden text-left transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                active === i ? "flex-[2.6]" : "flex-[0.85]",
              )}
            >
              <img
                src={ind.img}
                alt={ind.name}
                width={1000}
                height={1400}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out",
                  active === i ? "scale-105" : "scale-100",
                )}
              />
              <span
                className={cn(
                  "absolute inset-0 transition-colors duration-700",
                  active === i
                    ? "bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-transparent"
                    : "bg-navy-deep/70",
                )}
              />
              <span className="label-micro absolute top-5 left-5 text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute inset-x-4 bottom-5 block">
                <span
                  className={cn(
                    "block font-bold leading-[1.1] tracking-tight text-white transition-all duration-700",
                    active === i ? "text-[1.6rem]" : "text-[1.15rem]",
                  )}
                >
                  {ind.name}
                </span>
                <span
                  className={cn(
                    "mt-3 block max-w-sm overflow-hidden text-sm leading-relaxed text-white/75 transition-all duration-700",
                    active === i ? "max-h-24 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  {ind.desc}
                </span>
                <span
                  className={cn(
                    "mt-4 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] text-red uppercase transition-all duration-700",
                    active === i ? "opacity-100" : "opacity-0",
                  )}
                >
                  Explore Industry <Arrow />
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* mobile / tablet */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:hidden">
          {INDUSTRIES.map((ind, i) => (
            <article
              key={ind.name}
              className="relative h-[26rem] w-[80vw] shrink-0 snap-center overflow-hidden sm:w-[24rem]"
            >
              <img
                src={ind.img}
                alt={ind.name}
                width={1000}
                height={1400}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/92 via-navy-deep/35 to-transparent" />
              <span className="label-micro absolute top-4 left-4 text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-xl leading-[1.1] font-bold tracking-tight text-white">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{ind.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- SECTION 4 — CAPABILITIES ---------------- */

const PILLARS = [
  {
    title: "Material Engineering",
    body: "Compounds selected and developed for demanding operating environments.",
    draw: "M8 40 L40 8 L72 40 L40 72 Z M40 24 L56 40 L40 56 L24 40 Z",
    images: [capMaterialAsset.url],
  },
  {
    title: "Design & Development",
    body: "Engineering support from requirement through product development.",
    draw: "M10 66 L34 18 L58 50 L72 30 M10 66 H72 M34 18 v48",
    images: [capDesignAsset.url],
  },
  {
    title: "Precision Manufacturing",
    body: "Controlled manufacturing processes designed for consistency.",
    draw: "M12 28 h56 v10 h-56 z M20 38 v22 h40 v-22 M40 60 v10 M24 70 h32",
    images: [capPrecisionProcessOneAsset.url, capPrecisionProcessTwoAsset.url],
  },
  {
    title: "Quality Assurance",
    body: "Inspection, validation and documentation throughout production.",
    draw: "M40 8 l28 12 v22 c0 18 -12 26 -28 32 c-16 -6 -28 -14 -28 -32 V20 Z M28 40 l9 10 l16 -19",
    images: [capQualityAsset.url],
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-curve relative overflow-hidden py-14 text-navy lg:py-20"
      style={{
        background:
          "linear-gradient(155deg, #F2F6FB 0%, #E7EEF7 45%, #DCE7F3 100%)",
      }}
    >
      {/* blueprint grid layer */}
      <span
        aria-hidden
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.07]"
      />
      {/* soft radial highlight behind the heading */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[34rem] w-[46rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in oklab, var(--blue) 16%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* faint industrial silhouette at the base */}
      <img
        src={capManufacturingAsset.url}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full object-cover opacity-[0.06]"
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <MicroLabel tone="red">Capabilities</MicroLabel>
          <h2 className="mt-7 text-[clamp(1.7rem,4.2vw,3.25rem)] leading-[1.05] font-extrabold text-navy">
            <span className="block sm:whitespace-nowrap">More than moulding rubber.</span>
            <span className="block text-navy/55 sm:whitespace-nowrap">We engineer performance.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border border-navy/10 bg-white/70 p-8 backdrop-blur-sm lg:p-9",
                "shadow-[0_8px_24px_-16px_rgba(15,42,74,0.25)]",
                "transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                "hover:-translate-y-1.5 hover:border-blue/40 active:-translate-y-0.5",
                "hover:shadow-[0_28px_50px_-22px_rgba(15,42,74,0.4)] active:shadow-[0_16px_32px_-14px_rgba(15,42,74,0.35)]",
              )}
            >
              {/* technical imagery inside the card — visible at ~45% */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                {p.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "h-full object-cover opacity-[0.45] transition-all duration-[600ms] group-hover:scale-[1.06] group-hover:opacity-[0.72] group-active:opacity-[0.85]",
                      p.images.length === 1 && "absolute inset-0 w-full",
                      p.images.length > 1 && imageIndex === 0 && "absolute inset-y-0 left-0 w-[64%] [mask-image:linear-gradient(to_right,#000_0%,#000_68%,transparent_100%)]",
                      p.images.length > 1 && imageIndex === 1 && "absolute inset-y-0 right-0 w-[64%] [mask-image:linear-gradient(to_left,#000_0%,#000_68%,transparent_100%)]",
                    )}
                  />
                ))}
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/85"
              />
              {/* glow highlight behind the icon on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-600 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse, color-mix(in oklab, var(--blue) 26%, transparent) 0%, transparent 70%)",
                }}
              />
              {/* animated technical frame */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl border border-red/0 transition-all duration-500 group-hover:border-red/30"
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <path
                      d={p.draw}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className="text-navy/70 transition-colors duration-500 group-hover:text-red"
                    />
                  </svg>
                  <span className="label-micro rounded-full border border-navy/12 bg-white/70 px-3 py-1.5 text-navy/50 transition-colors duration-500 group-hover:border-red/30 group-hover:text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-9 text-xl font-bold text-navy transition-transform duration-500 group-hover:-translate-y-0.5">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite/85">
                  {p.body}
                </p>
                <span className="mt-8 block h-px w-full bg-navy/12">
                  <span className="block h-px w-0 bg-red transition-all duration-700 ease-out group-hover:w-full" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 5 — PRODUCTS ---------------- */

const PRODUCTS = [
  {
    name: "Wheel Hub Observer",
    img: wheelHubObserver.url,
    specs: [
      ["Material", "Natural Rubber"],
      ["Application", "Absorbs shocks, dampens vibrations, and minimizes noise generated during vehicle operation."],
      ["Environment", "Flexure, Dust, and Ozone"],
      ["Performance", "High Cycle Durability"],
    ],
  },
  {
    name: "Swing Arm Bush",
    img: swingArmBush.url,
    specs: [
      ["Material", "Natural Rubber with Metal Tubes"],
      ["Application", "A critical component in the suspension system of motorcycles and scooters, providing essential support, vibration damping, and smooth articulation between the swing arm and the frame."],
      ["Environment", "Load, Vibration, Fatigue"],
      ["Performance", "Bond Strength and Damping"],
    ],
  },
  {
    name: "Rubber Inlet for Corroborator",
    img: rubberInletCorroborator.url,
    specs: [
      ["Material", "High-Quality Fuel-Resistant Elastomers"],
      ["Application", "A flexible and airtight connection between the carburetor and the intake manifold or air filter housing in internal combustion engines."],
      ["Environment", "Thermal stability and resistance to vibration and fuel vapours."],
      ["Performance", "Airtight Connection and fuel resistance"],
    ],
  },
];

export function Products() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="products" className="section-curve relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="shell">
        <Reveal>
          <MicroLabel>Product engineering</MicroLabel>
          <h2 className="mt-7 max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] font-extrabold text-navy">
            Small Components.
            <span className="block text-steel">Critical Responsibilities.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl mt-10 border border-hairline bg-navy-deep p-2 lg:p-3">
            {/* desktop / tablet: expanding row */}
            <div className="hidden gap-2 lg:flex lg:h-[30rem]">
              {PRODUCTS.map((p, i) => {
                const isActive = active === i;
                const collapsed = active !== null && !isActive;
                return (
                  <button
                    key={p.name}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActive(isActive ? null : i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "group relative overflow-hidden border border-white/10 text-left outline-none transition-all duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                      "hover:-translate-y-[3px] hover:border-engineering/60 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)]",
                      "focus-visible:ring-2 focus-visible:ring-engineering",
                      isActive ? "flex-[3.2]" : collapsed ? "flex-[0.9]" : "flex-1",
                    )}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-[450ms]",
                        isActive ? "scale-[1.03] opacity-90" : "opacity-70 group-hover:scale-[1.03]",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 transition-opacity duration-[450ms]",
                        "bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40",
                        isActive ? "opacity-80" : "opacity-95 group-hover:opacity-85",
                      )}
                    />
                    <span className="rounded-2xl pointer-events-none absolute inset-0 border border-engineering/0 transition-all duration-[450ms] group-hover:border-engineering/50" />

                    <span className="relative flex h-full flex-col justify-end p-6">
                      <span className="label-micro block text-red transition-transform duration-[450ms] group-hover:-translate-y-1">
                        {String(i + 1).padStart(2, "0")} / Component
                      </span>
                      <span
                        className={cn(
                          "mt-3 block font-extrabold text-white transition-all duration-[450ms]",
                          isActive ? "text-3xl" : "text-xl",
                        )}
                      >
                        {p.name}
                      </span>

                      <span
                        className={cn(
                          "grid overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                          isActive ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block divide-y divide-white/15 border-y border-white/15">
                            {p.specs.map(([k, v]) => (
                              <span key={k} className="flex items-baseline gap-6 py-3">
                                <span className="label-micro w-32 shrink-0 text-red">{k}</span>
                                <span className="text-sm font-medium text-white/85">{v}</span>
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>

                      {!isActive && (
                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/80 uppercase">
                          View details
                          <span className="transition-transform duration-[450ms] group-hover:translate-x-[5px]">
                            <Arrow />
                          </span>
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* mobile: accordion */}
            <div className="flex flex-col gap-2 lg:hidden">
              {PRODUCTS.map((p, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={p.name}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActive(isActive ? null : i)}
                    className="rounded-2xl group relative overflow-hidden border border-white/10 text-left"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-[450ms]",
                        isActive ? "opacity-90" : "opacity-70",
                      )}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/45" />
                    <span className="relative block p-5">
                      <span className="label-micro block text-red">
                        {String(i + 1).padStart(2, "0")} / Component
                      </span>
                      <span className="mt-2 block text-xl font-extrabold text-white">{p.name}</span>
                      <span
                        className={cn(
                          "grid overflow-hidden transition-all duration-[500ms]",
                          isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block divide-y divide-white/15 border-y border-white/15">
                            {p.specs.map(([k, v]) => (
                              <span key={k} className="flex items-baseline gap-4 py-3">
                                <span className="label-micro w-28 shrink-0 text-red">{k}</span>
                                <span className="text-sm font-medium text-white/85">{v}</span>
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                      {!isActive && (
                        <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/80 uppercase">
                          Read more <Arrow />
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
