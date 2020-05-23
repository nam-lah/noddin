
errorHandler = err => {
	if (err) throw err;
}

log = (...args)=> {
	console.log(...args)
}

module.exports = {
	errorHandler: errorHandler,
	log: log
}
