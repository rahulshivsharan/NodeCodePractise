function Circle(radius){
	var r_squared = function(){
		return Math.pow(radius,2); 
	}

	var area = function(){
		return Math.PI * r_squared();
	}

	return {
		area : area
	};
}

module.exports = Circle; 
