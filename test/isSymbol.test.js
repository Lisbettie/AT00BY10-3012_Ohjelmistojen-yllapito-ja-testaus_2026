import isSymbol from "../AT00BY10-main/src/isSymbol.js";

describe("isSymbol.js - Symbol-tyypin tarkistus", () => {
  test("tunnistaa aidon Symbolin", () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  test("palauttaa false tavalliselle merkkijonolle", () => {
    expect(isSymbol("abc")).toBe(false);
  });

  test("palauttaa false numeroille ja nullille", () => {
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol(null)).toBe(false);
  });
});
