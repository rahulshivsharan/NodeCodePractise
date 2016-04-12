var fileSystem = require("fs");

fileSystem.readFile("myDummyFile02.txt",function(error,data){
   try{
	   if(error) throw error;
	   console.log(data.toString()); 
   }catch(e){
       console.log(e)
   }
});
