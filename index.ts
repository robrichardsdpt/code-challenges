export const sumDigits = (number: number): number =>
  String(Math.abs(number))
    .split("")
    .map((char) => +char)
    .reduce((acc, item) => acc + item, 0);

export const roundToNext5 = (n: number): number => Math.ceil(n / 5) * 5;

export const sortByLength = (array: Array<string>): Array<string> =>
  array.sort((a: string, b: string) => a.length - b.length);

export const reverseLetter = (str: string): string =>
  str
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char))
    .reverse()
    .join("");

export const removeUrlAnchor = (url: string): string => {
  const index: number = url.indexOf("#");
  return index === -1 ? url : url.slice(0, index);
};

export const findCapitalIndexArray = (word: string): Array<number> =>
  [...word].reduce((acc, el, i) => (/[A-Z]/.test(el) ? [...acc, i] : acc), []);

export const isPalindrome = (number: number): boolean => {
  const numString = number.toString();
  let start = 0;
  let end = numString.length - 1;

  if (numString[0] === "-") return false;

  while (start <= end) {
    if (numString[start] !== numString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

export const letterEncrypt = (letter: string): string => {
  switch (letter) {
    case "A":
    case "D":
      return "F";
    case "B":
      return "D";
    case "C":
      return "E";
    case "E":
      return "G";
    case "F":
      return "B";
    default:
      return "invalid input";
  }
};

export const negateOddNumbers = (arr: Array<number>): Array<number> =>
  arr.map((num) => (num % 2 != 0 ? -num : num));

export const returnOnlyEvenPositiveNumbers = (
  arr: Array<number>
): Array<number> => arr.filter((num) => num % 2 === 0 && num >= 0);

export const arrayValuesSmallEnough = (
  array: Array<number>,
  limit: number
): boolean => array.filter((item) => item > limit).length === 0;

export const returnUpperOrLowerCase = (s: string): string => {
  let lowerCaseCounter = 0,
    upperCaseCounter = 0;

  [...s].forEach((char) =>
    /[a-z]/.test(char) ? lowerCaseCounter++ : upperCaseCounter++
  );

  return lowerCaseCounter >= upperCaseCounter
    ? s.toLowerCase()
    : s.toUpperCase();
};

export const isAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  let str1CharMap = {};
  str1
    .toLowerCase()
    .split("")
    .forEach((char) => {
      !str1CharMap[char] ? (str1CharMap[char] = 1) : str1CharMap[char]++;
    });

  for (let char of str2.toLowerCase()) {
    if (str1CharMap[char] === undefined) return false;
    if (str1CharMap[char] === 0) return false;
    if (str1CharMap[char] > 0) str1CharMap[char]--;
  }

  return true;
};

export const validParentheses = (str: string): boolean => {
  let openParentheses = 0;

  for (let char of str) {
    if (char === "(") openParentheses++;
    if (char === ")" && openParentheses === 0) return false;
    if (char === ")" && openParentheses !== 0) openParentheses--;
  }

  return openParentheses === 0;
};

// common prefix for each string
// if no common prefix return ''
// can be any amount of arrays
export const longestCommonPrefix = (arr: Array<string>): string => {
  let commonPrefix = arr[0] ? arr[0] : "";

  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      if (arr[i][j] !== commonPrefix[j]) {
        commonPrefix = commonPrefix.slice(0, j);
      }
    }
  }
  return commonPrefix;
};

export const isValidBracketting = (str: string): boolean => {
  let map = new Map();
  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");
  let b = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      b.push(str[i]);
    } else {
      let pop = b.pop();
      if (map.get(pop) !== str[i]) {
        return false;
      }
    }
  }
  return b.length === 0;
};

export const indexWhereNeedleIsInHaystack = (
  haystack: string,
  needle: string
): number => {
  if (!needle) return 0;
  if (!haystack) return -1;
  if (haystack.length < needle.length) return -1;

  let ni = 0;
  let hi = 0;

  while (hi < haystack.length && ni < needle.length) {
    if (haystack[hi] === needle[ni]) {
      ++hi;
      ++ni;
    } else {
      hi = ++hi - ni;
      ni = 0;
    }
  }
  if (ni === needle.length) return hi - ni;

  return -1;
};

