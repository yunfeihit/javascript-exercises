const pascal = function(n) {
    if(n === 1) {
        return [1]
    } else if(n === 2) {
        return [1, 1]
    } else if (n > 2) {
        let resultArray = [];

        resultArray.push(1)

        for(let i = 0; i < n - 2; i++) {
            const newItem = pascal(n - 1)[i] + pascal(n - 1)[i + 1];
            resultArray.push(newItem);
        }
            resultArray.push(1);

        return resultArray;
    }
};
  
// Do not edit below this line
module.exports = pascal;
