import { convertJsonToCsv } from "../jsonCoversion";
import { csvString } from "../mocks/mockCsvResults";
import { mockJson } from "../mocks/mockJson";

console.log(convertJsonToCsv(mockJson));

describe("convertJsonToCsv", () => {
  it("renders csv correctly", () => {
    expect(convertJsonToCsv(mockJson)).toEqual(csvString);
  });
  it("renders csv without items", () => {
    expect(convertJsonToCsv({ items: [] })).toEqual("");
  });
  it("renders csv from empty object", () => {
    expect(convertJsonToCsv({})).toEqual("");
  });
});
