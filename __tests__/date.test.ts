import { isDateRangeInRange, wasItTheWeekend } from "../date";

describe("isDateRangeInRange tests", () => {
  test("isDateRangeInRange receives date interval outside (before) the range and returns false", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: new Date("3 / 20 / 2019"),
        },
        {
          startDate: new Date("1 / 12 / 2018"),
          endDate: new Date("1 / 20 / 2018"),
        }
      )
    ).toBe(false);
  });
  test("isDateRangeInRange receives date interval outside (after) the range and returns false", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: new Date("3 / 20 / 2019"),
        },
        {
          startDate: new Date("1 / 12 / 2020"),
          endDate: new Date("1 / 20 / 2020"),
        }
      )
    ).toBe(false);
  });
  test("isDateRangeInRange receives date interval completely inside the range and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: new Date("3 / 20 / 2019"),
        },
        {
          startDate: new Date("4 / 12 / 2018"),
          endDate: new Date("6 / 20 / 2018"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval completely inside the range (no end date on interval) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: null,
        },
        {
          startDate: new Date("1 / 12 / 2020"),
          endDate: new Date("3 / 24 / 2021"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts before but part is inside the range and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: null,
        },
        {
          startDate: new Date("1 / 12 / 2018"),
          endDate: new Date("3 / 21 / 2018"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts before but covers the whole range (extending beyond) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: new Date("3 / 13 / 2019"),
        },
        {
          startDate: new Date("1 / 12 / 2018"),
          endDate: new Date("3 / 21 / 2020"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts during but covers the whole range (extending beyond) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3 / 12 / 2018"),
          endDate: new Date("3 / 13 / 2019"),
        },
        {
          startDate: new Date("5 / 12 / 2018"),
          endDate: new Date("3 / 21 / 2020"),
        }
      )
    ).toBe(true);
  });
});

describe("wasItTheWeekend tests", () => {
  test("wasItTheWeekend finds Sunday based on date and returns true", () => {
    expect(wasItTheWeekend("3/27/2022")).toBe(true);
  });
  test("wasItTheWeekend finds Saturday based on date and returns true", () => {
    expect(wasItTheWeekend("3/26/2022")).toBe(true);
  });
  test("wasItTheWeekend finds Monday based on date and returns false", () => {
    expect(wasItTheWeekend("3/28/2022")).toBe(false);
  });
  test("wasItTheWeekend finds Wednesday based on date and returns false", () => {
    expect(wasItTheWeekend("3/30/2022")).toBe(false);
  });
  test("wasItTheWeekend finds Friday based on date and returns false", () => {
    expect(wasItTheWeekend("3/25/2022")).toBe(false);
  });
});
