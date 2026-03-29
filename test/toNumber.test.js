import toNumber from "../AT00BY10-main/src/toNumber.js";

describe("toNumber.js - Arvojen muuntaminen numeroksi", () => {
  test("palauttaa numerot sellaisenaan", () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test("muuntaa numeeriset merkkijonot numeroiksi ja poistaa tyhjät välit", () => {
    expect(toNumber("3.2")).toBe(3.2);
    expect(toNumber("  42  ")).toBe(42);
  });

  test("käsittelee Symbolit oikein (palauttaa NaN)", () => {
    expect(toNumber(Symbol("testi"))).toBeNaN();
  });

  test("muuntaa binääri- ja oktaaliluvut oikeiksi numeroiksi", () => {
    expect(toNumber("0b10")).toBe(2); // Binääri 10 = numero 2
    expect(toNumber("0o10")).toBe(8); // Oktaali 10 = numero 8
  });

  test("tunnistaa vialliset heksadesimaalit (palauttaa NaN)", () => {
    expect(toNumber("-0x12")).toBeNaN();
  });

  test("käsittelee objektit lukemalla niiden valueOf-arvon", () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });
});
