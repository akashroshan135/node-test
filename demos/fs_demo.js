const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
	if (err) throw err;
	console.log("folder done");
});

// create file
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "hello", (err) => {
	if (err) throw err;
	console.log("file done");
});

// append file
fs.appendFile(path.join(__dirname, "/test", "test.txt"), "world", (err) => {
	if (err) throw err;
	console.log("append done");
});

// read file
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
