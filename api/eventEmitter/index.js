var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('someEvent', function (data) {
    console.log('someEvent:', data);
});

ee.once('someEvent', function (data) {
    console.log('only once', data);
});

var callback = function (data) {
    console.log('called back', data);

    ee.removeListener('someEvent', callback);
};

ee.on('someEvent', callback);

ee.emit('someEvent', {message: "data from emitter (publisher)"});
