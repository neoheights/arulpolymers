import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import manifest from "./latest-product-manifest.json";
import { PRODUCT_CATEGORIES } from "./products-nav";

const tillerImages = manifest.filter((entry) => entry.product === "tiller-tyre");

describe("Tiller Tyre belongs to Agriculture", () => {
  test("all three supplied photographs are catalogued under Agriculture", () => {
    expect(tillerImages).toHaveLength(3);
    expect(tillerImages.every((entry) => entry.category === "agriculture")).toBe(true);
    expect(tillerImages.every((entry) => existsSync(entry.webPointer) && existsSync(entry.originalPointer))).toBe(true);
  });
  test("no tiller tyre photograph is left catalogued under Automobile", () => {
    expect(manifest.some((entry) => entry.category === "automobile" && entry.product === "tiller-tyre")).toBe(false);
  });
  test("the Automobile product data no longer lists the tiller tyre section", () => {
    expect(readFileSync("src/lib/automobile-products.ts", "utf8")).not.toContain("tiller-tyre");
  });
  test("header navigation lists Tiller Tyre under Agriculture only", () => {
    const automobile = PRODUCT_CATEGORIES.find((category) => category.label === "Automobile");
    const agriculture = PRODUCT_CATEGORIES.find((category) => category.label === "Agriculture");
    expect(automobile?.children.some((node) => node.hash === "tiller-tyre")).toBe(false);
    expect(agriculture?.children).toEqual([{ label: "Tiller Tyre", to: "/products/agriculture", hash: "tiller-tyre" }]);
  });
});
