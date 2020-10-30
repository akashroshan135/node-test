const http = require("http");
const port = 3000;

// create server
http.createServer((req, res) => {
	res.write("Hello World!!");
	res.end();
}).listen(port, () => console.log(`App listening at http://localhost:${port}`));
