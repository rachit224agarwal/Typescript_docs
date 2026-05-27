function makeChai(type:string, cups:number) {
    console.log(`Making ${cups} cups of ${type} chai.`);
}
makeChai("masala", 2);

function getChaiPrice():number{
    return 25;
}


// major purpose of this all is to catch erros at compile time or previouslyr than runtime and also to make the code more readable and maintainable by providing type annotations and interfaces. it also helps in code completion and better tooling support in IDEs.