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
