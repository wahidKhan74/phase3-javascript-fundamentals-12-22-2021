// class expression syntax.
let Employee = class  {

    constructor(id,name,salary,dept){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    getId() { return this.id; }
    setId(id) { this.id = id; }

    getName() { return this.name; }
    setName(name) { this.name = name; }

    getSalary() { return this.salary; }
    setSalary(salary) { this.salary = salary; }

    getDept() { return this.dept; }
    setDept(dept) { this.dept = dept; }

    fetEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`)
    }
    showDpt(){
        console.log(`The dept - ${this.dept}`);
    }
}

let employee = new Employee();

//set values of employee object
employee.setId("E12323");
employee.setName("Marry Smith");
employee.setDept("HR");
employee.setSalary(34345.45);

// get values of employee
console.log("Id: ", employee.getId());
console.log("Name: ",employee.getName());
console.log("Salary: ",employee.getSalary());
console.log("Dept: ",employee.getDept());

employee.fetEmployee();
employee.showDpt();