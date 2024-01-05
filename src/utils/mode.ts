const mode = (arr: number[]): number | string => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate mode.");
    }

    const occurrences = new Map<number, number>();
    arr.forEach(num => {
      occurrences.set(num, (occurrences.get(num) || 0) + 1);
    });

    let mode: number | undefined;
    let maxOccurrences = 0;

    for (const [key, value] of occurrences.entries()) {
      if (value > maxOccurrences) {
        mode = key;
        maxOccurrences = value;
      }
    }

    if (maxOccurrences === 1) {
      throw new Error("No mode found. All values occurred only once.");
    }

    return mode as number;
  } catch (error) {
    return `Error: ${(error as Error).message}`;
  }
};

export default mode;
