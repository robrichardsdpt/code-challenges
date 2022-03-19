const getAbsolute = (digit) => {
  return Math.abs(digit);
};

const sumDigits = (number) => {
  let total = 0;
  getAbsolute(number)
    .toString()
    .split("")
    .forEach((char) => {
      let digit = parseInt(char);
      total += digit;
    });
  return total;
};

const roundToNext5 = (n) => Math.ceil(n / 5) * 5;
