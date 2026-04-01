const totalIntegers = function(arrayOrObject) {

    let theFirstLayerArray = [];

    if(typeof arrayOrObject === 'object' && arrayOrObject !== null && !Array.isArray(arrayOrObject)) {
        theFirstLayerArray = Object.values(arrayOrObject)
    } else if(Array.isArray(arrayOrObject)) {
        theFirstLayerArray = arrayOrObject;
    } else {
        return undefined;
    }

    //item can be three conditions: object, array, others
    const convertItemToNestArray = function(item) {
        if(typeof item === 'object' && item !== null)  {
            if(Array.isArray(item)) {
                return item.map(item => convertItemToNestArray(item))
            } else if(!Array.isArray(item)) {
                return Object.values(item).map(item => convertItemToNestArray(item))
            }
        }
        return item;
    }

    const theNewArray = theFirstLayerArray.map(item => convertItemToNestArray(item))

    const theFlatArray = theNewArray.flat(Infinity);

    const theOnlyNumArray = theFlatArray.filter(item => typeof item === 'number' && Number.isInteger(item));

    return theOnlyNumArray.length;

}   
// Do not edit below this line
module.exports = totalIntegers;
