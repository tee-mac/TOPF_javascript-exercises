const findTheOldest = function(people) {
    let oldest = {yearOfBirth: 1,yearOfDeath:1};
    return people.reduce((acc, el) => {
        if(el.yearOfDeath === undefined){
            el.yearOfDeath = new Date().getFullYear();
        }
        if(el.yearOfDeath - el.yearOfBirth > acc.yearOfDeath - acc.yearOfBirth){
            acc = el;
        }
        return acc;
    }, {yearOfBirth:1,yearOfDeath:1});   
}

// Do not edit below this line
module.exports = findTheOldest;
