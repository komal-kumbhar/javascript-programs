let professor = {
        firstName : "Advert",
        lastName : "Charl",
        city :    " Pune",
        contact : 9587456512,
        emailId : 'advert58@gmail.com',
        degrees : {
                engineering : 'CSC',
                PhD : 'Adv Computing'
        },
        certificates : ["Hacker Rank participation", "Certification in IFE course", "Certificate in Adv programming"]
     
}

console.log(`=========== Given object details ===========`);
console.log(professor);
// console.log(professor.degrees);

console.log("========== Add new property totalExperience =========");

professor.totalExperience = " 14 years";

const professorKeys = Object.keys(professor);
console.log(professorKeys);

console.log(`========= Modify existing Property city ===========`);
professor.city =" Kolhpur";
console.log(professor);
 
console.log(` ========== add new certificate ========`);

professor.certificates.splice(2,0, 'Oracle certified');
console.log(`updated object array = ${professor.certificates}`);

console.log(`======= Last element in array certificate =========`);
const entries = Object.entries(professor.certificates)

console.log(entries[professor.certificates.length-1]);

console.log(`========== Traverse array using for loop ==========`);

for (const key in professor.certificates) {
        if (Object.prototype.hasOwnProperty.call(professor.certificates, key)) {
            const element = professor.certificates[key];
            console.log(`${key}, ${element}`);
        }
    }


 


console.log(`======== Complete object ============`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}





