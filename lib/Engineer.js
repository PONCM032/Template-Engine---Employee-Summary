// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        //gets info from Employee
        super(name, id, email);
        //GitHub
        this.github = github;
    }
    //assigns role
    getRole() {
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}
//export
module.exports = Engineer
