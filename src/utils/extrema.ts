const extrema = (arr: number[]): [number, number] | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find extrema.");
    }

    const min: number = Math.min(...arr);
    const max: number = Math.max(...arr);
    return [min, max];
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default extrema;
