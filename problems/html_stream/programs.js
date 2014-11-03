var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();

// connect stdin to trumpet
process.stdin.pipe( tr ).pipe( process.stdout );

// Select element stream
var stream = tr.createStream(".loud");

stream.pipe( through( function (data) {
  this.queue( data.toString().toUpperCase() );
})).pipe( stream );

