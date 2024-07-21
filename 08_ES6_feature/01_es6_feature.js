// Activity 1: Template Literals
// taks1
name = "saurabh"
age = 22;
let str = `${name} is ${age} years old`
console.log(str)

// task2
let poem =  `Johnny, Johnny.
Yes, Papa.
Eating sugar?
No, Papa.
Telling lies?
No, Papa.
Open your mouth
Ha-ha-ha!`
console.log(poem)

// Activity2: Destructuring
// Task3
let arr = [1,2,3,4,5]
let [one, two] = arr
console.log(one)
console.log(two)

// Task4
let book = {
    title: "Math",
    author: "sauarbh",
    year: 2029

}
console.log(book)
const { title,author } = book
console.log(title)
console.log(author)
console.log(book)
const { title:a,author:b } = book
console.log(title)
console.log(author)
console.log(book)

// Activity3:Spread and rest operators
// taks5
const existingArray = [1,3,5,7];
const combinedArray = [...existingArray,2,4,6,8]
console.log(combinedArray)

// Task6

function sum(...num){

    let result =0;
    for (const i of num) {
        result += i
        
    }
    return result
}
console.log(sum(1,2,3,4,5,56))

// Activity 4:Default parameter
const product = (a,b=7) => a*b;
console.log(product(5,9))
console.log(product(5))

// Activity5: Enhanced Object Literals
// task8
function bark(){
    console.log("Dogs bark");

}
const nameOfDog = "moti"
const ageOfDog = 4
const breed = "Indian"
const dog = {nameOfDog, ageOfDog, breed, bark}
console.log(dog)

// task9
// Variables
const key1 = "firstName";
const key2 = "lastName";

// Create an object with computed property names
const person = {
    [key1]: "John",
    [key2]: "Doe",
    age: 30,
};

// Log the object to the console
console.log(person);
