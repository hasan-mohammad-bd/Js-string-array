const anthem = "Amar shonar bangla ami tomai valobashi";


//split 
//the output will be on array type.
const words = anthem.split(" "); //here where the split method find the space, the split will be take place from that section.
console.log(words);

//split with a 
const withoutA = anthem.split("a");
console.log(withoutA);

//slice
const smallSlice = anthem.slice(5,11);//these are index number, the the last index number generally takes before last index number latter.
console.log(smallSlice);

//substr
const anotherPart = anthem.substr(5, 13);//here first number refers to index number, and second number refers how many characters will be taken after starting the index from a particular place.
console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(12, 18);//here subSting works exactly as slice.
console.log(anotherAnotherPart);

//concat
const first = "amader";
const second = "City";
const fullString = first + second;//easy way

//with concat method
const fullString2 = first.concat(second).concat("abc").concat("Rj Kibria"); //here concat first with second and the rest of them concat accordingly.
console.log(fullString2);

//
const words2 = ["a", "b", "c", "d", "e"];
const allJoined = words2.join(" ");//here words will be joined together. in parenthesis what can be added in the middle is determined. it could a ""(spaces) or anything else.
console.log(allJoined);