
//to check whether it is array input or not.

//this function is for finding the large name among the names
function megaFriend(friends){
    if(Array.isArray(friends) == false){ //this is the way
        return "please provide an array of string"
    }
    let mega = friends[0];
    for (const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ["Kutub", "Lion", "shamoll","savvir"]
const myBigBuddy = megaFriend()
console.log(myBigBuddy);

//check in an array 
//to check particular name is including in the array or not.
if(friends.indexOf("Lion") != -1){
    console.log("lion exists");
} else{
    console.log("lion does's exist");
}

//other way 
if(friends.includes("Lion")){
    console.log("Lion exits using includes");
} else {
    console.log("Lion does's exist");
}

//concatenation in an array
//it will give an array
const first = [1 , 2, 3, 4, 5];
const second = [2, 3, 4, 5];
const combined = first.concat(second);
console.log(combined);
