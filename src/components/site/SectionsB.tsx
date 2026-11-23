import insideComponent from "@/assets/inside-component.jpg";
import mixingYard from "@/assets/site/manufacturing-shop-floor.webp.asset.json";
import pAmc from "@/assets/partners/aligned/amc.png.asset.json";
import pThyssen from "@/assets/partners/aligned/thyssenkrupp.png.asset.json";
import pParker from "@/assets/partners/aligned/parker.png.asset.json";
import pHal from "@/assets/partners/aligned/hindustan-aeronautics-limited.png.asset.json";
import pBdl from "@/assets/partners/aligned/bharat-dynamics-limited.png.asset.json";
import pBeml from "@/assets/partners/aligned/beml.png.asset.json";
import pBel from "@/assets/partners/aligned/bharat-electronics-limited.png.asset.json";
import pBmm from "@/assets/partners/aligned/bmm.png.asset.json";
import pSynergy from "@/assets/partners/aligned/synergy.png.asset.json";
import pAartiSteels from "@/assets/partners/aligned/aarti-steels.png.asset.json";
import pAdor from "@/assets/partners/aligned/ador.png.asset.json";
import pAther from "@/assets/partners/aligned/ather.png.asset.json";
import pAti from "@/assets/partners/aligned/ati.png.asset.json";
import pAvr from "@/assets/partners/aligned/avr.png.asset.json";
import pBaldota from "@/assets/partners/aligned/baldota.png.asset.json";
import pCarclo from "@/assets/partners/aligned/carclo-technical-plastics.png.asset.json";
import pCastolin from "@/assets/partners/aligned/castolin-eutectic.png.asset.json";
import pDhoot from "@/assets/partners/aligned/dhoot-transmission.png.asset.json";
import pDrdo from "@/assets/partners/aligned/drdo.png.asset.json";
import pElectrosteel from "@/assets/partners/aligned/electrosteel.png.asset.json";
import pElkayemHd from "@/assets/partners/aligned/elkayem.png.asset.json";
import pEsab from "@/assets/partners/aligned/esab.png.asset.json";
import pGeTd from "@/assets/partners/aligned/ge-tandd-india.png.asset.json";
import pGreaves from "@/assets/partners/aligned/greaves-electric-mobility.png.asset.json";
import pIndeon from "@/assets/partners/aligned/indeon.png.asset.json";
import pJanatics from "@/assets/partners/aligned/janatics.png.asset.json";
import pJindal from "@/assets/partners/aligned/jindal-steel-and-power.png.asset.json";
import pJsw from "@/assets/partners/aligned/jsw.png.asset.json";
import pKali from "@/assets/partners/aligned/kali-mhs.png.asset.json";
import pMWane from "@/assets/partners/aligned/m-wane-india.png.asset.json";
import pMarathwada from "@/assets/partners/aligned/marathwada-auto-comp.png.asset.json";
import pPricol from "@/assets/partners/aligned/pricol.png.asset.json";
import pRamco from "@/assets/partners/aligned/ramco-cements.png.asset.json";
import pSandhar from "@/assets/partners/aligned/sandhar.png.asset.json";
import pSentec from "@/assets/partners/aligned/sentec.png.asset.json";
import pSimple from "@/assets/partners/aligned/simple.png.asset.json";
import pRideRiver from "@/assets/partners/aligned/rideriver.png.asset.json";
import pThco from "@/assets/partners/aligned/thco-india.png.asset.json";
import pWalvoil from "@/assets/partners/aligned/walvoil.png.asset.json";
import pWipro from "@/assets/partners/aligned/wipro-enterprises.png.asset.json";
import { useEffect, useRef, useState } from "react";
import { useReveal, useScrollProgress } from "@/lib/use-reveal";
import texManufacturing from "@/assets/site/machine-moulding-zone-enhanced.jpg";
import texTooling from "@/assets/site/machine-mixing-mill-enhanced.jpg";
import texDevelopment from "@/assets/site/machine-kneader-enhanced.jpg";
import texRnD from "@/assets/site/r-and-d-1-enhanced.jpg";
import texInspection from "@/assets/material-macro.jpg";
import texQuality from "@/assets/quality-lab.jpg";
import { cn } from "@/lib/utils";
import { Arrow, MicroLabel, Reveal } from "./primitives";

