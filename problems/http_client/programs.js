var request = require('request');

var url = "http://127.0.0.1:8000";

var req = request.post(url);

process.stdin.pipe( req ).pipe( process.stdout );
