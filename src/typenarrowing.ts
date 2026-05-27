function Greet(name: string | number) {
    if(typeof name === "string") {
        return `Hello, ${name}!`;                  // Type narrowing using typeof operator
    }
    return `Hello, user with ID ${name}!`;         // Type narrowing using typeof operator
}

console.log(Greet("Rachit"));
console.log(Greet(12345));

type masalaChai = {
    type: string;
    hasMilk: boolean;
}
type cuttingChai = {
    type: string;
    hasMilk: boolean;
}
type IceChai = {
    type: string;
    hasMilk: boolean;
}

type Chai = masalaChai | cuttingChai | IceChai;

function describeChai(chai: Chai) {
    switch (chai.type) {                          
        case "masala":
            return `This is a ${chai.type} chai.`;  
        case "cutting":
            return `This is a ${chai.type} chai.`;  
        case "ice":
            return `This is a ${chai.type} chai.`;                 
    }
}   

const myChai: Chai = {
    type: "masala",
    hasMilk: true
 };
console.log(describeChai(myChai));