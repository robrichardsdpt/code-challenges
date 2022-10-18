export const getWeightFromPercentage = (
  percent: number,
  oneRM: number
): number => Math.abs(Math.round(((percent / 100) * oneRM) / 5) * 5);
