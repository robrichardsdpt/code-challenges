import {
  removeUrlAnchor,
  sumDigits,
  sortByLength,
  reverseLetter,
  roundToNext5,
  findCapitalIndexArray,
  isPalindrome,
  letterEncrypt,
  negateOddNumbers,
  returnOnlyEvenPositiveNumbers,
  arrayValuesSmallEnough,
  returnUpperOrLowerCase,
  isAnagram,
  validParentheses,
  sortMyArrayOfStrings,
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

describe("testing isPalindrome", () => {
  test("isPalindrome takes 121 and returns appropriate true", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("isPalindrome takes 1221 and returns true", () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  test("isPalindrome takes -1221 and returns false", () => {
    expect(isPalindrome(-1221)).toBe(false);
  });

  test("isPalindrome takes 1 and returns true", () => {
    expect(isPalindrome(1)).toBe(true);
  });

  test("isPalindrome takes 123 and returns false", () => {
    expect(isPalindrome(123)).toBe(false);
  });
});

describe("testing letterEncrypt", () => {
  test("letterEncrypt takes A and returns appropriate string", () => {
    expect(letterEncrypt("A")).toBe("F");
  });

  test("letterEncrypt takes B and returns appropriate string", () => {
    expect(letterEncrypt("B")).toBe("D");
  });

  test("letterEncrypt takes C and returns appropriate string", () => {
    expect(letterEncrypt("C")).toBe("E");
  });

  test("letterEncrypt takes D and returns appropriate string", () => {
    expect(letterEncrypt("D")).toBe("F");
  });

  test("letterEncrypt takes E and returns appropriate string", () => {
    expect(letterEncrypt("E")).toBe("G");
  });

  test("letterEncrypt takes F and returns appropriate string", () => {
    expect(letterEncrypt("F")).toBe("B");
  });

  test("letterEncrypt takes A and returns appropriate string", () => {
    expect(letterEncrypt("A")).toBe("F");
  });

  test("letterEncrypt takes empty string and returns invalid input", () => {
    expect(letterEncrypt("")).toBe("invalid input");
  });

  test("letterEncrypt takes string with anchor and returns invalid input", () => {
    expect(letterEncrypt("H")).toBe("invalid input");
  });
});

describe("testing negateOddNumbers", () => {
  test("negateOddNumbers takes positive number, turns negative and returns appropriate value", () => {
    expect(negateOddNumbers([3, 2, 1, 0])).toStrictEqual([-3, 2, -1, 0]);
  });

  test("negateOddNumbers takes negative number, turns positive and returns appropriate value", () => {
    expect(negateOddNumbers([-3, 2, 1, 0])).toStrictEqual([3, 2, -1, 0]);
  });

  test("negateOddNumbers takes empty array and returns appropriate value", () => {
    expect(negateOddNumbers([])).toStrictEqual([]);
  });
});

describe("testing returnOnlyEvenPositiveNumbers", () => {
  test("returnOnlyEvenPositiveNumbers takes array with values and returns appropriate value", () => {
    expect(returnOnlyEvenPositiveNumbers([3, 2, 1, 0])).toStrictEqual([2, 0]);
  });

  test("returnOnlyEvenPositiveNumbers takes array with values and returns appropriate value", () => {
    expect(returnOnlyEvenPositiveNumbers([-3, -2, 1, 0])).toStrictEqual([0]);
  });

  test("returnOnlyEvenPositiveNumbers takes empty array and returns appropriate value", () => {
    expect(returnOnlyEvenPositiveNumbers([])).toStrictEqual([]);
  });
});

describe("testing arrayValuesSmallEnough", () => {
  test("arrayValuesSmallEnough takes array with values lower than limit and returns true", () => {
    expect(arrayValuesSmallEnough([3, 2, 1, 0], 4)).toEqual(true);
  });

  test("arrayValuesSmallEnough  takes array with a value higher than limit and returns false", () => {
    expect(arrayValuesSmallEnough([-3, 7, 1, 0], 5)).toEqual(false);
  });

  test("arrayValuesSmallEnough takes empty array and returns true", () => {
    expect(arrayValuesSmallEnough([], 5)).toEqual(true);
  });
});

describe("testing returnUpperOrLowerCase", () => {
  test("returnUpperOrLowerCase on VaLuE and returns VALUE", () => {
    expect(returnUpperOrLowerCase("VaLuE")).toEqual("VALUE");
  });

  test("returnUpperOrLowerCase on vaLue and returns value", () => {
    expect(returnUpperOrLowerCase("vaLue")).toEqual("value");
  });

  test("returnUpperOrLowerCase on value and returns value", () => {
    expect(returnUpperOrLowerCase("value")).toEqual("value");
  });

  test("returnUpperOrLowerCase on VALUE and returns VALUE", () => {
    expect(returnUpperOrLowerCase("VALUE")).toEqual("VALUE");
  });

  test("returnUpperOrLowerCase on '' and returns ''", () => {
    expect(returnUpperOrLowerCase("")).toEqual("");
  });

  test("returnUpperOrLowerCase on VAlu and returns valu", () => {
    expect(returnUpperOrLowerCase("VAlu")).toEqual("valu");
  });
});

describe("isAnagram", () => {
  test("isAnagram takes oelhl and Hello and returns true", () => {
    expect(isAnagram("oelhl", "Hello")).toBe(true);
  });
  test("isAnagram takes feetof and ToFfEe and returns true", () => {
    expect(isAnagram("feetof", "ToFfEe")).toBe(true);
  });
  test("isAnagram takes feetol and ToFfEe and returns false", () => {
    expect(isAnagram("feetol", "ToFfEe")).toBe(false);
  });
  test("isAnagram takes happy and angry and returns false", () => {
    expect(isAnagram("happy", "angry")).toBe(false);
  });
  test("isAnagram receives two empty strings and returns true", () => {
    expect(isAnagram("", "")).toBe(true);
  });
  test("isAnagram receives one empty string and value and returns false", () => {
    expect(isAnagram("", "value")).toBe(false);
  });
});

describe("validParentheses", () => {
  test("validParentheses receives a string with valid Parentheses and returns true", () => {
    expect(validParentheses("Hello, my name is Rob (I am new)")).toBe(true);
  });
  test("validParentheses receives a string with multiple Parentheses but valid and returns true", () => {
    expect(
      validParentheses(
        "Hello (Hi), my name is Rob (I am new). (This is the first(and only) time that I have been here)"
      )
    ).toBe(true);
  });

  test("validParentheses receives a string with multiple Parentheses but invalid and returns false", () => {
    expect(
      validParentheses(
        "Hello (Hi), my name )is Rob (I am new). (This is the first(and only) time that I have been here)"
      )
    ).toBe(false);
  });
  test("validParentheses receives a string without Parentheses and returns true", () => {
    expect(validParentheses("Hi my name is Rob")).toBe(true);
  });
  test("validParentheses receives a string with one closing Parentheses and returns false", () => {
    expect(validParentheses("Hi my name ) is Rob")).toBe(false);
  });
  test("validParentheses receives a string with one open Parentheses and returns false", () => {
    expect(validParentheses("Hi my name ( is Rob")).toBe(false);
  });
  test("validParentheses receives a string with equal Parentheses and returns true", () => {
    expect(validParentheses("((()())(()))")).toBe(true);
  });
  test("validParentheses receives a string with unequal Parentheses and returns false", () => {
    expect(validParentheses("((()())(())))")).toBe(false);
  });
});

describe("testing sortMyArrayOfStrings", () => {
  test("sortMyArrayOfStrings receives unsorted array of strings and returns appropriate value", () => {
    expect(
      sortMyArrayOfStrings(["hello", "I'm", "doing", "FINE"])
    ).toStrictEqual(["doing", "FINE", "hello", "I'm"]);
  });

  test("sortMyArrayOfStrings receives empty array and returns empty array", () => {
    expect(sortMyArrayOfStrings([])).toStrictEqual([]);
  });

  test("sortMyArrayOfStrings receives empty array and returns empty array", () => {
    expect(sortMyArrayOfStrings(["Matt"])).toStrictEqual(["Matt"]);
  });
});
