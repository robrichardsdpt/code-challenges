import {
  isDateRangeInRange,
  wasItTheWeekend,
  didThePersonHaveOff,
  employeeResponsibilityPercentage,
  EmployeeResponsibilityObj,
  ResponsibilityObj,
  DateRangeObject,
} from "../date";

describe("isDateRangeInRange tests", () => {
  test("isDateRangeInRange receives date interval outside (before) the range and returns false", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: new Date("3/20/2019"),
        },
        {
          startDate: new Date("1/12/2018"),
          endDate: new Date("1/20/2018"),
        }
      )
    ).toBe(false);
  });
  test("isDateRangeInRange receives date interval outside (after) the range and returns false", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: new Date("3/20/2019"),
        },
        {
          startDate: new Date("1/12/2020"),
          endDate: new Date("1/20/2020"),
        }
      )
    ).toBe(false);
  });
  test("isDateRangeInRange receives date interval completely inside the range and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: new Date("3/20/2019"),
        },
        {
          startDate: new Date("4/12/2018"),
          endDate: new Date("6/20/2018"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval completely inside the range (no end date on interval) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: null,
        },
        {
          startDate: new Date("1/12/2020"),
          endDate: new Date("3/24/2021"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts before but part is inside the range and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: null,
        },
        {
          startDate: new Date("1/12/2018"),
          endDate: new Date("3/21/2018"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts before but covers the whole range (extending beyond) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: new Date("3/13/2019"),
        },
        {
          startDate: new Date("1/12/2018"),
          endDate: new Date("3/21/2020"),
        }
      )
    ).toBe(true);
  });
  test("isDateRangeInRange receives date interval that starts during but covers the whole range (extending beyond) and returns true", () => {
    expect(
      isDateRangeInRange(
        {
          startDate: new Date("3/12/2018"),
          endDate: new Date("3/13/2019"),
        },
        {
          startDate: new Date("5/12/2018"),
          endDate: new Date("3/21/2020"),
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

const dayOff1 = new Date("3/28/2022");
const dayOff2 = new Date("3/31/2022");
const daysOff = [dayOff1, dayOff2];

describe("didThePersonHaveOff tests", () => {
  test("didThePersonHaveOff finds Sunday based on date and returns true", () => {
    expect(didThePersonHaveOff("3/27/2022", daysOff)).toBe(true);
  });
  test("didThePersonHaveOff finds day off based on date and returns true", () => {
    expect(didThePersonHaveOff("3/28/2022", daysOff)).toBe(true);
  });
  test("didThePersonHaveOff finds day worked based on date and returns false", () => {
    expect(didThePersonHaveOff("3/29/2022", daysOff)).toBe(false);
  });
  test("didThePersonHaveOff finds day worked based on date and returns false", () => {
    expect(didThePersonHaveOff("3/30/2022", daysOff)).toBe(false);
  });
  test("didThePersonHaveOff finds day off based on date and returns true", () => {
    expect(didThePersonHaveOff("3/31/2022", daysOff)).toBe(true);
  });
  test("didThePersonHaveOff finds Saturday based on date and returns true", () => {
    expect(didThePersonHaveOff("4/2/2022", daysOff)).toBe(true);
  });
});

const dateInterval: DateRangeObject = {
  startDate: new Date("1/15/2022"),
  endDate: new Date("1/16/2022"),
};

const temporaryResponsibilities: Array<ResponsibilityObj> = [
  {
    dateInterval: {
      startDate: new Date("1/15/2022"),
      endDate: new Date("1/15/2022"),
    },
    coaching: 67,
    admin: 33,
  },
  {
    dateInterval: {
      startDate: new Date("1/17/2022"),
      endDate: new Date("1/30/2022"),
    },
    coaching: 80,
    admin: 20,
  },
  {
    dateInterval: {
      startDate: new Date("2/15/2022"),
      endDate: new Date("2/15/2022"),
    },
    coaching: 50,
    admin: 50,
  },
];

const employeeObject: EmployeeResponsibilityObj = {
  name: "Great Coach",
  baselineResponsibility: {
    dateInterval: {
      startDate: new Date("1/1/2022"),
      endDate: null,
    },
    coaching: 75,
    admin: 25,
  },
  temporary: [],
};

describe("employeeResponsibilityPercentage tests", () => {
  test("employeeResponsibilityPercentage finds 33% admin/67% coaching based on dates provided with no temp values for coach", () => {
    const results = {
      dateInterval: dateInterval,
      coaching: employeeObject.baselineResponsibility.coaching,
      admin: employeeObject.baselineResponsibility.admin,
    };
    expect(
      employeeResponsibilityPercentage(employeeObject, dateInterval)
    ).toStrictEqual(results);
  });

  test("employeeResponsibilityPercentage finds 26% admin/74% coaching based on dates provided  with temp list", () => {
    employeeObject.temporary = temporaryResponsibilities;
    const results = {
      dateInterval: {
        startDate: new Date("1/15/2022"),
        endDate: new Date("1/17/2022"),
      },
      coaching: 74,
      admin: 26,
    };
    expect(
      employeeResponsibilityPercentage(employeeObject, {
        startDate: new Date("1/15/2022"),
        endDate: new Date("1/17/2022"),
      })
    ).toStrictEqual(results);
  });

  test("employeeResponsibilityPercentage finds 29% admin/71% coaching based on dates provided with one temp range", () => {
    employeeObject.temporary = temporaryResponsibilities;
    const results = {
      dateInterval: dateInterval,
      coaching: 71,
      admin: 29,
    };
    expect(
      employeeResponsibilityPercentage(employeeObject, dateInterval)
    ).toStrictEqual(results);
  });

  test("employeeResponsibilityPercentage finds 50% admin/50% coaching based on dates provided one temp range for one day and therefore baseline not factored", () => {
    employeeObject.temporary = temporaryResponsibilities;
    const results = {
      dateInterval: {
        startDate: new Date("2/15/2022"),
        endDate: new Date("2/15/2022"),
      },
      coaching: 50,
      admin: 50,
    };

    expect(
      employeeResponsibilityPercentage(employeeObject, {
        startDate: new Date("2/15/2022"),
        endDate: new Date("2/15/2022"),
      })
    ).toStrictEqual(results);
  });

  test("employeeResponsibilityPercentage finds 0% admin/0% coaching based on dates provided not falling in range of employment", () => {
    employeeObject.temporary = temporaryResponsibilities;
    const results = {
      dateInterval: {
        startDate: new Date("12/15/2021"),
        endDate: new Date("12/15/2021"),
      },
      coaching: 0,
      admin: 0,
    };
    expect(
      employeeResponsibilityPercentage(employeeObject, {
        startDate: new Date("12/15/2021"),
        endDate: new Date("12/15/2021"),
      })
    ).toStrictEqual(results);
  });

  test("employeeResponsibilityPercentage finds 0% admin/0% coaching based on dates provided not falling in range of employment", () => {
    employeeObject.temporary = temporaryResponsibilities;
    employeeObject.baselineResponsibility.dateInterval.endDate = new Date(
      "3/23/2022"
    );
    const results = {
      dateInterval: {
        startDate: new Date("3/25/2022"),
        endDate: new Date("3/29/2022"),
      },
      coaching: 0,
      admin: 0,
    };
    expect(
      employeeResponsibilityPercentage(employeeObject, {
        startDate: new Date("3/25/2022"),
        endDate: new Date("3/29/2022"),
      })
    ).toStrictEqual(results);
  });
});
