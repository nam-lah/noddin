
fs = require('fs')

log = (stdOut) => {
	console.log('gu: ', stdOut)
}

readHandle = (err, data) => {
	
	if (err) {
	log(err)
	}
	log(data.toString())
}


reedIt = (buff) => {
	
	fs.readFile(buff, (err, data) => {
	readHandle(err, data)
	})
}

writeTo = (buff, data) => {

	fs.writeFile(buff, data, err => {

		if (err) {
			errHandle(err)
		}
		log('dry write test')
	})
}


/*
wipeCache = (module) => {
	require('fs')
		.watchFile(require('path')
			.resolve(module), () => {
				delete [require.resolve(module)]
			})
} */

wipeCache = () => {

	delete require.cache['d:/write.js']
}


module.exports = {

	readHandle: readHandle,
	reedIt: reedIt,
	wipeCache: wipeCache
}
