const Controller = require("./controllers/Controller.js");

const command = process.argv[2];
const parameters = process.argv.slice(3);

switch (command) {
    case "show" :
        Controller.read();
        break;
    case "add" :
        Controller.create(parameters);
        break;
    default :
        break;
}