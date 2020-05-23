const 	EventEmitter = require('events'),


url = 'https://mylogger.io/log/log'

class Logger extends EventEmitter {

	log (message) { 
		console.log("nodeLogger:", message)
	
		this.emit('messageLogged', {id: 1, url: 'http://'})
	}
}

module.exports = Logger
