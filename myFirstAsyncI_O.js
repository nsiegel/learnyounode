var fs = require('fs');
var file = process.argv[2];

var callback = function(err, fileContents) {
  var lines = fileContents.toString().split("\n");
  console.log(lines.length -1);
}

fs.readFile(file, callback);
