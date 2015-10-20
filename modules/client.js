"use strict";

var cart1 = require('./cart-creator-function');

cart1.addItem('wine', 4.25);
cart1.addItem('rice', 2.3);

console.log('cart 1 total: ', cart1.total());

//-------------------------------------------
var Cart =  require('./Cart-constructor-function');

var cart2 = new Cart();

cart2.addItem('beer', 3.22);
cart2.addItem('pasta', 2.30);

console.log('cart 2 total: ', cart2.total());