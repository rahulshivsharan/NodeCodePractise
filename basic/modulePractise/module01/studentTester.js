var _Student = require("./student.js");

var myStudent = new _Student("Rahul Shivsharan","Mulund West","9867934525");

for(prop in myStudent){
	console.log(prop +" =  "+myStudent[prop]());
}

myStudent = require("./createStudent.js");
 
console.log(myStudent({
	name : "Vijay Pathak",
	address : "Bhandup West",
	phoneNo : "9867331313"
}));
