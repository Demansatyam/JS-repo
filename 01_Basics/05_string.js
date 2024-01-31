const name = "Satyam"
const repoCount = 10

// This is not a good practice
// console.log(name + repoCount + "Value");

// So we use back ticks ` `
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

console.log(name.__proto__)
console.log(name.charAt(2))
console.log(name.indexOf('t'))
console.log(name.toUpperCase())

const newString = name.substring(0,4)
console.log(newString)

const anotherString = name.slice(-6 , 4)
console.log(anotherString)

const newStringOne = "  Satyam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20thakur"
console.log(url.replace('%20' , '-'));