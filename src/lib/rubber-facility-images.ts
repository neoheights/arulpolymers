type PhotoAsset = { url: string };
const assets = import.meta.glob<PhotoAsset>("/src/assets/facilities/rubber/latest/*.asset.json", { eager: true, import: "default" });

// Stained-floor originals superseded by cleaned versions — old pointers kept on disk only.
const SUPERSEDED = ["/03.webp", "/04.webp", "/05.webp", "/09.webp", "/12.webp", "/13.webp"];

export const RUBBER_FACTORY_IMAGES = Object.entries(assets)
  .filter(([path]) => !path.endsWith("/lab.webp.asset.json") && !SUPERSEDED.some((s) => path.endsWith(`${s}.asset.json`)))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, asset]) => asset.url);
export const RUBBER_LAB_IMAGE = assets["/src/assets/facilities/rubber/latest/lab.webp.asset.json"]?.url;
