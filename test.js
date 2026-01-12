import { sum } from './sum.js';


if (sum(2, 3) !== 5) {
throw new Error('Test failed: 2 + 3 should be 5');
}


if (sum(-1, 1) !== 0) {
throw new Error('Test failed: -1 + 1 should be 0');
}


console.log('All tests passed');