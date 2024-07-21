// Activity 1: Array Creation and Access
// task1
let arr = [1,2,3,4,5]
console.log(arr)
console.log(typeof(arr))

// task2
console.log(arr[0])
console.log(arr[arr.length-1])

// Activity2 :Array Methods
// task3
arr.push(6);
console.log(arr)
// task4
arr.pop()
console.log(arr)
// task5
arr.shift()
console.log(arr)
// taks6
arr.unshift(1);
console.log(arr)



// Activity3: Array Methods(Intermediate)
// task7
let doubled = arr.map((x)=>x*2)
console.log(doubled) 
console.log(arr)

// task8
let evenNumbers = arr.filter((x)=>x%2==0)
console.log(evenNumbers);
console.log(arr)


// taks9
let sum = arr.reduce((acc,currVal)=>{
    return acc + currVal;
},0)
console.log("sum is "+sum)


// Activity4: Array iteration
// task10:
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// task11
arr.forEach((x)=>{
    console.log(x);

})

// Activity5: Multidimension Array 
// task12
let brr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
for(let i=0; i<brr.length; i++){
    for(let j=0; j<brr[i].length; j++){
        console.log(brr[i][j]) 
    }
}

// task13
console.log(brr[2][0])


