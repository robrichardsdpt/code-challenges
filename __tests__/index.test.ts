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
  areYouPlayingBanjo,
  squareDigits,
  countSheep,
  zeroFuel,
  lovefunc,
  minMax,
  cockroachSpeed,
  sumOfTwoSmallestPositiveNumbers,
  countBy,
  sortDigitString,
  doubleChar,
  alphabetPosition,
  getGrade,
  abbrevName,
  expandedForm,
  accum,
  bmi,
  getVowelCount,
  fibonacci,
  toCamelCase,
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

describe("areYouPlayingBanjo", () => {
  test("areYouPlayingBanjo receives Adam", () => {
    expect(areYouPlayingBanjo("Adam")).toEqual("Adam does not play banjo");
  });
  test("areYouPlayingBanjo receives Paul", () => {
    expect(areYouPlayingBanjo("Paul")).toEqual("Paul does not play banjo");
  });
  test("areYouPlayingBanjo receives Ringo", () => {
    expect(areYouPlayingBanjo("Ringo")).toEqual("Ringo plays banjo");
  });
  test("areYouPlayingBanjo receives bravo", () => {
    expect(areYouPlayingBanjo("bravo")).toEqual("bravo does not play banjo");
  });
  test("areYouPlayingBanjo receives rolf", () => {
    expect(areYouPlayingBanjo("rolf")).toEqual("rolf plays banjo");
  });
});

describe("squareDigits test", () => {
  test("squareDigits(3212) should equal 9414", () => {
    expect(squareDigits(3212)).toEqual(9414);
  });

  test("squareDigits(2112) should equal 4114", () => {
    expect(squareDigits(2112)).toEqual(4114);
  });

  test("squareDigits(0) should equal 0", () => {
    expect(squareDigits(0)).toEqual(0);
  });
});

describe("countSheep tests", () => {
  test("countSheep receives full array", () => {
    expect(
      countSheep([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ])
    ).toEqual(17);
  });

  test("countSheep([]) should equal 0", () => {
    expect(countSheep([])).toEqual(0);
  });
});

describe("zeroFuel tests", () => {
  test("zeroFuel receives 50, 25, 2)", () => {
    expect(zeroFuel(50, 25, 2)).toEqual(true);
  });
  test("zeroFuel receives 100, 50, 1)", () => {
    expect(zeroFuel(100, 50, 1)).toEqual(false);
  });
  test("zeroFuel receives 60, 30, 3", () => {
    expect(zeroFuel(60, 30, 3)).toEqual(true);
  });
  test("zeroFuel receives 70, 25, 1", () => {
    expect(zeroFuel(70, 25, 1)).toEqual(false);
  });
});

describe("lovefunc tests", () => {
  test("lovefunc receives 1, 4", () => {
    expect(lovefunc(1, 4)).toEqual(true);
  });
  test("lovefunc receives 2, 2", () => {
    expect(lovefunc(2, 2)).toEqual(false);
  });
  test("lovefunc receives 0, 1", () => {
    expect(lovefunc(0, 1)).toEqual(true);
  });
  test("lovefunc receives 0, 0", () => {
    expect(lovefunc(0, 0)).toEqual(false);
  });
});

describe("minMax tests", () => {
  test("minMax receives 1, 4", () => {
    expect(minMax([1, 4])).toStrictEqual([1, 4]);
  });
  test("minMax receives 2334454, 5", () => {
    expect(minMax([2334454, 5])).toStrictEqual([5, 2334454]);
  });
  test("minMax receives 5", () => {
    expect(minMax([5])).toStrictEqual([5, 5]);
  });
  test("minMax receives []", () => {
    expect(minMax([])).toStrictEqual([]);
  });
});

describe("cockroachSpeed tests", () => {
  test("cockroachSpeed receives 1.08", () => {
    expect(cockroachSpeed(1.08)).toEqual(30);
  });
  test("cockroachSpeed receives 1.09", () => {
    expect(cockroachSpeed(1.09)).toEqual(30);
  });
  test("cockroachSpeed receives 0", () => {
    expect(cockroachSpeed(0)).toEqual(0);
  });
});

