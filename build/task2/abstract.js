"use strict";
class ElectricityBill {
    constructor(rate, units) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricityBill {
    constructor(rate, units) {
        super(rate, units);
    }
    billDetails() {
        console.log(`Domestic Electricity Bill`);
        console.log(`Total units:` + this.units); //console.log(`total units :${this.units}`)
        console.log(`total amount :` + (this.rate * this.units));
    }
}
class Commercial extends ElectricityBill {
    constructor(rate, units) {
        super(rate, units);
    }
    billDetails() {
        console.log(`Commercial Electricity Bill`);
        console.log(`Total units:` + this.units); //console.log(`total units :${this.units}`)
        console.log(`total amount :` + (this.rate * this.units));
    }
}
let obj1 = new Domestic(5, 120);
let obj2 = new Commercial(10, 120);
obj1.billDetails();
obj2.billDetails();
