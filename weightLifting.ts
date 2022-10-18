const getWeightFromPercentage = (percent: number, oneRM: number): number =>
  Math.round(((percent / 100) * oneRM) / 5) * 5;
