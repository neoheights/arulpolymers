export function facilityCarouselSlots(selected: number, physical: number, count: number) {
  if (count === 0) return [];
  return Array.from({ length: 3 }, (_, slot) =>
    (selected + (slot === physical ? 0 : slot === (physical + 1) % 3 ? 1 : -1) + count) % count,
  );
}