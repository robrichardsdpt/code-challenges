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
  isIntArray,
  uniqueInOrder,
  uniqueInOrderFilter,
  countLanguages,
  DevObject,
  maxSequence,
  encryptThis,
  filterList,
  descendingOrder,
  isSquare,
  DNAStrand,
  binaryArrayToNumber,
  validatePIN,
  findAverage,
  digitize,
  evenOrOdd,
  sumTwoSmallestNumbers,
  findSmallest,
  reverseSeq,
  squareSum,
  reverseString,
  XO,
  reverseWords,
  countPositivesSumNegatives,
  isIsogram,
  betterThanAverage,
  removeFirstAndLastChar,
  sumOfArrayWithinRange,
  findShort,
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

describe("isIntArray function tests", () => {
  test("receives integer array and returns true", () => {
    expect(isIntArray([0, 1, 2, 3, 4, 5, 6])).toBeTruthy();
  });
  test("receives integer array with one float and returns false", () => {
    expect(isIntArray([0, 1, 2, 3, 4, 5.2, 6])).toBeFalsy();
  });

  test("receives integer array with one NaN and returns false", () => {
    expect(isIntArray([0, 1, 2, 3, 4, NaN, 6])).toBeFalsy();
  });

  test("receives null and returns false", () => {
    expect(isIntArray(null)).toBeFalsy();
  });

  test("receives undefined and returns false", () => {
    expect(isIntArray(undefined)).toBeFalsy();
  });

  test("receives empty array and returns true", () => {
    expect(isIntArray([])).toBeTruthy();
  });
});

describe("uniqueInOrder tests", () => {
  test("uniqueInOrder takes array containing duplicate letters and numbers and returns appropriate array", () => {
    expect(
      uniqueInOrder(["A", "a", "B", "B", "B", 1, 1, 2, 2, 2, 2, 3])
    ).toStrictEqual(["A", "a", "B", 1, 2, 3]);
  });
  test("uniqueInOrder takes empty array containing duplicate letters and returns empty array", () => {
    expect(uniqueInOrder([])).toStrictEqual([]);
  });
  test("uniqueInOrder takes array containing duplicate letters and numbers and returns appropriate array", () => {
    expect(
      uniqueInOrder(["A", 1, "B", "B", "B", 1, 1, "A", 2, "a", 2, 3])
    ).toStrictEqual(["A", 1, "B", 1, "A", 2, "a", 2, 3]);
  });
});

describe("uniqueInOrderFilter tests", () => {
  test("uniqueInOrderFilter takes array containing duplicate letters and numbers and returns appropriate array", () => {
    expect(
      uniqueInOrderFilter(["A", "a", "B", "B", "B", 1, 1, 2, 2, 2, 2, 3])
    ).toStrictEqual(["A", "a", "B", 1, 2, 3]);
  });
  test("uniqueInOrderFilter takes empty array containing duplicate letters and returns empty array", () => {
    expect(uniqueInOrderFilter([])).toStrictEqual([]);
  });
  test("uniqueInOrderFilter takes array containing duplicate letters and numbers and returns appropriate array", () => {
    expect(
      uniqueInOrderFilter(["A", 1, "B", "B", "B", 1, 1, "A", 2, "a", 2, 3])
    ).toStrictEqual(["A", 1, "B", 1, "A", 2, "a", 2, 3]);
  });
});

