import capitalize from "../AT00BY10-main/src/capitalize.js";

describe("capitalize.js - Tekstin muotoilun testaus", () => {
  test("muuttaa kokonaan isoilla kirjaimilla kirjoitetun sanan oikeaan muotoon", () => {
    expect(capitalize("FRED")).toBe("Fred");
  });

  test("muuttaa kokonaan pienillä kirjaimilla kirjoitetun sanan oikeaan muotoon", () => {
    expect(capitalize("fred")).toBe("Fred");
  });

  test("käsittelee sekamuotoiset kirjaimet oikein", () => {
    expect(capitalize("fReD")).toBe("Fred");
  });
});
