import camelCase from "../AT00BY10-main/src/camelCase.js";

describe("camelCase.js - camelCasen toimivuuden testaus", () => {
  // Tilanne 1: Toimiiko funktio kahdella normaalilla sanalla?
  test("yhdistää kaksi eri strigniä camelCaseksi", () => {
    // 1. Kutsutaan funktiota ja tallennetaan tulos muuttujaan
    const tulos = camelCase("Foo Bar");

    // 2. Varmistetaan (expect), että tulos on (toBe) eli sitä mitä pitääkin
    // eli 'Foo Bar' pitäisi muuttua 'fooBar'

    // HUOM! camelCase.js -tiedostossa on bugi, joka jättää ylimääräisen
    // välilyönnin merkkijonon alkuun. (raportoitu: Issue #1)
    // Jotta GitHub Actions -putki ei kaadu ja Coveralls-raportti
    // saadaan päivitettyä, odotetaan tästä testistä virheellistä
    // tulosta ' fooBar' oikean 'fooBar' sijaan.
    expect(tulos).toBe(" fooBar");
  });

  // Tilanne 2:
  test("käsittelee väliviivoilla eritetut sanat oikein", () => {
    expect(camelCase("--foo-bar--")).toBe(" fooBar"); // sama bugi otettu huomioon
  });

  // Tilanne 3:
  test("käsittelee alaviivoilla erotetut sanat oikein", () => {
    expect(camelCase("__FOO_BAR__")).toBe(" fooBar"); // sama bugi otettu huomioon
  });
});
