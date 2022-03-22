import { mergeSort, bubbleSort } from "../sort";

describe("testing mergeSort", () => {
  test("mergeSort takes array and number present returning true", () => {
    expect(mergeSort([9, 6, 5, 4, 2, 0, 8])).toStrictEqual([
      0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("mergeSort takes array and number not present returning false", () => {
    expect(mergeSort([5, 8, 2, 9, -5, 6, 0, 4])).toStrictEqual([
      -5, 0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("mergeSort takes empty array and returns false", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});

describe("testing bubbleSort", () => {
  test("bubbleSort takes array and number present returning true", () => {
    expect(bubbleSort([9, 6, 5, 4, 2, 0, 8])).toStrictEqual([
      0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("bubbleSort takes array and number not present returning false", () => {
    expect(bubbleSort([5, 8, 2, 9, -5, 6, 0, 4])).toStrictEqual([
      -5, 0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("bubbleSort takes empty array and returns false", () => {
    expect(bubbleSort([])).toStrictEqual([]);
  });
});
