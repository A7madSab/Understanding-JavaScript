# Conceptual

## Syntactic Parsers

- It's a program that reads your code and determines what it does and if it's grammer is valid. It convert your program into something that ur program can understand (compliers, interperters).

## Lecucal Environments

- Where something sits physically in the code you write(Scope).

## Execution Contexts

- A wrapper to help manage the code that is running, there are lots of lecical enviroments, which one is currently running is managed via Execution Context. it can contain things beyond what you've written in your code.

  - **Types**

    - **Global Exection Context**: the word gloabl means Code/varibals that isn't inside a function, Global Exection Context which is created by the javascript engine running in chrome created 3 things:

      1. create global object
      2. The "this" Object
      3. Outer Environmnet

When Objects and functions aren't sitting inside a function it get attached to the global variabls.

![Exexution Context](../images/exexutionContext.PNG)

### The Exection Context is Created in two Phases

1. **Creation Phase**: in this phase as the **Parsers** runs through the code and begins to setup what is written for translation, it recognises where variables and functions are created and sets up the memory accordingly (known as Hoisting), so these functions and varibales do exist in memory and can be accessed, however, when it sets a variable's value it puts a placeholder called "undefined". All objects in Javascript is set to undefined while declaring [Example](Conceptual.md).

2. **Execution Phase**: Execute the code line by line

There is always a global object (insides a browser its the window Object). Without writting any code we have these variables avalablle to us.

![chormeConsole](..\images\chormeConsole.PNG)

At a global level "this" = Global Object.

## What's an Objects

It is Simply, a colletion of of name value pairs, where values can also be a name value pair

      let object = {
            Name: "Ahmad",
            Address: "Cairo Egypt",
            Age: 21
      }
