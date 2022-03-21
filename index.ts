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
