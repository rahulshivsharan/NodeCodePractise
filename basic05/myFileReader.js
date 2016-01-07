var myFs = require("fs");
myFs.readFile("myFile.txt",function(error,fileContent){
	if(error){
		throw error;
	}

	console.log("My File Content \n",fileContent.toString());
});
