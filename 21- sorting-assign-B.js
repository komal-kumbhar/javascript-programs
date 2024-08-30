
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`========== 1. Sort in descending order with emp_id  ============`);
const arrEmpDescending = arrayEmployee.sort((e1, e2) => {
    return e1.emp_id > e2.emp_id ;
}).reverse();

for (const element of arrEmpDescending) {
    console.log(`Employee ID : ${element.emp_id}, Employee Name : ${element.emp_name}, Employee Department : ${element.emp_dept}`);
    
};

console.log(`========== 2. Sort in ascending order with emp_dept  ============`);

const arrEmpAscending = arrayEmployee.sort((e1, e2) => {
    return e1.emp_dept > e2.emp_dept ;
});
for (const element of arrEmpAscending) {
    console.log(`Employee ID : ${element.emp_id}, Employee Department : ${element.emp_dept}, Employee Company : ${element.emp_company}`);
};

console.log(`========== 2. Sort in descending order with emp_salary  ============`);

const arrEmpSalaryDescending = arrayEmployee.sort((e1, e2) => {
    return e1.emp_salary > e2.emp_salary ;
});

for (const element of arrEmpSalaryDescending) {
    console.log(` Employee Name : ${element.emp_name}, Employee Salary : ${element.emp_salary}, Employee Company : ${element.emp_company}`);
}