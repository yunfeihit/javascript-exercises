const sumAll = function(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0)) {
        return "ERROR"
    } else {
    const n = Math.min(a, b);
    const m = Math.max(a, b);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
