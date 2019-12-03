// 1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Hello World!");
console.log("Merhaba Dunya!");
console.log("привет мир!");
console.log("Hallo Welt!");

// 2. Consider the following code:
// console.log('I'm awesome');
// Solution 1: Use double quote.
console.log("I'm Awesome");
// Solution B: Use escape chracter tht is backslash \
console.log('I\'m Awesome!')

// 3. Declare a variable x and initialize it with an integer, using these exact steps:
// 3.1 First, declare your variable x (do not initialize it yet).
let x;
// 3.2 Add a console.log statement that explains that explains in words what you think the value of x is, like in this example:
console.log("Undefined.");

// 3.3 Add a console.log statement that logs the value of x.
console.log(typeof x); // The answer of console is 'undefined'.

// 3.4 Now initialize your variable x with an integer.
x = 1;
// 3.5 Next, add a console.log statement that explains what you think the value of x is.
console.log("The value of x is 1");
// 3.6 Add a console.log statement that logs the value of x. Steps to be taken:
console.log("The Value of x will be 1");
console.log(x); // The answer of console is '1'.

// 4. Declare a variable y and assign a string to it.
let y = "Hello World";

// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("The value of y will be: Hello World")
// 4.2 Now console.log the variable y.
console.log(y); // The answer of console is 'Hello World'.

// 4.3 Now assign a new string to the variable y.
y = "Hi";
// 4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log("The value of y will be Hi");
// 4.5 Now console.log y again.
console.log(y);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
// 5.1 Declare a variable z and assign the number 7.25 to it.
let z = 7.25;
// 5.2 Console.log z.
console.log(`The value of z is: ` + z);

// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.floor(z);

// 5.4 Console.log a.
console.log(`The value of a is: ` + a)

// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 Console.log the highest value.
if (a > z) {
  console.log("Value a is higher than z");
} else if (z > a) {
  console.log("Value z is higher than a");
}

// 6. Arrays!
// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)
let animals = [];

// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log("The value of animals is: []")

// 6.3 Console.log your array.
console.log(animals);

// 6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
let animals = ['Dogs', 'Cats', 'Birds']
// 6.5 Log your array.
console.log(`My favorite animals are: ` + animals)

// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
animals.push("baby pig");

// 6.7 Log your new array!
console.log(`Animals: ` + animals);

// 7. More strings
// 7.1 Let's consider the following string: let myString = "this is a test".
// 7.2 Add the string to your file and console.log it.
let myString = "this is a test";

// 7.3 Find a way to get the length of myString.
// 7.4 Console.log the length of myString.
console.log(myString.length); // The answer of console is '14'.

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value
let friend1 = "Hasan";
let friend2 = "Ercan";
let num1 = 3;
let foo = false;

console.log(friend1); // The answer of console is 'Hasan'.
console.log(friend2); // 'Ercan'.
console.log(num1); // '3'.
console.log(foo); // 'false'.


// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("Type of friend1 is string");
console.log("Type of friend2 is string");
console.log("Type of num1 is number");
console.log("Type of foo is boolean");

// 8.4 Now use typeof to log the actual type of your variables.
console.log(`The type of friend1 is: ${typeof friend1} `)
console.log(`The type of friend2 is: ${typeof friend2} `)
console.log(`The type of num1 is: ${typeof num1} `)
console.log(`The type of lie is: ${typeof foo} `)
// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
 
if (typeof friend1 === typeof friend2) {
  console.log("SAME TYPE");
}

if (typeof friend1 === typeof foo) {
  console.log("SAME TYPE");
} else {
  console.log("DIFFERENT TYPE")
} // The answer of console is 'DIFFERENT TYPE'.

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
console.log("When we do operations with %, % is the remainder");
console.log("The value of x % 3 or 7 % 3 is 1");
console.log("The remainder after a division with 7 / 3 is 1.");

// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
let array1 = ["Yes we can", true, 3];

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
if (6/0 === 10/0) {
  console.log("Yes we can.");
}
