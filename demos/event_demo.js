const events = require("events");

// create class
class emitter extends events {}

// init
const myEmitter = new emitter();

// listener
myEmitter.on("event", () => console.log("event running!!!"));

// init event
myEmitter.emit("event");
