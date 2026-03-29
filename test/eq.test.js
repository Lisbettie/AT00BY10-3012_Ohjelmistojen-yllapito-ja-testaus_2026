import eq from "../AT00BY10-main/src/eq.js";

describe("eq.js - Arvojen samanlaisuuden tarkistus", () => {
  test("tunnistaa samat primitiiviset arvot", () => {
    expect(eq("a", "a")).toBe(true);
    expect(eq(1, 1)).toBe(true);
  });

  test("palauttaa false eri arvoille", () => {
    expect(eq("a", "b")).toBe(false);
    expect(eq(1, 2)).toBe(false);
  });

  test("tunnistaa saman objektiviittauksen", () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
  });

  test("palauttaa false eri objekteille, vaikka sisältö olisi sama", () => {
    const object1 = { a: 1 };
    const object2 = { a: 1 };
    expect(eq(object1, object2)).toBe(false);
  });

  test("käsittelee NaN-arvot oikein", () => {
    // eq-funktion pitäisi palauttaa true, jos molemmat ovat NaN
    expect(eq(NaN, NaN)).toBe(true);
  });
});
