const 	url = require('url');
		shorts = require('./shorts'),


myUrl = new URL('https://mywebsite.com:80/hello.html?id=100&status=active');

// serialized URL:
log('href: ', myUrl.href)
log('toString(): ', myUrl.toString())
log(myUrl.host)
log(myUrl.hostname)
log(myUrl.pathname)
// serialized querty:
log(myUrl.search)
// params object:
log(myUrl.searchParams)

