const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

//slice,
//to get a part of an array.
//====================================================
const numberSliced = numbers.slice(4, 10);// here is the index number, the last index will be picked before the end of the mentioned index. 
//if the last index dont mentioned, it will take rest of the array
//the numbers will not change, there new  array is been create.
console.log(numberSliced);

//splice(start,end)
//splice to remove the element from array
//====================================================
const numberSpliced = numbers.splice(4,5); //here 4 is index number, and 5 is count to how many index number will be deleted. 
//here main array has been changed.
console.log(numberSpliced);
console.log(numbers);//here numbers dont have this removed element.

//splice to remove the element from array and adding the element.
//===============================
const numberSpliced2 = numbers.splice(4, 3, "python","hola",89);//here 4 is for index number, 3 is count for the started index number and the next elements are adding to the main array.
//if we dont like to delete any element, set the counting number 0;
console.log(numbers);
