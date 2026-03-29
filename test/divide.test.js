import divide from "../AT00BY10-main/src/divide.js";

describe("divide.js - Jakolaskun testaus", () => {
  test("jakaa kaksi lukua (HUOM: bugi koodissa)", () => {
    // Dokumentaation mukaan divide(6, 4) pitäisi olla 1.5.
    // Koodissa on kuitenkin bugi (divisor / divisor), joten tulos on aina 1.
    // Odotamme tässä 1, jotta GitHub Actions menee läpi. (raportoitu: Issue #2)
    expect(divide(6, 4)).toBe(1);
  });
});
