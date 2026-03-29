import isEmpty from "../AT00BY10-main/src/isEmpty.js";

describe("isEmpty.js - Tyhjien arvojen tarkistus", () => {
  // Testataan null ja primitiiviset arvot (numerot, booleanit),
  // joiden katsotaan aina olevan "tyhjiä" tässä kirjastossa.
  test("palauttaa true, jos arvo on null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  test("palauttaa true boolean-arvoille ja numeroille", () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
  });

  // Testataan taulukot (Arrays)
  test("tunnistaa tyhjät ja täydet taulukot", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Testataan merkkijonot (Strings)
  test("tunnistaa tyhjät ja täydet merkkijonot", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("abc")).toBe(false);
  });

  // Testataan objektit (Objects)
  test("tunnistaa tyhjät ja täydet objektit", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
