import {
  removeUrlAnchor,
  sumDigits,
  sortByLength,
  reverseLetter,
  roundToNext5,
  findCapitalIndexArray,
} from "../index";

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

describe("testing reverseLetter", () => {
  test("reverseLetter takes String with a number and returns appropriate value", () => {
    expect(reverseLetter("oll3eh")).toBe("hello");
  });

  test("reverseLetter takes empty string and returns appropriate value", () => {
    expect(reverseLetter("")).toBe("");
  });

  test("reverseLetter takes string and returns appropriate value", () => {
    expect(reverseLetter("gnirtS")).toBe("String");
  });

  test("reverseLetter takes a string of numbers and returns appropriate value", () => {
    expect(reverseLetter("54321")).toBe("");
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

describe("testing removeUrlAnchor", () => {
  test("removeUrlAnchor takes string and returns appropriate string", () => {
    expect(removeUrlAnchor("www.google.com")).toBe("www.google.com");
  });

  test("removeUrlAnchor takes empty string and returns empty string", () => {
    expect(removeUrlAnchor("")).toBe("");
  });

  test("removeUrlAnchor takes string with anchor and returns appropriate string", () => {
    expect(removeUrlAnchor("www.google.com/search/#result")).toBe(
      "www.google.com/search/"
    );
  });
});

describe("testing findCapitalIndexArray", () => {
  test("findCapitalIndexArray takes string and returns appropriate array", () => {
    expect(findCapitalIndexArray("CaMeLcAsE")).toStrictEqual([0, 2, 4, 6, 8]);
  });

  test("findCapitalIndexArray takes empty string and returns empty array", () => {
    expect(findCapitalIndexArray("")).toStrictEqual([]);
  });

  test("findCapitalIndexArray takes string with numbers and returns appropriate array", () => {
    expect(findCapitalIndexArray("The9ShouldNotError")).toStrictEqual([
      0, 4, 10, 13,
    ]);
  });

  test("findCapitalIndexArray takes string with no capital letters and returns appropriate array", () => {
    expect(
      findCapitalIndexArray("www.google.com/search/#result")
    ).toStrictEqual([]);
  });
});
