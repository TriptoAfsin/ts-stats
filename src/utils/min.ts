const min = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find minimum.");
    }

    const min: number = Math.min(...arr);
    return min;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default min;
