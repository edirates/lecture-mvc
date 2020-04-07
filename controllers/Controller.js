const Model = require("../models/Model.js");
const View = require("../views/View.js");

class Controller {
    static read() {
        let employees = Model.read();
        View.show(employees);
    }
    static create(parameters) {
        if (parameters.length === 3) {
            let employee = {
                firstname: parameters[0],
                lastname: parameters[1],
                position: parameters[2]
            }
            let newEmployee = Model.create(employee);
            View.successAdd(newEmployee);
        } else {
            View.errorInvalidInput();
        }
    }
}

module.exports = Controller;