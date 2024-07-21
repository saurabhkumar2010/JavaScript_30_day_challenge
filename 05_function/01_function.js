// Activity 1: Function declaration
// task1
function checkEven(n){
    if(n%2){
        console.log("Number is Odd ")
    }else{
        console.log("Number is Even")
    } 
}

checkEven(6);
// task2
function square(n){
    return (n*n);
}
console.log(square(4));

// Activity2: Function Expression
// task3
function findMax(n1,n2){
    return Math.max(n1,n2);
}
console.log(findMax(5,-5))

// task 4
function concatenateString(str1, str2){
    return (str1+str2);
}

console.log(concatenateString("saurabh","Kumar"))


//Activity3: Arrow Function
// task5
let sum = (n1,n2)=>{
    return n1+n2

}

console.log(sum(5,5))

// task 6
let checkCharacter = (str,c) => {
    for(let i=0; i<str.length; i++){
        if(str[i]==c){
            return true;
            break;
        }
    }

    return false;

}
console.log(checkCharacter("saurabh",'a'));

//Activity 4: Function parameter and default parameter
// task7
let product = (a,b=7) => a*b;
console.log(product(5,9));
console.log(product(5))

// task8
let greetMsg = (name,age=22) => {
    console.log(`${name} is ${age} years old`);

}
greetMsg("saurabh",15)
greetMsg("saurabh")

// Activity5: Higher order function
// task9:
  
function repeatFunction(func,num){
    for(let i=0; i<num; i++){
        func();
    }
}


function sayHello(){
    console.log("Hello");
}

num =5;
repeatFunction(sayHello,num);

// task10

function higherOrderFunction(func1,func2,n){

}


// task10
function applyFunctions(func1, func2, val){
    return func2(func1(val));
}

function addTwo(n){
    return n+2;
}

function multiplyThree(n){
    return n*3;
}

let result = applyFunctions(multiplyThree,addTwo,5);
console.log(result);


