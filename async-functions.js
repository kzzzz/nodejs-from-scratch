function oddsSync(arr) {
    return arr.filter(function (n) {
        return n % 2;
    });
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(oddsSync(numbers));
/**
 * Asynchronous code
 * */

function odds(arr, cb) {
    var oddNumbers = arr.filter(function (n) {
        return n % 2;
    });

    var err = arr.indexOf(3) > -1 ? new Error('No 3s Allowed') : null;

    setTimeout(function () {
        cb.apply(this, [err, oddNumbers]);
    }, 1000);
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

odds(numberArray, function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log('data', data);
});

console.log('This comes after the odd() call');