// let score = true

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));

// It will print NaN, if score = "33abcs" or score = undefined
// But if score = null, it will print 0
// It will print 0, if it is false boolean value and print 1 in case boolean value is true
// console.log(valueInNumber);

let isLoggedIn = 0 ;
let booleanIsLoggedIn = Boolean(isLoggedIn)

// While conversion in Boolean, if try to convert an empty string it will print "true"
// or if we convert any string it will print true

console.log(booleanIsLoggedIn);