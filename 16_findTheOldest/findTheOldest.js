const findTheOldest = function(people) {
    let oldest;
    let currentLongestAge = 0;
    for (person of people) {
        let lifeTime = 0;
        let currentYear = 0;
        if (person.yearOfDeath == undefined) {
            currentYear = new Date().getFullYear();
            lifeTime = currentYear - person.yearOfBirth;
        } else {
            lifeTime = person.yearOfDeath - person.yearOfBirth;
        }
        if (lifeTime > currentLongestAge) {currentLongestAge = lifeTime;
            oldest = person;
        } 
    };
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
