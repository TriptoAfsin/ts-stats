# ts-stats

Helpful utility functions for basic statistical operations 😀

<p align="center"><img src="./getRandom.png" width="256px" alt="Logo"></img></p>

### Features -

1. Full TypeScript Support
1. Average, Max, Min, Mode, Median
1. Percentile, Range
1. Variance , Standard Deviation
1. Corelation

### Installation -

1. NPM -

```
npm i ts-stats
```

### Usage -

```javascript
//named import
let { numRandomizer, simpleRandomizer, getDay } = require("ts-stats");
//or whole import
let radomizers = require("simple-random-stuff");
// or you can use import as well(react, vue, angular etc)
import randomizers from "simple-random-stuff";

//getting ranged random number
console.log(numRandomizer(5, 20)); // 7

//getting simple random number, here 100 is the the upper range
console.log(simpleRandomizer(100)); // 57

//getting a random day
console.log(getDay()); // Monday

//getting a random month
console.log(radomizers.getMonth()); // July

//getting a coin toss result
console.log(radomizers.coinToss()); // Head

//getting a dice roll result
console.log(radomizers.diceRoll()); // 5

//getting a hex color
console.log(radomizers.getHexColor()); //#e80e53

//getting a random prime number
console.log(radomizers.getPrimeNumber(50, 100, (array = false))); // 53

//getting all the random prime numbers in a range
console.log(radomizers.getPrimeNumber(50, 100, (array = true))); // [53, 67 ....]
```

**Thanks for your time, please give a star to this project 😁**
