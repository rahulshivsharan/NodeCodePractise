var util = require("util");
var eventEmitter = require("events").EventEmitter;

var Ticker = function(){
    var self = this;	
    setInterval(function(){
        self.emit("tick");
    },500);
}

util.inherits(Ticker,eventEmitter);

var tickListener = new Ticker();

tickListener.on("tick",function(){
    console.log("Ticked It !!!!");
});

