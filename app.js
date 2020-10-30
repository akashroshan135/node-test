const http = require("http");
const path = require("path");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		fs.readFile(path.resolve("public", "index.html"), (err, content) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(content);
		});
	}
	if (req.url === "/about") {
		fs.readFile(path.resolve("public", "about.html"), (err, content) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(content);
		});
	}
});

server.listen(port, () => console.log(`App listening at http://localhost:${port}`));
