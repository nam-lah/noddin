// test express server
// si si a la chingada.

const 	express = require('express'),
		app = express(),
		port = 3000,
		jein = require('./write');

app.get('/', (req, res) =>
	res.send('#qiiditiinticisi'));

// app.listen(port, () => 
// 	console.log(`this app cerota is listening at http://localhost:${port}`));

app.listen(port, () => 
	console.log(`this is a test, por la gran puta.`))
