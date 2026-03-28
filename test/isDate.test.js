import isDate from "../AT00BY10-main/src/isDate.js";

describe("isDate.js - Päivämäärän tunnistuksen testaus", () => {
  // Tilanne 1: "Iloinen polku" (Happy path)
  // Toimiiko laite, kun sitä käytetään juuri niin kuin on tarkoitettu?
  test("tunnistaa oikean Date-olion päivämääräksi (palauttaa true)", () => {
    const oikeaPaivamaara = new Date(); // 1. Valmistelu
    const tulos = isDate(oikeaPaivamaara); // 2. Toiminta
    expect(tulos).toBe(true); // 3. Tarkistus
  });

  // Tilanne 2: "Melkein oikein" (Negative path)
  // Mitä tapahtuu, kun syötämme jotain mikä näyttää oikealta, mutta ei ole?
  test("tunnistaa, että pelkkä tekstimuotoinen päivämäärä ei ole Date-olio (palauttaa false)", () => {
    const tekstiPaivamaara = "Mon April 23 2012"; // Tämä on tekstiä, ei Date-olio
    expect(isDate(tekstiPaivamaara)).toBe(false); // Toiminta ja tarkistus samalla rivillä!
  });

  // Tilanne 3: "Täysi kaaos" (Edge cases)
  // Miten koodi reagoi, jos syötämme sille aivan jotain outoa?
  test("palauttaa false, jos syötetään jotain aivan muuta, kuten numero, null tai tyhjä", () => {
    expect(isDate(123)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate({})).toBe(false);
  });
});
