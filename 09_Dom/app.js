// Activity1:Selecting and manupulating elements
// task1
document.querySelector('#firstHeading').innerHTML = "saurabh"
// task2
const  myElement = document.querySelector(".container");
myElement.style.color = "white";
myElement.style.background = "navy"

// Activity2:Creating and appending Elements
// task3

const newDiv = document.createElement('div')
newDiv.innerText ="My name is khan"
document.body.appendChild(newDiv) 

// task4
const li = document.createElement('li')
li.innerText = "NoteBook"
const myUl = document.querySelector(".myUl")
myUl.appendChild(li)


// Activity3:Removing Elements
// task5
newDiv.remove()

// task6
myUl.lastChild.remove()


// Activity 4: Modifying Attributes and Classes
// task7
const img = document.querySelector('img');
img.setAttribute('src','https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

// task 8
img.classList.add('myImg');
img.classList.remove('myImg')

// Activity5: Event Handling
// task 9(uncomplete)
const para = document.querySelector("#myPara");
const bt = document.querySelector("#myBtn");

// bt.addEventListener('click', () => {
//     para.textContent = "Text is changed now";
// });


// task 10(uncomplete)
myElement.addEventListener('click',()=>{
    myElement.style.border.color = "red"
})



