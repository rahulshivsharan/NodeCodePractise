function forEach(theArray,func){
	
	if(Array.isArray(theArray) === true){
		for(var x = 0; x < theArray.length; x++){
			func(theArray[x],x);
		}
	}
}


forEach([1,2,3],function(num,index){

	console.log("Thread "+num);
	
	forEach([0,1,2,3,4],function(num,index){
		setTimeout(function(){
				console.log("Running Thread "+(num+1));
		},2000);
	});

});