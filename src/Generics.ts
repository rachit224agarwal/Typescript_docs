// generics means general functions or classes that can work with any data type. It allows us to create reusable components that can work with different types of data without sacrificing type safety.

function wrapToArray<T>(item:T): T[]{
    return [item];
}
wrapToArray("masala")
wrapToArray(29)
wrapToArray({type: "cutting", hasMilk: true})


function pair<A,B>(first: A, second: B): [A, B] {
    return [first, second];
}
pair("Rachit", 22)
pair(true, {age: 22})


interface Box<T> {
    content: T;
}
const stringBox: Box<string> = {content: "Hello"};
const numberBox: Box<number> = {content: 42};

interface ApiPromise<T> {
    status: number;
    data: T;
}
const res: ApiPromise<{name: string; age: number}> = {
    status: 200,
    data: {name: "Rachit", age: 22}
}