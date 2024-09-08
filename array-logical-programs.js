console.log(`------------- 1. Program to Print number of element of an array -------------`);
function arrayElement(arr){
    console.log(`Number of element in array : ${arr.length}`);
    
}
let array = [1, 2, 4, 3, 5, 6]
arrayElement(array);

console.log(`------------- 2. Program to Print sum of element in array -------------`);

let array1 = [1, 3, 4, 2, 5, 6];
function sumCalculate(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum ;
      
}
let result = sumCalculate(array1);
console.log("Sum of items in array =",result);

console.log(`------------- 3. Program to Print sum of element in array -------------`);



console.log(`------------- 4. Program to Print array in ascending order -------------`);
let arr = [4, 8, 5, 3, 2, 7, 1, 9, 3 ];
console.log(`Given array = ${arr} `);
let newArr = arr.sort();
console.log(`Array with ascending array = ${newArr}`);


console.log(`------------- 5. Program to Print array in descending order -------------`);
const newArrDesc = newArr.reverse();
console.log("Array with descending order =", newArrDesc);

// console.log(`------------- 6. Program to find third largest number in array -------------`);
// let array2 = [5, 4, 6, 8, 3, 9, 1, 4];
// console.log("Given array :",array2);

// let sortArr = arr.sort();
// console.log("Third largest number :",sortArr.length-3);
    
// console.log(`------------- 7. Program to find second largest number in array -------------`);
//  let array3 = [5, 7, 1, 8, 4, 9, 3, 2];
// console.log(`Given array = ${array3}`);
// let arrSecSort = array3.sort();
// console.log(arrSecSort);
// console.log("Second largest number :",arrSecSort[arrSecSort.length-2]);

// console.log(`------------- 8. Program to find largest number in array -------------`);

// let array4 = [5, 8, 3, 6, 9, 11, 2, 7, 4];
// const sortArr4 = array4.sort();
// console.log(sortArr4);
// const largestNum= sortArr4[sortArr4.length-1];
// console.log(largestNum);

