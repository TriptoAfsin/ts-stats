const variance = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate variance.");
    }

    const mean: number = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const squaredDiffs: number[] = arr.map(num => Math.pow(num - mean, 2));
    const variance: number =
      squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
    return variance;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default variance;
