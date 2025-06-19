const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let fib ;
    n = Number(num);
    if (n === 1) {return 1;} 
    else if (n === 2 ) {return 1;}
    else if (n === 0 ) {return 0;}
    else if (n < 0) {return 'OOPS'}
    else {
        for (let i = 3; i < n + 1; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
    return fib;
    }
};


// Do not edit below this line
module.exports = fibonacci;
