var http = require('http');
var through = require('through');

var port = process.argv[2] || "3000";
var app = http.createServer( handler );

app.listen( Number(port ) );

console.log( "http server listening", port, "port");

function upper( data ) {
  this.queue( data.toString().toUpperCase() );
}

function handler(request, response ) {
  if ( request.method != "POST" ) {
    response.writeHeader( 500 );
    response.end("");
    return;
  }

  response.writeHeader( 200 );

  request.pipe( through(upper) ).pipe( response );


};
