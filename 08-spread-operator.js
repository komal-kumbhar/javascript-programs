let array = [10, 20, 30, 20, 80];
console.log(array);
const result = array.join(",");
console.log(result);
console.log( typeof result);

console.log(`========= concat() ==========`);
let arrayOne = [10, 20, 30];
let arrayTwo = [100, 200, 930];
const arrayConcat = arrayOne.concat(arrayTwo);
console.log(arrayConcat);

console.log(`========= Spread Operator ==========`);
console.log(`========== 1. Creating new array from existing array ===========`);
let arrayFive = [10, 20, 30, 20, 80];
console.log(arrayFive);
console.log(...arrayFive);
let arraySix = [...arrayFive];

console.log(`========== 2. Array concatenation ===========`);
let arraySeven = [10, 20, 30];
let arrayEight = [100, 200, 930];
let arrayNine = [...arraySeven, ...arrayEight];
console.log(arrayNine);

console.log(`========== Sum the array elements ===========`);
let arrayTen = [10, 20, 30, 20, 10];
let sum = 0;
for (const element of arrayTen) {
    sum = sum + element;   
}
console.log(sum);