describe("sumOfTwoSmallestPositiveNumbers tests", () => {
  test("sumOfTwoSmallestPositiveNumbers receives []", () => {
    expect(sumOfTwoSmallestPositiveNumbers([])).toEqual(0);
  });
  test("sumOfTwoSmallestPositiveNumbers receives [1]", () => {
    expect(sumOfTwoSmallestPositiveNumbers([1])).toEqual(1);
  });
  test("sumOfTwoSmallestPositiveNumbers receives [-1]", () => {
    expect(sumOfTwoSmallestPositiveNumbers([-1])).toEqual(0);
  });
  test("sumOfTwoSmallestPositiveNumbers receives [12, 1, -2, 6, 5, -3, 4, 7]", () => {
    expect(
      sumOfTwoSmallestPositiveNumbers([12, 1, -2, 6, 5, -3, 4, 7])
    ).toEqual(5);
  });
  test("sumOfTwoSmallestPositiveNumbers receives [-12, -1, -2, -6, -5, -3, -4, -7]", () => {
    expect(
      sumOfTwoSmallestPositiveNumbers([-12, -1, -2, -6, -5, -3, -4, -7])
    ).toEqual(0);
  });
  test("sumOfTwoSmallestPositiveNumbers receives [-12, -1, -2, 66, -5, -3, -4, -7]", () => {
    expect(
      sumOfTwoSmallestPositiveNumbers([-12, -1, -2, 66, -5, -3, -4, -7])
    ).toEqual(66);
  });
});

