http = require('http');

server = http.createServer((request, response) => {
	console.log('headers', request.headers);
	console.log('method', request.method);
	console.log('request', request.url);

	user = {
		name: 'John',
		hobby: 'existing'
	};

	response.setHeader('Content-type', 'application/json');
	response.end(JSON.stringify(user));
});

server.listen(3000);
