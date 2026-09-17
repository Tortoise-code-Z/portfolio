import { describe, it, expect } from "vitest";
import { validateProp, validateProps } from "./argumentsValidation.js";

describe("validateProp", () => {
  it("returns true when the type matches", () => {
    expect(validateProp("name", "hello", "string")).toBe(true);
  });

  it("throws TypeError when the type does not match", () => {
    expect(() => validateProp("age", "not-a-number", "number")).toThrow(
      TypeError,
    );
  });

  it("throws RangeError when the value is not allowed", () => {
    expect(() =>
      validateProp("variant", "ghost", "string", ["primary", "secondary"]),
    ).toThrow(RangeError);
  });
});

describe("validateProps", () => {
  it("validates multiple props at once and returns true", () => {
    expect(
      validateProps({
        text: { value: "Click", type: "string" },
        disabled: { value: false, type: "boolean" },
      }),
    ).toBe(true);
  });
});
