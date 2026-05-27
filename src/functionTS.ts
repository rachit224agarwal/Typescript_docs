function makeChai(type:string, cups:number) {
    console.log(`Making ${cups} cups of ${type} chai.`);
}
makeChai("masala", 2);

function getChaiPrice():number{
    return 25;
}


// major purpose of this all is to catch erros at compile time or previously or early on than runtime and also to make the code more readable and maintainable by providing type annotations and interfaces. it also helps in code completion and better tooling support in IDEs.

function logChai() : void{
    console.log("Chai is ready!");
}

// optional parameter : 2 ways to make a parameter optional in typescript
function chaiType(type? : string){

}
function chaiTypee(type : string = "masala"){

} 
// usually we use optional parameter in last , it is a good practice