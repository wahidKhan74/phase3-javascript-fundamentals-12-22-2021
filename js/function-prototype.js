function Employee(id,name,salary,dept) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
}

// Add properties (data) to prototype.
Employee.prototype.nationality = "Canadian";
Employee.prototype.address =" ABC Stree, Xyz zone.";

// Add function within prototype.
Employee.prototype.showId = function() {
    return this.id;
}
Employee.prototype.salIncreament = function() {
    return this.salary += 2000;
}

// create object
let emp1 = new Employee('E12743',"John Smith",456545.56, "Enginerring");
emp1.name ="John Snow";
emp1.jobType = "Full Time";

// access prototype based properties  -> dot (.)
console.log(emp1.nationality);
console.log(emp1.address);
// access prototype based function
console.log(emp1.showId());
console.log(emp1.salIncreament());
console.log(emp1.toString());

console.log(Employee.prototype.isPrototypeOf(emp1));


let emp2 = new Employee('E12744',"David Bakum",564545.56, "Enginerring");
console.log(emp1);
console.log(emp2);

console.log(emp2.showId());