const employees = [

]

function Employee(name, jobTitle, salary, status = 'nothing') {
  this.printEmployeeForm = function() {
    console.log(`This is: ${name} \n With a job title of: ${jobTitle} \n And a salary of: ${salary} \n who's status is ${status}`)
  };
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status ? status : 'Full Time';

}

const employee1 = new Employee('amren', 'programmer', '22,000');
const employee2 = new Employee('bob', 'a builder', 50000, 'Contract');
const employee3 = new Employee('tina turner', 'singer', 1000000);

employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()
