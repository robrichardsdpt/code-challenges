import { powerliftingPercentageGenerator, Workout } from "../percentGenerator";

const newWorkout: Workout = {
  date: new Date("3/18/2022"),
  squat: [
    { sets: 1, reps: 5, percentage: 50, weight: 175 },
    { sets: 1, reps: 5, percentage: 60, weight: 210 },
    { sets: 3, reps: 5, percentage: 70, weight: 245 },
  ],
  deadlift: [
    { sets: 1, reps: 3, percentage: 60, weight: 240 },
    { sets: 1, reps: 3, percentage: 70, weight: 280 },
    { sets: 3, reps: 3, percentage: 80, weight: 320 },
  ],
  bench: [
    { sets: 1, reps: 6, percentage: 50, weight: 135 },
    { sets: 1, reps: 6, percentage: 60, weight: 165 },
    { sets: 3, reps: 6, percentage: 70, weight: 195 },
  ],
  ohp: [
    { sets: 1, reps: 8, percentage: 50, weight: 75 },
    { sets: 1, reps: 8, percentage: 60, weight: 90 },
    { sets: 1, reps: 8, percentage: 70, weight: 105 },
    { sets: 3, reps: 8, percentage: 80, weight: 120 },
  ],
};
const output = {
  date: newWorkout.date,
  squat: {
    totalReps: 25,
    averagePercentage: 64,
  },
  bench: {
    totalReps: 30,
    averagePercentage: 64,
  },
  deadlift: {
    totalReps: 15,
    averagePercentage: 74,
  },
  ohp: {
    totalReps: 48,
    averagePercentage: 70,
  },
};

const outputWithoutSquat = {
  date: newWorkout.date,
  squat: {},
  bench: {
    totalReps: 30,
    averagePercentage: 64,
  },
  deadlift: {
    totalReps: 15,
    averagePercentage: 74,
  },
  ohp: {
    totalReps: 48,
    averagePercentage: 70,
  },
};

describe("testing percentageGenerator", () => {
  test("full workout tested and returns appropriate value", () => {
    const results = powerliftingPercentageGenerator(newWorkout);

    expect(results).toStrictEqual(output);
  });

  test("workout tested without squat and returns appropriate value", () => {
    newWorkout.squat = [];

    const results = powerliftingPercentageGenerator(newWorkout);

    expect(results).toStrictEqual(outputWithoutSquat);
  });

  test("workout tested without any lifts and returns appropriate value", () => {
    newWorkout.squat = [];
    newWorkout.bench = [];
    newWorkout.ohp = [];
    newWorkout.deadlift = [];

    const results = powerliftingPercentageGenerator(newWorkout);

    expect(results).toStrictEqual({
      date: newWorkout.date,
      squat: {},
      bench: {},
      deadlift: {},
      ohp: {},
    });
  });
});
