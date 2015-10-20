"use strict";

var items = [];

function addItem(name, price) {
    items.push({
        name: name,
        price: price
    })
}

function total() {
    return items.reduce(function (a, b) {
        return a + b.price;
    }, 0)
}

module.exports = {
    addItem: addItem,
    total: total
};