export const autocomplete = (
  input: string,
  dictionary: Array<string>
): Array<string> =>
  dictionary.filter((item) => new RegExp(input).test(item)).slice(0, 5);

export const highestRank = (arr: Array<number>): number => {
  const map = {};
  let max = 0,
    maxKey = 0;
  arr.forEach((item) => {
    map[item] = map[item] ? (map[item] += 1) : 1;
  });
  for (const key in map) {
    if (map[key] >= max && parseInt(key) > maxKey) {
      max = map[key];
      maxKey = parseInt(key);
    }
  }
  return maxKey;
};

export const looseChange = (cents: number): Object => {
  const coinMap = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  cents = Math.floor(cents);
  if (cents >= 25) {
    coinMap["Quarters"] = Math.floor(cents / 25);
    cents = cents - 25 * coinMap["Quarters"];
  }
  if (cents >= 10) {
    coinMap["Dimes"] = Math.floor(cents / 10);
    cents = cents - 10 * coinMap["Dimes"];
  }
  if (cents >= 5) {
    coinMap["Nickels"] = Math.floor(cents / 5);
    cents = cents - 5 * coinMap["Nickels"];
  }

  if (cents >= 1) {
    coinMap["Pennies"] = Math.floor(cents / 1);
    cents = cents - 1 * coinMap["Pennies"];
  }
  return coinMap;
};

interface NumberObject {
  [key: string]: number;
}
export const findOdd = (A: Array<number>): number => {
  const numMap: NumberObject = {};
  A.forEach((item) => {
    numMap[item] = numMap[item] ? (numMap[item] += 1) : 1;
  });
  for (const [key, value] of Object.entries(numMap)) {
    if (value % 2 !== 0) return parseInt(key);
  }
  return 0;
};

export const findMaxSubstringConsonantValues = (word: string): number =>
  word
    .split(/[uoiea]/)
    .map((s) => s.split("").reduce((acc, c) => acc + (c.charCodeAt(0) - 96), 0))
    .sort((a, b) => b - a)[0];

export const fibonacci = (n: number): number =>
  n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

export const chained = (functions: Array<Function>): Function => {
  return (b) => {
    return functions.reduce((b, f: Function) => {
      return f(b);
    }, b);
  };
};

export const diamond = (l: number): string => {
  if (l < 0) return null;
  if (l % 2 === 0) return null;

  let space = " ";
  let star = "*";
  let i = 1;
  let k: number;
  let n = 0;
  let diam = "";

  while (i <= l) {
    k = (l - i) / 2;
    diam += space.repeat(k) + star.repeat(i) + "\n";
    i = i + 2;
  }

  while (i >= l) {
    k = (i - l) / 2;
    n = i - 4 * k;
    if (n > 0) {
      diam += space.repeat(k) + star.repeat(n) + "\n";
    } else {
      break;
    }
    i = i + 2;
  }
  return diam;
};

export const duplicateCount = (text: string): number => {
  text = text.toLowerCase();
  const charMap = {};
  let duplicates = 0;
  text.split("").forEach((char) => {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  });
  for (const [key, value] of Object.entries(charMap)) {
    if (value > 1) {
      duplicates += 1;
    }
  }
  return duplicates;
};

export const roundToNextHalf = (num: number): number =>
  Math.round(num / 0.5) * 0.5;

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

export const likeString = (arr: Array<string>): string => {
  if (arr.length === 0) return "no one likes this";
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
};

export const sortMyArrayOfStrings = (stringArr: Array<string>): Array<string> =>
  stringArr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
  });

export const isIntArray = (arr: Array<number>): boolean =>
  !arr ? false : arr.every(Number.isInteger);

