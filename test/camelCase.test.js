import camelCase from "../AT00BY10-main/src/camelCase.js";

describe("camelCase.js - camelCasen toimivuuden testaus", () => {
  // Tilanne 1: Toimiiko funktio kahdella normaalilla sanalla?
  test("yhdistää kaksi eri strigniä camelCaseksi", () => {
    // 1. Kutsutaan funktiota ja tallennetaan tulos muuttujaan
    const tulos = camelCase("Foo Bar");

    // 2. Varmistetaan (expect), että tulos on (toBe) eli sitä mitä pitääkin
    // eli 'Foo Bar' pitäisi muuttua 'fooBar'
    expect(tulos).toBe("fooBar");
  });

  // Tilanne 2:
  test("käsittelee väliviivoilla eritetut sanat oikein", () => {
    expect(camelCase("--foo-bar--")).toBe("fooBar");
  });

  // Tilanne 3:
  test("käsittelee alaviivoilla erotetut sanat oikein", () => {
    expect(camelCase("__FOO_BAR__")).toBe("fooBar");
  });
});
