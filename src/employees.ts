class employee {
    public empid:number;
    public empname: string;
    public empdesignation:string;
    public empsalary: number;
    public empproject: string;
    constructor(empid: number, empname: string, empdesignation: string, empsalary: number, empproject: string) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    public displayEmployeeDetails(){
        console.log(`Employee id =`+this.empid);
        console.log(`Employee name =`+this.empname);
        console.log(`Employee salary =`+this.empsalary);
        console.log(`Employee project=`+this.empproject);
    }
}
let details= new  employee();
details.displayEmployeeDetails();