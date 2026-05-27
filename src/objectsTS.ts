const chai = {
    type : "masala",
    teaLeaves : 4,
    isHot : true
}

// by default typescript will infer the type of chai as 
// {type: string, teaLeaves: number, isHot: boolean} 
// based on the values assigned to the properties of chai object. so we can use this inferred type to access the properties of chai object and perform operations on them.

type tea = {
    type : string;
    teaLeaves : number;
    isHot : boolean;
}
const tea : tea = {
    type : "masala",
    teaLeaves : 4,
    isHot : true
}

type Cup = {size : string}
let smallCup : Cup = {size : "small"}

let largeCup  = {size : "large" , material : "ceramic"} 

smallCup = largeCup;  // this is allowed because smallCup and largeCup have the same structure, they both have a property size of type string, so they are compatible with each other. hence we can assign largeCup to smallCup without any error. this is called structural typing in typescript, where the compatibility of types is determined by their structure rather than their name.

// but if we have a type with different structure then we cannot assign it to smallCup because it will not be compatible with smallCup. for example:

type Mug = {capacity : number}
let myMug : Mug = {capacity : 500}

smallCup = myMug; // this will cause an error because smallCup and myMug have different structures, they do not have the same properties and types, so they are not compatible with each other. hence we cannot assign myMug to smallCup without any error. this is the difference between structural typing and nominal typing, where in nominal typing the compatibility of types is determined by their name rather than their structure. but in typescript we use structural typing which allows for more flexibility and easier code reuse.

type language = {
    name : string;
    type : string;
    version : number;
}

const js = (description : Partial<language>) => {
    console.log("Javascript is a scripting language")
}
js({name : "JavaScript", type : "scripting"}) // here we can pass an object with all the properties of language type because we are using Partial utility type which makes all the properties of language type optional, so we can pass an object with any combination of properties of language type without any error. hence we can use Partial utility type to make our code more flexible and reusable.

const ts = (description : Required<language>) => {
    console.log("Typescript is a superset of Javascript")
}
ts({name : "Typescript", type : "superset", version : 4.5}) // here we have to pass an object with all the properties of language type because we are using Required utility type which makes all the properties of language type required, so we have to pass an object with all the properties of language type without any error. hence we can use Required utility type to make our code more strict and enforce the presence of all properties of a type.

type Java = Pick<language, "name" | "type"> // here we are using Pick utility type to create a new type Java which has only the properties name and type from the language type, so we can use Java type to create objects that have only the properties name and type without any error. hence we can use Pick utility type to create new types based on existing types by selecting only the properties we need.

const java : Java = {name : "Java", type : "object-oriented"} // here we can create an object of type Java which has only the properties name and type from the language type, so we can create an object with only the properties name and type without any error. hence we can use Java type to create objects that have only the properties name and type without any error.


//we can also use "Omit" utility type to create a new type by omitting certain properties from an existing type. for example:

type Python = Omit<language, "version"> // here we are using Omit utility type to create a new type Python which has all the properties of language type except version, so we can use Python type to create objects that have all the properties of language type except version without any error. hence we can use Omit utility type to create new types based on existing types by omitting certain properties we don't need.

type Item = {
    name : string,
    quantity : number,
}
type Address = {
    street : string,
    city : string,
    country : string,
}

type Order = {
    id : number,
    items : Item[],
    shippingAddress : Address,
}
