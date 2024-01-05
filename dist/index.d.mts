declare const avg: (arr: number[]) => number | string;

declare const corelation: (arr1: number[], arr2: number[]) => number | string;

declare const extrema: (arr: number[]) => [
    number,
    number
] | string;

declare const max: (arr: number[]) => number | string;

declare const median: (arr: number[]) => number | string;

declare const min: (arr: number[]) => number | string;

declare const mode: (arr: number[]) => number | string;

declare const percentile: (arr: number[], percentile: number) => number | string;

declare const range: (arr: number[]) => number | string;

declare const stdDev: (arr: number[]) => number | string;

declare const variance: (arr: number[]) => number | string;

export { avg, corelation, extrema, max, median, min, mode, percentile, range, stdDev, variance };
