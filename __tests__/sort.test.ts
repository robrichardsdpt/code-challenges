import { mergeSort, bubbleSort, sortWordsAndNumbers } from "../sort";

describe("testing mergeSort", () => {
  test("mergeSort takes array returns sorted array", () => {
    expect(mergeSort([9, 6, 5, 4, 2, 0, 8])).toStrictEqual([
      0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("mergeSort takes array returns sorted array", () => {
    expect(mergeSort([5, 8, 2, 9, -5, 6, 0, 4])).toStrictEqual([
      -5, 0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("mergeSort takes empty array and returns empty array", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});

describe("testing bubbleSort", () => {
  test("bubbleSort takes array returns sorted array", () => {
    expect(bubbleSort([9, 6, 5, 4, 2, 0, 8])).toStrictEqual([
      0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("bubbleSort takes array returns sorted array", () => {
    expect(bubbleSort([5, 8, 2, 9, -5, 6, 0, 4])).toStrictEqual([
      -5, 0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("bubbleSort takes empty array and returns empty array", () => {
    expect(bubbleSort([])).toStrictEqual([]);
  });
});

describe("testing sortWordsAndNumbers", () => {
  test("sortWordsAndNumbers takes array with numbers returns sorted array", () => {
    expect(sortWordsAndNumbers([9, 6, 5, 4, 2, 0, 8])).toStrictEqual([
      0, 2, 4, 5, 6, 8, 9,
    ]);
  });

  test("sortWordsAndNumbers takes array with numbers and words returns sorted array", () => {
    expect(
      sortWordsAndNumbers([5, 8, "apple", 2, 9, "Shark", -5, 6, 0, "sponge", 4])
    ).toStrictEqual([-5, 0, 2, 4, 5, 6, 8, 9, "apple", "Shark", "sponge"]);
  });

  test("sortWordsAndNumbers takes array with words returns sorted array", () => {
    expect(
      sortWordsAndNumbers(["all", "words", "Are", "Sorted", "properly"])
    ).toStrictEqual(["all", "Are", "properly", "Sorted", "words"]);
  });

  test("sortWordsAndNumbers takes empty array and returns empty array", () => {
    expect(sortWordsAndNumbers([])).toStrictEqual([]);
  });
});
