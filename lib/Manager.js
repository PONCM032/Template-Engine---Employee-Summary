// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //gets info from Employee
        super(name, id, email);
        //Office Number
        this.officeNumber = officeNumber;
    }
    //assigns role
    getRole() {
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}
//export
module.exports = Manager;
//office number