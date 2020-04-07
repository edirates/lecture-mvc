class Employee {
    constructor (data) {
        this.id = +data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.position = data.position;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

class Manager extends Employee {
    constructor (data) {
        super (data);
    }
}
class Staff extends Employee {
    constructor (data) {
        super (data);
    }
}
class Trainee extends Employee {
    constructor (data) {
        super (data);
    }
}

module.exports = {
    Manager,
    Staff,
    Trainee
}