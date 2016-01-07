var Student = function(name,address,phoneNo){
	this.getName = function(){
		return name;
	}

	this.getAddress = function(){
		return address;
	}

	this.getPhoneNo = function(){
		return phoneNo;
	}
}
module.exports = Student;
