var through = require("through");

var split = through( function( data ) {
  var self = this;
  var lines = data.toString().split("\n");

  lines.forEach( function(e) {
    self.push( e );
  })
});

var upp_dwn_case = through( (function() {
  var number = 0;

  return function(data) {
    var line = data.toString();
    this.queue( (number % 2 === 0) ? 
      line.toLowerCase() + "\n" : 
      line.toUpperCase() + "\n");
    number++;
  }
}()) );


process.stdin
  .pipe( split )
  .pipe( upp_dwn_case )
  .pipe( process.stdout );
