const corelation = (arr1: number[], arr2: number[]): number | string => {
  try {
    if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
      throw new Error("Arrays should be of equal length and cannot be empty.");
    }

    const mean1: number = arr1.reduce((acc, val) => acc + val, 0) / arr1.length;
    const mean2: number = arr2.reduce((acc, val) => acc + val, 0) / arr2.length;

    const diff1: number[] = arr1.map(num => num - mean1);
    const diff2: number[] = arr2.map(num => num - mean2);

    const sumProduct: number = diff1.reduce(
      (acc, val, index) => acc + val * diff2[index],
      0
    );

    const squaredDiff1: number = diff1.reduce((acc, val) => acc + val ** 2, 0);
    const squaredDiff2: number = diff2.reduce((acc, val) => acc + val ** 2, 0);

    const correlation: number =
      sumProduct / Math.sqrt(squaredDiff1 * squaredDiff2);

    return correlation;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default corelation;
