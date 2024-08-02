console.log("========Normal Function =========");
function bankDetails(bankName, accountNum, location, pinCode){
    console.log("Bank Name : ",bankName)
    console.log("Account Number : ",accountNum)
    console.log("Location : ",location)
    console.log("Pin Code : ",pinCode)   
}
console.log("=========Branch 1 ===========");
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);

console.log("=========Branch 2 ===========");
bankDetails("Axis Bank", 7856782345, 'Mumbai',441202);

console.log("=========Branch 3 ===========");
bankDetails('HDFC Bank',8956782345,'Pune',631202, "Open");