console.log(`========== Count the Vowels =======`);

var sentence = "I am very good IT Developer";
var vowels = "aeiou"
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++; 
    }
}
console.log(`Count of vowel characters are : ${vowelCount}`);

console.log(`======= Sum of cube of numbers from 1 to 5========`);
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index * index *index;   
}
console.log(`Sum = ${sum}`);

console.log(`=========Odd positioned Characters=========`);

function oddPositionedChars(sentence){
    for(let index = 0; index < sentence.length; index++){
        var oddChar;
        var char = sentence.charAt(index);
        if (index % 2 == 1 && char !=" ") {
           oddChar= sentence.charAt(index);
           console.log(oddChar);    
      }
    }
}
console.log(`Given string : "Hard work always pays back"`);

oddPositionedChars("Hard work always pays back");
console.log(`Given string : "Soon I will be UI IT Champ"`);

oddPositionedChars("Soon I will be UI IT Champ");

