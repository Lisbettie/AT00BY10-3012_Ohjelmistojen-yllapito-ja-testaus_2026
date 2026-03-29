import isObject from "../AT00BY10-main/src/isObject.js";

describe("isObject.js - Objektien tunnistaminen", () => {
  test("tunnistaa tavalliset objektit ja taulukot", () => {
    expect(isObject({})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
  });

  test("tunnistaa funktiot objekteiksi", () => {
    expect(isObject(Function)).toBe(true);
  });

  test("palauttaa false primitiivisille arvoille ja nullille", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject("abc")).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
