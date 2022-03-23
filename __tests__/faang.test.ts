import { matchTwoTypedStrings } from "../faang";

describe("testing binarySearch", () => {
  test("matchTwoTypedStrings takes array and number present returning true", () => {
    expect(matchTwoTypedStrings("hello", "hee#llo")).toBe(true);
  });

  test("binarySearch takes array and number not present returning false", () => {
    expect(matchTwoTypedStrings("hello", "hee#ll#o")).toBe(false);
  });

  test("binarySearch takes array and number not present returning false", () => {
    expect(matchTwoTypedStrings("hello", "h3e#llo")).toBe(false);
  });

  test("binarySearch takes array and number not present returning false", () => {
    expect(matchTwoTypedStrings("hello", "Hello")).toBe(false);
  });

  test("binarySearch takes array and number not present returning false", () => {
    expect(matchTwoTypedStrings("32a1", "32ab#1")).toBe(true);
  });

  test("binarySearch takes array and negative number outside of values returning false", () => {
    expect(matchTwoTypedStrings("ab##", "c#")).toBe(true);
  });
});
