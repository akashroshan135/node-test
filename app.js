const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (msg) => console.log("called listner : ", msg));

logger.log("Hello World!!!");
logger.log("Hello ");
logger.log("do stuff");