export const uniqueInOrder = (
  iterable: Array<number | string>
): Array<number | string> => {
  let i1 = 0;
  let i2 = 0;
  let arr = [];

  while (i2 < iterable.length) {
    if (i2 === iterable.length - 1 && iterable[i1] !== iterable[i2]) {
      arr.push(iterable[i1]);
      arr.push(iterable[i2]);
      i2 += 1;
    } else if (i2 === iterable.length - 1 && iterable[i1] === iterable[i2]) {
      arr.push(iterable[i1]);
      i2 += 1;
    } else if (iterable[i1] !== iterable[i2]) {
      arr.push(iterable[i1]);
      i1 = i2;
      i2 += 1;
    } else {
      i2 += 1;
    }
  }
  return arr;
};

export const uniqueInOrderFilter = (
  iterable: Array<number | string>
): Array<number | string> =>
  [...iterable].filter((a, i) => a !== iterable[i - 1]);

export type DevObject = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

type LanguageResult = {
  [key: string]: number;
};

export const countLanguages = (list: Array<DevObject>): LanguageResult => {
  let langObj = {};
  list.forEach((dev) =>
    !langObj[dev.language]
      ? (langObj[dev.language] = 1)
      : langObj[dev.language]++
  );
  return langObj;
};

export const maxSequence = (array: Array<number>): number => {
  let currentSum = 0;
  let largestSum = 0;

  array.forEach((number) => {
    currentSum = Math.max(0, currentSum + number);
    largestSum = Math.max(largestSum, currentSum);
  });

  return largestSum;
};

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

export const encryptThis = (text: string): string => {
  if (text.length === 0) {
    return "";
  }
  return text
    .split(" ")
    .map((item) => {
      if (item.length === 1) {
        return `${item.charCodeAt(0)}`;
      }
      if (item.length === 2) {
        return `${item.charCodeAt(0)}${item[1]}`;
      }
      return `${item.charCodeAt(0)}${item[item.length - 1]}${item.slice(
        2,
        -1
      )}${item[1]}`;
    })
    .join(" ");
};

export const filterList = (l: Array<string | number>): Array<string | number> =>
  l.filter((item) => typeof item === "number");

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

export const descendingOrder = (n: number): number =>
  n === null
    ? null
    : parseInt(
        n
          .toString()
          .split("")
          .map((item) => parseInt(item))
          .sort((a, b) => b - a)
          .join("")
      );

export const isSquare = (n: number): boolean => {
  if (n < 0) return false;

  return Number.isInteger(Math.sqrt(n));
};

export const DNAStrand = (dna: string): string => {
  return dna
    .split("")
    .map((item) => {
      if (item === "A") return "T";
      if (item === "T") return "A";
      if (item === "C") return "G";
      if (item === "G") return "C";
    })
    .join("");
};

export const binaryArrayToNumber = (arr: Array<number>): number => {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, val) => {
    return (acc << 1) | val;
  });
};

export const validatePIN = (pin: string): boolean => {
  return /^[0-9]+$/.test(pin) && (pin.length === 6 || pin.length === 4);
};

export const findAverage = (array: Array<number>): number => {
  if (array.length === 0) return 0;
  return array.reduce((acc, item) => acc + item, 0) / array.length;
};

export const digitize = (n: number): Array<number> => {
  return n
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reverse();
};

export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let yearCounter = 0;

  while (p >= p0) {
    p0 = p0 + (p0 * percent) / 100 + aug;
    yearCounter += 1;
  }

  return yearCounter;
};

export const evenOrOdd = (num: number): string => {
  return num % 2 === 0 ? "Even" : "Odd";
};

export const sumTwoSmallestNumbers = (numbers: Array<number>): number => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
};

export const findSmallest = (args: Array<number>): number => {
  return args.length === 0 ? null : Math.min(...args);
};

export const reverseSeq = (n: number): Array<number> => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

export const squareSum = (numbers: Array<number>): number => {
  return numbers.reduce((accum, item) => accum + item ** 2, 0);
};

export const reverseString = (str: string): string =>
  [...str].reverse().join("");

