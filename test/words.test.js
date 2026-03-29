import words from "../AT00BY10-main/src/words.js";

describe("words.js - Sanojen erottelu", () => {
  test("erottelee sanat oletuksena (esimerkki 1)", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  test("erottelee sanat annetulla regex-kuviolla (esimerkki 2)", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });

  test("palauttaa tyhjän taulukon, jos merkkijono on tyhjä", () => {
    expect(words("")).toEqual([]);
  });
});
