import heroComponent from "@/assets/hero-component.jpg";
import insideComponent from "@/assets/inside-component.jpg";
import aerospace from "@/assets/ind-aerospace.jpg";
import automotive from "@/assets/ind-automotive.jpg";
import twowheeler from "@/assets/ind-twowheeler.jpg";
import industrial from "@/assets/ind-industrial.jpg";
import agriculture from "@/assets/ind-agriculture.jpg";
import materialMacro from "@/assets/material-macro.jpg";
import mixingYard from "@/assets/site/machine-mixing-yard-enhanced.jpg";
import mixingMill from "@/assets/site/machine-mixing-mill-enhanced.jpg";
import kneader from "@/assets/site/machine-kneader-enhanced.jpg";
import mouldingZone from "@/assets/site/machine-moulding-zone-enhanced.jpg";
import chemicalBatching from "@/assets/site/machine-chemical-batching-enhanced.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import finalComposition from "@/assets/final-composition.jpg";
import prodSeals from "@/assets/prod-seals.jpg";
import prodBellows from "@/assets/prod-bellows.jpg";
import prodBonded from "@/assets/prod-bonded.jpg";
import logo from "@/assets/arul-logo.png.asset.json";
import { useIsMobile } from "@/hooks/use-mobile";
import { band, seg, useCinematicStage, useReducedMotion } from "@/lib/use-cinematic";
import { cn } from "@/lib/utils";
import { Arrow } from "./primitives";

const INSPECT_LABELS = [
  "01 MATERIAL",
  "02 GEOMETRY",
  "03 TOLERANCE",
  "04 APPLICATION",
  "05 VALIDATION",
];

const MATERIALS = ["NR", "SBR", "NBR", "EPDM", "SILICONE", "HNBR", "FKM", "ACM", "AEM", "XNBR"];

const PROCESS = ["01 COMPOUND", "02 MIX", "03 MOULD", "04 INSPECT", "05 VALIDATE"];

const TESTS = ["HARDNESS", "TENSILE", "ELONGATION", "ABRASION", "TEAR", "COMPRESSION SET"];

const TRUST = [
  { k: "1998", v: "Established" },
  { k: "CEMILAC", v: "Approved" },
  { k: "DGAQA", v: "Approved" },
  { k: "05", v: "Core Application Sectors" },
];

const FACTORY_SCENES = [mixingYard, mixingMill, kneader, mouldingZone, chemicalBatching];

