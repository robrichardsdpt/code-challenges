import { binarySearch } from "../search";

describe("testing binarySearch", () => {
  test("binarySearch takes array and number present returning true", () => {
    expect(binarySearch([0, 2, 4, 5, 6, 8, 9], 6)).toBe(true);
  });

  test("binarySearch takes array and number not present returning false", () => {
    expect(binarySearch([0, 2, 4, 5, 6, 8, 9], 12)).toBe(false);
  });

  test("binarySearch takes empty array and returns false", () => {
    expect(binarySearch([], 1)).toBe(false);
  });

  test("binarySearch takes array and negative number outside of values returning false", () => {
    expect(binarySearch([1, 2, 3], -2)).toBe(false);
  });
});
