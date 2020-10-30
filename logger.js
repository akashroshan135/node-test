const events = require("events");

let no = 0;

class logger extends events {
	log(msg) {
		no++;
		this.emit("message", { id: no, msg });
	}
}

module.exports = logger;
