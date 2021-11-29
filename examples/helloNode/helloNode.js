const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer(function(req, res) {
	// set response http header with HTTP status and content type
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// send the response body "Hello World";
	res.end('Hello World\n');
});

server.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}:${port}/`);
});
