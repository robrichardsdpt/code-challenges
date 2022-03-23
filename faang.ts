const removeHashes = (string: string): string => {
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
  return removeHashes(str1) === removeHashes(str2);
};
