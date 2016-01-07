var MyClassOne = function(param){
	this.myparam = param;
	var that = this;
	function fn(){
		console.log(" hi > "+that.myparam);
	};
	fn();
};
var myObj = new MyClassOne(23);

var MyClassTwo = function(param){
	this.myparam = param;
	
	function fn(that){
		console.log(" !!!!! > "+that.myparam);
	};
	fn(this);
};
//var myObj = new MyClassTwo(34);

var MyClassThree = function(param){
	this.myparam = param;
	
	(function fn(obj){
		console.log(" !!!!! > "+obj.myparam);
	})(this);
	
};
//var myObj = new MyClassThree(56);
