// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: tangerine, magenta, lilac, daffodil, indigo
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
 //console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: this logged 10 because the indexes count spaces as characters 

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: this logged "o" because the count begins at 0 and "o" is in the 4th space

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: this logged Ruby because the language thats being referred to in the console.log is in the 1 position, that ends up being ruby because the count began at 0

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(`${weekendDays}`.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: initially this logged an error but after adding string interpolation around weekendDays in the console.log line (not sure if i was supposed to do that lol)

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: this logged "number" because it ran the typeof data first and didn't end up checking the .length
