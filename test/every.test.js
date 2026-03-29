import every from "../AT00BY10-main/src/every.js";

describe("every.js - Taulukon kaikkien alkioiden ehtojen tarkistus", () => {
  test("palauttaa true, jos kaikki alkiot täyttävät ehdon", () => {
    // Tarkistetaan, ovatko kaikki luvut tyyppiä 'number'
    const isNumber = (n) => typeof n === "number";
    expect(every([1, 2, 3], isNumber)).toBe(true);
  });

  test("palauttaa false, jos yksikin alkio ei täytä ehtoa", () => {
    const isNumber = (n) => typeof n === "number";
    expect(every([1, "kaksi", 3], isNumber)).toBe(false);
  });

  test("palauttaa true tyhjälle taulukolle (oletuskäyttäytyminen useimmissa kielissä)", () => {
    const isNumber = (n) => typeof n === "number";
    expect(every([], isNumber)).toBe(true);
  });
});
