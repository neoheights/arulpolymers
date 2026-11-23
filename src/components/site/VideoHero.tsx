import { useEffect, useRef, useState } from "react";
import poster from "@/assets/hero-poster-final.jpg.asset.json";
import heroVideo from "@/assets/final-arul-hero.mp4.asset.json";

export function VideoHero() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = () => {
      if (motion.matches) video.pause();
      else void video.play().catch(() => {});
    };
    applyMotion();
    motion.addEventListener("change", applyMotion);
    return () => motion.removeEventListener("change", applyMotion);
  }, []);

  return (
    <section id="top" className="homepage-video-hero relative z-10 bg-navy-deep pt-20 md:pt-24">
      {/* Video — full width, sitting below the fixed header */}
      <div className="hero-video-frame relative w-full overflow-hidden">
        <video
          ref={videoRef}
          poster={poster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 block h-full w-full object-cover"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>

        {/* Subtle bottom darkening so the heading stays readable */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent"
          aria-hidden="true"
        />

        {/* Hero text — anchored to the lower part of the video */}
        <div className="pointer-events-none absolute bottom-0 left-0">
          <div className="pb-4 pl-4 md:pb-6 md:pl-6">
            <h1
              className="hero-video-heading leading-[0.95] font-extrabold text-primary-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
            >
              <span className="block">ENGINEERED</span>
              <span className="block">
                INTO MOTION<span className="text-red">.</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
