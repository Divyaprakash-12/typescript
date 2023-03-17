abstract class ElectricityBill {
    public rate:number
    public units:number
    constructor(rate:number,units:number){
        this.rate=rate;
        this.units=units;
    }
    public abstract billDetails():number;      
}
class Domestic extends ElectricityBill{
    constructor(rate:number,units:number){
        super(rate,units) ;  
    }
    public billDetails(): any {
        console.log(`Domestic Electricity Bill`);
        console.log(`Total units:`+this.units) //console.log(`total units :${this.units}`)
        console.log(`total amount :`+(this.rate*this.units))
    }
}
class Commercial extends ElectricityBill{
    constructor(rate:number,units:number){
        super(rate,units) ; 
    }
    public billDetails(): any {
        console.log(`Commercial Electricity Bill`);
        console.log(`Total units:`+this.units) //console.log(`total units :${this.units}`)
        console.log(`total amount :`+(this.rate*this.units))
    }
}
let obj1=new Domestic(5,120);
let obj2=new Commercial(10,120);
obj1.billDetails();
obj2.billDetails();

