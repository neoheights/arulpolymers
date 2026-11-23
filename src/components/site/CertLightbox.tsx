import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export type CertItem = { src: string; t: string; s?: string };

const MIN_ZOOM = 1;
const MAX_ZOOM = 6;
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

export function CertLightbox({
  items,
  index,
  onClose,
  onSelect,
}: {
  items: CertItem[];
  index: number | null;
  onClose: () => void;
  onSelect: (i: number) => void;
}) {
  const open = index !== null;
  const active = open ? items[index as number] : null;

  const stageRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  // reset transform whenever the shown certificate changes
  useEffect(() => {
    reset();
  }, [index, reset]);

  // lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onSelect(((index as number) + 1) % items.length);
      else if (e.key === "ArrowLeft")
        onSelect(((index as number) - 1 + items.length) % items.length);
      else if (e.key === "+" || e.key === "=") setZoom((z) => clamp(z * 1.3, MIN_ZOOM, MAX_ZOOM));
      else if (e.key === "-") setZoom((z) => clamp(z / 1.3, MIN_ZOOM, MAX_ZOOM));
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onClose, onSelect, reset]);

  // cursor-anchored wheel / pinch zoom (non-passive so we can preventDefault)
  const stateRef = useRef({ zoom, offset });
  stateRef.current = { zoom, offset };

  useEffect(() => {
    const el = stageRef.current;
    if (!el || !open) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const px = e.clientX - rect.left - rect.width / 2;
      const py = e.clientY - rect.top - rect.height / 2;
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const { zoom: z, offset: o } = stateRef.current;
      const next = clamp(z * Math.exp(-dy * 0.0018), MIN_ZOOM, MAX_ZOOM);
      const k = next / z;
      setZoom(next);
      setOffset(
        next === MIN_ZOOM
          ? { x: 0, y: 0 }
          : { x: px - (px - o.x) * k, y: py - (py - o.y) * k },
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open]);

  if (!open || !active) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex flex-col bg-navy-deep/96 backdrop-blur-sm anim-veil-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${active.t} certificate viewer`}
    >
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/12 px-5 py-4 sm:px-8">
        <div className="min-w-0">
          <p className="truncate text-base uppercase text-white">{active.t}</p>
          {active.s && <p className="label-micro mt-1 truncate text-white/55">{active.s}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => clamp(z / 1.35, MIN_ZOOM, MAX_ZOOM))}
            className="rounded-2xl label-micro border border-white/25 px-3 py-2 text-white/80 transition-colors hover:border-red hover:text-white"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="label-micro w-12 text-center text-white/60">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => clamp(z * 1.35, MIN_ZOOM, MAX_ZOOM))}
            className="rounded-2xl label-micro border border-white/25 px-3 py-2 text-white/80 transition-colors hover:border-red hover:text-white"
            aria-label="Zoom in"
          >
            +
          </button>
          <a
            href={active.src}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl label-micro hidden border border-white/25 px-3 py-2 text-white/80 transition-colors hover:border-blue hover:text-white sm:inline-block"
          >
            Open file
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl label-micro border border-white/25 px-3 py-2 text-white/80 transition-colors hover:border-red hover:text-white"
            aria-label="Close viewer"
          >
            Close ✕
          </button>
        </div>
      </div>

      {/* stage */}
      <div
        ref={stageRef}
        className={cn(
          "relative flex-1 overflow-hidden",
          zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
        )}
        onPointerDown={(e) => {
          if (zoom <= 1) return;
          drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          setOffset({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onDoubleClick={() => (zoom > 1 ? reset() : setZoom(2.5))}
        onClick={(e) => {
          if (e.target === e.currentTarget && zoom === 1) onClose();
        }}
      >
        <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-40" />
        <img
          key={active.src}
          src={active.src}
          alt={`${active.t} certificate`}
          draggable={false}
          decoding="sync"
          className="absolute left-1/2 top-1/2 max-h-none anim-cert-in select-none"
          style={{
            height: "calc(100vh - 13rem)",
            maxWidth: "96vw",
            width: "auto",
            transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: drag.current ? "none" : "transform 220ms cubic-bezier(0.22,0.61,0.36,1)",
            objectFit: "contain",
            willChange: "transform",
          }}
        />
        <p className="label-micro pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy-deep/80 px-3 py-1 text-[0.6rem] text-white/55">
          Scroll or double-click to zoom · Drag to pan · Hover a thumbnail to switch
        </p>
      </div>

      {/* thumbnail rail — hover to switch */}
      <div className="shrink-0 border-t border-white/12 px-5 py-4 sm:px-8">
        <div className="flex gap-3 overflow-x-auto">
          {items.map((it, i) => (
            <button
              key={it.t + i}
              type="button"
              onMouseEnter={() => onSelect(i)}
              onFocus={() => onSelect(i)}
              onClick={() => onSelect(i)}
              aria-label={it.t}
              className={cn(
                "group relative h-20 w-16 shrink-0 overflow-hidden border bg-white/95 transition-all duration-300",
                i === index
                  ? "border-red -translate-y-1 shadow-[0_10px_30px_-12px_rgba(227,41,47,0.6)]"
                  : "border-white/20 opacity-60 hover:opacity-100 hover:-translate-y-1",
              )}
            >
              <img
                src={it.src}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
