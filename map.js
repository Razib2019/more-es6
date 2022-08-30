const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// const result = getDoubles(numbers);
// console.log(result);

function doubleItOld(num) {
    return num * 2;
}

// const result = getDoubles(numbers);
// console.log(result);


const doubleIt = num => num * 2;


const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);
makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);

/* 
Purpose:
1. Get an array
2. For every elements of the array do something
3. Store the result in an array
4. Return the result array
*/

const result = getDoubles(numbers);
// console.log(result);