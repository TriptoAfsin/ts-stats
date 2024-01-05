const percentile = (arr: number[], percentile: number): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate percentile.");
    }

    const sortedArr: number[] = arr.slice().sort((a, b) => a - b);
    const index = (percentile / 100) * (sortedArr.length - 1);

    if (Number.isInteger(index)) {
      return sortedArr[index];
    }

    const lowerValue = sortedArr[Math.floor(index)];
    const upperValue = sortedArr[Math.ceil(index)];

    return lowerValue + (upperValue - lowerValue) * (index - Math.floor(index));
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default percentile;
