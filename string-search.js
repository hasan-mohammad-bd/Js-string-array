const products = [
    "dell hardcore i29 200GB laptop",
    "iphone 1TB camera flashlight Phone",
    "dell yellow laptop with back camera",
    "dell1X59 lenovo commercial yoga Laptop",
    "LG supernova laptop",
    "HTC low price phone",
    "purple color phone with laptop"
]


//indexOf
//to search
const searching = "laptop";

const output = [];
for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
// console.log(output);

//includes
const searching2 = "phone"


const output2 = [];
for(const product of products){
    if(product.toLowerCase().includes(searching2.toLowerCase())){
        output2.push(product);
    }
}

// console.log(output2);

//startsWith: to check whether the items stars with the selected name
//endsWith: to check whether the items ends with the selected name
const searching3 = "Dell"
const output3 = []
for(const product of products){
    if(product.toLowerCase().startsWith(searching3.toLowerCase())){
        output3.push(product);
    }
}
console.log(output3);