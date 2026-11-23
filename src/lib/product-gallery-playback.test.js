import { describe, expect, test } from "bun:test";
import { canPlayProductGallery, PRODUCT_GALLERY_INTERVAL_MS } from "./product-gallery-playback";

describe("product gallery playback", () => {
  test("advances every two seconds", () => expect(PRODUCT_GALLERY_INTERVAL_MS).toBe(2000));
  test("click pause stops playback", () => expect(canPlayProductGallery(4, true, false, false, true)).toBe(false));
  test("clearing click pause on scroll permits playback", () => expect(canPlayProductGallery(4, false, false, false, true)).toBe(true));
  test("scroll never starts playback inside the open viewer", () => expect(canPlayProductGallery(4, false, true, false, true)).toBe(false));
  test("reduced motion disables autoplay", () => expect(canPlayProductGallery(4, false, false, true, true)).toBe(false));
  test("single photographs do not advance", () => expect(canPlayProductGallery(1, false, false, false, true)).toBe(false));
});