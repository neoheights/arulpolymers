import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Eye, X, ZoomIn, ZoomOut, ShieldCheck, Workflow, Repeat, BadgeCheck, Droplets } from "lucide-react";
import { Page, PageCta } from "./PageShell";
import { Arrow, MicroLabel, Reveal } from "./primitives";
import { cn } from "@/lib/utils";
import {
  BIS_DOC,
  EN_DOC,
  IATF_DOCS,
  ISO_DOCS,
  WRAS_APPROVALS,
  type CertDoc,
} from "@/lib/certificates";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};

const OVERVIEW = [
  { icon: ShieldCheck, t: "Quality Systems", d: "Certified management systems across both manufacturing units." },
  { icon: Workflow, t: "Process Discipline", d: "Quality maintained right through the production process." },
  { icon: Repeat, t: "Consistency", d: "Traceability through bar coding, right up to the end product." },
  { icon: BadgeCheck, t: "Certification", d: "IATF 16949, ISO 9001, WRAS, BIS, ISO 4633 and EN 681." },
];

const GRID = [
  { id: "iatf", t: "IATF 16949", sub: "Unit 1 · Unit 2", img: IATF_DOCS[0].pages[0]! },
  { id: "iso", t: "ISO 9001", sub: "Unit 1 · Unit 2 · ISO 4633", img: ISO_DOCS[0].pages[0]! },
  { id: "wras", t: "WRAS", sub: "Material approvals", img: null },
  { id: "bis", t: "BIS Licence", sub: "1 file", img: BIS_DOC.pages[0]! },
  { id: "en", t: "EN 681", sub: "1 file", img: EN_DOC.pages[0]! },
];