describe("countLanguages tests", () => {
  test("countLanguages receives a valid object and returns appropriate count", () => {
    const list: Array<DevObject> = [
      {
        firstName: "Rob",
        lastName: "Richards",
        country: "USA",
        continent: "N. America",
        age: 38,
        language: "JS",
      },
      {
        firstName: "Laura",
        lastName: "Belavoir",
        country: "Canada",
        continent: "N. America",
        age: 30,
        language: "JS",
      },
      {
        firstName: "Alex",
        lastName: "Fermin",
        country: "Colombia",
        continent: "C. America",
        age: 32,
        language: "Dart",
      },
      {
        firstName: "Roy",
        lastName: "Wellington",
        country: "USA",
        continent: "N. America",
        age: 25,
        language: "Rust",
      },
      ,
      {
        firstName: "Colin",
        lastName: "Lauver",
        country: "USA",
        continent: "N. America",
        age: 38,
        language: "C++",
      },
      {
        firstName: "Sam",
        lastName: "Mauldin",
        country: "USA",
        continent: "N. America",
        age: 22,
        language: "JS",
      },
    ];

    const result = {
      JS: 3,
      Dart: 1,
      Rust: 1,
      "C++": 1,
    };

    expect(countLanguages(list)).toStrictEqual(result);
  });

  test("countLanguages receives an empty object and returns appropriate object", () => {
    expect(countLanguages([])).toStrictEqual({});
  });
});

