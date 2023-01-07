// every file in NODE is a module.

const names = require("./names");
const sayHi = require("./utils");

sayHi(names.john);
sayHi("susan");
