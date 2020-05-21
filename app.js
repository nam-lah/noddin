
const 	EventEmitter = require('events');
const 	emitter = new EventEmitter();

// register listener:
emisor = () => {
	emitter.on('first event', () => console.log('test...'));
}

// raise an event:
// event emitter.emit('first event');


