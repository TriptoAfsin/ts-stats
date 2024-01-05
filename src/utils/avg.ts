const avg = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate average.");
    }

    const sum: number = arr.reduce((acc, val) => acc + val, 0);
    const avg: number = sum / arr.length;
    return avg;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default avg;
