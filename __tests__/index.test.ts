import { sumDigits, sortByLength, roundToNext5 } from "../index";

describe("testing roundToNext5", () => {
  test("roundToNext5 takes positive number and returns appropriate value", () => {
    expect(roundToNext5(321)).toBe(325);
  });

  test("roundToNext5 takes negative number and returns appropriate value", () => {
    expect(roundToNext5(-321)).toBe(-320);
  });

  test("roundToNext5 takes 0 and returns appropriate value", () => {
    expect(roundToNext5(0)).toBe(0);
  });

  test("roundToNext5 takes 5 and returns appropriate value", () => {
    expect(roundToNext5(5)).toBe(5);
  });
});

describe("testing sumDigits", () => {
  test("sumDigits takes each digit of positive number and returns appropriate value", () => {
    expect(sumDigits(321)).toBe(6);
  });

  test("sumDigits takes each digit of negative number and returns appropriate value", () => {
    expect(sumDigits(-321)).toBe(6);
  });

  test("sumDigits takes each digit of 0 and returns appropriate value", () => {
    expect(sumDigits(0)).toBe(0);
  });
});

describe("testing sortByLength", () => {
  test("sortByLength takes each string in array and returns appropriately sorted array", () => {
    expect(sortByLength(["hello", "hi", "buenos dias"])).toStrictEqual([
      "hi",
      "hello",
      "buenos dias",
    ]);
  });

  test("sortByLength takes empty array and returns empty array", () => {
    expect(sortByLength([])).toStrictEqual([]);
  });

  test("sortByLength takes each string in array and returns appropriately sorted array", () => {
    expect(sortByLength(["0", "hello", "hi"])).toStrictEqual([
      "0",
      "hi",
      "hello",
    ]);
  });

  test("sortByLength takes each string in array and returns appropriately sorted array", () => {
    expect(sortByLength(["0", "2", "4"])).toStrictEqual(["0", "2", "4"]);
  });
});
