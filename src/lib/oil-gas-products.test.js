import { expect, mock, test } from "bun:test";
import manifest from "./latest-product-manifest.json";

mock.module("@/lib/latest-product-images", () => ({
  latestProductImages: (category, product) => manifest
    .filter((item) => item.category === category && item.product === product)
    .map((item) => item.webPointer),
}));

const { OIL_GAS_IMAGES } = await import("./oil-gas-products");

test("the combined Oil & Gas gallery keeps every approved photograph exactly once", () => {
  const approved = [...new Set(manifest.filter((item) => item.category === "oil-gas").map((item) => item.webPointer))];
  expect(OIL_GAS_IMAGES.length).toBeGreaterThan(0);
  expect([...OIL_GAS_IMAGES].sort()).toEqual(approved.sort());
  expect(new Set(OIL_GAS_IMAGES).size).toBe(OIL_GAS_IMAGES.length);
});