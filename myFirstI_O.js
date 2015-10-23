var fs = require('fs');
var file = process.argv[2];
var fileContents = fs.readFileSync(file).toString();
var lines = fileContents.split("\n");
console.log(lines.length - 1);