/* ---------------- SECTION 6 — INSIDE THE ENGINEERING ---------------- */

const DETAILS = [
  { n: "01", label: "Material", side: "left", top: "8%" },
  { n: "02", label: "Compound", side: "left", top: "38%" },
  { n: "03", label: "Geometry", side: "left", top: "68%" },
  { n: "04", label: "Tolerance", side: "right", top: "8%" },
  { n: "05", label: "Environment", side: "right", top: "38%" },
  { n: "06", label: "Validation", side: "right", top: "68%" },
] as const;

export function InsideEngineering() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const revealed = Math.round(progress * DETAILS.length * 1.25);

  return (
    <section className="section-curve relative overflow-hidden border-y border-hairline bg-cool py-14 lg:py-20">
      <div className="shell">
        <Reveal className="text-center">
          <MicroLabel className="justify-center">Inside the engineering</MicroLabel>
          <h2 className="mx-auto mt-7 max-w-2xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] font-extrabold text-navy">
            Every detail has a reason.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-8 max-w-4xl">
          <div className="relative aspect-square">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-navy/25"
                strokeDasharray="1 3"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.25"
                className="text-blue/40"
                strokeDasharray="239"
                strokeDashoffset={239 - 239 * progress}
                transform="rotate(-90 50 50)"
              />
            </svg>

            <img
              src={insideComponent}
              alt="Precision moulded elastomer diaphragm component"
              width={1200}
              height={1200}
              loading="lazy"
              className="absolute inset-[14%] h-[72%] w-[72%] object-contain mix-blend-multiply transition-transform duration-700 ease-out"
              style={{ transform: `rotate(${progress * 22 - 8}deg) scale(${0.94 + progress * 0.06})` }}
            />

            {DETAILS.map((d, i) => {
              const on = revealed > i;
              return (
                <div
                  key={d.n}
                  className={cn(
                    "absolute flex items-center gap-3 transition-all duration-700",
                    d.side === "left" ? "left-0 flex-row-reverse text-right" : "right-0",
                    on ? "opacity-100" : "translate-y-2 opacity-0",
                  )}
                  style={{ top: d.top }}
                >
                  <span
                    className={cn(
                      "hidden h-px bg-red/70 transition-all duration-700 sm:block",
                      on ? "w-10 lg:w-20" : "w-0",
                    )}
                  />
                  <span className="block">
                    <span className="label-micro block text-red">{d.n}</span>
                    <span className="mt-1 block text-sm font-bold text-navy lg:text-base">
                      {d.label}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <p className="label-micro mt-10 text-center text-steel">
            Technical drawing → engineered component → manufactured product
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7 — PROCESS ---------------- */

const STAGES = [
  ["01", "Requirement"],
  ["02", "Material Selection"],
  ["03", "Design & Development"],
  ["04", "Tooling & Prototype"],
  ["05", "Manufacturing"],
  ["06", "Inspection & Validation"],
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section className="section-curve relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="shell">
        <Reveal>
          <MicroLabel>From requirement to production</MicroLabel>
          <h2 className="mt-7 max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.03] font-extrabold text-navy">
            From requirement
            <span className="block text-steel">to reliable component.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-8">
          <div className="absolute top-[7px] left-0 hidden h-px w-full bg-hairline lg:block" />
          <div
            className="absolute top-[7px] left-0 hidden h-px bg-red transition-[width] duration-300 ease-out lg:block"
            style={{ width: `${Math.min(100, progress * 130)}%` }}
          />
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-hairline lg:hidden" />
          <div
            className="absolute top-0 left-[7px] w-px bg-red transition-[height] duration-300 ease-out lg:hidden"
            style={{ height: `${Math.min(100, progress * 130)}%` }}
          />

          <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
            {STAGES.map(([n, label], i) => {
              const on = progress * 130 > (i / STAGES.length) * 100;
              return (
                <li key={n} className="relative pl-10 lg:pl-0">
                  <span
                    className={cn(
                      "absolute top-0 left-0 h-[15px] w-[15px] rounded-full border-2 bg-white transition-colors duration-500 lg:top-0 lg:left-0",
                      on ? "border-red" : "border-hairline",
                    )}
                  />
                  <div className="lg:pt-10">
                    <span
                      className={cn(
                        "label-micro transition-colors duration-500",
                        on ? "text-red" : "text-steel/60",
                      )}
                    >
                      {n}
                    </span>
                    <p
                      className={cn(
                        "mt-2 text-base leading-tight font-bold transition-colors duration-500",
                        on ? "text-navy" : "text-steel/60",
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 8 — MANUFACTURING ---------------- */

/** Animates a numeric value once visible. Non-numeric values render as-is. */
function Stat({ value, label }: { value: string; label: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.4);
  const num = /^\d+$/.test(value) ? parseInt(value, 10) : null;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shown || num === null) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, num]);

  return (
    <div ref={ref} className="relative border-t border-navy/12 pt-5">
      <span aria-hidden className="absolute -top-px left-0 h-px w-9 bg-red" />
      <p className="text-5xl font-extrabold tracking-tight text-navy tabular-nums lg:text-[3.4rem]">
        {num === null ? value : String(display).padStart(value.length, "0")}
      </p>
      <p className="label-micro mt-2.5 text-steel">{label}</p>
    </div>
  );
}

const CAPABILITY_TILES = [
  {
    name: "Manufacturing",
    img: texManufacturing,
    icon: "M12 30 h56 v12 h-56 z M22 42 v18 h36 v-18 M40 60 v8 M26 68 h28 M32 30 v-8 h16 v8",
  },
  {
    name: "Tooling",
    img: texTooling,
    icon: "M40 12 v14 M40 54 v14 M12 40 h14 M54 40 h14 M20 20 l10 10 M60 20 l-10 10 M20 60 l10 -10 M60 60 l-10 -10 M32 40 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0",
  },
  {
    name: "Development",
    img: texDevelopment,
    icon: "M14 62 L34 22 L50 48 L64 28 M14 62 h52 M34 22 v40 M50 48 v14",
  },
  {
    name: "R&D",
    img: texRnD,
    icon: "M32 12 h16 M36 12 v16 l-14 30 a8 8 0 0 0 7 12 h22 a8 8 0 0 0 7 -12 l-14 -30 v-16 M28 52 h24",
  },
  {
    name: "Inspection",
    img: texInspection,
    icon: "M34 34 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M54 54 l14 14 M46 28 v12 h10",
  },
  {
    name: "Quality",
    img: texQuality,
    icon: "M40 10 l26 11 v20 c0 16 -11 24 -26 29 c-15 -5 -26 -13 -26 -29 v-20 Z M30 40 l8 9 l14 -17",
  },
];

function CapabilityMatrix() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
      {CAPABILITY_TILES.map((t, i) => {
        const isActive = active === i;
        const isMuted = active !== null && !isActive;
        return (
          <button
            key={t.name}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(isActive ? null : i)}
            className={cn(
              "group relative overflow-hidden border border-navy/12 bg-white text-left",
              "transition-all duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
              "hover:-translate-y-1 hover:border-blue/50",
              isActive && "-translate-y-1 border-blue/60 shadow-[0_20px_40px_-20px_rgba(15,42,74,0.35)]",
              isMuted && "opacity-55 saturate-50",
            )}
          >
            {/* technical texture */}
            <img
              src={t.img}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.10] transition-all duration-500",
                "group-hover:opacity-[0.22] group-hover:scale-[1.05]",
                isActive && "opacity-[0.24] scale-[1.05]",
              )}
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F2F6FB]/80 via-white/55 to-[#E7EEF7]/75" />
            {/* radial glow behind active tile */}
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute -top-10 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                isActive && "opacity-100",
              )}
              style={{
                background: "radial-gradient(ellipse, color-mix(in oklab, var(--blue) 22%, transparent) 0%, transparent 70%)",
              }}
            />
            {/* animated blue border frame */}
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 border border-blue/0 transition-all duration-500 group-hover:border-blue/35",
                isActive && "border-blue/45",
              )}
            />
            {/* red indicator line */}
            <span
              aria-hidden
              className={cn(
                "absolute top-0 left-0 h-[3px] w-0 bg-red transition-all duration-500 ease-out group-hover:w-full",
                isActive && "w-full",
              )}
            />

            <span className="relative block px-5 py-6 lg:px-6 lg:py-7">
              <span className="flex items-start justify-between">
                <svg
                  viewBox="0 0 80 80"
                  aria-hidden="true"
                  className={cn(
                    "h-9 w-9 text-navy/65 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-blue",
                    isActive && "-translate-y-0.5 text-blue",
                  )}
                >
                  <path d={t.icon} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className={cn(
                    "label-micro text-navy/35 transition-colors duration-500 group-hover:text-red",
                    isActive && "text-red",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <span
                className={cn(
                  "mt-6 block text-base font-bold text-navy transition-transform duration-500 group-hover:-translate-y-0.5 lg:text-lg",
                  isActive && "-translate-y-0.5",
                )}
              >
                {t.name}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function Manufacturing() {
  return (
    <section className="section-curve relative overflow-hidden" style={{ background: "linear-gradient(160deg, #FAFCFE 0%, #EFF4FA 55%, #E6EDF6 100%)" }}>
      {/* faint technical grid + soft radial highlight */}
      <span aria-hidden className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.05]" />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, color-mix(in oklab, var(--blue) 14%, transparent) 0%, transparent 70%)" }}
      />

      <Reveal>
        <div className="relative h-[44vh] min-h-[19rem] overflow-hidden lg:h-[58vh]">
          <img
            src={mixingYard.url}
            alt="Shop floor at the Arul Polymers factory with moulding presses and mixing equipment"
            width={1920}
            height={640}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
          <div className="shell absolute inset-x-0 bottom-10">
            <MicroLabel tone="red">Manufacturing</MicroLabel>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] leading-none font-extrabold text-white">
              Precision takes process.
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="shell relative grid gap-12 py-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-16">
        <Reveal>
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-10 h-44 w-44 rounded-full blur-2xl"
              style={{ background: "radial-gradient(ellipse, color-mix(in oklab, var(--blue) 16%, transparent) 0%, transparent 70%)" }}
            />
            <p className="relative max-w-md text-lg leading-relaxed text-graphite">
              In-house tooling, controlled moulding processes and layered inspection allow us to move from
              an engineering requirement to a repeatable production component.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
            <Stat value="1998" label="Manufacturing since" />
            <Stat value="02" label="Manufacturing units" />
            <Stat value="05" label="Core industries served" />
            <Stat value="XX+" label="Tooling programmes*" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <CapabilityMatrix />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 9 — AEROSPACE & DEFENCE ---------------- */

export function AerospaceDefence() {
  return (
    <section className="section-curve relative overflow-hidden bg-navy py-14 text-white lg:py-20">
      <div className="grid-tech-dark pointer-events-none absolute inset-0" />
      <svg
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-white/12 lg:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          <path d="M100 12 L108 70 L188 104 L188 116 L108 100 L106 158 L124 172 L124 180 L100 172 L76 180 L76 172 L94 158 L92 100 L12 116 L12 104 L92 70 Z" />
          <circle cx="100" cy="100" r="86" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="62" strokeDasharray="2 6" />
          <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="4 8" />
        </g>
      </svg>

      <div className="shell relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <MicroLabel tone="red">Aerospace & Defence</MicroLabel>
          <h2 className="mt-7 max-w-2xl text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] font-extrabold">
            Engineered for environments
            <span className="block text-white/55">where compromise isn't an option.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65">
            Arul Polymers supports airworthiness-critical programmes with engineered elastomer
            components, documented processes and recognition from India's military airworthiness and
            aeronautical quality authorities.
          </p>
        </Reveal>

        <Reveal delay={120} className="space-y-px bg-white/10">
          {[
            ["CEMILAC", "Center for Military Airworthiness & Certification"],
            ["DGAQA", "Directorate General of Aeronautical Quality Assurance"],
          ].map(([code, name]) => (
            <div key={code} className="bg-navy p-8 lg:p-10">
              <p className="text-3xl font-extrabold tracking-tight lg:text-4xl">{code}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{name}</p>
              <span className="mt-6 block h-px w-16 bg-red" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 12 — PARTNERS ---------------- */

const PARTNERS = [
  { name: "AMC", logo: pAmc.url },
  { name: "thyssenkrupp", logo: pThyssen.url },
  { name: "Parker", logo: pParker.url },
  { name: "Hindustan Aeronautics Limited", logo: pHal.url },
  { name: "Bharat Dynamics Limited", logo: pBdl.url },
  { name: "BEML", logo: pBeml.url },
  { name: "Bharat Electronics Limited", logo: pBel.url },
  { name: "BMM", logo: pBmm.url },
  { name: "Synergy", logo: pSynergy.url },
  { name: "Indeon", logo: pIndeon.url },
  { name: "Aarti Steels", logo: pAartiSteels.url },
  { name: "ATI", logo: pAti.url },
  { name: "Ador", logo: pAdor.url },
  { name: "Electrosteel", logo: pElectrosteel.url },
  { name: "Elkayem", logo: pElkayemHd.url },
  { name: "Greaves Electric Mobility", logo: pGreaves.url },
  { name: "Jindal Steel & Power", logo: pJindal.url },
  { name: "JSW", logo: pJsw.url },
  { name: "Marathwada Auto Comp", logo: pMarathwada.url },
  { name: "Kali MHS", logo: pKali.url },
  { name: "Baldota", logo: pBaldota.url },
  { name: "Carclo Technical Plastics", logo: pCarclo.url },
  { name: "AVR", logo: pAvr.url },
  { name: "Walvoil", logo: pWalvoil.url },
  { name: "Simple", logo: pSimple.url },
  { name: "M Wane India", logo: pMWane.url },
  { name: "Janatics", logo: pJanatics.url },
  { name: "GE T&D India", logo: pGeTd.url },
  { name: "DRDO", logo: pDrdo.url },
  { name: "Ather", logo: pAther.url },
  { name: "Pricol", logo: pPricol.url },
  { name: "Sandhar", logo: pSandhar.url },
  { name: "Sentec", logo: pSentec.url },
  { name: "THCO India", logo: pThco.url },
  { name: "Castolin Eutectic", logo: pCastolin.url },
  { name: "Dhoot Transmission", logo: pDhoot.url },
  { name: "ESAB", logo: pEsab.url },
  { name: "Ramco Cements", logo: pRamco.url },
  { name: "Wipro Enterprises", logo: pWipro.url },
  { name: "RideRiver", logo: pRideRiver.url },
];

export function Partners() {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section id="trusted-partners" className="section-curve relative isolate overflow-hidden bg-white py-14 lg:py-20">
      {/* Decorative gradient / technical accent in upper-right empty space */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl lg:h-[34rem] lg:w-[34rem]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--blue) 18%, transparent) 0%, color-mix(in oklab, var(--navy) 8%, transparent) 45%, transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-8 right-[8%] hidden h-40 w-40 rounded-full border border-navy/10 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-20 right-[14%] hidden h-24 w-24 rounded-full border border-blue/15 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-12 right-[5%] hidden h-2 w-2 rounded-full bg-red/40 lg:block"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute top-10 right-[22%] hidden text-navy/15 lg:block"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path d="M16 0v32M0 16h32" stroke="currentColor" strokeWidth="1" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      {/* faint blueprint grid wash */}
      <span
        aria-hidden
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          maskImage: "radial-gradient(90% 70% at 80% 10%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(90% 70% at 80% 10%, black 0%, transparent 70%)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <MicroLabel>Trusted partners</MicroLabel>
          <h2 className="mt-7 max-w-2xl text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] font-extrabold text-navy">
            Trusted across critical industries.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <div className="relative overflow-hidden px-10 lg:px-20">
          <div className="partners-marquee flex w-max items-center gap-0">
            {track.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex h-32 w-52 flex-shrink-0 items-center justify-center px-3 py-3 sm:h-36 sm:w-60 sm:px-4"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={720}
                  height={440}
                  className="block h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- SECTION 13 — STORIES ---------------- */

const STORIES = [
  ["Aerospace sealing", "Component operating under sustained thermal cycling."],
  ["Automotive damping", "Vibration isolation requirement for a bonded mount."],
  ["Industrial diaphragm", "High-cycle flexure in an aggressive media environment."],
];

export function Stories() {
  return (
    <section id="stories" className="section-curve relative overflow-hidden bg-cool py-14 lg:py-20">
      <div className="shell">
        <Reveal>
          <MicroLabel>Engineering stories</MicroLabel>
          <h2 className="mt-7 max-w-2xl text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] font-extrabold text-navy">
            Problems solved through engineering.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {STORIES.map(([title, ctx], i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="rounded-2xl group h-full border border-hairline bg-white p-8 transition-colors duration-500 hover:border-navy/25">
                <span className="label-micro text-red">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl leading-tight font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{ctx}</p>
                <dl className="mt-8 space-y-5 border-t border-hairline pt-6">
                  {[
                    ["Challenge", "Placeholder — requirement to be supplied."],
                    ["Engineering approach", "Placeholder — approach to be supplied."],
                    ["Outcome", "Placeholder — outcome to be confirmed."],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="label-micro text-navy/70">{k}</dt>
                      <dd className="mt-1.5 text-sm text-steel">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <a href="#enquiry" className="btn-outline-navy mt-8">
            Explore Engineering Stories <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 14 — FINAL CTA ---------------- */

type EnquiryErrors = Partial<Record<"name" | "phone" | "email" | "company" | "message", string>>;

function EnquiryField({
  id,
  label,
  children,
  error,
  required,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string | undefined;
  required?: boolean | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-micro block text-white/60">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs font-semibold text-red">{error}</p>}
    </div>
  );
}

function EnquiryForm() {
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const inputCls =
    "w-full rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-sm transition-all duration-300 focus:border-blue/60 focus:bg-white/[0.08] focus:ring-1 focus:ring-blue/30";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const next: EnquiryErrors = {};
    if (!get("name")) next.name = "Please enter your name";
    if (!/^[0-9+\s-]{8,16}$/.test(get("phone").replace(/\s/g, "")))
      next.phone = "Please enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      next.email = "Please enter a valid email address";
    if (!get("message")) next.message = "Please describe your requirement";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      get("company") ? `Company: ${get("company")}` : "",
      "",
      `Requirement:`,
      get("message"),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:bdh@arulpolymers.com?subject=${encodeURIComponent(
      "Engineering Enquiry from " + get("name"),
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <EnquiryField id="enquiry-name" label="Name" error={errors.name} required>
          <input id="enquiry-name" name="name" className={inputCls} placeholder="Your name" autoComplete="name" />
        </EnquiryField>
        <EnquiryField id="enquiry-phone" label="Phone Number" error={errors.phone} required>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            className={inputCls}
            placeholder="Your phone number"
            autoComplete="tel"
          />
        </EnquiryField>
        <EnquiryField id="enquiry-email" label="Email" error={errors.email} required>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            className={inputCls}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </EnquiryField>
        <EnquiryField id="enquiry-company" label="Company" error={errors.company}>
          <input
            id="enquiry-company"
            name="company"
            className={inputCls}
            placeholder="Your company name"
            autoComplete="organization"
          />
        </EnquiryField>
      </div>
      <EnquiryField id="enquiry-message" label="Requirement / Message" error={errors.message} required>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          className={cn(inputCls, "resize-y")}
          placeholder="Describe your component, drawing or application requirement"
        />
      </EnquiryField>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" className="btn-red group">
          Submit Enquiry <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
        <p aria-live="polite" className="text-sm font-semibold">
          {status === "sent" && <span className="text-blue">Enquiry ready to send.</span>}
          {status === "error" && <span className="text-red">Please check the highlighted fields.</span>}
        </p>
      </div>
    </form>
  );
}

export function FinalCta() {
  return (
    <section id="enquiry" className="section-curve relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
      <div className="grid-tech-dark pointer-events-none absolute inset-0" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-white/12" aria-hidden="true">
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeDasharray="3 10" />
        <line x1="0" y1="72%" x2="100%" y2="72%" stroke="currentColor" strokeDasharray="3 10" />
        <line x1="18%" y1="0" x2="18%" y2="100%" stroke="currentColor" strokeDasharray="3 10" />
      </svg>

      <div className="shell relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="label-micro inline-flex items-center gap-3 text-red">
              <span className="h-px w-8 bg-red" />
              Engineering Partnership
            </span>
            <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,6.4vw,5.2rem)] leading-[0.95] font-extrabold uppercase">
              HAVE A COMPONENT
              <span className="block">
                CHALLENGE<span className="text-red">?</span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 lg:text-lg">
              Share your drawing, specification or application requirement with our engineering team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="mailto:bdh@arulpolymers.com" className="btn-outline-light">
                Send Your Drawing
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
                <div className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-red" />
                <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-red" />
                <h3 className="text-lg font-bold text-white">Send your enquiry</h3>
                <p className="mt-2 text-sm text-white/55">Fill in your details and our team will get back to you.</p>
                <div className="mt-6">
                  <EnquiryForm />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red/20 blur-[80px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
