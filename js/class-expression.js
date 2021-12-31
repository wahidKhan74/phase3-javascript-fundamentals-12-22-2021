// class expression syntax.
let Employee = class  {

    constructor(id,name,salary,dept){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    fetEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`)
    }
    showDpt(){
        console.log(`The dept - ${this.dept}`);
    }
}

let employee = new Employee('E1231','John Smith', 3454.546, "HR");
employee.fetEmployee();
employee.showDpt();