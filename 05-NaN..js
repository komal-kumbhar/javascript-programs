console.log(`========= Implicit Conversion ==============`);
console.log('5' + 2);

console.log(10 + true);

console.log(10 + false);

console.log(`========= Explicit Conversion ==============`);
console.log(`====== String to Number  =======`);
var n1 = "10";
var result = +n1;
console.log(`n1 value ${n1} and it's type is ${typeof n1 }`);
console.log(`result value ${result} and it's type is ${typeof result }`);

var result = Number(n1);
console.log();
console.log(`n1 value ${n1} and it's type is ${typeof n1 }`);
console.log(`result value ${result} and it's type is ${typeof result }`);


console.log(`====== Number to String  =======`);
var n2 = 20;
var result = n2.toString();
console.log(`n2 value ${n2} and it's type is ${typeof n2 }`);
console.log(`result value ${result} and it's type is ${typeof result }`);

var result = String(n2);
console.log(`n2 value ${n2} and it's type is ${typeof n2 }`);
console.log(`result value ${result} and it's type is ${typeof result }`);

var n3;
var res = +n3;
console.log(`Conversion  is ${res} , type is ${typeof res}`);