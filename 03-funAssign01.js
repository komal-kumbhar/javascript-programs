console.log("==== Function with No Argument and No Return====");


function student() {
    console.log("I am learning JavaScript language") 
}
student();

function work() {
    console.log("Working with team");
    
}
work();

console.log("=========Personal Details=========");

function personalDetails(firstName, lastName, collegeName){
    console.log("First Name is:",firstName)
    console.log("Last Name is:",lastName)
    console.log("College Name is:",collegeName)
    
}
personalDetails("Komal", "Kumbhar", "YP college");

console.log("=======Addition of Values ========");
function addThreeValues(val1, val2, val3) {
    var result= val1 + val2 + val3
    console.log("Addition is :",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");


