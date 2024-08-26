class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", "50000", "TCS");
const emp_radha = new Employee(33, "Radha", "HR", "74000", "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", "47000", "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", "45000", "INFY");
const emp_monica = new Employee(77, "Monica", "IT", "40000", "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", "75000", "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", "85000", "INFY");

 let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

 console.log(`#1.Find all employees working in TCS and log only emp name and company`);
 
for (const element of arrayEmployee) {
    if (element.emp_company =="TCS") {
        console.log(`Employee Name : ${element.emp_name}, Company name : ${element.emp_company}`);    
    }
}

console.log(`#2. Find "Finance" department employee and log only department & employee name`);

for (const element of arrayEmployee) {
    if (element.emp_dept=="Finance") {
        console.log(`Department Name : ${element.emp_dept},Employee Name : ${element.emp_name}`);    
        
    }
}

console.log(`#3. Find employee name starts with 'R' log all employee details`);
for (const element of arrayEmployee) {
    if (element.emp_name.startsWith("R")) {
        console.log(element);        
    }
}

console.log(`#4. Find employee whose salary greater than 75000, log employee name, company, salary`);

for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        console.log(`Employee name : ${element.emp_name}, Company name : ${element.emp_salary}, Salary : ${element.emp_salary}`);
        
    }
}

console.log(`#5. Find employees whose salary >= 50000, & from IT department log employee details`);

for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(element);
        
    }
}

console.log(`#6. Find all employee from company INFY log employee details`);

for (const element of arrayEmployee) {
    if (element.emp_company=="INFY") {
        console.log(element);
        
    }
}