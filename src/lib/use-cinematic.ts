import { useEffect, useRef, useState } from "react";

export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const smoothstep = (v: number) => {
  const t = clamp01(v);
  return t * t * (3 - 2 * t);
};
/** Normalised, eased progress of a scroll segment. */
export const seg = (p: number, a: number, b: number) => smoothstep((p - a) / (b - a));
/** Fade in between a→b, hold, fade out between c→d. */
export const band = (p: number, a: number, b: number, c: number, d: number) =>
  Math.min(smoothstep((p - a) / (b - a)), 1 - smoothstep((p - c) / (d - c)));

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * Sticky-stage scroll engine: returns smoothed 0..1 progress through the
 * stage plus smoothed pointer offsets in the -1..1 range.
 */
export function useCinematicStage<T extends HTMLElement = HTMLDivElement>(reduced = false) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState({ p: 0, mx: 0, my: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let target = 0;
    let smooth = 0;
    let tmx = 0;
    let tmy = 0;
    let mx = 0;
    let my = 0;
    let alive = true;

    const readScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      target = total > 0 ? clamp01(-rect.top / total) : 0;
    };

    const onPointer = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let last = performance.now();

    /** Frame-rate independent exponential smoothing. */
    const ease = (current: number, to: number, halfLife: number, dt: number) =>
      current + (to - current) * (1 - Math.pow(2, -dt / halfLife));

    const tick = (now: number) => {
      if (!alive) return;
      // clamp dt so a background tab / long task cannot cause a jump
      const dt = Math.min(now - last, 50);
      last = now;
      readScroll();
      if (reduced) {
        smooth = target;
        mx = 0;
        my = 0;
      } else {
        smooth = ease(smooth, target, 70, dt);
        if (Math.abs(target - smooth) < 0.00015) smooth = target;
        mx = ease(mx, tmx, 110, dt);
        my = ease(my, tmy, 110, dt);
      }
      setState((prev) =>
        Math.abs(prev.p - smooth) > 0.00012 ||
        Math.abs(prev.mx - mx) > 0.0015 ||
        Math.abs(prev.my - my) > 0.0015
          ? { p: smooth, mx, my }
          : prev,
      );
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [reduced]);

  return { ref, ...state };
}
