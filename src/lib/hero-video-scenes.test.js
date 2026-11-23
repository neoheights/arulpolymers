import { describe, expect, test } from "bun:test";
import { heroSceneAt } from "./hero-video-scenes";

describe("homepage industry footage synchronization", () => {
  test("automobile footage shows Automobiles", () => {
    expect(heroSceneAt(0).label).toBe("Automobiles");
    expect(heroSceneAt(1.74).label).toBe("Automobiles");
  });
  test("mining footage shows Mining", () => {
    expect(heroSceneAt(1.75).label).toBe("Mining");
    expect(heroSceneAt(3.29).label).toBe("Mining");
  });
  test("water pipeline footage shows Potable Water", () => {
    expect(heroSceneAt(3.3).label).toBe("Potable Water");
    expect(heroSceneAt(4.84).label).toBe("Potable Water");
  });
  test("aircraft footage shows Aerospace & Defence", () => {
    expect(heroSceneAt(4.85).label).toBe("Aerospace & Defence");
    expect(heroSceneAt(6.54).label).toBe("Aerospace & Defence");
  });
  test("refinery footage shows Oil & Gas", () => {
    expect(heroSceneAt(6.55).label).toBe("Oil & Gas");
    expect(heroSceneAt(8.124).label).toBe("Oil & Gas");
  });
  test("farming footage shows Agriculture until the loop restarts", () => {
    expect(heroSceneAt(8.125).label).toBe("Agriculture");
    expect(heroSceneAt(11.12).label).toBe("Agriculture");
    expect(heroSceneAt(0).label).toBe("Automobiles");
  });
});