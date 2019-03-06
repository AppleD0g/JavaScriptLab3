var Employee = (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.payRise = function (amount) {
        this.salary += amount;
    };

    Employee.prototype.isHigherTaxPayer = function () {
        return this.salary > 42000;
    };

    Employee.prototype.setName = function (newName) {
        this.name = newName;
    };

    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
})();

var emp1 = new Employee("Lydia", 10000);
emp1.payRise(100000);
console.log("Higher tax? " + emp1.isHigherTaxPayer());
