// Boundaries follow the inspected crossfade midpoints of hero-industries.mp4.
export const HERO_VIDEO_SCENES = [
  { start: 0, label: "Automobiles" },
  { start: 1.75, label: "Mining" },
  { start: 3.3, label: "Potable Water" },
  { start: 4.85, label: "Aerospace & Defence" },
  { start: 6.55, label: "Oil & Gas" },
  { start: 8.125, label: "Agriculture" },
] as const;

export function heroSceneAt(time: number) {
  const safeTime = Number.isFinite(time) ? Math.max(0, time) : 0;
  return [...HERO_VIDEO_SCENES].reverse().find((scene) => safeTime >= scene.start) ?? HERO_VIDEO_SCENES[0];
}