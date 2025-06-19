const palindromes = function (str) {
    let cleanStr = str.split(' ').join('').split(',').join('').split('.').join('').split('!').join('').toLowerCase();
    let cleanArr = cleanStr.split('');
    let revArr = [...cleanArr].reverse();
    return (cleanArr.join() == revArr.join()) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
