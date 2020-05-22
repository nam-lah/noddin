const 	http = require('http'),

		server = http.createServer((req, res) => {
			if (req.url === '/') {
				res.write('hi there')
				res.end()
			}
		});


// the server is an event emitter.
//

server.on('connection',  (socket) => {
	console.log('new connection...')
})

server.listen(3000)
console.log('listening on 3000')