describe("maxSequence tests", () => {
  test("maxSequence takes array and returns appropriate value", () => {
    expect(maxSequence([-3, 1, 100, 4, 15, 9, 30])).toEqual(159);
  });
  test("maxSequence takes array and returns appropriate value with trailing negative", () => {
    expect(maxSequence([-3, 1, 100, 4, 15, 9, 30, -1])).toEqual(159);
  });
  test("maxSequence takes array and returns appropriate value", () => {
    expect(maxSequence([2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });
  test("maxSequence takes empty array and returns appropriate value", () => {
    expect(maxSequence([])).toEqual(0);
  });
  test("maxSequence takes array of all negative values and returns appropriate value", () => {
    expect(maxSequence([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])).toEqual(0);
  });
});

describe("encryptThis tests", () => {
  test("encryptThis takes a single letter string and returns the appropriate value", () => {
    expect(encryptThis("A")).toEqual("65");
  });

  test("encryptThis takes full string and returns appropriate response", () => {
    expect(encryptThis("A wise old owl lived in an oak")).toEqual(
      "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
    );
  });

  test("encryptThis takes full string and returns appropriate response", () => {
    expect(encryptThis("The more he saw the less he spoke")).toEqual(
      "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
    );
  });

  test("encryptThis takes empty string and returns appropriate response", () => {
    expect(encryptThis("")).toEqual("");
  });
});

describe("filterList tests", () => {
  test("filterList takes a list and returns the appropriate value", () => {
    expect(filterList([1, 2, "a", "b"])).toStrictEqual([1, 2]);
  });

  test("filterList takes full list and returns appropriate response", () => {
    expect(filterList([1, "a", "b", 0, 15])).toStrictEqual([1, 0, 15]);
  });

  test("filterList takes list and returns appropriate response", () => {
    expect(filterList([1, 2, "aasf", "1", "123", 123])).toStrictEqual([
      1, 2, 123,
    ]);
  });

  test("filterList takes empty list and returns appropriate response", () => {
    expect(filterList([])).toStrictEqual([]);
  });
});

describe("descendingOrder tests", () => {
  test("descendingOrder takes an integer and returns the appropriate value", () => {
    expect(descendingOrder(42145)).toEqual(54421);
  });

  test("descendingOrder takes an integer and returns appropriate response", () => {
    expect(descendingOrder(145263)).toEqual(654321);
  });

  test("descendingOrder takes an integer and returns appropriate response", () => {
    expect(descendingOrder(123456789)).toEqual(987654321);
  });

  test("descendingOrder takes a null value and returns appropriate response", () => {
    expect(descendingOrder(null)).toEqual(null);
  });
});

describe("isSquare tests", () => {
  test("isSquare takes 25 and returns the appropriate value", () => {
    expect(isSquare(25)).toEqual(true);
  });

  test("isSquare takes a negative integer and returns appropriate response", () => {
    expect(isSquare(-1)).toEqual(false);
  });

  test("isSquare takes 0 and returns appropriate response", () => {
    expect(isSquare(0)).toEqual(true);
  });

  test("isSquare takes 4 and returns appropriate response", () => {
    expect(isSquare(4)).toEqual(true);
  });

  test("isSquare takes 37 and returns appropriate response", () => {
    expect(isSquare(37)).toEqual(false);
  });
});

describe("DNAStrand tests", () => {
  test("DNAStrand receives value and returns appropriate response", () => {
    expect(DNAStrand("AAAA")).toEqual("TTTT");
  });
  test("DNAStrand receives value and returns appropriate response", () => {
    expect(DNAStrand("ATTGC")).toEqual("TAACG");
  });
  test("DNAStrand receives value and returns appropriate response", () => {
    expect(DNAStrand("GTAT")).toEqual("CATA");
  });
});

describe("binaryArrayToNumber tests", () => {
  test("binaryArrayToNumber receives array and returns appropriate value", () => {
    expect(binaryArrayToNumber([0])).toEqual(0);
  });
  test("binaryArrayToNumber receives array and returns appropriate value", () => {
    expect(binaryArrayToNumber([0, 1, 0, 1])).toEqual(5);
  });
  test("binaryArrayToNumber receives array and returns appropriate value", () => {
    expect(binaryArrayToNumber([1, 1, 0, 0])).toEqual(12);
  });
  test("binaryArrayToNumber receives array and returns appropriate value", () => {
    expect(binaryArrayToNumber([1, 1, 1, 1])).toEqual(15);
  });
  test("binaryArrayToNumber receives array and returns appropriate value", () => {
    expect(binaryArrayToNumber([])).toEqual(0);
  });
});

describe("validatePIN", function () {
  it("should return False for pins with length other than 4 or 6", function () {
    expect(validatePIN("1")).toBe(false);
    expect(validatePIN("12")).toBe(false);
    expect(validatePIN("123")).toBe(false);
    expect(validatePIN("12345")).toBe(false);
    expect(validatePIN("1234567")).toBe(false);
    expect(validatePIN("-1234")).toBe(false);
    expect(validatePIN("1.234")).toBe(false);
    expect(validatePIN("-1.234")).toBe(false);
    expect(validatePIN("00000000")).toBe(false);
  });

  it("should return False for pins which contain characters other than digits", function () {
    expect(validatePIN("a234")).toBe(false);
    expect(validatePIN(".234")).toBe(false);
  });

  it("should return True for valid pins", function () {
    expect(validatePIN("1234")).toBe(true);
    expect(validatePIN("0000")).toBe(true);
    expect(validatePIN("1111")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
    expect(validatePIN("098765")).toBe(true);
    expect(validatePIN("000000")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
    expect(validatePIN("090909")).toBe(true);
  });
});

describe("findAverage tests", () => {
  it("Testing for findAverage with values", () => {
    expect(findAverage([1, 1, 1])).toEqual(1);
    expect(findAverage([1, 2, 3])).toEqual(2);
    expect(findAverage([1, 2, 3, 4])).toEqual(2.5);
  });
  it("Testing for findAverage with no values", () => {
    expect(findAverage([])).toEqual(0);
  });
});

describe("digitize tests", () => {
  it("Testing using digitize tests", () => {
    expect(digitize(35231)).toStrictEqual([1, 3, 2, 5, 3]);
    expect(digitize(2468)).toStrictEqual([8, 6, 4, 2]);
  });
  it("digitize function works with [0] input", () => {
    expect(digitize(0)).toStrictEqual([0]);
  });
});

describe("evenOrOdd tests", () => {
  test("evenOrOdd test 0", () => {
    expect(evenOrOdd(0)).toEqual("Even");
  });
  test("evenOrOdd test 1", () => {
    expect(evenOrOdd(1)).toEqual("Odd");
  });
  test("evenOrOdd test 2", () => {
    expect(evenOrOdd(2)).toEqual("Even");
  });
  test("evenOrOdd test 42546348", () => {
    expect(evenOrOdd(42546348)).toEqual("Even");
  });
  test("evenOrOdd test 52546341", () => {
    expect(evenOrOdd(52546341)).toEqual("Odd");
  });
});

describe("sumTwoSmallestNumbers tests", () => {
  test("sumTwoSmallestNumbers [5, 8, 12, 19, 22]", () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13);
  });
  test("sumTwoSmallestNumbers [15, 28, 4, 2, 43]", () => {
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6);
  });
  test("sumTwoSmallestNumbers [3, 87, 45, 12, 7]", () => {
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10);
  });
  test("sumTwoSmallestNumbers [23, 71, 33, 82, 1]", () => {
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24);
  });
  test("sumTwoSmallestNumbers [52, 76, 14, 12, 4]", () => {
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toEqual(16);
  });
  test("sumTwoSmallestNumbers []", () => {
    expect(sumTwoSmallestNumbers([])).toEqual(0);
  });
  test("sumTwoSmallestNumbers [1]", () => {
    expect(sumTwoSmallestNumbers([1])).toEqual(1);
  });
});

