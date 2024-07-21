// Activity1: Object creation and access
// Task1
const book = {
    title:"Computer Science",
    author:"saurabh",
    year:2030,
}
console.log(book)

// Task2
console.log(book.title)
console.log(book.author)

// Activity2:Object Method
// Task3
book.myMethod = function (){
    let str = book.title + " " + book.author
    return str
}
console.log(book.myMethod())


// Task4
book.resetYear = function(newYear){
    book.year = newYear
}
book.resetYear(2040)
console.log(book.year)
console.log(book)

// Activity3: Nested object
// task5
const library = {
    name: "Awesome Library",
    books: [
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951,
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
        },
        // Add more books as needed
    ],
};

// Log the summary of the library
console.log(library)
console.log(`Library Name: ${library.name}`);
console.log("Books in the library:");
library.books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year})`);
});

// task6
console.log(library.name)
for (const bk of library.books) {
    console.log(bk.title);
    
}


// Activity4: The This keyword
// task7
book.bookInfo = function(){
    let str = this.title + " " + this.year
    return str
}
console.log(book.bookInfo())

// Activity 5:Object iteration 
for (const key in book) {
    console.log(key + ":-" + book[key])
    
}

// task 9
// Log all keys (properties) of the book
const keys = Object.keys(book);
console.log("Keys (Properties) of the Book:");
keys.forEach((key) => {
    console.log(key);
});

// Log all values of the book
const values = Object.values(book);
console.log("\nValues of the Book:");
values.forEach((value) => {
    console.log(value);
});

 
