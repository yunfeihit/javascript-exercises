const repeatString = function(str, times) {
    if(times < 0) {
        return "ERROR"
    } else {    
        let result = '';
        for (let i = 0; i < times; i++) {
            result += str;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
