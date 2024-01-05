const max = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find maximum.");
    }

    const max: number = Math.max(...arr);
    return max;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default max;
