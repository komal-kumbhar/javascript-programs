// numeric string used with + gives string type

let result;
console.log(`-----------------------------------------------------------------`);

result = '3' + 2;
console.log(`'3' + 2 = ${result} ;  Reason : Here datatype of '3' is string and datatype of 2 is number.+2 get internally changed and it becomes string. Hence concat this two numbers.`);

console.log(`-----------------------------------------------------------------`);
result = '3' + true;
console.log(`'3' + true = ${result} ;  Reason : Here datatype of '3' is string and datatype of true is boolean and it  get internally changed and it becomes string. Hence concat this two strings.`);

console.log(`-----------------------------------------------------------------`);
result = '3' + undefined;
console.log(`'3' + undefined = ${result} ;  Reason : Here datatype of '3' is string and datatype of undefined is undefined and it  get internally changed and it gets concat.`);

console.log(`-------------------------------------------------------------------------------------`);
result =  '3' + null;
console.log(`'3' + null = ${result} ; Reason : Here datatype of '3' is string and datatype of null is object and it  get internally changed and it becomes string. Hence concat this two strings.`);


