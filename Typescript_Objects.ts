
// Write a program that creats Objects containing these items.

// Datatype of person of object
interface person {
    age : number,
    name : string,
    nationality :string,
    student : Boolean
}
// person object
let person :person = {
    age : 26 , 
    name : 'Sharuk' ,
    nationality : 'Pakistan' ,
    student : true
}

console.log(person);

// Datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean
}
// car object
let car = {
    maker : 'toyota',
    color : 'black' ,
    automatic : true
}

// print car
console.log(car);
