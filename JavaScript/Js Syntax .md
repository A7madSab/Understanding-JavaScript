# JS Syntax

## let and const

Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

- Variables declared with let can be reassigned, but can’t be redeclared in the same scope. Use let when you plan to reassign new values to a variable.
- Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned. Use const when you don’t plan on reassigning new values to a variable.

---

## What about var

Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const.

---

## Template Literals

Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (``) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using \${expression}. This makes it much easier to build strings.

---

## Destructuring

Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

When you destructure an object and store method into a variable, it no longer has access to "this" in the object which results may result in an error.

    const gemstone = {
        type: 'quartz',
        color: 'rose',
        carat: 21.29
    };
    const {type, color, carat} = gemstone;
    console.log(type, color, carat);

**_Eample_**

Destructuring Arrays:

    const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

    const [one , , , two, , , , three] = things;

    const colors = `List of Colors
    1. ${one}
    2. ${two}
    3. ${three}`;

    console.log(colors);

    Output:
    List of Colors
        1. red
        2. green
        3. blue

---

## Object literal shorthand & Shorthand method names

Instead of:

    let type = 'quartz';
    let color = 'rose';
    let carat = 21.29;

    const gemstone = {
        type: type,
        color: color,
        carat: carat
        calculateWorth: function() {
            // will calculate worth of gemstone based on type, color, and carat
        }
    };

Use

    let type = 'quartz';
    let color = 'rose';
    let carat = 21.29;

    const gemstone = {
        type,
        color,
        carat,
        calculateWorth(){ // the keyword function isn't needed
            // will calculate worth of gemstone based on type, color, and carat
        }
    };

## Loops

**for loop:** the biggest downside of a for loop is having to keep track of the counter and exit condition.

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < digits.length; i++) {
        console.log(digits[i]);
    }

**for in:** improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition. We still have to deal with the issue of using an index to access the values of the array, it almost makes it more confusing than before.

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const index in digits) {
        console.log(digits[index]);
    }

**For of loop:** improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition. We still have to deal with the issue of using an index to access the values of the array, it almost makes it more confusing than before.

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const digit of digits) {
        console.log(digit);
    }

---

## Spread operator

The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

**Eample 1:**

    const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
    console.log(...books);

**Eample 2:**

    const fruits = ["apples", "bananas", "pears"];
    const vegetables = ["corn", "potatoes", "carrots"];
    const produce = [...fruits, ...vegetables];
    console.log(produce);

---

## Combining arrays with concat function

    const fruits = ["apples", "bananas", "pears"];
    const vegetables = ["corn", "potatoes", "carrots"];
    const produce = fruits.concat(vegetables);
    console.log(produce); // Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

---

## Rest parameter

The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

    const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
    const [total, subtotal, tax, ...items] = order;
    console.log(total, subtotal, tax, items);

**Variadic functions** is another use case for the rest parameter. Variadic functions are functions that take an indefinite number of arguments. This replaced the **arguments object**, _arguments_ is a keyword.

    function sum() {
        let total = 0;
        for (const argument of arguments) {
            total += argument;
        }
        return total;
    }

    let a = sum(12, 5, 6, 2, 7, 5, 1, 8, 1, 8, 1, 52, 9, 5, 1, );
    console.log(a);     // 123

This is misleading because we know the sum() function can handle an indefinite amount of arguments.

## Arrow functions

ES6 introduces a new kind of function called the arrow function. Arrow functions are very similar to regular functions in behavior, but are quite different syntactically. The following code takes a list of names and converts each one to uppercase using a regular function:

**Before:**

    const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) {
        return name.toUpperCase();
    });

**After:**

    const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
        name => name.toUpperCase()
    );

Regular functions can be either **function declarations**(when the keyword "function" is the first word) or **function expressions**, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid. This includes being:

1. Stored in a variable

   - const greet = name => `Hello ${name}!`;
   - const sayHi = () => console.log('Hello Udacity Student!');
   - const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);

     - This format of the function body is called the "concise body syntax". The concise syntax:
       - has no curly braces surrounding the function body
       - and automatically returns the expression.

   - If you need more than just a single line of code in your arrow function's body, then you can use the "block body syntax".
     - it uses curly braces to wrap the function body
     - and a return statement needs to be used to actually return something from the function.

2. Passed as an argument to a function,
3. Stored in an object's property

## "this"

The value of the this keyword is based completely on how its function (or method) is called. this could be any of the following:

1. A new object: If the function is called with new:

   const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);

   - In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

2. A specified object: If the function is invoked with call/apply:

   const result = obj1.printName.call(obj2);

   - In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call()is to explicitly set what this refers to.

3. A context object

   If the function is a method of an object:

   data.teleport();
   In the code above, the value of this inside teleport() will refer to data.

4. The global object or undefined

   If the function is called with no context:

teleport();
In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.

## Boxing

JS will automatically wrap `(box)` primitive values so you have access to methods

    42.toString() // error
    const a = 42
    a.toString() // "42"

## Shadowing

Creating a new variable using an old same variable name, tbe newly creating variable overshadows the old one, as if the old one didn't exist.
