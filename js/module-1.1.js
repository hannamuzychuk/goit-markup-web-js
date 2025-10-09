// Task-1
// Create two variables firstName and lastName.
// Assign them your first and last name.
// Combine these two strings into one, with a space between them. Write the result to the variable fullName.
// Print fullName to the console.

const firstName = "Hanna";
const secondName = "Muzychuk";
const fullName = `${firstName} ${secondName}`;
console.log(fullName);

// Task-2
// Create two variables a and b, assign them some integers.
// Perform addition, subtraction, multiplication and division on them.
// Write the results to the variables sum, difference, product, quotient.
// Print all these results to the console.

const a = 25;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// Task-3
// Create a variable radius and assign it some value (for example, 5).
// Use the formula for the area of ​​a circle (π * r²) to calculate the area of ​​a circle with the radius you specified.
// Use the value π = 3.14. Write the result to the variable area.
// Print area to the console.

const radius = 5;
const p = 3.14;
const area = (p * (radius ** 2));

console.log(area);

// Task-4
// Create a variable someString and assign it any string.
// Calculate the length of this string using the .length property.
// Print the length of the string to the console.

const someString = "Create a variable someString and assign it any string.";
const stringLength = someString.length;
console.log(stringLength);

// Task-5
// Create a variable someString and assign it any string.
// Create a variable firstLetter and assign it the first letter of the string someString.
// Create a variable lastLetter and assign it the last letter of the string someString.

const string = "Create a variable someString and assign it any string";
const firstLetter = string[0] ;
const lastLetter = string[string.length - 1];
console.log(firstLetter);
console.log(lastLetter);


// Task - 6
// Create two variables str1 and str2.
// Get the last letter from each variable
// Create a third variable where you combine the previous letters
// Example: for the strings "HELLO" and "WORLD" the result will be the string "OD"

const str1 = "HELLO";
const str2 = "WORLD";
const str3 = str1[str1.length - 1] + str2[str2.length - 1];

console.log(str3);


// Task-7
// Create a variable userValue and write any number to it.

// Create a new variable to which you need to write the result of a mathematical operation, namely:
// multiply userValue by the number 5 to the power (the number of digits in the variable userValue).

// Examples:
// for the number 1 = 1 * 5^1 = 5;
// for the number 2 = 2 * 5^1 = 10;
// for the number 12 = 12 * 5^2 = 300;
// for the number 512 = 512 * 5^3 = 64000;

const userValue = 512;
const numberResult = userValue * (5 ** String(userValue).length);
console.log(numberResult);

// Task - 8
// Print the total number of apples and grapes to the screen. Also print the difference between apples and grapes to the console.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = grapes - apples;
console.log(diff)


// Task - 9
// Replace the override expression with the combined operator `+=`.

let students = 100;
students += 50;
console.log(students);

// Task - 10
// Analyze the precedence of operators in the instruction for determining the value of the variable
// `result`.
const result1 = 108 + 223 - 2 * 5;
const result2 = 108 + (223 - (2 * 5));
console.log(result1);
console.log(result2);

// Task - 11
// Compose a phrase using the template strings `A has B bots in stock`, where A, B are the variables inserted into the string.

const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"