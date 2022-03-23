import {
  matchTwoTypedStrings,
  matchTwoTypedStringsAlt,
  longestLowercaseSubstringWithoutTwoInARow,
  longestLowercaseSubstringWithoutRepeat,
} from "../faang";

describe("testing matchTwoTypedStrings", () => {
  test("matchTwoTypedStrings takes 2 strings with backspace but are equal returning true", () => {
    expect(matchTwoTypedStrings("hello", "hee#llo")).toBe(true);
  });

  test("matchTwoTypedStrings takes 2 strings with backspace but are not equal returning false", () => {
    expect(matchTwoTypedStrings("hello", "hee#ll#o")).toBe(false);
  });

  test("matchTwoTypedStrings takes 2 strings with backspace and mixed letters/numbers that are not equal returning false", () => {
    expect(matchTwoTypedStrings("hello", "h3e#llo")).toBe(false);
  });

  test("matchTwoTypedStrings takes 2 strings with different cases but are equal returning false", () => {
    expect(matchTwoTypedStrings("hello", "Hello")).toBe(false);
  });

  test("matchTwoTypedStrings takes 2 mixed strings with backspace but are equal returning true", () => {
    expect(matchTwoTypedStrings("32a1", "32ab#1")).toBe(true);
  });

  test("matchTwoTypedStrings takes 2 strings with backspace that leave empty returning true", () => {
    expect(matchTwoTypedStrings("ab##", "c#")).toBe(true);
  });

  test("matchTwoTypedStrings takes 2 strings with backspace that leave empty returning true", () => {
    expect(matchTwoTypedStrings("##", "c#")).toBe(true);
  });
});

describe("testing matchTwoTypedStringsAlt", () => {
  test("matchTwoTypedStringsAlt takes 2 strings with backspace but are equal returning true", () => {
    expect(matchTwoTypedStringsAlt("hello", "hee#llo")).toBe(true);
  });

  test("matchTwoTypedStringsAlt takes 2 strings with backspace but are not equal returning false", () => {
    expect(matchTwoTypedStringsAlt("hello", "hee#ll#o")).toBe(false);
  });

  test("matchTwoTypedStringsAlt takes 2 strings with backspace and mixed letters/numbers that are not equal returning false", () => {
    expect(matchTwoTypedStringsAlt("hello", "h3e#llo")).toBe(false);
  });

  test("matchTwoTypedStringsAlt takes 2 strings with different cases but are equal returning false", () => {
    expect(matchTwoTypedStringsAlt("hello", "Hello")).toBe(false);
  });

  test("matchTwoTypedStringsAlt takes 2 mixed strings with backspace but are equal returning true", () => {
    expect(matchTwoTypedStringsAlt("32a1", "32ab#1")).toBe(true);
  });

  test("matchTwoTypedStringsAlt takes 2 strings with backspace that leave empty returning true", () => {
    expect(matchTwoTypedStringsAlt("ab##", "c#")).toBe(true);
  });

  test("matchTwoTypedStringsAlt takes 2 strings with backspace that leave empty returning true", () => {
    expect(matchTwoTypedStringsAlt("##", "c#")).toBe(true);
  });
});

describe("testing longestLowercaseSubstringWithoutTwoInARow", () => {
  test("longestLowercaseSubstringWithoutTwoInARow takes abccda returning 3", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("abccda")).toBe(3);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes hello returning 3", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("hello")).toBe(3);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes cccccc returning 1", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("cccccc")).toBe(1);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes empty string returning 0", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("")).toBe(0);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes achoo returning 4", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("achoo")).toBe(4);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes ahhhh returning 2", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("ahhhh")).toBe(2);
  });

  test("longestLowercaseSubstringWithoutTwoInARow takes 122334, returning 2", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("122334")).toBe(2);
  });
  test("longestLowercaseSubstringWithoutTwoInARow takes 11, returning 1", () => {
    expect(longestLowercaseSubstringWithoutTwoInARow("11")).toBe(1);
  });
});

describe("testing longestLowercaseSubstringWithoutRepeat", () => {
  test("longestLowercaseSubstringWithoutRepeat takes abcabc returning 3", () => {
    expect(longestLowercaseSubstringWithoutRepeat("abcabc")).toBe(3);
  });

  test("longestLowercaseSubstringWithoutRepeat takes hello returning 3", () => {
    expect(longestLowercaseSubstringWithoutRepeat("hello")).toBe(3);
  });

  test("longestLowercaseSubstringWithoutRepeat takes cccccc returning 1", () => {
    expect(longestLowercaseSubstringWithoutRepeat("cccccc")).toBe(1);
  });

  test("longestLowercaseSubstringWithoutRepeat takes empty string returning 0", () => {
    expect(longestLowercaseSubstringWithoutRepeat("")).toBe(0);
  });

  test("longestLowercaseSubstringWithoutRepeat takes hachoo returning 4", () => {
    expect(longestLowercaseSubstringWithoutRepeat("hachoo")).toBe(4);
  });

  test("longestLowercaseSubstringWithoutRepeat takes ahhhh returning 2", () => {
    expect(longestLowercaseSubstringWithoutRepeat("ahhhh")).toBe(2);
  });

  test("longestLowercaseSubstringWithoutRepeat takes 212334, returning 3", () => {
    expect(longestLowercaseSubstringWithoutRepeat("212334")).toBe(3);
  });
  test("longestLowercaseSubstringWithoutRepeat takes 11, returning 1", () => {
    expect(longestLowercaseSubstringWithoutRepeat("11")).toBe(1);
  });
});
