import slice from "../AT00BY10-main/src/slice.js";

describe("slice.js - Taulukon osittaminen", () => {
  const array = [1, 2, 3, 4];

  test("palauttaa oikean osan taulukosta perusparametreilla", () => {
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test("palauttaa loput taulukosta, jos end-parametria ei anneta", () => {
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  test("käsittelee negatiivisen start-parametrin oikein", () => {
    // -1 tarkoittaa viimeistä alkiota, -2 toiseksi viimeistä jne.
    expect(slice(array, -2)).toEqual([3, 4]);
  });

  test("käsittelee negatiivisen end-parametrin oikein", () => {
    expect(slice(array, 0, -1)).toEqual([1, 2, 3]);
  });

  test("palauttaa tyhjän taulukon, jos syöte on null tai tyhjä", () => {
    expect(slice(null)).toEqual([]);
    expect(slice([])).toEqual([]);
  });
});
