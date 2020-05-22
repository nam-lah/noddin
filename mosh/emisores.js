const 	EventEmitter = require('events'),
		Logger = require('../logger'),
		logger = new Logger();


/*
emitter.on('messageEmitter', (arg) => 
	console.log('event successfully emitted.', arg))
// emitter.emit('messageEmitter', {id: 1, url: 'http://'})
// 

emitter.on('messageEmitter2', () => 
	console.log('event emitted w/o args.'))

emitter.emit('messageEmitter2')
*/

logger.on('messageLogged', (arg) => {
	console.log('listened was cLoggedalled...', arg)
})

logger.log('kek')
