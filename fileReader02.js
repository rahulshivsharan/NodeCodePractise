var fileSystem = require("fs");

fileSystem.watchFile("myDummyFile.txt",readMyFile);

function readMyFile(cur,prev){
	fileSystem.readFile("myDummyFile.txt",function(error,data){
	   var lines = undefined,totalLines = undefined;
	   try{
		   if(error) throw error;
		   lines = data.toString("utf-8").split("\n");
		   totalLines = lines.length;
		   console.log(lines[(totalLines - 2)]);
	   }catch(e){
	       console.log(e)
	   }
	});
}

