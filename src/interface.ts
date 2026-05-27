function serveChai(chai : {type: string, hasMilk: boolean}) {
    console.log("Serving Chai");
}

function orderChai(chai : {type: string, hasMilk: boolean}) {
    console.log("Ordering Chai");
}

type chaiType = {
    type: string;
    hasMilk: boolean;
}

function serveChaii(chai : Chai) {
    console.log("Serving Chai");
}

function orderChaii(chai : Chai) {
    console.log("Ordering Chai");
}
//hence type makes the code more readable and maintainable 



type MasalaChai = { 
    type: string;
    hasMilk: boolean;
}

class Chai implements MasalaChai {
    type = "masala";
    hasMilk = true;
}
// here in this case we can implements MasalaChai a type 

// but 

type cuttingChai = "small" | "medium" | "large";

class CuttingChaiorder implements cuttingChai {
    type = "medium";
}
// here we cannot implement cuttingChai a type because it is a union type and not an object type, so we cannot implement it in a class.
// hence here we use "interface" instead of "type"

interface cuttingChaii {
    size : "small" | "medium" | "large"
}

class CuttingChaiOrder implements cuttingChaii{
    size : "small" | "medium" | "large" = "small"
}

type Response = {ok:true} | {ok:false}
class myResponse implements Response {
    ok : boolean = true;
} // here we cannot implement Response a type because it is a union type and not an object type, so we cannot implement it in a class. 
// most commonly in class we prefer to use interface because it is more flexible and can be implemented by multiple classes, while type cannot be implemented by multiple classes. but we can also use type in class if it is an object type and not a union type.

type baseChai = {teaLeaves : number} 
type Extra = {sugar : number}

type Chaii = baseChai & Extra;  // intersection type

class MyChai implements Chaii {
    teaLeaves = 10;
    sugar = 5;
} // compulsory to implement all the properties of both baseChai and Extra in MyChai class because Chaii is an intersection type of baseChai and Extra, so it has all the properties of both baseChai and Extra. hence we have to implement all the properties of both baseChai and Extra in MyChai class.

type config = {
    readonly appName : string;
    version : string;
}

const cfg : config = {
    appName : "MyApp",
    version : "1.0.0"
}

cfg.appName = "NewApp"; // error because appName is readonly and cannot be reassigned a new value. hence we cannot change the value of appName once it is assigned a value.

