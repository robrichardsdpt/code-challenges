export const getWeightFromPercentage = (
  percent: number,
  oneRM: number
): number => Math.abs(Math.round(((percent / 100) * oneRM) / 5) * 5);

type PowerliftingBig3AndTotal = {
  squat: number;
  bench: number;
  deadlift: number;
  total: number;
};

export const getPercentOfTotal = (weight: number, total: number): number =>
  Math.round((weight / total) * 100 * 10) / 10;

export const getPercentageOfTotal = (
  oneRMObj: PowerliftingBig3AndTotal
): PowerliftingBig3AndTotal => {
  const { squat, bench, deadlift, total } = oneRMObj;
  return {
    squat: getPercentOfTotal(squat, total),
    bench: getPercentOfTotal(bench, total),
    deadlift: getPercentOfTotal(deadlift, total),
    total: total,
  };
};
