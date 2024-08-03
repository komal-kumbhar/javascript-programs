var sentence = "   Hey you are doing good, keep it up    ";
console.log(`Given string is: ${sentence}`);

var sentenceLength = sentence.length;
console.log(`Length of string : ${sentenceLength}`);

console.log(`======= Trim string===========`);
var result = sentence.trim();

console.log(`Given string before trim :${sentence} and it's length is ${sentence.length}`);
console.log(`Given string after trim  :${result} ,and it's length is ${result.length}`);

var firstChar = result.charAt(0);
console.log(`First character of string is: ${firstChar}`);

var lastChar = result.charAt(result.length-1);
console.log(`Last character of String is: ${lastChar}`);

var stringWord = result.split(" ");
var stringWordLength = stringWord.length;
console.log(`Total words in string are : ${stringWordLength}`);

var goodindex = result.indexOf("good");
console.log(`Index of good is: ${goodindex}`);

var subsentence = result.substring('22');
console.log(`Substring is : ${subsentence}`);

var checkUp = result.endsWith("up");
console.log(`Is string ends with word 'up':${checkUp}`);

var checkHey = result.startsWith("Hey");
console.log(`Is string starts with word 'Hey': ${checkHey}`);











