import manifest from "./latest-product-manifest.json";

type AssetPointer = { url: string };
const assets = import.meta.glob<AssetPointer>("/src/assets/products/latest/**/*.asset.json", { eager: true, import: "default" });

export function latestProductImages(category: string, product: string): string[] {
  return manifest
    .filter((item) => item.category === category && item.product === product)
    .map((item) => assets[`/${item.webPointer}`]?.url)
    .filter((url): url is string => Boolean(url));
}