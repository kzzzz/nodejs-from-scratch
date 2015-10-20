var UserList = require('./UserList');

var userList = new UserList();

userList.on('user-added', function(name){
    console.log('Hello, ' + name);
});

userList.add('Jantje');
userList.add('Pietje');