export const XO = (str: string): boolean => {
  let x = 0;
  let o = 0;

  str.split("").forEach((char) => {
    if (char.toLowerCase() === "x") x += 1;
    if (char.toLowerCase() === "o") o += 1;
  });

  return x === o;
};

export const reverseWords = (str: string): string => {
  return str
    .split(" ")
    .map((item) => [...item].reverse().join(""))
    .join(" ");
};

export const countPositivesSumNegatives = (
  input: Array<number>
): Array<number> => {
  return input && input.length
    ? input.reduce(
        function (p, c, i, s) {
          c <= 0 ? (p[1] += c) : (p[0] += 1);
          return p;
        },
        [0, 0]
      )
    : [];
};

export const isIsogram = (str: string): boolean =>
  new Set(str.toLowerCase()).size == str.length;

export const betterThanAverage = (
  classPoints: Array<number>,
  yourPoints: number
): boolean => {
  return (
    Math.max(
      classPoints.reduce((p, c) => p + c, 0) / classPoints.length,
      yourPoints
    ) === yourPoints
  );
};

export const removeFirstAndLastChar = (str: string) =>
  str.length <= 2 ? str : str.substring(1, str.length - 1);

// start must be the start of the range, end must be the end of the range
export const sumOfArrayWithinRange = (start: number, end: number): number =>
  Array.from({ length: end + 1 - start }, (_, i) => start + i).reduce(
    (acc, current) => acc + current,
    0
  );

export const findShort = (s: string): number =>
  s.split(" ").reduce((min, word) => Math.min(min, word.length), Infinity);

export const areYouPlayingBanjo = (name: string): string =>
  name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";

export const squareDigits = (num: number): number =>
  Number(
    String(num)
      .split("")
      .map((item) => Number(item) ** 2)
      .join("")
  );

export const countSheep = (arrayOfSheep: Array<boolean>): number =>
  arrayOfSheep.filter((item) => item === true).length;

export const zeroFuel = (
  distanceToPump: number,
  mpg: number,
  fuelLeft: number
): boolean => distanceToPump <= mpg * fuelLeft;

export const lovefunc = (flower1: number, flower2: number): boolean =>
  flower1 % 2 !== flower2 % 2;

export const minMax = (arr: Array<number>): Array<number> =>
  arr.length === 0 ? [] : [Math.min(...arr), Math.max(...arr)];

export const cockroachSpeed = (s: number): number => Math.floor(s * 27.778);

export const sumOfTwoSmallestPositiveNumbers = (arr: Array<number>): number => {
  const newArray = arr.filter((item) => item >= 0).sort((a, b) => a - b);
  if (newArray.length === 0) return 0;
  if (newArray.length === 1) return newArray[0];
  return newArray[0] + newArray[1];
};

export const countBy = (x: number, n: number): Array<number> => {
  if (n === 0) return [];
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
};

export const sortDigitString = (str: string): string =>
  str
    .split("")
    .map((char) => +char)
    .sort((a, b) => a - b)
    .join("");

export const doubleChar = (str: string): string =>
  [...str].map((item) => item.repeat(2)).join("");

export const alphabetPosition = (text: string): string =>
  [...text]
    .filter((item) => /[a-z]/.test(item.toLowerCase()))
    .map((a) => parseInt(a, 36) - 9)
    .filter((a) => a >= 0)
    .join(" ");

export const getGrade = (...scores: Array<number>): string => {
  let avg = [...scores].reduce((acc, item) => acc + item, 0) / scores.length;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
};

export const abbrevName = (name: string): string =>
  name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join(".");

export const expandedForm = (num: number): string =>
  String(num)
    .split("")
    .map(
      (item, index, array) =>
        +item > 0 && `${item}${"0".repeat(array.length - 1 - index)}`
    )
    .filter((item) => item)
    .join(" + ");

export const accum = (s: string): string =>
  [...s]
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join("-");

export const bmi = (w: number, h: number, bmi = w / h / h): string =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";

export const getVowelCount = (str: string): number =>
  [...str].filter((item) => /[aeiou]/.test(item)).length;

