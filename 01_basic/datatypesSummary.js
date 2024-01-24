// primitive 

// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt


let valueInString = "Abu Bakar"

let valueInNumber = 65

let valueInBoolean = false

let valueInNull = null  //nul means empty and empty means also khali, khali matlab kus vi nahi or 0 to bilkl nahi

let valueInUndefined;

let valueInAlsoUndefined = undefined;

let valueInSymbol = Symbol("83")

let anotherValueInSymbol = Symbol("83")

console.log(valueInSymbol === anotherValueInSymbol)

// value of 18 and 20 number line is not same

let valueInBigInt = 98327542937n



// Reference (non primitive)

// 3 types => array, object, function

const firstArray = [ "abdullah", "Abu Bakar", "Shawkat" ];

let firstObject = {
    name : "abu bakar",

    age: 19,

    city: "dhaka",

}

const firstFunction = function(){
    console.log("hello world")
}