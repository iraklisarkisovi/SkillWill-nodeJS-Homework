const validator = require('validator');

const Trueemail = "test@test.com";
const Falseemail = "abcDE123";

const result1 = validator.isEmail(Trueemail); 
const result2 = validator.isEmail(Falseemail);

console.log("result1: ", result1);
console.log("result2: ", result2);

// install validator before starting :)