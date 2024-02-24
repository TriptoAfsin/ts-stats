const harmonicMean = (numbers: number[]): number | null => {
  try {
    if (numbers.length === 0) return null; // Handle edge case when the array is empty

    let sumOfReciprocals = 0;
    for (const number of numbers) {
      if (number === 0) return null; // Harmonic mean is undefined if any number is zero
      sumOfReciprocals += 1 / number;
    }

    return numbers.length / sumOfReciprocals;
  } catch (error) {
    console.error("Error calculating harmonic mean:", error);
    return null;
  }
};

export default harmonicMean;
