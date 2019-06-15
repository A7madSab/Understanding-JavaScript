# Hoisting Example

Input code: This is a normal situation where variabes and functions are defined, initialized then called;

    var a = "Hello World";
    function b(){
        console.log("Called B!");
    }

    b();                // Calling function b
    console.log(a);     //print a

Output:
![HoistingExample1Output](images\HoistingExample1Output.PNG)

Input code:**Parsers** runs through the code and begins to setup what is written for translation, it recognises where variables and functions are created and sets up the memory accordingly (known as Hoisting), so these functions and varibales do exist in memory and can be accessed. However, when it sets a variable's value it puts a placeholder called "undefined". All objects in Javascript is set to undefined

    b();
    console.log(a);

    var a = "Hello World";
    function b(){
    console.log("Called B!");
    }

Output:
![HoistingExample1Output](images\HoistingExample2Output.PNG)

Input code: Accessing something that is undefined will result in an error, "a" isn't defined anywhere.

    b();
    console.log(a);

    function b(){
    console.log("Called B!");
    }

Output:
![HoistingExample1Output](images\HoistingExample3Output.PNG)
