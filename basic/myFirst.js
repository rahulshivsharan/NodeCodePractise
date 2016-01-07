var Rectangle = function (length,breadth){
	var area = function (){
		return length * breadth;
	};

	return {
		rectangleArea : area
	};
};

module.exports = Rectangle;

