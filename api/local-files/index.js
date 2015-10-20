"use strict";

var fs = require('fs');

//// read string from file
//fs.readFile('./sample-text-to-read.txt', function(err, data){
//    // using toString(), because data is buffer.
//    console.log(data.toString());
//});
//
//fs.writeFile('./file-to-write.txt', 'my words to be written', function(err){
//    console.log(fs.readFileSync('./file-to-write.txt').toString());
//});


var readStream = fs.createReadStream('./sample-text-to-read.txt');

readStream.pipe(process.stdout);

var writeStream = fs.createWriteStream('./from-write-stream.txt');

readStream.pipe(writeStream);

