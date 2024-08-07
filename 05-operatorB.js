console.log(`------ Greatest number---------`);

function greaterNumber( n1, n2){
    var result = n1>=n2 ? n1 : n2;
    console.log(`Given numbers are ${n1}, ${n2} and greater number is :${result}`);
    
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`------- Check Odd or Even number--------`);

function isEvenOrOddNum(num){
   var result =  num % 2 == 0 ? true : false;
   console.log(`Is Given number : ${num} is even :${result} `);
   
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`----------- Find Even or Odd word length -------- `);

function wordLength(word){
    var resultLength = word.length;
    var result = resultLength % 2 == 0 ? true :false;
    console.log(`Given word is ${word} and it's word length :${resultLength} is Even :${result}` );
    
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");