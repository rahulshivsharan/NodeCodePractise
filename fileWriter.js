var fileSystem = require("fs");

function fn(){
   var str = undefined;	
   for(var x = 1; x <= 100000; x++){
	str = "Data ["+x+"] File Writer Example "+x+".\n";   
	(function(s){
		fileSystem.appendFile("myDummyFile02.txt",s,function(err){
			if(err){
				throw err;
			}

			console.log("Data \""+s+"\" appended to file !");
		});
	})(str);	    
   }
};

fn();
