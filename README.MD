# ts-stats

Helpful utility functions for basic statistical operations 😀

<p align="center"><img src="https://raw.githubusercontent.com/TriptoAfsin/ts-stats/main/ts-stats.png" width="256px" alt="Logo"></img></p>

**Made in 🇧🇩(Bangladesh) with 💖"**

### Features -

1. Full TypeScript Support
1. Average, Max, Min, Mode, Median, Harmonic Mean
1. Percentile, Range
1. Variance , Standard Deviation
1. Corelation

## Installation

To use these utility functions in your project, you can install them via npm:

```bash
npm install ts-stats
```

or

```bash
yarn add ts-stats
```

## Usage

Here's an overview of the available utility functions and how to use them:

### Average (avg)

```javascript
import { avg } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const average = avg(numbers);
console.log("Average:", average);
```

### Correlation (corelation)

```javascript
import { corelation } from "ts-stats";

const dataX = [1, 2, 3, 4, 5];
const dataY = [2, 4, 6, 8, 10];
const correlation = corelation(dataX, dataY);
console.log("Correlation:", correlation);
```

### Extrema (extrema)

```javascript
import { extrema } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const { min, max } = extrema(numbers);
console.log("Min:", min, "Max:", max);
```

### Harmonic Mean (harmonicMean)

```javascript
import { harmonicMean } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const mean = harmonicMean(numbers);
console.log("Harmonic Mean:", mean);
```

### Median (median)

```javascript
import { median } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const medianValue = median(numbers);
console.log("Median:", medianValue);
```

### Mode (mode)

```javascript
import { mode } from "ts-stats";

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
const modeValue = mode(numbers);
console.log("Mode:", modeValue);
```

### Percentile (percentile)

```javascript
import { percentile } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const p90 = percentile(numbers, 90);
console.log("90th Percentile:", p90);
```

### Range (range)

```javascript
import { range } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const rangeValue = range(numbers);
console.log("Range:", rangeValue);
```

### Standard Deviation (stdDev)

```javascript
import { stdDev } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const deviation = stdDev(numbers);
console.log("Standard Deviation:", deviation);
```

### Variance (variance)

```javascript
import { variance } from "ts-stats";

const numbers = [1, 2, 3, 4, 5];
const varianceValue = variance(numbers);
console.log("Variance:", varianceValue);
```

### License

This project is licensed under the GPL License - see the LICENSE file for details.
