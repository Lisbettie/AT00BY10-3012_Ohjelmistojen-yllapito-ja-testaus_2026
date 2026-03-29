import ceil from "../AT00BY10-main/src/ceil.js";

describe("ceil.js - Lukujen pyöristäminen ylöspäin", () => {
  test("pyöristää luvun ylöspäin kokonaisluvuksi oletuksena", () => {
    expect(ceil(4.006)).toBe(5);
  });

  test("pyöristää luvun ylöspäin annetulla desimaalintarkkuudella", () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test("käsittelee negatiivisen tarkkuuden (pyöristää kymmeniin/satoihin)", () => {
    expect(ceil(6040, -2)).toBe(6100);
  });
});
