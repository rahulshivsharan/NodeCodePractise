var fileSystem = require("fs");

var readStream = fileSystem.createReadStream("myDummyFile02.txt");

readStream.on("data",function(data){
	console.log(data.toString());
});

readStream.on("end",function(){
	console.log("Reading a File is done");
});
