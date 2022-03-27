export type DateRangeObject = {
  startDate: Date;
  endDate: Date | null;
};

export const isDateRangeInRange = (
  storedDateObj: DateRangeObject,
  userDateObj: DateRangeObject
): boolean => {
  if (userDateObj.endDate.getTime() <= storedDateObj.startDate.getTime()) {
    return false;
  }
  if (
    userDateObj.startDate.getTime() >=
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

// percent of time worked in interval problem
