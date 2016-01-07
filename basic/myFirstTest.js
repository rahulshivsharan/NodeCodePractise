var testModule = require("./myFirst.js");
console.log("Area of Rectangle is "+testModule(4,5).rectangleArea());

// Only giving the file name without giving the js extension,
// so that if the file 'myFirst.js' is present, node loads.
testModule = require("./myFirst");
console.log("Area of Rectangle is "+testModule(5,5).rectangleArea());
