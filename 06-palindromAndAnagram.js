console.log(`============= 1. Check given string is Palindrome or not ==============`);

function isPalindrom(str){ 
   
    const array = str.split("");
    const reverseArray = array.reverse();
    const reverseString = reverseArray.join("");
    if (str == reverseString){
        console.log(`"${str}" is palindrom`);
        
    }else{
        console.log(`"${str}" is not palindrom`);
    }
}
isPalindrom("madam");
isPalindrom("dad");
isPalindrom("hello");


console.log(`================== 2. Check given string is anagram or not ========== `);

function isAnagram(para1, para2) {
    const lenPara1 = para1.length;
    const lenPara2 = para2.length;
    if (lenPara1 !== lenPara2) {
        console.log(`string is not Anagram`);
        
    }
    let str1 = para1.split("").sort().join("");
    let str2 = para2.split("").sort().join("");
    if (str1===str2) {
        console.log(`"${para1}" and "${para2}" are Anagram`);
        
    } else {
        console.log(`"${para1}" and "${para2}"are not Anagram`);
    }
}
isAnagram("silent","listen");
isAnagram("Hello","World");
isAnagram("such","much");