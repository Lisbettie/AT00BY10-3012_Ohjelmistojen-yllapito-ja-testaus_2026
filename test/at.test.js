import at from "../AT00BY10-main/src/at.js";

describe("at.js - Arvojen hakeminen objektin polkujen perusteella", () => {
  test("hakee arvot oikein monimutkaisesta objektista", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };

    // Odotetaan, että haetut arvot polusta 'a[0].b.c' ja 'a[1]' ovat [3, 4]
    expect(at(object, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
  });
});
