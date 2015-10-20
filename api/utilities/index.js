"use strict";


var util = require('util');

//var log = util.debuglog();
//
//log('hello world');


//---------------------------
//- string interpolation

var person = {
    name: 'zhiping',
    interests: ['javascript', 'nodejs']
};

console.log(util.format('%s: %j', person, person));

//--------------------
// inspect

console.log(util.inspect(util, {}));