import { getWeightFromPercentage } from "../weightLifting";

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
