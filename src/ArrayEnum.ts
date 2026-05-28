const rating: number[] = [4.5,5]
const name: string[] = ["Rachit", "Raunak"]

type Chai = {
    name : string,
    price : number
}
const menu: Array<Chai> = [
    {name : "Masala Chai", price : 25},
    {name : "Cutting Chai", price : 20},
    {name : "Ice Chai", price : 30}
]

const cities : readonly string[] = ["Delhi", "Bareilly", "Bangalore","Mumbai"]
// cities.push("Hyderabad")   not possible due to readonly property

const numbers : string[][] = [
    ["one", "two", "three"],
    ["four", "five", "six"],
]

const Info : (string | number)[] = ["Rachit", 25, "Raunak", 30]

// Tuple
let userInfo: [string, number, boolean?];
userInfo = ["Rachit", 9557915111]; // valid
// userInfo = [9557915111, "Rachit"]; // invalid, type mismatch

let locations: readonly [number, number] = [28.7041, 77.1025]; 
let coordinates: [latitude : number, longitude : number] = [28.7041, 77.1025];

// Enum
enum Size {
    SMALL,
    MEDIUM,
    LARGE
}

const size: Size = Size.MEDIUM; 

enum ChaiType {
    MASALA = "Masala Chai",
    CUTTING = "Cutting Chai",
}
function orderChai(type: ChaiType) {
    console.log(`You ordered a ${type}`);
}
orderChai(ChaiType.MASALA);

enum Response {
    SUCCESS = 200,
    NOT_FOUND,  // 201
    INTERNAL_SERVER_ERROR  // 202
}

 