const getAbsolute = (digit: number): number => {
  return Math.abs(digit);
};

const sumDigits = (number: number): number => {
  let total = 0;
  getAbsolute(number)
    .toString()
    .split("")
    .forEach((char: string) => {
      let digit = parseInt(char);
      total += digit;
    });
  return total;
};

const roundToNext5 = (n: number): number => Math.ceil(n / 5) * 5;

const sortByLength = (array: Array<string>): Array<string> => {
  return array.sort((a: string, b: string) => a.length - b.length);
};

const reverseLetter = (str: string): string => {
  let reversedString = [];
  const strArray = str.split("");
  strArray.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) reversedString.unshift(char);
  });
  return reversedString.join("");
};
