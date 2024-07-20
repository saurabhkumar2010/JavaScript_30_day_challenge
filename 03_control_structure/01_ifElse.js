// Activity 1: If-else statement
let n = -5;
if(n==0){
    console.log("Zero");
}else if(n>0){
    console.log("Positive");
}else{
    console.log("negative");
}


let age = 17;
if(age>=18){
    console.log("Eligible");
}else{
    console.log("Not eligible");
}


// Activity 2: Nested if else
let a=0,b=5,c=15;
if(a>b){
    if(a>c){
        console.log(`${a} is greatest `);
    }else{
        console.log(`${c} is greatest`);
    }

}else if(b>a){
    if(b>c){
        console.log(`${b} is greatest`);

    }else{
        console.log(`${c} is greatest`);

    }
}else{
    console.log(`${c} is greatest`);

}


// Activity 3: Switch Case 
let num = 7;
switch(num){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thrusday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Invalid number");
    break;
}


let m =91;
switch(true){
    case (m>90 && m<=100): console.log("A");
    break;
    case (m>80 && m<=90): console.log("B");
    break;
    case (m>70 && m<=80): console.log("C");
    break;
    case (m>60 && m<=70): console.log("D");
    break;
    case (m>0 && m<=60): console.log("F");
    break;
    default: console.log("Invalid marks");
    break;
}


// Activity 4: conditional (ternary operator)
let x = 3; 
let ans = x%2==0?"Even":"odd";
console.log(ans);


// Activity 5: combining conditions
let year = 1800;

if(year%4==0 && year%100==0 && year%400==0){
    console.log("Leap year");
}else if(year%4==0 && year%100!=0 && year%400!=0){
    console.log("Leap year");
}else{
    console.log("not a leap year");
}