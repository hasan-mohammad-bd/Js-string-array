//Date
//===============================
//find what is utc time from google;
//go to moment.js to know better date information about date.
//use moment.js to handle javascript date time.
//search compar date in javascript.

//with string
const myFavDate = new Date("1971-12-16");
// console.log(myFavDate);

//with number
const anotherDate = new Date(1971,3,26,11,50,40,80);
console.log(anotherDate);

//to learn
//how to create date time
//compare between dates.

//comparing
if(myFavDate.getTime() < anotherDate.getTime()) {
    console.log("favorite is earlier");
}

