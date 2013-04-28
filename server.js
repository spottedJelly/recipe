var http = require('http');
var fs = require('fs');
var path = require('path');

PORT = 31335;

MIME_TYPES = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.txt': 'text/plain'
};

http.createServer(function(req, res) {
	console.log('Request: ' + req.url);
	if (request.url == '/') {
	
	}
}).listen(PORT);