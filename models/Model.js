const fs = require("fs");
const EmployeeFactory = require("./EmployeeFactory.js");

class Model {
    static read() {
        let data = JSON.parse(fs.readFileSync("./employees.json", "utf8"));
        let employees = [];
        for (let i = 0; i < data.length; i++) {
            let employee = EmployeeFactory.create(data[i]);
            employees.push(employee);
        }
        return employees;
    }
    static save(data) {
        data = JSON.stringify(data, null, 2);
        fs.writeFileSync("./employees.json", data, "utf8");
    }
    static create(dataEmployee) {
        let employees = Model.read();
        let id = 1;
        if (employees.length > 0) {
            id = employees[employees.length-1].id + 1;
        }
        dataEmployee["id"] = id;
        let newEmployee = EmployeeFactory.create(dataEmployee);
        employees.push(newEmployee);
        Model.save(employees);
        return newEmployee;
    }
}

module.exports = Model;