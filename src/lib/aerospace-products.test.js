import { expect, mock, test } from "bun:test";
import manifest from "./latest-product-manifest.json";

mock.module("@/lib/latest-product-images", () => ({
  latestProductImages: (category, product) => manifest
    .filter((item) => item.category === category && item.product === product)
    .map((item) => item.webPointer),
}));

const { AEROSPACE_IMAGES } = await import("./aerospace-products");

test("the single Aerospace & Defence gallery retains all seven approved photographs exactly once", () => {
  const approved = manifest.filter((item) => item.category === "aerospace-defence").map((item) => item.webPointer);
  expect(AEROSPACE_IMAGES).toHaveLength(7);
  expect([...AEROSPACE_IMAGES].sort()).toEqual([...approved].sort());
  expect(new Set(AEROSPACE_IMAGES).size).toBe(7);
});