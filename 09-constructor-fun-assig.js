function Bank(bankName,location, ifscCode, branchCode ){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
console.log(`--------------------------- Bank Function Constructor ----------------------------`);

const bankOne = new Bank("yesBank", "Pune","YESB0PUNE", "60405432");
console.log(`Bank Details : Bank Name: ${bankOne.bankName}, Location : ${bankOne.location}, IFSC Code : ${bankOne.ifscCode}, Branch Code :${bankOne.branchCode}`);

const bankTwo = new Bank("sbiBank", "Kolhapur","SBI0KOPUR", "42440543");
console.log(`Bank Details : Bank Name: ${bankTwo.bankName}, Location : ${bankTwo.location}, IFSC Code : ${bankTwo.ifscCode}, Branch Code :${bankTwo.branchCode}`);

const bankThree = new Bank("mahBank", "Mumbai","MUMB0MUB", "56804533");
console.log(`Bank Details : Bank Name: ${bankThree.bankName}, Location : ${bankThree.location}, IFSC Code : ${bankThree.ifscCode}, Branch Code :${bankThree.branchCode}`);

const bankFour = new Bank("axisBank", "Sangali","AXS0SANL", "86805433");
console.log(`Bank Details : Bank Name: ${bankFour.bankName}, Location : ${bankFour.location}, IFSC Code : ${bankFour.ifscCode}, Branch Code :${bankFour.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`------------------------------- Prototype Object SBI Bank -------------------`);
console.log(`SBI Bank Details = Open Time : ${bankTwo.openTime}, Close Time : ${bankTwo.closeTime}`);
console.log(`------------------------------- Prototype Object AXIS Bank ------------------`);
console.log(`Bank Details = Bank Name : ${bankFour.bankName}, Close Time : ${bankFour.closeTime}`);
console.log(`------------------------------- Prototype Object YES Bank -------------------`);
console.log(`Bank Details = Bank Name :${bankOne.bankName}, Branch Code : ${bankOne.branchCode}, Open Time : ${bankOne.openTime}`);
