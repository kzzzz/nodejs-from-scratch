"use strict";

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    //console.log(chunck.toString());

    process.stdout.write('chunck: ' + chunk.toString());
});

process.stdin.on('end', function(){
    console.log('stdin ended');
});