import { matchTwoTypedStrings } from "../faang";

describe("testing binarySearch", () => {
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
