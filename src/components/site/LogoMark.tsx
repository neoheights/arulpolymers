import { useCallback, useEffect, useRef, useState } from "react";
import logo from "@/assets/arul-logo-new.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Premium interactive header logo:
 * - subtle periodic glimmer sweep (masked to the logo)
 * - hover lift / depth / glow
 * - click compression pulse + light sweep
 * - ultra-subtle desktop cursor tilt
 * - respects prefers-reduced-motion
 */
export function LogoMark({ compact }: { compact?: boolean }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [glimmer, setGlimmer] = useState(false);
  const [clicked, setClicked] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    // Periodic subtle glimmer every 5–8s
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    const fire = () => {
      setGlimmer(true);
      timeout = setTimeout(() => setGlimmer(false), 950);
    };
    interval = setInterval(fire, 5000 + Math.random() * 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const triggerGlimmer = useCallback(() => {
    if (reduced.current) return;
    setGlimmer(false);
    // restart animation
    requestAnimationFrame(() => {
      setGlimmer(true);
      setTimeout(() => setGlimmer(false), 950);
    });
  }, []);

  const onClick = useCallback(() => {
    if (reduced.current) return;
    setClicked(true);
    triggerGlimmer();
    setTimeout(() => setClicked(false), 500);
  }, [triggerGlimmer]);

  // Ultra-subtle desktop tilt
  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (reduced.current || e.pointerType !== "mouse") return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-py * 2).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 3).toFixed(2)}deg`);
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <span
      ref={wrapRef}
      className={cn(
        "logo-mark group/logo relative inline-flex items-center",
        clicked && "logo-mark--click",
      )}
      onClick={onClick}
      onMouseEnter={triggerGlimmer}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <img
        src={logo.url}
        alt="Arul Polymers Pvt Ltd"
        width={200}
        height={56}
        className={cn(
          "w-auto transition-all duration-500",
          compact ? "h-10" : "h-12",
        )}
      />
      {/* Masked glimmer sweep */}
      <span
        aria-hidden
        className={cn("logo-mark__shine", glimmer && "logo-mark__shine--run")}
        style={{ WebkitMaskImage: `url(${logo.url})`, maskImage: `url(${logo.url})` }}
      />
    </span>
  );
}
