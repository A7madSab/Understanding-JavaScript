# React

React uses JavaScript objects to create React elements. We'll use these React elements to describe what we want the page to look like, and React will be in charge of generating the DOM nodes to achieve the result.

Recall from the previous lesson the difference between imperative and declarative code. The React code that we write is declarative because we aren't telling React what to do; instead, we're writing React elements that describe what the page should look like, and React does all of the implementation work to get it done.

Enough theory, let's get to it and create some elements!

---

## JSX Returns One Main Element

When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX.

    _Adjacent JSX elements must be wrapped in an enclosing tag_

Since we know that JSX is really just a syntax extension for .createElement(), this makes sense; .createElement() takes in only one tag name (as a string) as its first argument.

## Declaring Components in React

We are defining a component that's really just a JavaScript class that inherits from React.Component

    _Every component should implement the render function that returns a view/element_

---

## Creating Elements Recap

We can use .createElement() to render HTML onto a document. More often than not, however, you'll use a syntax extension to describe what your UI should look like. This syntax extension is known as JSX, and just looks similar to plain HTML written right into a JavaScript file. The JSX gets transpiled to React's .createElement() method that outputs HTML to be rendered in the browser.

1. Components represent the modularity and reusability of React.
2. You can think of your component classes as factories that produce instances of components. (Should follow the **single responsibility principle** )
   - If it manages too many different tasks, it may be a good idea to decompose your component into smaller subcomponents.

when passing in a prop, you just type out the name of the prop as if it's a regular HTML attribute.

---

## Functional Components vs. Stateless Functional Components vs. Stateless Components

If all the class contains is the render functions, we can switch from using classes to functions to create our components, this means however we can't access the props by using the `this` keyword, instead the function will be passed it's props as the first argument to the function.

**Stateless Functional Components Recap:** If your component does not keep track of internal state (i.e., all it really has is just a render() method), you can declare the component as a Stateless Functional Component.

**Stateless Components:**

    class Email extends React.Component {
        render() {
            return (
                <div>
                {this.props.text}
                </div>
            );
        }
    }

**Stateless Functional Components:**

    const Email = (props) => (
        <div>
            {props.text}
        </div>
    );

---

## State

**_props_** refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

In this section, we'll see how we can encapsulate the complexity of state management to individual components.

Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language. It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!

**Props in Initial State:** When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.

    this.state = {
        user: props.user
    }

In the above example, if props are ever updated, the current state will not change unless the component is "refreshed." Using props to produce a component's initial state also leads to duplication of data, deviating from a dependable "source of truth."

**Import "React" from react:** Eventhough we don't directly use React.SOMETHING it is used to to parse the jsx to normal js.

**Render Function call only return one object:** Because the `React.createElement` take only one parameter.

## Reconciliation

The first thing React does when setState() is called is merge the object passed to setState() into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to update the UI based on this new state in the most efficient way possible. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this new tree, React will "diff" it against the previous element tree in order to figure out how the UI should change in response to the new state. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, it will able to minimize its footprint on the UI by only making updates where absolutely necessary.
