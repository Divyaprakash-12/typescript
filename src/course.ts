class Course{
    courseId?:string|number
    courseName:string
    constructor(  courseId:string|number, courseName : string){
            this.courseId=courseId;
            this.courseName=courseName;
        }
        courseDetails(){
            console.log(`Course ID :`+this.courseId);
            console.log(`Course Name :`+this.courseName);
        }
}
class Employee extends Course{
    empId?:string|number;
    empName:string;
    empdes:string;
    constructor(   courseId:string|number,
        courseName:string,empId:string|number,
        empName:string,
        empdes:string){
            super(courseId,courseName)
            this.empId=empId;
            this.empName=empName;
            this.empdes=empdes;
        }
        employeeDetails(){
            console.log(`Employee ID :`+this.empId);
            console.log(`Employee Name :`+this.empName);
            console.log(`Employee Designation :`+this.empdes);
        }
}
class Admin extends Employee{
    adminId?:string|number;
    adminName:string;
    constructor(courseId:string|number,courseName:string,empId:string|number,
        empName:string,empdes:string,  adminId:string|number,adminName:string){
            super(courseId,courseName,empId,empName,empdes)
            this.adminId=adminId;
            this.adminName=adminName;
        }
        adminDetails(){
           obj .courseDetails();
           obj .employeeDetails();
            console.log(`Admin Id :`+this.adminId);
            console.log(`Admin Name :`+this.adminName);
        }
}
var obj=new Admin(101,'python','B101','prakash','python developer','CGvak123','CGVAK');
obj.adminDetails();