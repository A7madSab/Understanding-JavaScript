# Hoisting Example

Input code: This is a normal situation where variabes and functions are defined, initialized then called;

    var a = "Hello World";
    function b(){
        console.log("Called B!");
    }

    b();                // Calling function b
    console.log(a);     //print a

Output:

![HoistingExample1Output](..\images\HoistingExample1Output.PNG)

**Parsers** runs through the code and begins to _setup_ what is written for translation. It recognises where variables and functions are created and sets up the memory accordingly,(some refer to as "Hoisting"), so these functions and varibales do exist in memory and can be accessed. However, when it sets a variable's value it puts a placeholder called "undefined".

Input code:

    b();
    console.log(a);

    var a = "Hello World";
    function b(){
    console.log("Called B!");
    }

Output:

![HoistingExample1Output](..\images\HoistingExample2Output.PNG)

Input code: Accessing something that is undefined will result in an error, "a" isn't defined anywhere.

    b();
    console.log(a);

    function b(){
    console.log("Called B!");
    }

Output:

![HoistingExample1Output](..\images\HoistingExample3Output.PNG)

## let and const

Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

- Variables declared with let can be reassigned, but can’t be redeclared in the same scope. Use let when you plan to reassign new values to a variable.
- Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned. Use const when you don’t plan on reassigning new values to a variable.
- Unlike var let and const can't be redefined.
- ( const )The referiance to the variable is constant
    const a = {}
    a.key = value // Valid
    a = value // InValid

## What about var

Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const. It doesn't protect you from redefining the same variable again.

## Template Literals

Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (``) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using \${expression}. This makes it much easier to build strings.
