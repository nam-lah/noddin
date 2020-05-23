const 	fs = require('fs'),
		path = require('path');

/*
 * fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if (err) throw err;
		console.log(`Folder created.`)
		})
		*/

errorHandler = err => {
	if (err) throw err;
}


log = mssg => {
	console.log(mssg)
}

// create and write to file:
fs.writeFile(
	path.join(__dirname, '/test', 'hi.txt'), 
	"\ntest, for fuck sake\n", 
	err => {
		errorHandler(err);
		log('File written to...');

		fs.appendFile(
			path.join(__dirname, '/test', 'hi.txt'),
			"this is the latest line.\n",
			err => {
				errorHandler(err);
				log('file written to...');
			});
	});
	



