var emiter = new (require("events").EventEmitter)();
console.log(emiter.emit("event-1"));
emiter.emit("error",new Error("My Mistake"));


