import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { readFileSync } from "node:fs";
import { PRODUCT_CATEGORIES } from "./products-nav";
import manifest from "./latest-product-manifest.json";

const imagesFor = (product) => manifest.filter((entry) => entry.category === "mining" && entry.product === product);

describe("combined Arul Bond adhesive range", () => {
  test("the existing gallery includes all three permanent adhesive photos", () => {
    const products = ["arul-bond-adhasive", "hv-520-hot-bonding-solution", "hr-200-two-part-contact-adhesive"];
    const source = readFileSync(new URL("./mining-products.ts", import.meta.url), "utf8");
    const adhesiveSection = source.split('id: "arul-bond-adhesive"')[1].split('id: "conveyor-impact-bar"')[0];
    const images = products.flatMap(imagesFor);
    expect(images).toHaveLength(3);
    for (const product of products) expect(adhesiveSection).toContain(`...productImages("${product}")`);
    for (const image of images) expect(existsSync(image.webPointer)).toBe(true);
  });
  for (const product of ["hv-520-hot-bonding-solution", "hr-200-two-part-contact-adhesive"]) {
    test(`${product} has no separate section or dropdown entry`, () => {
      expect(readFileSync(new URL("./mining-products.ts", import.meta.url), "utf8")).not.toContain(`id: "${product}"`);
      const mining = PRODUCT_CATEGORIES.find((category) => category.label === "Mining");
      expect(mining.children.flatMap((category) => category.children ?? []).some((item) => item.hash === product)).toBe(false);
    });
  }
});

describe("latest supplied Mining liner sources", () => {
  test("Chute Liners uses only the three replacement photographs", () => {
    const images = imagesFor("chut-liners");
    expect(images).toHaveLength(3);
    expect(images.every((image) => image.source.startsWith("/Client Mining update 2026-10-12/Chut Liners/"))).toBe(true);
  });
  test("Ceramic Wear Pad includes the replacement photo and all four ceramic variants", () => {
    const images = imagesFor("ceramic-wear-pad");
    expect(images).toHaveLength(5);
    expect(images[0].source).toBe("/Client Mining update 2026-10-12/Ceramic Wear Pad/Picture2.png");
    expect(images.slice(1).map((image) => image.source.split("/").at(-1))).toEqual(["heavy ceramic liner-1.pdf", "Plain ceramic pad.pdf", "hex ceramic.pdf", "hex ceramic liner-4.pdf"]);
    for (const image of images) {
      expect(existsSync(image.webPointer)).toBe(true);
      expect(existsSync(image.originalPointer)).toBe(true);
    }
  });
  for (const product of ["heavy-ceramic-liner", "plain-ceramic-pad", "hex-ceramic", "hex-ceramic-liner"]) {
    test(`${product} is no longer a separate Mining product or menu entry`, () => {
      expect(imagesFor(product)).toHaveLength(0);
      expect(readFileSync(new URL("./mining-products.ts", import.meta.url), "utf8")).not.toContain(`id: "${product}"`);
      const mining = PRODUCT_CATEGORIES.find((category) => category.label === "Mining");
      expect(mining.children.flatMap((category) => category.children ?? []).some((item) => item.hash === product)).toBe(false);
    });
  }
  for (const product of ["rubber-wear-liner", "rubber-wear-liner-metal-backing"]) {
    test(`${product} preserves the supplied PDF and has a permanent gallery preview`, () => {
      const images = imagesFor(product);
      expect(images).toHaveLength(1);
      expect(images[0].originalPointer.endsWith(".pdf.asset.json")).toBe(true);
      expect(existsSync(images[0].originalPointer)).toBe(true);
      expect(existsSync(images[0].webPointer)).toBe(true);
    });
  }
});