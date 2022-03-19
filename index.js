const getAbsolute = (digit) => {
  return Math.abs(digit);
};

function sumDigits(number) {
  let total = 0;
  getAbsolute(number)
    .toString()
    .split("")
    .forEach((char) => {
      let digit = parseInt(char);
      total += digit;
    });
  return total;
}
