import { describe, it, expect, beforeEach } from "vitest";
import {
  isSupportedLocale,
  localize,
  localizeDeep,
  setLocale,
  getLocale,
  t,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
} from "./index.js";

beforeEach(() => {
  // Reset any persisted preference so tests are independent.
  try {
    window.localStorage.clear();
  } catch {
    /* ignore */
  }
});

describe("isSupportedLocale", () => {
  it("accepts supported locales", () => {
    expect(isSupportedLocale("es")).toBe(true);
    expect(isSupportedLocale("en")).toBe(true);
  });

  it("rejects unsupported values", () => {
    expect(isSupportedLocale("fr")).toBe(false);
    expect(isSupportedLocale(null)).toBe(false);
    expect(isSupportedLocale(42)).toBe(false);
  });
});

describe("localize", () => {
  it("resolves a locale field to the requested locale", () => {
    const field = { es: "Hola", en: "Hi" };
    expect(localize(field, "es")).toBe("Hola");
    expect(localize(field, "en")).toBe("Hi");
  });

  it("falls back to the default locale when the entry is missing", () => {
    const field = { es: "Solo español" };
    expect(localize(field, "en")).toBe("Solo español");
  });

  it("returns plain values untouched", () => {
    expect(localize("plain", "en")).toBe("plain");
    expect(localize(123, "en")).toBe(123);
    const arr = ["a", "b"];
    expect(localize(arr, "en")).toBe(arr);
    const data = { id: 1, color: "#fff" };
    expect(localize(data, "en")).toBe(data);
  });

  it("resolves array-valued locale fields", () => {
    const field = { es: ["uno", "dos"], en: ["one", "two"] };
    expect(localize(field, "en")).toEqual(["one", "two"]);
  });
});

describe("t (UI strings)", () => {
  it("returns the string for the active locale", () => {
    setLocale("en", false);
    expect(getLocale()).toBe("en");
    expect(t("nav.works")).toBe("PROJECTS");
    setLocale("es", false);
    expect(t("nav.works")).toBe("PROYECTOS");
  });

  it("returns the key itself when the translation is missing", () => {
    setLocale("es", false);
    expect(t("nav.does.not.exist")).toBe("nav.does.not.exist");
  });
});

describe("localizeDeep", () => {
  it("resolves nested locale fields to the requested locale", () => {
    const data = {
      id: 7,
      title: { es: "Hola", en: "Hi" },
      about: {
        description: { es: ["uno", "dos"], en: ["one", "two"] },
      },
    };
    expect(localizeDeep(data, "en")).toEqual({
      id: 7,
      title: "Hi",
      about: { description: ["one", "two"] },
    });
    expect(localizeDeep(data, "es")).toEqual({
      id: 7,
      title: "Hola",
      about: { description: ["uno", "dos"] },
    });
  });

  it("resolves locale fields inside arrays", () => {
    const cards = [
      { id: 1, title: { es: "Login", en: "Login" } },
      { id: 2, title: { es: "Compra", en: "Purchase" } },
    ];
    expect(localizeDeep(cards, "en")).toEqual([
      { id: 1, title: "Login" },
      { id: 2, title: "Purchase" },
    ]);
  });

  it("leaves non-translatable leaves untouched (code, urls, numbers)", () => {
    const step = {
      title: { es: "Ejecuta", en: "Run" },
      type: "code",
      description: "const x = { es: 1 };",
      url: "https://example.com",
      rating: 9.86,
    };
    expect(localizeDeep(step, "en")).toEqual({
      title: "Run",
      type: "code",
      description: "const x = { es: 1 };",
      url: "https://example.com",
      rating: 9.86,
    });
  });

  it("falls back to the default locale for a missing entry", () => {
    const data = { label: { es: "Solo español" } };
    expect(localizeDeep(data, "en")).toEqual({ label: "Solo español" });
  });
});

describe("constants", () => {
  it("exposes a supported default locale", () => {
    expect(SUPPORTED_LOCALES).toContain(DEFAULT_LOCALE);
  });
});
