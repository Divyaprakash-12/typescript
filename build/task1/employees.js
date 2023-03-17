"use strict";
class employee {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    displayEmployeeDetails() {
        console.log(`Employee id :` + this.empid);
        console.log(`Employee name :` + this.empname);
        console.log(`Employee Designation :` + this.empdesignation);
        console.log(`Employee salary :` + this.empsalary);
        console.log(`Employee project:` + this.empproject);
    }
}
let details = new employee(101, "hari", "Designer", 20000, "javascript");
details.displayEmployeeDetails();
