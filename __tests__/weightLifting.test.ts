import {
  getWeightFromPercentage,
  getPercentOfTotal,
  getPercentageOfTotalObj,
} from "../weightLifting";

describe("getWeightFromPercentage tests", () => {
  it("receives valid numbers and returns appropriate weight based on percentage", () => {
    expect(getWeightFromPercentage(90, 100)).toBe(90);
    expect(getWeightFromPercentage(92, 100)).toBe(90);
    expect(getWeightFromPercentage(93, 100)).toBe(95);
    expect(getWeightFromPercentage(92.5, 100)).toBe(95);
  });
  it("receives invalid numbers and returns appropriate weight based on percentage", () => {
    expect(getWeightFromPercentage(-90, 100)).toBe(90);
    expect(getWeightFromPercentage(92, -100)).toBe(90);
    expect(getWeightFromPercentage(-93, -100)).toBe(95);
  });
});

describe("getPercentOfTotal tests", () => {
  it("receives valid numbers and returns appropriate percentage", () => {
    expect(getPercentOfTotal(90, 100)).toBe(90);
    expect(getPercentOfTotal(92.75, 100)).toBe(92.75);
    expect(getPercentOfTotal(93, 100)).toBe(93);
    expect(getPercentOfTotal(2.666, 100)).toBe(2.67);
  });
});
