const events = require("events");

let no = 0;

class logger extends events {
	log(msg) {
		no++;
		this.emit("message", { id: no, msg });
	}
}

const loggerObj = new logger();

loggerObj.on("message", (msg) => console.log("called listner : ", msg));

loggerObj.log("Hello World!!!");
loggerObj.log("Hello ");
loggerObj.log("do stuff");

//module.exports = logger;
