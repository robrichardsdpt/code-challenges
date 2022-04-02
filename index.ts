const _getAbsolute = (digit: number): number => {
  return Math.abs(digit);
};

export const sumDigits = (number: number): number => {
  let total: number = 0;
  _getAbsolute(number)
    .toString()
    .split("")
    .forEach((char: string) => {
      let digit = parseInt(char);
      total += digit;
    });
  return total;
};

export const roundToNext5 = (n: number): number => Math.ceil(n / 5) * 5;

export const sortByLength = (array: Array<string>): Array<string> => {
  return array.sort((a: string, b: string) => a.length - b.length);
};

export const reverseLetter = (str: string): string => {
  let reversedString: Array<string> = [];
  const strArray = str.split("");
  strArray.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) reversedString.unshift(char);
  });
  return reversedString.join("");
};

export const removeUrlAnchor = (url: string): string => {
  const index: number = url.indexOf("#");
  return index === -1 ? url : url.slice(0, index);
};

export const findCapitalIndexArray = (word: string): Array<number> => {
  const indexArray: Array<number> = [];
  [...word].forEach((e, i) => {
    if (/[A-Z]/.test(e)) indexArray.push(i);
  });
  return indexArray;
};

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

export const negateOddNumbers = (arr: Array<number>): Array<number> => {
  return arr.map((num) => (num % 2 != 0 ? -num : num));
};

export const returnOnlyEvenPositiveNumbers = (
  arr: Array<number>
): Array<number> => {
  return arr.filter((num) => num % 2 === 0 && num >= 0);
};

export const arrayValuesSmallEnough = (
  array: Array<number>,
  limit: number
): boolean => {
  return array.filter((item) => item > limit).length === 0;
};

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

let indexWhereNeedleIsInHaystack = (
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

function autocomplete(input, dictionary) {
  const inputRegEx = new RegExp(input);
  return dictionary.filter((item) => inputRegEx.test(item)).slice(0, 5);
}
