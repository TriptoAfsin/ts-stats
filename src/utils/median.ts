const median = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate median.");
    }

    const sortedArr: number[] = arr.slice().sort((a, b) => a - b);
    const middle: number = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      return sortedArr[middle];
    }
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default median;