export const toCamelCase = (str: string): string =>
  str.includes("-")
    ? str
        .split("-")
        .map((item, index) => {
          if (index > 0) return item.replace(item[0], item[0].toUpperCase());
          return item;
        })
        .join("")
    : str
        .split("_")
        .map((item, index) => {
          if (index > 0) return item.replace(item[0], item[0].toUpperCase());
          return item;
        })
        .join("");

export const count = (str: string): Object =>
  [...str].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});

export const quarterOfYear = (month: number): number => Math.ceil(month / 3);

export const areaOrPerimeter = (l: number, w: number): number =>
  [l, w].includes(0) ? 0 : l === w ? l * w : 2 * (l + w);

export const points = (games: Array<string>): number =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

export const findDifference = (a: Array<number>, b: Array<number>): number =>
  Math.abs(
    a.reduce((accum, item) => accum * item, 1) -
      b.reduce((accum, item) => accum * item, 1)
  );

export const problem = (x: number | string): number | string => {
  return typeof x === "string" ? "Error" : x * 50 + 6;
};

export const fakeBin = (x: string): string =>
  x
    .split("")
    .map((item) => (+item < 5 ? 0 : 1))
    .join("");

// the two conversion functions below assume that the input limits input to numbers and
// commas
export const convertNumberToStringWithCommas = (num: number): string =>
  num.toLocaleString("en-US");

export const convertStringWithCommasToNumber = (str: string): number =>
  +str.replace(/,/g, "");

const convertDateToDesiredLocaleString = (days: number): string => {
  let now = new Date();
  return new Date(now.setDate(now.getDate() + days)).toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

export const theWeekAWeekFromNow = (): Record<string, string> => {
  return {
    start: convertDateToDesiredLocaleString(7),
    end: convertDateToDesiredLocaleString(14),
  };
};

export const isTheWeekend = (date: Date): boolean =>
  [0, 6].includes(date.getDay());

export const getNext7BusinessDays = (): string[] => {
  let resultArr = [];
  let day = new Date();
  while (resultArr.length < 7) {
    if (!isTheWeekend(day))
      resultArr.push(
        day.toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
      );
    day = new Date(day.setDate(day.getDate() + 1));
  }
  return resultArr;
};

const curriedFunction =
  (text: string) =>
  (anotherText: string): string => {
    return `${text} ${anotherText}`;
  };

// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n: number): number => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};

export const letterCount = (word: string, letter: string): string | number =>
  letter.length > 1
    ? "please enter only one letter"
    : word.split("").filter((char) => char === letter).length;

export const pointGenerator = (games: Array<string>): number | string =>
  games.reduce((previousValue, currentGame) => {
    const currentGameArray = currentGame.split(":");
    if (
      ![
        /[0-9]/.test(currentGameArray[0]),
        /[0-9]/.test(currentGameArray[1]),
      ].every((item) => item === true)
    ) {
      return "please enter only numbers";
    }
    return typeof previousValue === "string" && /^p/.test(previousValue)
      ? previousValue
      : Number(currentGameArray[0]) > Number(currentGameArray[1])
      ? previousValue + 2
      : currentGameArray[0] === currentGameArray[1]
      ? previousValue + 1
      : previousValue + 0;
  }, 0);

export const isItAPhoneNum = (str: string): string => {
  const numString = str.replace(/\D/g, "");
  return numString.startsWith("1") && numString.length === 8
    ? numString
    : "Not a US phone number";
};

export const isImageFile = (inputFileStr: string): boolean =>
  /([a-zA-Z0-9\s_\\.\-\(\):])\.(jpg|jpeg|gif|webp|png|svg|tiff)$/i.test(
    inputFileStr
  );

// TODO:temporary console logs until testing/mocks are created.
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached

console.log(theWeekAWeekFromNow());
console.log(isTheWeekend(new Date()));
console.log(getNext7BusinessDays());

console.log(curriedFunction("text")("message"));
const hello = curriedFunction("Hello");
console.log(hello);
console.log(hello("friend"));
