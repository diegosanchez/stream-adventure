var fs = require("fs");

var stream = fs.createReadStream(process.argv[2]);

stream.pipe(process.stdout);

