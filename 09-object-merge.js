
const emp = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
// emp = {
//    city: "LA" 
// }
emp.age = 80;
console.log(emp);

Object.freeze(emp);
emp.firstName="Elon";
console.log(emp);

console.log('======== Object cloning or merging ===========');
const student = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const clonedObj = {...student};
console.log(clonedObj);

console.log('======== Object Merge ===========');
const std = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
const address = {
    city: "LA",
    pin: 411057
}
const mergedObject = Object.assign({}, std, address);
console.log(mergedObject);
const mergeObj = { ...std, ...address };
console.log(mergeObj);

class Student{
    //Constructor: Special method used to initialize an object
    constructor(fullName, graduation, collegeName, city){
        this.fullName = fullName;
        this.graduation = graduation;
        this.collegeName = collegeName;
        this.city = city;
    }
    //Member Function
}

const std1 = new Student("Sid Gates", 2024, "Clg-one", "Pune");
console.log(std1);
const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");
console.log(std2);