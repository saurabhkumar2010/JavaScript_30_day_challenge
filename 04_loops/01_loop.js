// Activity 1: for loop 
for(let i=1; i<=10; i++){
    console.log(i);
}

for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

// Activity 2: while loop
let i =1;
let sum =0
while(i<=10){
    sum += i;
    i++;
}
console.log(sum);
i--;
while(i>0){
    console.log(i);
    i--;
}


// Activity 3: do while loop 
let a =1;
do{
    console.log(a);
    a++;
}while(a<=5);


let p =5;
let fact = 1;
do{
    fact *= p;
    p--;
}while(p>0);
console.log("factorial is " + fact);


// Activity 4: Nested loops 
let n=5;
for(let i=0; i<n; i++){
    for(let j=0; j<i+1; j++){
        process.stdout.write("*");
    }
    console.log("");

}


// Activity 5: Loop control structure                  
for(let i=1; i<=10; i++){
    if(i==5)
        continue;
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i==7)
        break;
    console.log(i);
}