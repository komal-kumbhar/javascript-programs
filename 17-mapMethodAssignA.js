const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array : ${arrayNumbers}`);
console.log(`=========== 1. Transform array with +10 ===========`);
const plusArrNum = arrayNumbers.map((element) => {
    return element + 10;
}); 

console.log(`After transform array : ${plusArrNum}`);

console.log(`=========== 2. Transform  to cube of array ===========`);
const cubeArrNum = arrayNumbers.map((element) => {
    return element * element * element;
});
console.log(`Cube of array elements : ${ cubeArrNum}`);

console.log(`========= 3. Add index value into element ==========`);

const addIndexArrElement = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(`Addition of element and its index : ${addIndexArrElement}`);
