const EventEmitter = require("events");

// create class
class eventEmitter extends EventEmitter {}

// init
const myEmitter = new eventEmitter();

// listener
myEmitter.on("event", () => console.log("event running!!!"));

// init event
myEmitter.emit("event");
