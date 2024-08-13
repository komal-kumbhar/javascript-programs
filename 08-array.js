let array = [10, 20, 30, 20, 80];
console.log(array);
console.log(array[2]);//Read the value from array
console.log(array[array.length-1]); // Read the last value

console.log(`======== Update=======`);
array[3]=100;
console.log(array);


let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];
console.log(arrayList[2]);


console.log(`==============Traversing an array ======================`);

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);  
}

console.log(`==============Traversing an array in reverse order ======================`);
for (let index = arrayList.length-1; index >=0; index--) {
    const element = arrayList[index];
    console.log(element);   
}

console.log(`============== Print only even indexed elements  ===============`);
for (let index = 0; index < arrayList.length; index++) {
    if (index%2==0) {
        const element = arrayList[index];
        console.log(element); 
    }
}