export function QualityPage() {
  const [open, setOpen] = useState<CertDoc | null>(null);

  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h) setTimeout(() => document.getElementById(h)?.scrollIntoView({ block: "start" }), 120);
  }, []);

  return (
    <Page>
      <div className="overflow-x-clip">
      {/* HERO */}
      <section className="q-hero relative overflow-hidden">
        <div aria-hidden className="q-grid absolute inset-0" />
        <div aria-hidden className="q-glow absolute inset-0" />
        <div aria-hidden className="q-docs pointer-events-none absolute right-[-4rem] top-10 hidden lg:block">
          <span /><span /><span />
        </div>
        <svg aria-hidden className="q-lines pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M-20 470 C 300 380, 520 560, 820 430 S 1180 360, 1240 400" />
          <path d="M-20 520 C 340 450, 560 600, 880 480 S 1180 420, 1240 460" />
        </svg>
        <div className="shell relative py-20 sm:py-24 lg:py-32">
          <p className="q-rise text-sm font-semibold tracking-[0.28em] text-blue"><span className="mr-3 inline-block h-px w-8 align-middle bg-red" />QUALITY</p>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
            <span className="mask-line"><span className="anim-hero-line block">Certified quality.</span></span>
            <span className="mask-line"><span className="anim-hero-line block" style={{ animationDelay: "120ms" }}>Proven confidence.</span></span>
          </h1>
          <p className="q-rise mt-6 max-w-xl text-lg leading-relaxed text-steel" style={{ animationDelay: "260ms" }}>
            Arul Polymers follows quality-driven manufacturing systems and certified processes for demanding industrial applications.
          </p>
          <button type="button" onClick={() => scrollTo("certificates")} className="btn-red group q-rise mt-9" style={{ animationDelay: "380ms" }}>
            View Certificates <Arrow />
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative bg-white py-14 lg:py-18">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OVERVIEW.map((o, i) => (
            <Reveal key={o.t} delay={i * 70}>
              <div className="q-feature group h-full">
                <o.icon className="h-6 w-6 text-blue transition-transform duration-500 group-hover:translate-x-1" />
                <h2 className="mt-4 text-lg font-semibold text-navy">{o.t}</h2>
                <p className="mt-2 text-base leading-relaxed text-steel">{o.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section id="certificates" className="q-anchor section-curve relative bg-cool py-16 lg:py-20">
        <div className="shell">
          <Reveal><MicroLabel>Certificates</MicroLabel></Reveal>
          <Reveal delay={60}><h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">Our certifications at a glance.</h2></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {GRID.map((g, i) => (
              <Reveal key={g.id} delay={i * 60}>
                <button type="button" onClick={() => scrollTo(g.id)} className="q-card group w-full text-left">
                  <div className="q-card-thumb">
                    {g.img ? (
                      <img src={g.img} alt={`${g.t} certificate preview`} loading="lazy" />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2 text-blue">
                        <Droplets className="h-10 w-10" />
                        <span className="text-sm font-semibold tracking-[0.2em]">WRAS</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="q-badge">Approved</span>
                    <h3 className="mt-2 text-lg font-semibold text-navy">{g.t}</h3>
                    <p className="text-sm text-steel">{g.sub}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                      View Certificate <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IATF */}
      <section id="iatf" className="q-anchor section-curve relative bg-white py-16 lg:py-24">
        <div aria-hidden className="q-grid absolute inset-0 opacity-60" />
        <div className="shell relative">
          <Head index="01" label="Automotive quality management" title="IATF 16949" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {IATF_DOCS.map((d, i) => (
              <Reveal key={d.id} delay={i * 90}><DocCard doc={d} onPreview={setOpen} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ISO */}
      <section id="iso" className="q-anchor section-curve relative bg-cool py-16 lg:py-24">
        <div className="shell relative">
          <Head index="02" label="Quality management & material standards" title="ISO 9001" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ISO_DOCS.map((d, i) => (
              <Reveal key={d.id} delay={i * 90}><DocCard doc={d} onPreview={setOpen} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WRAS */}
      <section id="wras" className="q-anchor q-wras section-curve relative overflow-hidden py-16 lg:py-24">
        <svg aria-hidden className="q-lines pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M-20 140 C 260 60, 520 220, 820 120 S 1180 80, 1240 110" />
          <path d="M-20 560 C 300 470, 560 610, 880 510 S 1180 460, 1240 500" />
        </svg>
        <div className="shell relative grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Head index="03" label="Water Regulations Approval Scheme" title="WRAS" />
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
                Our WRAS-certified rubber compounds are suitable for potable/drinking-water applications up to 60°C, supporting the requirements of water infrastructure and drinking-water systems.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5">
            {WRAS_APPROVALS.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="q-doc p-6 sm:p-7">
                  <span className="q-badge">WRAS Approved</span>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{a.title}</h3>
                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                    {a.rows.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{k}</dt>
                        <dd className="mt-1 text-base font-semibold text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIS */}
      <section id="bis" className="q-anchor section-curve relative bg-white py-16 lg:py-24">
        <div aria-hidden className="q-glow absolute inset-0" />
        <div className="shell relative flex flex-col items-center text-center">
          <Head index="04" label="Bureau of Indian Standards" title="BIS Licence" center />
          <Reveal delay={100} className="mt-10 w-full max-w-xl">
            <button type="button" onClick={() => setOpen(BIS_DOC)} className="q-doc q-zoom group block w-full p-4 sm:p-6">
              <img src={BIS_DOC.pages[0]!} alt="BIS Licence certificate, page 1" className="w-full" />
            </button>
          </Reveal>
          <Reveal delay={160}><Actions doc={BIS_DOC} onPreview={setOpen} className="mt-8 justify-center" /></Reveal>
        </div>
      </section>

      {/* EN */}
      <section id="en" className="q-anchor section-curve relative overflow-hidden bg-navy-deep py-16 text-white lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-tech-dark" />
        <div aria-hidden className="q-rings pointer-events-none absolute -right-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2" />
        <div className="shell relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <button type="button" onClick={() => setOpen(EN_DOC)} className="q-doc q-zoom group block w-full max-w-md p-4">
              <img src={EN_DOC.pages[0]!} alt="BS EN 681-1:1996 certificate" className="w-full" />
            </button>
          </Reveal>
          <div>
            <Reveal><MicroLabel tone="light">05 / Elastomeric seals</MicroLabel></Reveal>
            <Reveal delay={60}><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">EN 681</h2></Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                BS EN 681-1:1996 — Elastomeric seals. Material requirements for pipe joint seals used in water and drainage applications.
              </p>
            </Reveal>
            <Reveal delay={180}><Actions doc={EN_DOC} onPreview={setOpen} className="mt-8" dark /></Reveal>
          </div>
        </div>
      </section>

      <PageCta />
      </div>
      {open && <Viewer doc={open} onClose={() => setOpen(null)} />}
    </Page>
  );
}

function Head({ index, label, title, center }: { index: string; label: string; title: string; center?: boolean }) {
  return (
    <div className={cn(center && "flex flex-col items-center")}>
      <Reveal><MicroLabel>{`${index} / ${label}`}</MicroLabel></Reveal>
      <Reveal delay={60}>
        <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">{title}</h2>
      </Reveal>
      <span className={cn("q-draw mt-5 block h-[3px] w-16 bg-red", center && "mx-auto")} />
    </div>
  );
}

function DocCard({ doc, onPreview, featured, compact }: { doc: CertDoc; onPreview: (d: CertDoc) => void; featured?: boolean | undefined; compact?: boolean | undefined }) {
  return (
    <article className={cn("q-doc group flex h-full", compact ? "flex-row gap-5 p-4" : "flex-col p-5 sm:p-6")}>
      <button type="button" onClick={() => onPreview(doc)} className={cn("q-zoom block shrink-0 self-start overflow-hidden rounded-xl border border-navy/10 bg-white", compact && "w-32 sm:w-36")} aria-label={`Preview ${doc.title} ${doc.label}`}>
        <img src={doc.pages[0]!} alt={`${doc.title} ${doc.label} certificate`} loading="lazy" className={cn("w-full", featured && "lg:max-h-[46rem] object-contain")} />
      </button>
      <div className={cn(compact ? "flex min-w-0 flex-col justify-center" : "mt-5")}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="q-badge">Certified</span>
          <span className="text-sm font-semibold text-blue">{doc.label}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-navy">{doc.title}</h3>
        <p className="mt-1 break-all text-sm text-steel">{doc.fileName}</p>
        <Actions doc={doc} onPreview={onPreview} className="mt-4" small={compact} />
      </div>
    </article>
  );
}

function Actions({ doc, onPreview, className, dark, small }: { doc: CertDoc; onPreview: (d: CertDoc) => void; className?: string; dark?: boolean | undefined; small?: boolean | undefined }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <button type="button" onClick={() => onPreview(doc)} className={cn(dark ? "btn-outline-light" : "btn-outline-navy", small && "!px-4 !py-2.5")}>
        <Eye className="h-4 w-4" /> Preview
      </button>
    </div>
  );
}

function Viewer({ doc, onClose }: { doc: CertDoc; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [onClose]);
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={`${doc.title} ${doc.label}`} className="q-modal fixed inset-0 z-[100] flex flex-col bg-navy-deep/92 backdrop-blur-sm" onClick={onClose}>
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-3 text-white sm:px-6" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold">{doc.title} — {doc.label}</p>
          <p className="truncate text-sm text-white/60">{doc.fileName}</p>
        </div>
        <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} className="q-icon-btn"><ZoomOut className="h-5 w-5" /></button>
        <span className="w-12 text-center text-sm">{Math.round(zoom * 100)}%</span>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} className="q-icon-btn"><ZoomIn className="h-5 w-5" /></button>
        <button type="button" aria-label="Close" onClick={onClose} className="q-icon-btn"><X className="h-5 w-5" /></button>
      </div>
      <div className="flex-1 overflow-auto p-4 sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto flex flex-col gap-6" style={{ width: `min(${zoom * 100}%, ${zoom * 900}px)` }}>
          {doc.pages.map((p, i) => (
            <img key={p} src={p} alt={`${doc.title} ${doc.label}, page ${i + 1}`} className="w-full rounded-lg bg-white shadow-2xl" />
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
