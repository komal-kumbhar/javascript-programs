console.log(`====================== Remove duplicate elements ====================`);

let array = [11, 3, 4, 11, 4, 7, 3];
console.log(`given array : ${array}`);

function removeDuplicate(array) {
    return[...new Set(array)];
}
console.log(`given array after remove duplicates: ${removeDuplicate(array)}`);


console.log(`============= Convert String ========= `);

function upperCaseFirstLastChar(sentence) {
    let array1= sentence.split(" ");
    let resultString="";
     for (let index = 0; index < array1.length; index++) 
        {
            let word = array1[index].split("");
            word[0] = word[0].toUpperCase();
            word[word.length-1] = word[word.length-1].toUpperCase();
            word = word.join("");
            resultString=resultString.concat(word)+" ";
        }

        return resultString;
    
}
let stringResult = upperCaseFirstLastChar("How are you mate");

 console.log(stringResult);






    













