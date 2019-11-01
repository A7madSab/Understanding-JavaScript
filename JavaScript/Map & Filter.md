# Map & Filter

## Array's .map() Method

It gets called on an existing array and returns a new array based on what is returned from the function that's passed as an argument.

    const names = ['Karen', 'Richard', 'Tyler'];
    const nameLengths = names.map( name => name.length );

**_Note:_** the .map() method returns a new array, it does not modify the original array.

## Array's .filter() Method

JavaScript's Array .filter() method is similar to the .map() method:

1. it is called on an array
2. it takes a function as an argument
3. it returns a new array

The difference is that the function passed to .filter() is used as a test, and only items in the array that pass the test are included in the new array.
