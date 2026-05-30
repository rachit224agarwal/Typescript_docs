interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; 
}
const masalaChai: Chai = {
    flavor: "masala",
    price: 25
}

interface Shop {
    readonly id: number;
    name: string;
}
const myShop: Shop = { id : 1 , name : "Infiity's Chai Shop"}
// myShop.id = 2; 
// Error: Cannot assign to 'id' because it is a read-only property.


interface DiscountCalculator {
    (price: number) : number;
}
const get50: DiscountCalculator = (price) => price * 0.5; // 50% discount


interface Machine {
    start(): void;
    stop(): void;
}
const CoffeeMachine : Machine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
}


interface ChaiRatings {
    [flavor: string] : number; // index signature
}
const ratings : ChaiRatings = {
    masala : 5,
    cutting : 4,
    ice : 3
} // here we can add any flavor of chai and its rating because of index signature in ChaiRatings interface


interface User {
    name: string;
}
interface User {
    age: number;
}
const user: User = {
    name: "Rachit",
    age: 25
} // here we can merge two interfaces with the same name and it will work fine because of declaration merging in TypeScript.


interface A { a: string; }
interface B { b: number; }  
interface C extends A, B { c: boolean; }