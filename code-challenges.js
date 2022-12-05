// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// create a function that determines the numbers relativatity to boiling point
// if the temp is above 212 it will return "above boiling temp"
// if the temp is below 212 it will return "below boiling temp"
// if the temp is at 212 it will return "at boiling temp"

// const tempCheck = (temp) => {
//     if (temp > 212)
//     return `${temp} is above boiling temperature`  
//     else if (temp < 212)
//     return `${temp} is below boiling temperature`   
//     else if (temp === 212)
//     return `${temp} is at boiling temperature`    
 //}
 //console.log(tempCheck(42))
// // Expected output: "42 is below boiling point"

// const temp2 = 350
//console.log(tempCheck(350))
// // Expected output: "350 is above boiling point"

//const temp3 = 212
 //console.log(tempCheck(212))
// // Expected output: "212 is at boiling point"
// if 

// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:
// create a code that combines the arrays and returns the total index length
// when combined it should log 9 total 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const totalRuns = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// console.log(totalRuns.length)

// // Expected output: 9

// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code:
// create a code that will reverse the letters in the string
// when ran it should log "2202 letoH"

const currentCohort = "Hotel 2022"
var splitCohort = (currentCohort.split(""))
var reveresedCohort = (splitCohort.reverse())
console.log(reveresedCohort)
// // Expected output: "2202 letoH"

// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Pseudo code:
// create a code that will return the last index of the given value 
// when ran it should log 7 for the 1st given value
// when ran it should log 8 for the 2nd given value

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// console.log(myNumbers.lastIndexOf(givenValue1))
// // // Expected output: 7

// const givenValue2 = 10
// console.log(myNumbers.lastIndexOf(givenValue2))
// // // Expected output: 8

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code:
// create a code that will sort all the number from largest to smallest
// using a descending sorting method create a renamed sorted set of temperatures
//when ran it should log the numbers in order from greatest to smallest
// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // // Expected output: [82, 80, 79, 77, 76, 73, 72]
// const sortedSummer = (sanDiegoSummerTemperatures.sort((a,b)=>b-a))

// console.log(sortedSummer)
// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// const sortedWinter = (sanDiegoWinterTemperatures.sort((a,b)=>b-a))
// // // Expected output: [68, 67, 66, 66, 62, 59, 59]
// console.log(sortedWinter)
