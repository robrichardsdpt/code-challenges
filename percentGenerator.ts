// receive workout for squat, bench, deadlift, ohp
// will receive reps, sets, percentage for each lift
// return object with the average over the set and total volume for each

export type Exercise = {
  reps: number;
  sets: number;
  percentage: number;
  weight: number;
};

export type Workout = {
  date: Date;
  squat: Array<Exercise>;
  bench: Array<Exercise>;
  deadlift: Array<Exercise>;
  ohp: Array<Exercise>;
};

const calculatePercentages = (lift: Array<Exercise>) => {
  const totals = {
    totalReps: 0,
    averagePercentage: 0,
  };
  if (lift.length === 0) return {};

  let totalWeightPercentage = 0;

  lift.forEach((item) => {
    totals.totalReps += item.reps * item.sets;
    totalWeightPercentage += item.percentage * item.reps * item.sets;
  });

  totals.averagePercentage = totalWeightPercentage / totals.totalReps;

  return totals;
};

export const powerliftingPercentageGenerator = (workout: Workout) => {
  const { bench, squat, deadlift, ohp } = workout;

  return {
    date: workout.date,
    squat: calculatePercentages(squat),
    bench: calculatePercentages(bench),
    deadlift: calculatePercentages(deadlift),
    ohp: calculatePercentages(ohp),
  };
};