describe("Smallest Integer Tests", () => {
  test("findSmallest tests with appropriate values", () => {
    expect(findSmallest([78, 56, 232, 12, 8])).toEqual(8);
    expect(findSmallest([78, 56, 232, 12, 18])).toEqual(12);
    expect(findSmallest([78, 56, 232, 412, 228])).toEqual(56);
    expect(findSmallest([78, 56, 232, 12, 0])).toEqual(0);
    expect(findSmallest([1, 56, 232, 12, 8])).toEqual(1);
  });
  test("findSmallest tests with appropriate values", () => {
    expect(findSmallest([])).toEqual(null);
  });
});

describe("reverseSeq tests", () => {
  test("reverseSeq takes 5", () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
  });

  test("reverseSeq takes 12", () => {
    expect(reverseSeq(12)).toStrictEqual([
      12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
  });
  test("reverseSeq takes 0", () => {
    expect(reverseSeq(0)).toStrictEqual([]);
  });
});

describe("squareSum tests", () => {
  test("squareSum test receives [1, 2]", () => {
    expect(squareSum([1, 2])).toEqual(5);
  });
  test("squareSum test receives []", () => {
    expect(squareSum([])).toEqual(0);
  });
  test("squareSum test receives [0, 3, 4, 5]", () => {
    expect(squareSum([0, 3, 4, 5])).toEqual(50);
  });
});

describe("reverseString tests", () => {
  it("Testing for reverseString tests", () => {
    expect(reverseString("world")).toEqual("dlrow");
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString(reverseString(""))).toEqual("");
    expect(reverseString(reverseString("h"))).toEqual("h");
  });
});

describe("XO Tests", () => {
  it("XO test", () => {
    expect(XO("xo")).toEqual(true);
    expect(XO("xxOo")).toEqual(true);
    expect(XO("xxxm")).toEqual(false);
    expect(XO("Oo")).toEqual(false);
    expect(XO("ooom")).toEqual(false);
  });
});

describe("reverseWords tests", () => {
  test('reverseWords receives "The quick brown fox jumps over the lazy dog."', () => {
    expect(
      reverseWords("The quick brown fox jumps over the lazy dog.")
    ).toEqual("ehT kciuq nworb xof spmuj revo eht yzal .god");
  });
  test('reverseWords receives "a b c d"', () => {
    expect(reverseWords("a b c d")).toEqual("a b c d");
  });
  test('reverseWords receives ""', () => {
    expect(reverseWords("")).toEqual("");
  });
});

describe("countPositivesSumNegatives tests", () => {
  test("countPositivesSumNegatives takes [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,]", () => {
    expect(
      countPositivesSumNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
      ])
    ).toStrictEqual([10, -65]);
  });

  test("countPositivesSumNegatives takes []", () => {
    expect(countPositivesSumNegatives([])).toStrictEqual([]);
  });

  test("countPositivesSumNegatives takes null", () => {
    expect(countPositivesSumNegatives(null)).toStrictEqual([]);
  });

  test("countPositivesSumNegatives takes [0]", () => {
    expect(countPositivesSumNegatives([0])).toStrictEqual([0, 0]);
  });
});

