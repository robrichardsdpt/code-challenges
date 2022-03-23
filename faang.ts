const handleHashes = (string: string): string => {
  const stringArray = [];
  string
    .split("")
    .forEach((char) =>
      char !== "#" ? stringArray.push(char) : stringArray.pop()
    );
  return stringArray.join("");
};

// two strings input
// capitalization matters
// can receive both numbers or letters in the string
//  # acts as back space
// empty strings ok
export const matchTwoTypedStrings = (str1: string, str2: string): boolean => {
  return handleHashes(str1) === handleHashes(str2);
};

export const matchTwoTypedStringsAlt = (
  str1: string,
  str2: string
): boolean => {
  let p1 = str1.length - 1,
    p2 = str2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (str1[p1] === "#" || str2[p2] === "#") {
      if (str1[p1] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p1--;
          backcount--;
          if (str1[p1] === "#") {
            backcount += 2;
          }
        }
      }
      if (str2[p2] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;
          if (str2[p2] === "#") {
            backcount += 2;
          }
        }
      }
    } else {
      if (str1[p1] !== str2[p2]) {
        return false;
      }
      p1--;
      p2--;
    }
  }
  return true;
};

export const longestLowercaseSubstringWithoutRepeat = (str: string): number => {
  let i1 = 0;
  let i2 = 1;
  let previousLetter = str[i1];
  let longestStringLength = 0;
  let currentStringLength = 1;

  if (str.length <= 1) return str.length;

  while (i1 < str.length - 1 && i2 < str.length - 1) {
    if (str[i2] === previousLetter) {
      i1 = i2;
      previousLetter = str[i2];
      i2++;
      if (currentStringLength > longestStringLength) {
        longestStringLength = currentStringLength;
      }
      currentStringLength = 1;
    } else {
      currentStringLength++;
      previousLetter = str[i2];
      i2++;
      if (currentStringLength > longestStringLength) {
        longestStringLength = currentStringLength;
      }
    }
  }

  return longestStringLength;
};
