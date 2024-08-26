console.log(`-------- Arrow function with no arguments and no return value ---------`);

let greet = ()=>{
    console.log('Good Morning, Today is Monday');  
}
greet();

console.log(`-------- Arrow function with arguments and no return value ---------`);

let multiply = (n1, n2, n3=1)=> {
  let result = n1 * n2 * n3;
    console.log(`Multiplication is : ${result}`);
    
}
multiply(5, 5, 2);
multiply(10, 4);

console.log(`-------- Arrow function with arguments and return value ---------`);

let addition = (num1, num2, num3, num4, num5) => {
        let result = num1 + num2 + num3 + num4 + num5;
        return result;
}
let addResult = addition(100, 100, 200, 349, 756);
console.log(`Addition is : ${addResult}`);

let addResult2 = addition("I am ", "learning ", "ES6 ", "features", " in depth");
console.log(`Addition is : ${addResult2} `);
