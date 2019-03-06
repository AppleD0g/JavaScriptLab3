class Employee {

  constructor(private name: string, private salary: number) {}
 
  payRise(amount: number): void {
    this.salary += amount;
  }
  
  isHigherTaxPayer(): boolean {
    return this.salary > 42000;
  }
  
  setName(newName: string): void { 
    this.name = newName;
  }
  
  getSalary(): number {
	return this.salary
  }
}

var emp1 = new Employee("Lydia", 10000);
emp1.payRise(100000);
console.log("Higher tax? " + emp1.isHigherTaxPayer());
