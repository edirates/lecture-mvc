const { Manager, Staff, Trainee } = require("./Employee.js");

class EmployeeFactory {
    static create (employee) {
        if (employee.position === "manager") {
            return new Manager (employee);
        } else if (employee.position === "staff") {
            return new Staff (employee);
        } else if (employee.position === "trainee") {
            return new Trainee (employee);
        }
    }
}

module.exports = EmployeeFactory;