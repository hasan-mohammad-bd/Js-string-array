//sort 
//to arrange smaller to larger
//===============================
//sort()
const numbers = [4, 5, 2,3,6];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const friends = ["kamal", "abdul", "rohim", "lotif"]
const sortedNumbers2 = friends.sort()
console.log(sortedNumbers2);

//sort().reverse()
const friends2 = ["kamal", "abdul", "rohim", "lotif"]
const reversedFriends = friends2.sort().reverse();
console.log(reversedFriends);

//number sorting fun: javascript cant sort dabble number. a function have to used
//===============================
//javascript number sorting; find from google
const bigNumbers = [47,83,29,48,59,893];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});

