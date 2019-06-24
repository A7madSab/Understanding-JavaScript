# Objects and Funcitons

## Objects and "." the dot

Can contain:

1. Primtive property
2. Object property
3. Function method

The Object has references to the addresses where these properties and functions live.

**Object Literals:** "{}" short for "new object();"

|                       |                               |
| --------------------- | ----------------------------- |
| `var Person = {`      | `var Person = new object();`  |
| `firstName: "Ahmad",` | `Person.firstName = "Ahmad";` |
| `lastName: "Sabry`    | `Person.lastName = "Sabry";`  |
| `}`                   |                               |

---

## Namespace

A container for variables & functions, usually to keep varibale and functions with the same name seperated

## JSON Javascript Object Notation

JSON is a _subset_ of the Object literal synax

Json.stringify: from JS object to Json
Json.Parse: from Jasn string to JS object

---

## Functions

In JS functions are objects.

_First Class Functions_: this means that anything you can do with objects you can do with functions. It has all the features of a normal object and has some special properties.

1. Name (Optional)
2. Code (Invocable)

You can add properties to a functions

![functionsAreObjects.PNG](..\images\functionsAreObjects.PNG)

**_Functions Statements & function Expressions_**
Statements: lines of code that doesn't results a value
Expressions: lines of code that results a value.

Function Expression exist because of first class functions.

**Funciton Statements:**

    function a (){
        // code;
    }
    Put into the memory in the parcing stage.

**Funciton Expression:**

    let a = function(){
        // code;
    }
    Isn't put into memory initically, put during execution.

**Immediately Invoked Funciton Expression(IIFE):**

    let a = function(){
        // code;
    }()

    (function(){
        // code;
    })(Parmeters)
    Isn't put into memory initically, put during execution, and executed immediately

---

## Pass By Value

**Pass By Value:**

1. Used in assignmnet Operation for primitives.
2. Passing primitives to functions.

   ![Pass By Value](..\images\PassByValue.PNG)

**Pass By Refrence:**

1. All Objects and functions.
2. Passing Objects to fucntions.

![Pass By Refrence](..\images\PassByRef.PNG)

## This

1. In a gobal function, "this" refer to the gobal object window object.
2. In a function within a function, "this" refer to the gobal window object.
3. In a functions inside an object, "this" refers to the object instance.
4. In a function that is inside another function inside an object this refer to the gobal window object (which most people concider a bug). In this case:

   `var self = this;`

is used in the outer function to set the self variable to the object instance and used inside function.
