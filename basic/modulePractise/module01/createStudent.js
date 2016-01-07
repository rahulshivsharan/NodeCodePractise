var CreateStudent = function(obj){
	var myStudent = require("./student.js");
	var student = new  myStudent(obj.name,obj.address,obj.phoneNo);
	student.info = function(){
		return 	"\n--------\n"+student.getName()+"\n"+
			student.getAddress()+"\n"+
			student.getPhoneNo();
	}

	return student.info();
}

module.exports = CreateStudent;
