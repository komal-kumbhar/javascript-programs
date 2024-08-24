console.log(`======== count prime numbers ===========`);
const array = [3, 9, 7, 6, 19, 29, 53];

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
    let count =0;
    for (const element of array) {
        var result = isPrime(element);
        
        if(result==true){
           count++;    
        }    
    }
    console.log(`Given array is: ${array}`); 
    console.log(`Total count of prime number : ${count}`); 

console.log(`======== count spaces in given string ===========`);

function spaceCount(str, delimiter) {
    if (str.charAt(" ")) {
        return count++;
    } 
}
 let spaces = spaceCount("Revision is the mother of success");
console.log(`Total spaces in "Revision is the mother of success" string is :${spaces}`);

let spaces2 = spaceCount("JavaScript is  the language if internet world");
console.log(`Total spaces in "JavaScript is  the language if internet world" string is :${spaces2}`);

