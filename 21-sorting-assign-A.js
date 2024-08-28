const arrayNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`============= 1. Reverse the array ==========`);
const arraySortReverse = arrayNumbers.sort((n1, n2) => {
    return n1 > n2 ? -1 : 1;
});
console.log(`Given array : ${arrayNumbers}`);
console.log(`Reverse array : ${arraySortReverse.reverse()}`);

console.log(`============= 2. Use sort() Without any custom logic ==========`);
const arraySort = arrayNumbers.sort();
console.log(`Given array : ${arrayNumbers}`);
console.log(`Result using sort() : ${arraySort}`);

console.log(`============= 3. Sort array in ascending order  ==========`);

const arrAscending = arrayNumbers.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(`Given array : ${arrayNumbers}`);

console.log(`Array in ascending order : ${arrAscending}`);

console.log(`============= 4. Greatest number in array  ==========`);
// let Greatest=0;
// for (let i = 0; i < arrAscending.length; i++) {
//     if (arrAscending[i]> Greatest) {
//         Greatest = arrAscending[i];    
//     }    
// }
let Greatest = arrAscending[arrAscending.length-1];
console.log(`Greatest number inGreatest given array : ${Greatest}`);

console.log(`============= 5.  number in array  ==========`);
let result = arrAscending[0];
console.log(`Smallest number in given array : ${result}`);

console.log(`============= 6. Remove duplicates from array  ==========`);

const uniqueArray = [];

for (let index = 0; index < arrayNumbers.length; index++) {
    let element = arrayNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}
console.log(`Given array : ${arrayNumbers}`);
console.log(`Array after remove duplicates : ${uniqueArray}`);