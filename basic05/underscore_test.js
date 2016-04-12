var _ = require("underscore");

var myArray = [{"name" : "Rahul Shivsharan", "age" : 32},
    {"name" : "Vicky Nimbalkar", "age" : 41},
    {"name" : "Raju", "age" : 12},
    {"name" : "Girish", "age" : 24},
    {"name" : "Sohail", "age" : 34},
    {"name" : "Salim", "age" : 15},
    {"name" : "Hrithik", "age" : 32}
    ];

_.each(myArray,function(obj){
	console.log("Name : "+obj.name+" age "+obj.age);
});
console.log("///// FILTERED //////");
var filteredArray = _.filter(myArray,function(obj){
	return (obj.age >= 18);
});

_.each(filteredArray,function(obj){
	console.log("Name : "+obj.name+" age "+obj.age);
});
