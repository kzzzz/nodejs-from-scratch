"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var UserList = function () {
    this.users = [];
    EventEmitter.call(this);
};

util.inherits(UserList, EventEmitter);

UserList.prototype.add = function (name) {
    this.users.push(name);
    this.emit('user-added', name)
};

module.exports = UserList;