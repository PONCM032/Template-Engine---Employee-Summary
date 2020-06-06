// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        //constructor arguments
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //get keys
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

};
//export
module.exports = Employee;


    //last qest, which team would would you like to add? -
        //man/engineer/intern/none
    //figure out how to repeat member promp until none selected

//Classes
    //Employee
        //name, id, email
    //new manager - push responses and build object