describe("isIsogram tests", () => {
  test("isIsogram takes 'Dermatoglyphics'", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  test("isIsogram takes 'isogram'", () => {
    expect(isIsogram("isogram")).toBe(true);
  });
  test("isIsogram takes 'moose'", () => {
    expect(isIsogram("moose")).toBe(false);
  });
  test("isIsogram takes 'isIsogram'", () => {
    expect(isIsogram("isIsogram")).toBe(false);
  });
  test("isIsogram takes 'aba'", () => {
    expect(isIsogram("aba")).toBe(false);
  });
  test("isIsogram takes 'moOse'", () => {
    expect(isIsogram("moOse")).toBe(false);
  });
  test("isIsogram takes 'thumbscrewjapingly'", () => {
    expect(isIsogram("thumbscrewjapingly")).toBe(true);
  });
  test("isIsogram takes ''", () => {
    expect(isIsogram("")).toBe(true);
  });
});

describe("betterThanAverage Tests", function () {
  test("betterThanAverage([2, 3], 5) should return true", function () {
    expect(betterThanAverage([2, 3], 5)).toEqual(true);
  });

  test("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return true", function () {
    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toEqual(
      true
    );
  });

  test("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return true", function () {
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toEqual(
      true
    );
  });

  test("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return false", function () {
    expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toEqual(
      false
    );
  });

  test("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return false", function () {
    expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toEqual(
      false
    );
  });
});

describe("removeFirstAndLastChar tests", () => {
  test("removeFirstAndLastChar receives eloquent", () => {
    expect(removeFirstAndLastChar("eloquent")).toBe("loquen");
  });

  test("removeFirstAndLastChar receives country", () => {
    expect(removeFirstAndLastChar("country")).toBe("ountr");
  });

  test("removeFirstAndLastChar receives person", () => {
    expect(removeFirstAndLastChar("person")).toBe("erso");
  });

  test("removeFirstAndLastChar receives place", () => {
    expect(removeFirstAndLastChar("place")).toBe("lac");
  });

  test("removeFirstAndLastChar receives ooopsss", () => {
    expect(removeFirstAndLastChar("ooopsss")).toBe("oopss");
  });

  test("removeFirstAndLastChar receives hi", () => {
    expect(removeFirstAndLastChar("hi")).toBe("hi");
  });

  test("removeFirstAndLastChar receives i", () => {
    expect(removeFirstAndLastChar("i")).toBe("i");
  });
  test("removeFirstAndLastChar receives ''", () => {
    expect(removeFirstAndLastChar("")).toBe("");
  });
});

describe("sumOfArrayWithinRange tests", () => {
  test("sumOfArrayWithinRange takes 1,3", () => {
    expect(sumOfArrayWithinRange(1, 3)).toBe(6);
  });

  test("sumOfArrayWithinRange takes 9,11", () => {
    expect(sumOfArrayWithinRange(9, 11)).toBe(30);
  });

  test("sumOfArrayWithinRange takes 1,3", () => {
    expect(sumOfArrayWithinRange(-3, 3)).toBe(0);
  });

  test("sumOfArrayWithinRange takes 1,3", () => {
    expect(sumOfArrayWithinRange(-3, -1)).toBe(-6);
  });

  test("sumOfArrayWithinRange takes 1,3", () => {
    expect(sumOfArrayWithinRange(-3, -3)).toBe(-3);
  });
});

describe("findShort tests", () => {
  test("findShort takes 'walking the dog to the park'", () => {
    expect(findShort("walking the dog to the park")).toBe(2);
  });

  test("findShort takes 'be home at three'", () => {
    expect(findShort("be home at three")).toBe(2);
  });

  test("findShort takes 'The one I want'", () => {
    expect(findShort("The one I want")).toBe(1);
  });
});
