import { expect, test } from "bun:test";
import { facilityCarouselSlots } from "./facility-carousel-slots";

test("all 14 factory photographs appear in order and loop to the first", () => {
  const visible = [];
  for (let step = 0; step <= 14; step++) {
    const physical = step % 3;
    const slots = facilityCarouselSlots(step % 14, physical, 14);
    visible.push(slots[physical]);
    expect(slots[(physical + 1) % 3]).toBe((step + 1) % 14);
    expect(slots[(physical + 2) % 3]).toBe((step + 13) % 14);
  }
  expect(visible).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0]);
});