const contains = function(object, searchValue) {
    const theValuesArray = Object.values(object);

    if(theValuesArray.includes(searchValue)) {
        return true;
    } 
    
    const theNestObejctsArray = theValuesArray.filter(item => typeof item === 'object' && item !== null);

    return theNestObejctsArray.some(nestObject => contains(nestObject, searchValue));
};
  
// Do not edit below this line
module.exports = contains;
