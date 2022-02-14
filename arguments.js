//to add unlimited parameters in function
//===============================
function addNumbers(num1, num2){
    // console.log(arguments[1]);//its array like object.
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}

const sum = addNumbers(23,13,23,65,420);
console.log(sum);


//to add unlimited parameters when it is string
//===============================
function getFullName(firstName,lastName){
    let fullName = "";
    for(const part of arguments){
        fullName = fullName + part + " "; 
    }
    return fullName;
}

const name = getFullName("Onmuk", "Hanif","Bin", "Songket");
console.log(name);