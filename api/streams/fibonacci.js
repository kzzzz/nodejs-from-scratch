"use strict";

var stream = require('stream');

var a = 0;
var b = 1;

var rs = new stream.Readable();

rs._read = function(){
    var current = a + b;
    a = b;
    b = current;

    rs.push('' + current);
};

module.exports = rs;

//0, 1, 2, 3, 5