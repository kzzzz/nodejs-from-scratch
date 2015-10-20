var moduleA = require('./module-a');

// Global object = window object in browser
console.log(global.tree);
console.log(global.four());


// using module.exports object
console.log(moduleA.five);
console.log(moduleA.six());