export function CinematicHero() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const { ref, p, mx, my } = useCinematicStage<HTMLDivElement>(reduced);

  const depth = isMobile || reduced ? 0 : 1;
  const px = (k: number) => mx * k * depth;
  const py = (k: number) => my * k * depth;

  /* ---------- scene progress (non-overlapping bands) ---------- */
  const scene = (a: number, b: number) => band(p, a - 0.02, a + 0.025, b - 0.05, b - 0.005);

  const sOpen = band(p, -0.2, 0, 0.06, 0.1);
  const sInspect = scene(0.1, 0.21);
  const inspectZoom = seg(p, 0.1, 0.21);
  const sAero = scene(0.21, 0.33);
  const aeroPortal = seg(p, 0.2, 0.32);
  const sSplit = scene(0.33, 0.45);
  const splitOpen = seg(p, 0.32, 0.45);
  const sLink = scene(0.45, 0.55);
  const sMaterial = scene(0.55, 0.66);
  const sFactory = scene(0.66, 0.77);
  const factoryTravel = seg(p, 0.66, 0.77);
  const sQuality = scene(0.77, 0.86);
  const sTrust = scene(0.86, 0.93);
  const sFinal = seg(p, 0.92, 0.97);

  // product stays on stage from scene 1 to 5, then returns at the end
  const productOn = band(p, -0.2, 0, 0.42, 0.52);
  const productScale = 1 + inspectZoom * 0.42 + aeroPortal * 0.62;

  const productDrift = seg(p, 0.28, 0.45);

  const dark = Math.max(sAero * 0.8, sSplit * 0.92, sLink * 0.88, sFactory * 0.92);

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Engineered into motion — Arul Polymers cinematic introduction"
      className="relative"
      style={{ height: isMobile ? "360vh" : "520vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-cool">
        {/* Z0 — atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cool to-[color-mix(in_oklab,var(--blue)_14%,white)]" />
        <div
          className="absolute inset-0 bg-navy-deep transition-none"
          style={{ opacity: Math.min(0.96, dark) }}
        />
        <div
          className="grid-tech pointer-events-none absolute inset-0"
          style={{
            opacity: 0.5 * (1 - dark),
            transform: `translate3d(${px(-10)}px, ${py(-10)}px, 0) scale(${1 + inspectZoom * 0.15})`,
          }}
        />
        <div
          className="grid-tech-dark pointer-events-none absolute inset-0"
          style={{ opacity: 0.6 * dark, transform: `translate3d(${px(-14)}px, ${py(-14)}px, 0)` }}
        />

        {/* Z4 — coordinate / measurement marks */}
        <svg
          className={cn("pointer-events-none absolute inset-0 h-full w-full")}
          style={{
            opacity: 0.35 * (1 - dark) + 0.25 * dark,
            transform: `translate3d(${px(-18)}px, ${py(-14)}px, 0)`,
            color: dark > 0.5 ? "rgba(255,255,255,0.35)" : "rgba(8,59,112,0.28)",
          }}
          aria-hidden="true"
        >
          <line x1="0" y1="16%" x2="100%" y2="16%" stroke="currentColor" strokeDasharray="2 9" />
          <line x1="0" y1="84%" x2="100%" y2="84%" stroke="currentColor" strokeDasharray="2 9" />
          <line x1="12%" y1="0" x2="12%" y2="100%" stroke="currentColor" strokeDasharray="2 9" />
          <line x1="88%" y1="0" x2="88%" y2="100%" stroke="currentColor" strokeDasharray="2 9" />
        </svg>

        {/* Z1..Z3 — application worlds that split apart */}
        <ApplicationLayers
          open={splitOpen}
          show={sSplit}
          px={px}
          py={py}
          isMobile={isMobile}
        />

        {/* aerospace environment revealed through the component opening */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: band(p, 0.19, 0.25, 0.42, 0.47),
            transform: `translate3d(${px(-22)}px, ${py(-16)}px, 0) scale(${1.02 + aeroPortal * 0.05})`,
          }}
        >
          <img
            src={aerospace}
            alt="Aircraft engineering environment"
            loading="eager" decoding="async"
            className="gpu h-full w-full object-cover"
            style={{
              clipPath: `circle(${18 + aeroPortal * 110}% at 50% 48%)`,
            }}
          />
          <div className="absolute inset-0 bg-navy-deep/55" />
        </div>

        {/* manufacturing depth planes */}
        <FactoryPlanes travel={factoryTravel} show={sFactory} px={px} py={py} />

        {/* quality lab */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ opacity: sQuality }}
        >
          <img
            src={qualityLab}
            alt="Rubber testing and quality inspection laboratory"
            loading="eager" decoding="async"
            className="gpu h-full w-full object-cover"
            style={{ transform: `translate3d(${px(-16)}px, ${py(-12)}px, 0) scale(1.02)` }}
          />
          <div className="absolute inset-0 bg-white/72" />
        </div>

        {/* final light composition */}
        <div className="pointer-events-none absolute inset-0" style={{ opacity: sFinal }}>
          <div className="absolute inset-0 bg-white" />
          <img
            src={finalComposition}
            alt="Composition of engineered elastomer components: O-ring, bellows, gasket, bonded mount and boot"
            loading="eager" decoding="async"
            className="gpu absolute inset-0 h-full w-full object-cover"
            style={{
              transform: `translate3d(${px(14)}px, ${py(10)}px, 0) scale(${1.04 - sFinal * 0.03})`,
              opacity: 0.95,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />

        </div>

        {/* Z5 — primary product */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ opacity: productOn }}
        >
          <div
            className="relative w-[min(72vw,560px)]"
            style={{
              transform: `translate3d(${(isMobile ? 60 : 200) + px(20) + productDrift * (isMobile ? 0 : -420)}px, ${py(16) + productDrift * 90}px, 0) scale(${productScale}) rotate(${productDrift * -8}deg)`,
              maskImage: "radial-gradient(closest-side, #000 62%, transparent 96%)",
              WebkitMaskImage: "radial-gradient(closest-side, #000 62%, transparent 96%)",
            }}
          >
            <img
              src={heroComponent}
              alt="Precision engineered rubber-to-metal bonded elastomer component"
              width={1408}
              height={1200}
              className="w-full mix-blend-multiply"
              style={{ opacity: 1 - inspectZoom * 0.25 - aeroPortal * 0.55 }}
            />
            {/* CAD / wireframe read-through */}
            <img
              src={insideComponent}
              alt=""
              aria-hidden="true"
              loading="eager" decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
              style={{ opacity: inspectZoom * 0.45 * (1 - aeroPortal), mixBlendMode: "luminosity" }}
            />
            <div
              className="absolute inset-x-4 top-1/2 h-px bg-red"
              style={{ opacity: 0.5 + 0.5 * sInspect }}
            />
          </div>
        </div>

        {/* Z6 — technical annotations */}
        <div className="pointer-events-none absolute inset-0" style={{ opacity: sInspect }}>
          {INSPECT_LABELS.map((l, i) => {
            const on = seg(p, 0.115 + i * 0.017, 0.15 + i * 0.017);
            const left = i % 2 === 0;
            return (
              <div
                key={l}
                className={cn(
                  "absolute hidden items-center gap-3 md:flex",
                  left ? "flex-row" : "flex-row-reverse",
                )}
                style={{
                  top: `${20 + i * 14}%`,
                  [left ? "left" : "right"]: "8%",
                  opacity: on,
                  transform: `translateX(${(left ? -1 : 1) * (1 - on) * 24}px)`,
                }}
              >
                <span className="label-micro text-navy">{l}</span>
                <span className="h-px w-16 bg-red md:w-28" style={{ transform: `scaleX(${on})`, transformOrigin: left ? "left" : "right" }} />
              </div>
            );
          })}
        </div>

        {/* Z7 — copy layer */}
        <div className="pointer-events-none absolute inset-0">
          <div className="shell relative flex h-full flex-col justify-center">
            {/* Scene 01 */}
            <Copy opacity={sOpen} y={(1 - sOpen) * 20}>
              <MicroTag>ARUL POLYMERS / SINCE 1998</MicroTag>
              <h1 className="mt-6 text-[clamp(2.6rem,7.5vw,6rem)] leading-[0.92] font-extrabold text-navy">
                <Line show={sOpen}>ENGINEERED</Line>
                <Line show={sOpen} delay>
                  INTO MOTION<span className="text-red">.</span>
                </Line>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-steel md:text-base">
                Advanced rubber and elastomer solutions engineered for demanding aerospace,
                automotive and industrial applications.
              </p>
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4">
                <a href="#capabilities" className="btn-red">
                  Explore Engineering <Arrow />
                </a>
                <a href="#enquiry" className="btn-outline-navy">
                  Discuss a Requirement
                </a>
              </div>
            </Copy>

            {/* Scene 02 */}
            <Copy opacity={sInspect} className="max-w-md">
              <MicroTag>COMPONENT / INSPECTION</MicroTag>
              <h2 className="mt-5 text-[clamp(1.7rem,3.6vw,2.9rem)] leading-tight font-extrabold text-navy">
                Every component is<br />an engineering decision.
              </h2>
              <p className="mt-4 text-sm text-steel">
                Material, geometry, tolerance and validation defined around the real operating
                requirement.
              </p>
            </Copy>

            {/* Scene 03 */}
            <Copy opacity={sAero} className="max-w-lg" light>
              <MicroTag light>AEROSPACE &amp; DEFENCE / 01</MicroTag>
              <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.02] font-extrabold text-white">
                AEROSPACE &amp; DEFENCE
              </h2>
              <p className="mt-3 text-base font-semibold text-white/85">
                Built for demanding environments.
              </p>
              <p className="mt-4 max-w-md text-sm text-white/65">
                Precision elastomer components developed for applications where reliability and
                consistency matter.
              </p>
              <div className="mt-6 flex gap-8">
                {["CEMILAC", "DGAQA"].map((t) => (
                  <span key={t} className="label-micro flex items-center gap-2 text-white/70">
                    <span className="rounded-2xl h-1.5 w-1.5 border border-red" />
                    {t}
                  </span>
                ))}
              </div>
            </Copy>

            {/* Scene 04 */}
            <Copy opacity={sSplit} className="mx-auto max-w-2xl text-center" light>
              <h2 className="text-[clamp(1.6rem,3.6vw,2.8rem)] leading-tight font-extrabold text-white">
                One material discipline.<br />Many demanding environments.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/65">
                From mobility to aerospace, Arul Polymers engineers elastomer solutions around real
                operating requirements.
              </p>
            </Copy>

            {/* Scene 05 */}
            <Copy opacity={sLink} className="mx-auto max-w-3xl text-center" light>
              <MicroTag light className="justify-center">
                MACHINE / COMPONENT
              </MicroTag>
              <h2 className="mt-5 text-[clamp(1.5rem,3.2vw,2.5rem)] leading-tight font-extrabold text-white">
                The machine is visible.<br />The component usually isn&apos;t.
              </h2>
            </Copy>

            {/* Scene 06 */}
            <Copy opacity={sMaterial} className="max-w-xl">
              <MicroTag>MATERIAL / COMPOUNDING</MicroTag>
              <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Performance starts<br />with the compound.
              </h2>
              <p className="mt-4 max-w-md text-sm text-steel">
                Material selection, compounding and engineering decisions shape every component
                before moulding begins.
              </p>
            </Copy>

            {/* Scene 07 */}
            <Copy opacity={sFactory} className="max-w-xl" light>
              <MicroTag light>MANUFACTURING / PROCESS</MicroTag>
              <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] font-extrabold text-white">
                From formulation<br />to finished performance.
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/65">
                Technical development, controlled manufacturing and validation working as one
                process.
              </p>
            </Copy>

            {/* Scene 08 */}
            <Copy opacity={sQuality} className="max-w-xl">
              <MicroTag>QUALITY / VALIDATION</MicroTag>
              <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Quality isn&apos;t<br />the final step.
              </h2>
              <p className="mt-3 text-base font-semibold text-blue">It&apos;s part of every step.</p>
              <ul className="mt-6 flex max-w-md flex-wrap gap-x-6 gap-y-3">
                {TESTS.map((t, i) => (
                  <li
                    key={t}
                    className="label-micro flex items-center gap-2 text-navy"
                    style={{ opacity: seg(p, 0.785 + i * 0.008, 0.815 + i * 0.008) }}
                  >
                    <span className="h-px w-5 bg-red" />
                    {t}
                  </li>
                ))}
              </ul>
            </Copy>

            {/* Scene 10 */}
            <Copy opacity={sFinal} className="max-w-2xl">
              <MicroTag>ARUL POLYMERS</MicroTag>
              <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.02] font-extrabold text-navy">
                SMALL COMPONENTS.<br />CRITICAL PERFORMANCE<span className="text-red">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm text-steel md:text-base">
                Engineering advanced elastomer solutions for the machines, systems and environments
                that keep industries moving.
              </p>
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4">
                <a href="#capabilities" className="btn-red">
                  Explore Our Capabilities <Arrow />
                </a>
                <a href="#enquiry" className="btn-outline-navy">
                  Send Your Requirement
                </a>
              </div>
            </Copy>
          </div>
        </div>

        {/* material labels */}
        <div className="pointer-events-none absolute inset-0" style={{ opacity: sMaterial }}>
          <img
            src={materialMacro}
            alt=""
            aria-hidden="true"
            loading="eager" decoding="async"
            className="gpu absolute inset-0 h-full w-full object-cover opacity-25"
            style={{ transform: `translate3d(${px(-12)}px, ${py(-8)}px, 0) scale(1.02)` }}
          />
          <div className="absolute inset-y-0 right-0 hidden w-[42%] flex-col justify-center gap-3 pr-[6vw] md:flex">
            {MATERIALS.map((m, i) => (
              <span
                key={m}
                className="label-micro flex items-center gap-3 text-navy"
                style={{
                  opacity: seg(p, 0.565 + i * 0.006, 0.6 + i * 0.006),
                  transform: `translateX(${(1 - seg(p, 0.565 + i * 0.006, 0.6 + i * 0.006)) * 20}px)`,
                }}
              >
                <span className="h-px w-6 bg-red" />
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* linked components (scene 05) */}
        <div className="pointer-events-none absolute inset-0" style={{ opacity: sLink }}>
          {[prodSeals, prodBonded, prodBellows].map((src, i) => (
            <div
              key={i}
              className="absolute w-[26vw] max-w-[240px] md:w-[16vw]"
              style={{
                left: `${16 + i * 30}%`,
                top: `${58 + (i % 2) * 8}%`,
                transform: `translate3d(${px(18 + i * 6)}px, ${py(12)}px, 0)`,
              }}
            >
              <span className="label-micro mb-2 block text-red">0{i + 2}</span>
              <div className="h-8 w-px bg-red/70" />
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="eager" decoding="async"
                className="mt-2 w-full rounded-sm object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* manufacturing stage labels + travelling red line */}
        <div className="pointer-events-none absolute inset-0" style={{ opacity: sFactory }}>
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/15" />
          <div
            className="absolute left-1/2 w-px bg-red"
            style={{ top: 0, height: `${factoryTravel * 100}%` }}
          />
          <div className="absolute inset-y-0 right-[8%] hidden flex-col justify-center gap-6 md:flex">
            {PROCESS.map((s, i) => (
              <span
                key={s}
                className="label-micro text-white/80"
                style={{ opacity: seg(p, 0.675 + i * 0.017, 0.705 + i * 0.017) }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Scene 09 — trust */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy-deep"
          style={{ opacity: sTrust }}
        >
          <div className="grid-tech-dark absolute inset-0 opacity-50" />
          <div className="shell relative text-center">
            <img
              src={logo.url}
              alt="Arul Polymers Pvt Ltd"
              width={200}
              height={56}
              loading="eager" decoding="async"
              className="mx-auto h-10 w-auto brightness-0 invert md:h-14"
            />
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST.map((t, i) => {
                const on = seg(p, 0.875 + i * 0.012, 0.905 + i * 0.012);
                return (
                  <div
                    key={t.k}
                    className="border-t border-white/15 pt-4 text-left"
                    style={{ opacity: on, transform: `translateY(${(1 - on) * 18}px)` }}
                  >
                    <div className="text-2xl font-extrabold text-white md:text-4xl">{t.k}</div>
                    <div className="label-micro mt-2 text-white/55">{t.v}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: band(p, -0.2, 0, 0.03, 0.07) }}
        >
          <span className="label-micro text-steel">SCROLL TO INSPECT</span>
          <span className="anim-scanline mx-auto mt-3 block h-8 w-px bg-red" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function Copy({
  children,
  opacity,
  className,
  y = 0,
}: {
  children: React.ReactNode;
  opacity: number;
  className?: string;
  y?: number;
  light?: boolean;
}) {
  return (
    <div
      className={cn("absolute inset-x-6 lg:inset-x-12", className)}
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        visibility: opacity < 0.02 ? "hidden" : "visible",
      }}
    >
      {children}
    </div>
  );
}

function MicroTag({
  children,
  light,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "label-micro flex items-center gap-3",
        light ? "text-white/60" : "text-blue",
        className,
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-white/40" : "bg-red")} />
      {children}
    </div>
  );
}

function Line({
  children,
  show,
  delay,
}: {
  children: React.ReactNode;
  show: number;
  delay?: boolean;
}) {
  const t = Math.min(1, show * (delay ? 0.85 : 1));
  return (
    <span className="mask-line pb-[0.1em] -mb-[0.1em]">
      <span
        className="block"
        style={{
          transform: `translateY(${(1 - t) * 105}%)`,
          letterSpacing: `${(1 - t) * 0.06}em`,
          transition: "transform 900ms cubic-bezier(0.16,1,0.3,1), letter-spacing 900ms",
        }}
      >
        {children}
      </span>
    </span>
  );
}

function ApplicationLayers({
  open,
  show,
  px,
  py,
  isMobile,
}: {
  open: number;
  show: number;
  px: (k: number) => number;
  py: (k: number) => number;
  isMobile: boolean;
}) {
  const layers = [
    { src: agriculture, label: "AGRICULTURE", num: "05", x: 0, y: 0, z: 6, w: "62%", pos: "left-[19%] top-[16%]" },
    { src: industrial, label: "INDUSTRIAL", num: "04", x: 0, y: -1, z: 10, w: "58%", pos: "left-[21%] top-[26%]" },
    { src: automotive, label: "AUTOMOTIVE", num: "02", x: -1, y: 0.2, z: 16, w: "52%", pos: "left-[4%] top-[34%]" },
    { src: twowheeler, label: "TWO WHEELER", num: "03", x: 1, y: 0.2, z: 20, w: "46%", pos: "right-[4%] top-[38%]" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0" style={{ opacity: show }}>
      {layers.map((l, i) => {
        const spread = open * (isMobile ? 40 : 190);
        return (
          <div
            key={l.label}
            className={cn("absolute", l.pos)}
            style={{
              width: l.w,
              transform: `translate3d(${l.x * spread + px(l.z)}px, ${l.y * spread * 0.5 + py(l.z * 0.6)}px, 0) scale(${0.94 + open * 0.1})`,
            }}
          >
            <img
              src={l.src}
              alt={`${l.label} application environment`}
              loading="eager" decoding="async"
              className="w-full rounded-sm object-cover opacity-90 shadow-2xl"
              style={{ clipPath: `inset(${(1 - Math.min(1, open * 1.4 + 0.2)) * 40}% 0 0 0)` }}
            />
            <div
              className="mt-3 flex items-center gap-3"
              style={{ opacity: Math.min(1, open * 2 - i * 0.15) }}
            >
              <span className="label-micro text-red">{l.num}</span>
              <span className="h-px w-8 bg-white/40" />
              <span className="label-micro text-white/80">{l.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FactoryPlanes({
  travel,
  show,
  px,
  py,
}: {
  travel: number;
  show: number;
  px: (k: number) => number;
  py: (k: number) => number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ opacity: show }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const local = travel * 5 - i;
        return (
          <img
            key={i}
            src={FACTORY_SCENES[i]}
            alt=""
            aria-hidden="true"
            loading="eager" decoding="async"
            className="gpu absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: Math.max(0, 0.28 - Math.abs(local - 0.5) * 0.18),
              transform: `translate3d(${px(6 + i * 5)}px, ${py(6 + i * 5) + (1 - travel) * i * 40}px, 0) scale(${1 + i * 0.02 + travel * 0.03})`,
              filter: "saturate(0.5)",
            }}
          />
        );
      })}
      <div className="absolute inset-0 bg-navy-deep/45" />
    </div>
  );
}
