const permutations = function(consecutiveIntegerArray) {
    const n = consecutiveIntegerArray.length;

    if (n === 0) {
        return [[]];
    } else if(n === 1) {
        return [[1]];
    } else {
        
        let thePreviousArrayInput = [];
        for(let i = 1; i < n; i++) {
            thePreviousArrayInput.push(i)
        }
        const thePreviousArray = permutations(thePreviousArrayInput);

        let resultArray = [];

        for(let i = 0; i < thePreviousArray.length; i++) {
            for(let j = 0; j < n; j++) {
                const theDeepCopyOfPreviousArray = thePreviousArray.map(inner => [...inner]);
                theDeepCopyOfPreviousArray[i].splice(j, 0, n);
                resultArray.push(theDeepCopyOfPreviousArray[i]);
            }
        }

        return resultArray;
    }
};
  
// Do not edit below this line
module.exports = permutations;
