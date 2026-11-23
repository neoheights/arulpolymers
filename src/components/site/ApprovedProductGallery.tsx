import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-cinematic";
import { canPlayProductGallery, PRODUCT_GALLERY_INTERVAL_MS } from "@/lib/product-gallery-playback";

export function ApprovedProductGallery({ name, images, autoplay = true }: { name: string; images: string[]; autoplay?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const touch = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();
  const [viewportRef, carousel] = useEmblaCarousel({ loop: true, align: "start", duration: reducedMotion ? 0 : 35 });
  const image = images[selected];
  const move = (direction: number) => {
    if (images.length < 2) return;
    setPaused(true);
    if (direction > 0) carousel?.scrollNext();
    else carousel?.scrollPrev();
  };
  useEffect(() => {
    if (!carousel) return;
    const sync = () => setSelected(carousel.selectedScrollSnap());
    const pause = () => setPaused(true);
    sync();
    carousel.on("select", sync).on("reInit", sync).on("pointerDown", pause);
    return () => { carousel.off("select", sync).off("reInit", sync).off("pointerDown", pause); };
  }, [carousel]);
  useEffect(() => {
    const resume = () => setPaused(false);
    window.addEventListener("scroll", resume, { passive: true });
    return () => window.removeEventListener("scroll", resume);
  }, []);
  useEffect(() => {
    if (!carousel || !canPlayProductGallery(images.length, paused, open, reducedMotion, autoplay)) return;
    const timer = window.setInterval(() => carousel.scrollNext(), PRODUCT_GALLERY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [carousel, autoplay, paused, open, images.length, reducedMotion]);
  if (!image) return <div className="flex aspect-[4/3] items-center justify-center border border-border bg-muted p-6 text-center text-muted-foreground">Approved photograph awaiting confirmation.</div>;
  const swipeEnd = (end: number) => {
    if (touch.current !== null && Math.abs(end - touch.current) > 45) move(end > touch.current ? -1 : 1);
    touch.current = null;
  };
  return <div className="min-w-0" data-approved-gallery={name} data-gallery-paused={paused || open} data-gallery-selected={selected}>
    <div className="relative overflow-hidden rounded-lg border border-border bg-background">
      <div ref={viewportRef} className="overflow-hidden" role="region" aria-roledescription="carousel" aria-label={`${name} photographs`}>
        <div className="flex touch-pan-y">
          {images.map((src, index) => <div key={src} className="relative aspect-[4/3] min-w-0 flex-[0_0_100%]" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${images.length}`} aria-hidden={index !== selected}>
            <Button variant="ghost" tabIndex={index === selected ? 0 : -1} aria-label={`Pause ${name} photograph ${index + 1}`} onClick={() => setPaused(true)} className="absolute inset-0 h-full w-full rounded-none p-0 hover:bg-transparent">
              <img src={src} alt={`${name} — approved product photograph ${index + 1}`} width={1600} height={1200} loading="lazy" decoding="async" className="h-full w-full object-contain object-center" />
            </Button>
          </div>)}
        </div>
      </div>
      <Button variant="secondary" size="icon" className="absolute right-3 top-3" aria-label={`Open ${name} image viewer`} onClick={() => { setPaused(true); setOpen(true); }}><Expand /></Button>
      {images.length > 1 && <><Button variant="secondary" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2" aria-label={`Previous ${name} photograph`} onClick={() => move(-1)}><ChevronLeft /></Button><Button variant="secondary" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label={`Next ${name} photograph`} onClick={() => move(1)}><ChevronRight /></Button><span className="absolute bottom-3 right-3 bg-navy/90 px-3 py-2 text-xs text-primary-foreground" aria-live="polite">{selected + 1} / {images.length}</span></>}
    </div>
    {images.length > 1 && <div className="mt-3 flex gap-2 overflow-x-auto pb-2">{images.map((src, index) => <Button key={src} variant="ghost" className={cn("h-16 w-20 shrink-0 rounded-md border p-1", selected === index ? "border-primary bg-accent" : "border-border bg-background")} aria-label={`Show ${name} photograph ${index + 1}`} aria-pressed={selected === index} onClick={() => { carousel?.scrollTo(index); setPaused(true); }}><img src={src} alt="" className="h-full w-full object-contain object-center" loading="lazy" /></Button>)}</div>}
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="h-[94dvh] w-[96vw] max-w-none grid-rows-[auto_minmax(0,1fr)_auto] bg-background" aria-describedby={undefined} onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
      <DialogTitle className="pr-8 text-base text-foreground">{name}</DialogTitle>
      <img src={image} alt={`${name} — approved product photograph ${selected + 1}`} className="h-full min-h-0 w-full object-contain object-center" onTouchStart={(event) => { touch.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => swipeEnd(event.changedTouches[0]?.clientX ?? 0)} />
      <div className="flex h-11 items-center justify-center gap-4">{images.length > 1 && <Button variant="outline" size="icon" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft /></Button>}<span className="text-sm text-muted-foreground">{selected + 1} / {images.length}</span>{images.length > 1 && <Button variant="outline" size="icon" aria-label="Next image" onClick={() => move(1)}><ChevronRight /></Button>}</div>
    </DialogContent></Dialog>
  </div>;
}