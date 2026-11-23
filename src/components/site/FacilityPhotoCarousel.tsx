import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/use-cinematic";
import { canPlayProductGallery, PRODUCT_GALLERY_INTERVAL_MS } from "@/lib/product-gallery-playback";
import { facilityCarouselSlots } from "@/lib/facility-carousel-slots";

export function FacilityPhotoCarousel({ images, label }: { images: string[]; label: string }) {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(0);
  const logical = useRef(0);
  const physical = useRef(0);
  const [slots, setSlots] = useState([0, 1, images.length - 1]);
  const [viewportRef, carousel] = useEmblaCarousel({ loop: true, align: "start", duration: reducedMotion ? 0 : 35 });
  useEffect(() => {
    if (!carousel) return;
    const sync = () => {
      const next = carousel.selectedScrollSnap();
      if (next === physical.current) return;
      const direction = next === (physical.current + 1) % 3 ? 1 : -1;
      logical.current = (logical.current + direction + images.length) % images.length;
      physical.current = next;
      setSelected(logical.current);
      // Update the offscreen slot immediately: another autoplay tick can occur
      // before Embla emits settle, which otherwise repeats only the initial photos.
      setSlots(facilityCarouselSlots(logical.current, next, images.length));
    };
    const pause = () => setPaused(true);
    sync();
    carousel.on("select", sync).on("reInit", sync).on("pointerDown", pause);
    return () => { carousel.off("select", sync).off("reInit", sync).off("pointerDown", pause); };
  }, [carousel, images.length]);
  useEffect(() => {
    images.forEach((src) => { const image = new Image(); image.src = src; });
  }, [images]);
  useEffect(() => {
    const resume = () => setPaused(false);
    window.addEventListener("scroll", resume, { passive: true });
    return () => window.removeEventListener("scroll", resume);
  }, []);
  useEffect(() => {
    if (!carousel || !canPlayProductGallery(images.length, paused, false, reducedMotion, true)) return;
    const timer = window.setInterval(() => carousel.scrollNext(), PRODUCT_GALLERY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [carousel, images.length, paused, reducedMotion]);
  return <div className="mx-auto min-w-0 max-w-5xl" data-facility-carousel={label} data-selected={selected} data-paused={paused}>
    <div ref={viewportRef} className="overflow-hidden rounded-lg bg-transparent" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="flex touch-pan-y">
        {slots.map((imageIndex, slot) => <div key={slot} className="relative aspect-[3/2] min-w-0 flex-[0_0_100%] overflow-hidden" aria-hidden={physical.current !== slot}>
          <div role="img" aria-label="Arul Polymers rubber manufacturing facility" className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images[imageIndex]})` }} />
          <Button variant="ghost" tabIndex={physical.current === slot ? 0 : -1} className="absolute inset-0 h-full w-full rounded-none bg-transparent p-0 hover:bg-transparent" aria-label={`Pause ${label}`} onClick={() => setPaused(true)} />
        </div>)}
      </div>
    </div>
    <div className="mt-3 flex justify-end gap-2">
      <Button variant="outline" size="icon" title="Previous photo" aria-label={`Previous ${label} photo`} onClick={() => { setPaused(true); carousel?.scrollPrev(); }}><ChevronLeft /></Button>
      <Button variant="outline" size="icon" title={paused ? "Play photos" : "Pause photos"} aria-label={`${paused ? "Play" : "Pause"} ${label} slideshow`} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>
      <Button variant="outline" size="icon" title="Next photo" aria-label={`Next ${label} photo`} onClick={() => { setPaused(true); carousel?.scrollNext(); }}><ChevronRight /></Button>
    </div>
  </div>;
}