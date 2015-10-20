"use strict";

var ws = new (require('stream').Writable)();
var fib = require('./fibonacci');

var count = 0;

ws._write = function (chunck, encoding, next) {

    console.log(chunck.toString());

    //setTimeout(next, 100);

    if (count++ < 10) {
        next();
    }
};

fib.pipe(ws);


