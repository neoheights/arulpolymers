import { useState } from "react";
import { cn } from "@/lib/utils";

interface LeadershipPortraitProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function LeadershipPortrait({ src, alt, caption, className }: LeadershipPortraitProps) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <figure
        className={cn("group relative flex flex-col items-center", className)}
      >
        <div className="relative">
          {/* Offset background layer */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-4 -z-10 h-full w-full rounded-[1.25rem] border border-blue/25 bg-gradient-to-br from-blue/10 to-navy/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
          {/* Soft depth glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-20 rounded-[2rem] bg-navy/10 blur-2xl"
          />
          {/* Red accent line */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-3 left-6 -z-10 h-0.5 w-20 bg-red transition-all duration-500 group-hover:w-32"
          />

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="relative cursor-zoom-in overflow-hidden rounded-[1.25rem] bg-cool outline-none ring-1 ring-blue/30 shadow-[0_18px_40px_-22px_color-mix(in_oklab,var(--navy)_60%,transparent)] transition-all duration-500 hover:-translate-y-1 hover:ring-2 hover:ring-blue/50 hover:shadow-[0_28px_60px_-24px_color-mix(in_oklab,var(--navy)_55%,transparent)] focus-visible:ring-2 focus-visible:ring-red"
            aria-label={`Zoom ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full max-w-[240px] scale-[1.06] object-cover object-[50%_22%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12] sm:max-w-[270px] lg:max-w-[310px]"
            />
            <span className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/25" />
            {/* technical corner marks */}
            <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-white/40" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-white/40" />
          </button>
        </div>

        {caption && (
          <figcaption className="label-micro mt-6 text-center text-steel">
            {caption}
          </figcaption>
        )}
      </figure>


      {/* Zoom lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/90 p-6 backdrop-blur-sm"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${alt}`}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close zoom view"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[85vh] max-w-[90vw] rounded-[1.5rem] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
