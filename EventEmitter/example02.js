var EventEmitter = require("events");
var util = require("util");

var MyEmitter = function(){
   EventEmitter.call(this);
}

util.inherits(MyEmitter,EventEmitter);

var emitterObj = new MyEmitter();

emitterObj.on("tick",function(){
    console.log("Ticked Again ");
});

setInterval(function(){
    emitterObj.emit("tick");
},500);

