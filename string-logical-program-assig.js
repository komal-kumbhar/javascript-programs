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

console.log(`======== 6 A. Reverse string using Predefined Method =========`);
function getReverseString(str) {
   const getReverseString =str.split('').reverse().join('');
   return getReverseString;
}
const str9 = "Software";
const str10 = "UI Developer";

console.log(`The reverse string "${str9}" is : ${getReverseString(str9)}`);
console.log(`The reverse string "${str10}" is : ${getReverseString(str10)}`);

console.log(`======== 6 B. Reverse string without using Predefined Method =========`);
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

console.log(`=========================== 7. Count character "a" ====================`);

function charCount(str) {
    let count = 0;
    for (const char of str) {     
           if (char=="a"|| char=="A") {
                count++;
           }          
    }
    console.log(`The numbers of character "a" in string ${str} = ${count}`);
}
charCount("JavaScript");
charCount("Do or Die");
charCount("Learn with us. Job with us");
charCount("Empowering Dreams, Guaranteeing Futures");
charCount("Anny, My favorite fruit is Apple");

console.log(`=========================== 8. Count vowels ====================`);
function vowelCount(param){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i= 0; i<=param.length-1; i++){
            if (vowels.includes(param[i])){
                count++;
            }            
    }
        console.log(`The numbers of vowels in string ${param} is = ${count}`);
        
    }
    vowelCount("JavaScript");
    vowelCount("HTML and CSS");
    vowelCount("Language of Internet");
    vowelCount("I am UI Developer");
    vowelCount("Do or Die");

console.log(`=========================== 9.Count Word ====================`);

function wordCount(str) {
    let words = str.split(' ');
   console.log(`Total words in "${str}" string is : ${words.length}`);
    
}
wordCount("JavaScript The language of Internet");
wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
wordCount("Beyond frameworks, Beyond Imagination");
wordCount("I am passionate software developer");

console.log(`=========================== 10.Duplicate character count  ====================`);

let str = "Banana";  // a - 3, n - 2

function doubleChar(string) {

    let finalOutput = {};
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        if (char==element) {
            count++;     
        }
    }
    // console.log(element, count);
    if (count>1) {
        finalOutput[element] = count;
    }  
}
for (const key in finalOutput) {
    const element = finalOutput[key];
    console.log(` ${string} : ${key} - ${element}`);
    
}    
}
doubleChar("Banana");
doubleChar("Apple");
doubleChar("Software Developer");


console.log(`======================== 11.Palindrom { similar from starting and end } ====================`);

    function isPalindrom(sentence) {

        const str = sentence.toLowerCase().split("");
        for(let i=0; i<str.length; i++){
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

const strings = ['madam', 'banana', 'radar', 'Civil', 'Noon', 'stats'];

strings.forEach(sentence =>{
    if ( isPalindrom(sentence)){
        console.log(`"${sentence}" is Palindrome.`);    
    }else {
        console.log(`"${sentence}" is not Palindrome.`); 
    }
});


console.log(`======================== 12.Anagram { same characters in different order } ====================`);

 function isAnagram(str1, str2) {
    const lenStr1 = str1.toLowerCase().length;
    const lenStr2 = str2.toLowerCase().length;
    if (lenStr1 !== lenStr2) {
        console.log(`str is not anagram`);
        
    }
    const para1 = str1.toLowerCase().split("").sort().join("");
    const para2 = str2.toLowerCase().split("").sort().join("");
    if(para1==para2){
        console.log(`"${str1}" and "${str2}" is anagram`);
        
    }else{
        console.log(`"${str1}" and "${str2}" is not anagram`);
    }
 }
 isAnagram("Listen", "silent");
 isAnagram("heart", "earth");
 isAnagram("debit card", "credit card");


console.log(`======================== 13.Remove characters from string ====================`);

 function removeChar(str, removeChar) {
    
 }