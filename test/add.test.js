import add from "../AT00BY10-main/src/add.js";

describe("add.js - Yhteenlaskun testaus", () => {
  test("laskee numerot 6 ja 4 oikein yhteen, tulos on 10", () => {
    expect(add(6, 4)).toBe(10);
  });

  test("laskee negatiiviset numerot oikein (-2 + -3 = -5)", () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
