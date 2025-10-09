// Task - 1
// Write a function that takes two parameters str1 and str2. The function should return the boolean value true if the first letter of str1 is equal to the last letter of str2. Otherwise, the function should return the boolean value false.

function compareNumbers(str1, str2) {
    return str1[0] === str2[str2.length - 1];
}
console.log(compareNumbers("123", "345")); // false
console.log(compareNumbers("123", "321")); // true

// Task-2
// Write a function that takes two parameters str1 and str2. The function should return the boolean value true if the first letter of str1 is equal to the first letter of str2. Otherwise, the function should return the boolean value false.

function compareNumbers1(str1, str2) {
    return str1[0] === str2[0];
   
}

console.log(compareNumbers1("123", "145")); // true
console.log(compareNumbers1("123", "321")); // false

// Task-3
// Write a function that takes two parameters str1 and str2. The function should return the boolean value true if the length of str1 is equal to the length of str2. Otherwise, the function should return the boolean value false.

function compareLengthString(str1, str2) {
    return str1.length === str2.length;
    
}

console.log(compareNumbers1("123", "145")); // true
console.log(compareNumbers1("123", "3214")); // false

// Task-4
// Write a function that accepts a number num. The function should return a boolean value of true if the number has an even number of digits. Otherwise, the function should return a boolean value of false.

function returnBoolean(num) {
    return num.length % 2 === 0;
}

console.log(returnBoolean("145")); 
console.log(returnBoolean("3214")); 

// Task-5
// Write a function that takes two parameters num1 and num2. The function should return the boolean value true if num1 is greater than num2. Otherwise, the function should return the boolean value false.

function greaterNumber(num1, num2) {
    return num1 > num2;
}

console.log(greaterNumber(14, 5)); 
console.log(greaterNumber(8, 26)); 

