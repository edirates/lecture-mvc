class View {
    static show(data) {
        console.log("Employee data = ");
        console.log(data); 
    }
    static successAdd(employee) {
        console.log(`Successfully adding new employee named ${employee.fullname} with position ${employee.position}.`);
    }
    static errorInvalidInput() {
        console.log(`Invalid input.`);
    }
}

module.exports = View;