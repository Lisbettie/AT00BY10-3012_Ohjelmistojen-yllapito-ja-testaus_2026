import chunk from "../AT00BY10-main/src/chunk.js";

describe("chunk.js - Taulukon jakaminen paloihin", () => {
  const array = ["a", "b", "c", "d"];

  test("BUG: ylikirjoittaa palat, palauttaa vain viimeisen (koko 2)", () => {
    // Odotettu alkuperäinen tulos: [['a', 'b'], ['c', 'd']]
    // Todellinen rikkinäinen tulos: [['c', 'd'], undefined]
    // (raportoitu: Issue #3)
    expect(chunk(array, 2)).toEqual([["c", "d"], undefined]);
  });

  test("BUG: ylikirjoittaa palat, palauttaa vain viimeisen (koko 3)", () => {
    // Odotettu alkuperäinen tulos: [['a', 'b', 'c'], ['d']]
    // Todellinen rikkinäinen tulos: [['d'], undefined]
    expect(chunk(array, 3)).toEqual([["d"], undefined]);
  });

  test("palauttaa tyhjän taulukon, jos syöte on tyhjä (tämä sentään toimii)", () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk(null, 2)).toEqual([]);
  });

  test("BUG: oletuskoolla 1 palauttaa vain viimeisen alkion", () => {
    // Odotettu: [['a'], ['b'], ['c'], ['d']]
    // Todellinen rikkinäinen: [['d'], undefined, undefined, undefined]
    expect(chunk(array)).toEqual([["d"], undefined, undefined, undefined]);
  });
});
