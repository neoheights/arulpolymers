export const PRODUCT_GALLERY_INTERVAL_MS = 2000;

export function canPlayProductGallery(count: number, paused: boolean, viewerOpen: boolean, reducedMotion: boolean, autoplay: boolean) {
  return count > 1 && autoplay && !paused && !viewerOpen && !reducedMotion;
}