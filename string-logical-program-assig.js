console.log(`========== 1. To find length or total no. of character of string ======`);
const str1 = "Hello, World!";
const strLength = str1.length;
console.log(`The length of string "${str1}" is : ${strLength}`);

const str2 = "JavaScript is the language of Internet";
const strLength2 = str2.length;
console.log(`The length of string "${str2}" is : ${strLength2}`);

console.log(`========= 2. Log the last character of given string ==========`);

function getLastChar(str) {
    return str.charAt(str.length-1);
}
const str3 = "Hey, my friend, Programming Language";
const str4 = "I am learning logical programs";
const str5 = "Angular";

console.log(`The last character of string "${str3}" is : ${getLastChar(str3)}`);
console.log(`The last character of string "${str4}" is : ${getLastChar(str4)}`);
console.log(`The last character of string "${str5}" is : ${getLastChar(str5)}`);


console.log(`========== 3. Log the first character of given string ============`)
const str6 = "React";
const str7 = "Elon Musk";
const str8 = "Apple founder is Stew Job";

function getFirstChar(str) {
    return str.charAt(0);
}

console.log(`The first character of string "${str6}" is ${getFirstChar(str6)}`);
console.log(`The first character of string "${str7}" is ${getFirstChar(str7)}`);
console.log(`The first character of string "${str8}" is ${getFirstChar(str8)}`);

console.log(`======== 4. To check whether given strings contains word UI or not ========`);
function includeUI(param) {
    return param.includes("UI");
}
const param = "React-UI Developer";
const param1 = "UI Developer";
const param2 = "Front end and backend technologies";

console.log(`Does the string "${param}" contains 'UI' = ${includeUI(param)}`);
console.log(`Does the string "${param1}" contains 'UI' = ${includeUI(param1)}`);
console.log(`Does the string "${param2}" contains 'UI' = ${includeUI(param2)}`);

console.log(`========= 5. How do you split a string into an array of substring ========`);
function splitString(param, delimiter) {
    return param.split(delimiter);
}
const param3 = "apple, orange, banana";
const param4 = "Stew, Bill, Jenny, Elon";

const result1 = splitString(param3, ',');
console.log(`The array of substring from "${param3}" is :`,result1);

const result2 = splitString(param4, ' ,');
console.log(`The array of substring from "${param4}" is :`,result2);

console.log(`======== 6. Reverse string using Predefined Method =========`);
function getReverseString(str) {
   const getReverseString =str.split('').reverse().join('');
   return getReverseString;
}
const str9 = "Software";
const str10 = "UI Developer";

console.log(`The reverse string "${str9}" is : ${getReverseString(str9)}`);
console.log(`The reverse string "${str10}" is : ${getReverseString(str10)}`);

console.log(`======== 6. Reverse string without using Predefined Method =========`);
function reverseStr(param) {
    let reserveString ;
    for (let i=param.length-1; i>=0; i--){
           reserveString += param[i];
    }
       return reserveString ;
}
const param5 = "Web Developer";
const param6 = "Billion Dollar ";
const param7 = "Java";

console.log(`The reverse string Without using method "${param5}" is : ${getReverseString(param5)}`);
console.log(`The reverse string Without using method "${param6}" is : ${getReverseString(param6)}`);
console.log(`The reverse string Without using method "${param7}" is : ${getReverseString(param7)}`);