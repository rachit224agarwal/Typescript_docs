const response : any = "42";

const numberLenght : number = (response as string).length    // forcefull type assertion

// diff in assertion and convertion is this - assertion is only for compile time and does not change the type at runtime, while conversion changes the type at runtime.

let value : any

value = "Hello, World!";
value = 21
value = true
value.toUpperCase()   // This will cause a runtime error because value is now a boolean, not a string.

let newValue : unknown

newValue = "Hello, World!";
newValue = 21
newValue = true
newValue.toUpperCase()   // This will cause a compile-time error because newValue is of type unknown, and we cannot call methods on it without first asserting its type.

// therefore unknown is safer than any because it forces us to perform type checks before using the value, while any allows us to use the value without any checks, which can lead to runtime errors.

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message);
    } else {
        console.log("Error",error);
    }
}


const data : unknown = "This is some data";
const newData : string = data as string;   // Type assertion to convert unknown to string

type Role = "admin" | "user" | "superadmin";

function getPermissions(role: Role) : void {
    if(role === "admin") {
        console.log("You have full access.");
        return;
    }
    if(role === "user") {
        console.log("You have limited access.");
        return;
    }
    role; // sometime on hovering it shows that role is of type "never" because we have already handled all possible cases of role, so there is no possibility of role being any other value, hence it is of type never.

    // here it shows that role is of type "superadmin" as it is the only remaining value that role can take, but it is not being handled in the function, so it is of type "superadmin" and we can handle it in the function to avoid any potential errors.

    // so typescript also help us to identify any unhandled cases or edge cases in our code and we can handle them to make our code more robust and error-free.
}