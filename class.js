// #Task1.
// Given an object with properties name, age, and location, return a
// formatted string in the format "Name is Age years old and lives in Location"

// function formatPerson(person) {
//    return `${person.name} is ${person.age} years old and lives in ${person.location}`
// }
// console.log(formatPerson({name: "John", age: 30, location: "New York" }));
// console.log(formatPerson({ name: "Alice", age: 25, location: "London" }));
// console.log(formatPerson({ name: "Bob", age: 40, location: "Paris" }));

// #Task 2.
// Given an object containing counts of both upvotesand downvotes,
// return what vote count should be displayed. This is calculated by
// subtracting the number of downvotesfrom upvotes.

// function getVoteCount(votes) { 
//       return votes['upvotes']- votes['downvotes']
// }
// console.log(getVoteCount({upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({upvotes: 132, downvotes: 132 }));


// 3
// Given an array of objects where each object represents a product
// with properties name and price, return the total price of all products.

// function getTotalPrice(things) {
//     let count = 0
//     for (const value of things) {
//         count += value.price
//     }
//     return count
// }
// console.log(getTotalPrice([{ name: 'Book', price: 10},{name: 'Pen', price: 2}, {name: 'Notebook', price: 5,} ]));
// console.log(getTotalPrice([{ name: "Shoes", price: 50 }, { name: "Shirt", price: 20 }, { name: "Hat", price: 15} ]));
// console.log(getTotalPrice([{ name: "Bag", price: 30 },{ name: "Belt", price: 10 }, { name: "Jacket", price: 100} ]));


// 4
// Given an object with properties firstName, lastName, and
// birthYear, return the person's age assuming the current year is 2024.

// function getAge(person) {
//     return 2024 - person.birthYear
// }
// console.log(getAge({ firstName: "John", lastName: "Doe", birthYear: 2000 }));
// console.log(getAge({ firstName: "Alice", lastName: "Smith", birthYear: 1990 }));
// console.log(getAge({ firstName: "Bob", lastName: "Brown", birthYear: 1985 }));

// function getAge(person) {
//     return person.reduce((year, elem) => year - elem.birthYear, 2024)
// }
//     console.log(getAge([{firstName: "John", lastName: "Doe", birthYear: 2000}]));
//     console.log(getAge([{firstName: "Alice", lastName: "Smith", birthYear: 1990}]));
//     console.log(getAge([{firstName: "Bob", lastName: "Brown", birthYear: 1985}]));


// 5
// Given an object with properties title, author, and ratings (an array
// of integers), return a string summarizing the book in the format "Title
// by Author has an average rating of X.", where X is the average of the ratings

// function summarizeBook(book) {
//     let count = 0
//     let arr = book.ratings.forEach(element => {
//         count += element
//     });
//     return `${book.title} by ${book.author} has an average rating of ${count/book.ratings.length}`
// }
// console.log(summarizeBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", ratings: [5, 4, 5, 3, 4] }));
// console.log(summarizeBook({ title: "1984", author: "George Orwell", ratings: [5, 5, 5, 4, 4] }));
// console.log(summarizeBook({ title: "To Kill a Mockingbird", author: "Harper Lee", ratings: [5, 4, 4, 5, 5] }));

