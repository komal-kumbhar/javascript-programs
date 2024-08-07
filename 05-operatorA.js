function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    
    var len = result.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log(`---------function with No argument No return-------`);

function stringLine(line){
    console.log(`Given String is :${line}`);
    var stringLineLength = line.length;
    // console.log(stringLineLength);
    
    var words = line.split(" ");
    // console.log(words);
    var length = words.length;
    var division = stringLineLength / length ;
    console.log(`stringLength divided by string words :${division}`);
    
    var multiple = stringLineLength * length ; 
    console.log(`Multiplication of string length and string words :${multiple}`); 
}
stringLine("I am Angular Developer");

 