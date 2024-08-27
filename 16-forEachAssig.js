const arrayNum = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`===========1. Array elements ===========`);
arrayNum.forEach((element, index) => {   
    console.log(`Index No.= ${index}, Element = ${element}`);    
});

console.log(`========== 2. Positive numbers in array ===========`);

arrayNum.forEach((element) => {
    if (element >= 0) {
        console.log(element);   
    }
});
 
console.log(`========== 3. Negative numbers in array ===========`);
const newArr = [];
arrayNum.forEach(element => {
    if (element < 0) {
        newArr.push(element);
    }
});
newArr.forEach(element => {
    console.log(element);
    
});

console.log(`========== 4.Find even numbers in array ===========`);
arrayNum.forEach(element => {
    if(element % 2 == 0){
        console.log(element);
        
    }
});

console.log(`========== 5.Find Sum of all numbers in array ===========`);

let sum = 0;
 arrayNum.forEach((element) => {
    sum = sum + element;
       
}); 
console.log(`Sum of given array number is : ${sum}`); 

console.log(`========== 6.Log even indexed array value ===========`);

arrayNum.forEach((element, index) => {
    if (index % 2== 0) {
        console.log(element);
        
    }
});