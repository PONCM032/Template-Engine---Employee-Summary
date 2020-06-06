// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //gets info from Employee
        super(name, id, email);
        //School
        this.school = school;
    }
    //assigns role
    getRole() {
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}
//export
module.exports = Intern;
//school