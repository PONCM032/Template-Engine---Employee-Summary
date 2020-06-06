// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        //gets info from Employee
        super(name, id, email);
        //GitHub
        this.GitHub = GitHub;
    }
    //assigns role
    getRole() {
        return "Engineer";
    }

    getGitHub(){
        return this.GitHub;
    }
}
//export
module.exports = Engineer
