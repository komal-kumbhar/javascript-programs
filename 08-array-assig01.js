const fruits_seasonal = ["Banana", "Orange","Apple","Mango", "Water Melon"];
console.log(`===== 1 Given seasonal fruits list ====`);
console.log(fruits_seasonal);
console.log(`====2 Add element before 'Banana'====`);

fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`=====3 remove Mango from array`);
let fruitsOne = ["Banana", "Orange","Apple","Mango", "Water Melon"];
let splice = fruitsOne.splice(3, 1);
console.log(`Removed fruit is : ${splice}`);
console.log(fruitsOne);

console.log(`===4 Insert element Pineapple at the last===`);
let fruitsTwo = ["Banana", "Orange","Apple","Mango", "Water Melon"];
let fruitPush = fruitsTwo.push("Pineapple");
console.log(fruitsTwo);

console.log(`=== 5 Insert element 'Dragon Fruit====`);
const fruitsThree = ["Banana", "Orange","Apple","Mango", "Water Melon"];
let splice2 = fruitsThree.splice(4,0, "Dragon Fruit");
console.log(fruitsThree);

console.log(`==== 6 Replace element Orange with kiwi=== `);
const fruitsFour =  ["Banana", "Orange","Apple","Mango", "Water Melon"];
let splice3 = fruitsFour.splice(1, 1, "Kiwi");
console.log(`Replaced element : ${splice3}`);
console.log(fruitsFour);

console.log(`== 7 log elements from index 1 to 4===`);
const fruitsFive =  ["Banana", "Orange","Apple","Mango", "Water Melon"];
 let sliceFruit = fruitsFive.slice(1,4);
 console.log(fruitsFive);
 console.log(`Fruits from index 1 to 4 : ${sliceFruit}`);
 
console.log(`===== 8 Last 3 elements ===`);
const fruitsSix =  ["Banana", "Orange","Apple","Mango", "Water Melon"];
console.log(fruitsSix.slice([fruitsSix.length - 3]));
