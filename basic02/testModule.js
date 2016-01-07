var myModule = require("./moduleDir");
var msg = "Interstellar is developed by Christopher Nolan";
console.log(myModule.myFn(msg).msg);

myModule = require("./moduleDir02");
console.log(myModule.indexFn("Ninad","Party","Bachelore of Engineering in Computer Science","Senior Software Engineer").info());
