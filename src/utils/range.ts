const range = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate range.");
    }

    const min: number = Math.min(...arr);
    const max: number = Math.max(...arr);
    const range: number = max - min;
    return range;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default range;
