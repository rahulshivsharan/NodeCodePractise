var fileSystem = require("fs");

fileSystem.watchFile("myDummyFile.txt",readMyFile);

function readMyFile(cur,prev){
	fileSystem.readFile("myDummyFile.txt",function(error,data){
	   try{
		   if(error) throw error;
		   console.log(data.toString()); 
	   }catch(e){
	       console.log(e)
	   }
	});
}