describe("countBy tests", () => {
  test("countBy receives (1, 10)", () => {
    expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("countBy receives (2, 5)", () => {
    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
  });
  test("countBy receives (3, 7)", () => {
    expect(countBy(3, 7)).toStrictEqual([3, 6, 9, 12, 15, 18, 21]);
  });

  test("countBy receives (50, 5)", () => {
    expect(countBy(50, 5)).toStrictEqual([50, 100, 150, 200, 250]);
  });

  test("countBy receives (100, 6)", () => {
    expect(countBy(100, 6)).toStrictEqual([100, 200, 300, 400, 500, 600]);
  });

  test("countBy receives (100, 0)", () => {
    expect(countBy(100, 0)).toStrictEqual([]);
  });
});

describe("sortDigitString tests", () => {
  test('sortDigitString takes "524631"', () => {
    expect(sortDigitString("524631")).toBe("123456");
  });
  test('sortDigitString takes ""', () => {
    expect(sortDigitString("")).toBe("");
  });
});

describe("doubleChar tests", () => {
  test("doubleChar examples", () => {
    expect(doubleChar("abcd")).toBe("aabbccdd");
    expect(doubleChar("Adidas")).toBe("AAddiiddaass");
    expect(doubleChar("1337")).toBe("11333377");
    expect(doubleChar("illuminati")).toBe("iilllluummiinnaattii");
    expect(doubleChar("123456")).toBe("112233445566");
    expect(doubleChar("%^&*(")).toBe("%%^^&&**((");
  });
});

function ap(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (l) {
      return /[a-z]/.test(l);
    })
    .map(function (l) {
      return l.charCodeAt() - 96;
    })
    .join(" ");
}

const randomChar = (): string => {
  let chars =
      "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ",
    rand = Math.floor(Math.random() * chars.length);
  return chars[rand];
};

describe("Replace with alphabet position", () => {
  it("Fixed tests:", () => {
    for (let i = 65; i <= 122; i++) {
      let letter = String.fromCharCode(i);
      expect(alphabetPosition(letter)).toBe(ap(letter));
    }
    expect(alphabetPosition("-.-'")).toBe("");
  });
});

describe("Randomly generated tests:", () => {
  for (let i = 0; i < 50; i++) {
    let x = "";
    for (let j = 0; j < 8; j++) {
      x += randomChar();
    }
    it(`Testing "${x}"`, () => expect(alphabetPosition(x)).toBe(ap(x)));
  }
});

describe("getGrades test", () => {
  it("should return an A", function () {
    expect(getGrade(95, 90, 93)).toBe("A");
    expect(getGrade(100, 85, 96)).toBe("A");
    expect(getGrade(92, 93, 94)).toBe("A");
    expect(getGrade(100, 100, 100)).toBe("A");
  });
  it("should return a B", function () {
    expect(getGrade(70, 70, 100)).toBe("B");
    expect(getGrade(82, 85, 87)).toBe("B");
    expect(getGrade(84, 79, 85)).toBe("B");
  });
  it("should return a C", function () {
    expect(getGrade(70, 70, 70)).toBe("C");
    expect(getGrade(75, 70, 79)).toBe("C");
    expect(getGrade(60, 82, 76)).toBe("C");
  });
  it("should return a D", function () {
    expect(getGrade(65, 70, 59)).toBe("D");
    expect(getGrade(66, 62, 68)).toBe("D");
    expect(getGrade(58, 62, 70)).toBe("D");
  });
  it("should return an F", function () {
    expect(getGrade(44, 55, 52)).toBe("F");
    expect(getGrade(48, 55, 52)).toBe("F");
    expect(getGrade(58, 59, 60)).toBe("F");
    expect(getGrade(0, 0, 0)).toBe("F");
  });
});

describe("abbrevName tests", () => {
  it("abbrevName tests", () => {
    expect(abbrevName("Sam Harris")).toBe("S.H");
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
    expect(abbrevName("Evan Cole")).toBe("E.C");
    expect(abbrevName("P Favuzzi")).toBe("P.F");
    expect(abbrevName("David Mendieta")).toBe("D.M");

    expect(abbrevName("george clooney")).toBe("G.C");
    expect(abbrevName("marky mark")).toBe("M.M");
    expect(abbrevName("eliza doolittle")).toBe("E.D");
    expect(abbrevName("reese witherspoon")).toBe("R.W");
  });
});

describe("expandedForm tests", function () {
  it("Zeros", function () {
    expect(expandedForm(420370022)).toBe(
      "400000000 + 20000000 + 300000 + 70000 + 20 + 2"
    );
    expect(expandedForm(70304)).toBe("70000 + 300 + 4");
    expect(expandedForm(9000000)).toBe("9000000");
  });

  it("Big Numbers", function () {
    expect(expandedForm(92093403034573)).toBe(
      "90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3"
    );
    expect(expandedForm(2096039485293)).toBe(
      "2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3"
    );
  });
});

describe("accum", function () {
  it("Basic tests", function () {
    expect(accum("ZpglnRxqenU")).toBe(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
    expect(accum("NyffsGeyylB")).toBe(
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    );
    expect(accum("MjtkuBovqrU")).toBe(
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
    );
    expect(accum("EvidjUnokmM")).toBe(
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
    );
    expect(accum("HbideVbxncC")).toBe(
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
    );
    expect(accum("VwhvtHtrxfE")).toBe(
      "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee"
    );
    expect(accum("KurgiKmkphY")).toBe(
      "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy"
    );
    expect(accum("NctlfBlnmfH")).toBe(
      "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh"
    );
    expect(accum("WegunHvbdmV")).toBe(
      "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv"
    );
    expect(accum("VoywwSpqidE")).toBe(
      "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee"
    );
    expect(accum("VbaixFpxdcO")).toBe(
      "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo"
    );
    expect(accum("OlyqvYwkuzF")).toBe(
      "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff"
    );
    expect(accum("JrhfdMtchiH")).toBe(
      "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh"
    );
    expect(accum("JiwpcSwslvW")).toBe(
      "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww"
    );
    expect(accum("EagpiEvmabJ")).toBe(
      "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj"
    );
    expect(accum("RznlcEmuxxP")).toBe(
      "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp"
    );
    expect(accum("OrggaExarzP")).toBe(
      "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp"
    );
    expect(accum("DriraMtedfB")).toBe(
      "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb"
    );
    expect(accum("BjxseRxgtjT")).toBe(
      "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt"
    );
    expect(accum("EquhxOswchE")).toBe(
      "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee"
    );
  });
});

describe("bmi tests", () => {
  it("test", () => {
    expect(bmi(50, 1.8)).toEqual("Underweight");
    expect(bmi(80, 1.8)).toEqual("Normal");
    expect(bmi(90, 1.8)).toEqual("Overweight");
    expect(bmi(110, 1.8)).toEqual("Obese");
  });
});

describe("getVowelCount(Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    expect(getVowelCount("abracadabra")).toBe(5);
  });
  it("should return 4 for 'pear tree'", function () {
    expect(getVowelCount("pear tree")).toBe(4);
  });
  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function () {
    expect(getVowelCount("o a kak ushakov lil vo kashu kakao")).toBe(13);
  });
  it("should return 0 for 'my pyx'", function () {
    expect(getVowelCount("my pyx")).toBe(0);
  });
  it("should return 168 for a long input", function () {
    expect(
      getVowelCount(
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"
      )
    ).toBe(168);
  });
});

describe("Testing fibonacci", () => {
  test("Return 0 as the fibonacci number of 0", () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test("Return 1 as the fibonacci number of 1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test("Return 21 as the fibonacci number of 8", () => {
    expect(fibonacci(8)).toEqual(21);
  });
});

describe("toCamelCasentests", () => {
  it("should handle empty values", () => {
    expect(toCamelCase("")).toBe("");
  });

  it("should remove underscores and convert first letter of word to upper case", () => {
    expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
    expect(toCamelCase("The_stealth_warrior")).toBe("TheStealthWarrior");
  });

  it("should remove hyphens and convert first letter of word to upper case", () => {
    expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
    expect(toCamelCase("the-Stealth-Warrior")).toBe("theStealthWarrior");
    expect(toCamelCase("A-B-C")).toBe("ABC");
    expect(toCamelCase("I-am-a-programmer")).toBe("IAmAProgrammer");
    expect(toCamelCase("i-am-a-programmer")).toBe("iAmAProgrammer");
  });
});
