var myFile = require("fs");

myFile.readFile.on("data",function(){
 	console.log("got data from reading a File");
});

myFile.readFile("myFile.txt",function(error,data){
	console.log(data.toString());
}); 
