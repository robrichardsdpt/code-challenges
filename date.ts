export type DateRangeObject = {
  startDate: Date;
  endDate: Date | null;
};

export const isDateRangeInRange = (
  storedDateObj: DateRangeObject,
  userDateObj: DateRangeObject
): boolean => {
  if (userDateObj.endDate.getTime() < storedDateObj.startDate.getTime()) {
    return false;
  }
  if (
    userDateObj.startDate.getTime() >
    (storedDateObj.endDate ? storedDateObj.endDate.getTime() : Date.now())
  ) {
    return false;
  }
  return true;
};

// 0 is Sunday 6 is Friday based on .getDay() function
export const wasItTheWeekend = (date: string): boolean => {
  const dayInt = new Date(date).getDay();
  return dayInt === 0 || dayInt === 6;
};

export const didThePersonHaveOff = (
  dateQuery: string,
  daysOffArray: Array<Date>
): boolean => {
  if (wasItTheWeekend(dateQuery)) return true;
  const dateString = new Date(dateQuery).toDateString();

  if (daysOffArray.map((item) => item.toDateString()).includes(dateString))
    return true;
  return false;
};

export type ResponsibilityObj = {
  dateInterval: DateRangeObject;
  coaching: number;
  admin: number;
};
export type EmployeeResponsibilityObj = {
  name: string;
  baselineResponsibility: ResponsibilityObj;
  temporary: Array<ResponsibilityObj>;
};

const getTotalTimeInRange = (dateRange: DateRangeObject): number => {
  return (
    (dateRange.endDate.getTime() - dateRange.startDate.getTime()) / 86400000 + 1
  );
};

// percent of time worked in interval problem
export const employeeResponsibilityPercentage = (
  employeeObject: EmployeeResponsibilityObj,
  inputDateRange: DateRangeObject
): ResponsibilityObj => {
  if (employeeObject.temporary.length === 0) {
    return {
      ...employeeObject.baselineResponsibility,
      dateInterval: inputDateRange,
    };
  }
  const { baselineResponsibility, temporary } = employeeObject;

  baselineResponsibility.dateInterval.endDate = baselineResponsibility
    .dateInterval.endDate
    ? baselineResponsibility.dateInterval.endDate
    : new Date();

  if (
    !isDateRangeInRange(baselineResponsibility.dateInterval, inputDateRange)
  ) {
    return {
      dateInterval: inputDateRange,
      coaching: 0,
      admin: 0,
    };
  }
  const totalTimeInInterval = getTotalTimeInRange(inputDateRange);
  let totalTimeInBaselineResponsibility = totalTimeInInterval,
    totalCoachingResponsibilityPerDay = 0,
    totalAdminResponsibilityPerDay = 0;

  temporary.forEach((item) => {
    const { dateInterval, coaching, admin } = item;
    if (isDateRangeInRange(inputDateRange, dateInterval)) {
      dateInterval.endDate =
        dateInterval.endDate.getDate() <= inputDateRange.endDate.getDate()
          ? dateInterval.endDate
          : inputDateRange.endDate;
      const timeInTemporaryResponsibility = getTotalTimeInRange(dateInterval);
      totalTimeInBaselineResponsibility -= timeInTemporaryResponsibility;
      totalCoachingResponsibilityPerDay +=
        coaching * timeInTemporaryResponsibility;
      totalAdminResponsibilityPerDay += admin * timeInTemporaryResponsibility;
    }
  });

  totalCoachingResponsibilityPerDay +=
    baselineResponsibility.coaching * totalTimeInBaselineResponsibility;
  totalAdminResponsibilityPerDay +=
    baselineResponsibility.admin * totalTimeInBaselineResponsibility;

  return {
    dateInterval: inputDateRange,
    coaching: totalCoachingResponsibilityPerDay / totalTimeInInterval,
    admin: totalAdminResponsibilityPerDay / totalTimeInInterval,
  };
};
