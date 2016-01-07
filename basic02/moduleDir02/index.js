var fn = function(firstName,lastName,qualification,occupation){
	var getFullName = function(){
		return firstName +" "+lastName;
	};

	var getQual = function(){
		return "Has a degree of "+qualification;
	};

	var getOccu = function(){
		return "Is working as a "+occupation;
	};

	return {
		info : function(){
			var str = 	"\n Full name "+getFullName()+
					"\n Qualification "+getQual()+
					"\n working as "+getOccu();
			return str;
		}
	};
};

module.exports.indexFn = fn;
