"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  avg: () => avg_default,
  corelation: () => corelation_default,
  extrema: () => extrema_default,
  max: () => max_default,
  median: () => median_default,
  min: () => min_default,
  mode: () => mode_default,
  percentile: () => percentile_default,
  range: () => range_default,
  stdDev: () => stdDev_default,
  variance: () => variance_default
});
module.exports = __toCommonJS(src_exports);

// src/utils/avg.ts
var avg = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate average.");
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg2 = sum / arr.length;
    return avg2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var avg_default = avg;

// src/utils/corelation.ts
var corelation = (arr1, arr2) => {
  try {
    if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
      throw new Error("Arrays should be of equal length and cannot be empty.");
    }
    const mean1 = arr1.reduce((acc, val) => acc + val, 0) / arr1.length;
    const mean2 = arr2.reduce((acc, val) => acc + val, 0) / arr2.length;
    const diff1 = arr1.map((num) => num - mean1);
    const diff2 = arr2.map((num) => num - mean2);
    const sumProduct = diff1.reduce(
      (acc, val, index) => acc + val * diff2[index],
      0
    );
    const squaredDiff1 = diff1.reduce((acc, val) => acc + val ** 2, 0);
    const squaredDiff2 = diff2.reduce((acc, val) => acc + val ** 2, 0);
    const correlation = sumProduct / Math.sqrt(squaredDiff1 * squaredDiff2);
    return correlation;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var corelation_default = corelation;

// src/utils/extrema.ts
var extrema = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find extrema.");
    }
    const min2 = Math.min(...arr);
    const max2 = Math.max(...arr);
    return [min2, max2];
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var extrema_default = extrema;

// src/utils/max.ts
var max = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find maximum.");
    }
    const max2 = Math.max(...arr);
    return max2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var max_default = max;

// src/utils/median.ts
var median = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate median.");
    }
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      return sortedArr[middle];
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var median_default = median;

// src/utils/min.ts
var min = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find minimum.");
    }
    const min2 = Math.min(...arr);
    return min2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var min_default = min;

// src/utils/mode.ts
var mode = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate mode.");
    }
    const occurrences = /* @__PURE__ */ new Map();
    arr.forEach((num) => {
      occurrences.set(num, (occurrences.get(num) || 0) + 1);
    });
    let mode2;
    let maxOccurrences = 0;
    for (const [key, value] of occurrences.entries()) {
      if (value > maxOccurrences) {
        mode2 = key;
        maxOccurrences = value;
      }
    }
    if (maxOccurrences === 1) {
      throw new Error("No mode found. All values occurred only once.");
    }
    return mode2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var mode_default = mode;

// src/utils/percentile.ts
var percentile = (arr, percentile2) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate percentile.");
    }
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const index = percentile2 / 100 * (sortedArr.length - 1);
    if (Number.isInteger(index)) {
      return sortedArr[index];
    }
    const lowerValue = sortedArr[Math.floor(index)];
    const upperValue = sortedArr[Math.ceil(index)];
    return lowerValue + (upperValue - lowerValue) * (index - Math.floor(index));
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var percentile_default = percentile;

// src/utils/range.ts
var range = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate range.");
    }
    const min2 = Math.min(...arr);
    const max2 = Math.max(...arr);
    const range2 = max2 - min2;
    return range2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var range_default = range;

// src/utils/stdDev.ts
var stdDev = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate standard deviation.");
    }
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const squaredDiffs = arr.map((num) => Math.pow(num - mean, 2));
    const variance2 = squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
    const stdDeviation = Math.sqrt(variance2);
    return stdDeviation;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var stdDev_default = stdDev;

// src/utils/variance.ts
var variance = (arr) => {
  try {
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot calculate variance.");
    }
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const squaredDiffs = arr.map((num) => Math.pow(num - mean, 2));
    const variance2 = squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
    return variance2;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
var variance_default = variance;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  avg,
  corelation,
  extrema,
  max,
  median,
  min,
  mode,
  percentile,
  range,
  stdDev,
  variance
});
//# sourceMappingURL=index.js.map