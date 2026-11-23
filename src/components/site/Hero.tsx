import { useEffect, useRef, useState } from "react";
import heroComponent from "@/assets/hero-component.jpg";
import { Arrow, MicroLabel } from "./primitives";

const CREDS = [
  "Since 1998",
  "CEMILAC Approved",
  "DGAQA Approved",
  "Aerospace & Defence Expertise",
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setTilt({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-white pt-28 pb-16 lg:pt-24"
    >
      <div className="grid-tech pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cool to-transparent" />

      {/* CAD frame marks */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-navy/20"
        aria-hidden="true"
      >
        <line x1="0" y1="18%" x2="100%" y2="18%" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
        <line x1="76%" y1="0" x2="76%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
      </svg>

      <div className="shell relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <MicroLabel>Advanced Elastomer Engineering</MicroLabel>

          <h1 className="mt-8 text-[clamp(2.9rem,8vw,6.5rem)] leading-[0.92] font-extrabold text-navy">
            <span className="mask-line pb-[0.1em] -mb-[0.1em]">
              <span
                className="block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: ready ? "translateY(0)" : "translateY(105%)" }}
              >
                ENGINEERING
              </span>
            </span>
            <span className="mask-line pb-[0.1em] -mb-[0.1em]">
              <span
                className="block transition-transform delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: ready ? "translateY(0)" : "translateY(105%)" }}
              >
                PERFORMANCE<span className="text-red">.</span>
              </span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-steel transition-opacity delay-500 duration-1000 lg:text-lg"
            style={{ opacity: ready ? 1 : 0 }}
          >
            Advanced elastomer solutions engineered for aerospace, defence, automotive and demanding
            industrial applications.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 transition-opacity delay-700 duration-1000"
            style={{ opacity: ready ? 1 : 0 }}
          >
            <a href="#capabilities" className="btn-red">
              Explore Our Capabilities <Arrow />
            </a>
            <a href="#enquiry" className="btn-outline-navy">
              Talk to Our Engineering Team
            </a>
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-4 border-t border-hairline pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {CREDS.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="rounded-2xl mt-1.5 h-2 w-2 shrink-0 border border-red" />
                <span className="text-[0.8rem] leading-snug font-semibold tracking-wide text-navy uppercase">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Component visual */}
        <div className="relative">
          <div
            className="relative anim-float"
            style={{
              transform: `perspective(1200px) rotateX(${-tilt.y * 3}deg) rotateY(${tilt.x * 4}deg) translate3d(${tilt.x * 8}px, ${tilt.y * 8}px, 0)`,
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src={heroComponent}
              alt="Precision engineered rubber-to-metal bonded elastomer component"
              width={1408}
              height={1200}
              className="w-full mix-blend-multiply"
            />
            <div className="anim-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-blue/12 to-transparent" />
            <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px bg-red/60" />
          </div>

          <div className="label-micro absolute -top-2 right-0 hidden text-steel lg:block">
            Ø 52.0 ±0.05
          </div>
          <div className="label-micro absolute bottom-2 left-0 hidden text-steel lg:block">
            NBR / FKM / SILICONE
          </div>
        </div>
      </div>
    </section>
  );
}
