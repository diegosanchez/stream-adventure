var through = require("through");

var trans = through( function (data) { 
  this.queue( data.toString().toUpperCase() ); 
}); 


process.stdin.pipe( trans ).pipe( process.stdout );
