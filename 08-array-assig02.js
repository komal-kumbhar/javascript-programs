const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array : ${arrayNumbers}`);

console.log(`===1. length of array ==`);
console.log(arrayNumbers.length);arrayNumbers

console.log(`====== 2.=====`);
console.log(`First element in array: ${arrayNumbers[0]}`);
console.log(`Last element in array: ${arrayNumbers[10]}`);

console.log(`=== 3. =====`);
console.log(arrayNumbers.splice([arrayNumbers.length - 3],1));

console.log(`====== 4. Even numbers ======`);
let numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let even = [];
for(let i = 0; i <numbers.length; i++){
    if (numbers[i]%2==0){
       even.push(numbers[i]);         
  }
}
console.log(even);

console.log(`====== 5. Odd numbers ======`);
let odd = [];
for(let i = 0; i <numbers.length; i++){
    if (numbers[i]%2==1){
      odd.push(numbers[i]);         
  }
}
console.log(odd);

console.log(`====== 6. Multiple of 5 ======`);
let multiple = [];
for(let i = 0; i <numbers.length; i++){
    if (numbers[i]%5==0){
      multiple.push(numbers[i]);         
  }
}
console.log(multiple);

console.log(`====== 7. Is number available ======`);

let array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let includeNum = array.includes(115);
console.log(includeNum);

console.log(`====== 8. Is number available ======`);
let includeNumber = array.includes(23);
console.log(includeNumber);

console.log(`==== insert number at index 3====`);
let number1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const spliceNum = number1.splice(3, 0, 55, 66);
console.log(number1);

console.log(`======= Delete Elements===`);
const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let splice2 = arrayNum.splice(4, 3);
console.log(`Deleted numbers : ${splice2}`);

console.log(arrayNum);

