# Creating Reusable Components: The Power of Buttons
In this module, we're going to dive into one of the most powerful ideas in React: creating reusable components.
Reusable components are exactly what the name suggests: blocks of code that we create that can be used over and over within our application.
## The Problem with Repetition

Imagine we need a dozen buttons across our website: a "Login" button, a "Submit" button, a "Cancel" button, and an "Add to Cart" button.
If we write the HTML and CSS for each button separately, like this:

```html
<button class="primary-btn" onclick="handleLogin()">Login</button>
<button class="primary-btn" onclick="handleSubmit()">Submit</button>
```
...what happens if our designer decides all buttons need a different color, bigger padding, or a small icon? We would have to manually change the code in 12 different places. That's tedious and error-prone!
## The Solution: The <Button> Component
Instead, we're going to create a single, centralized React component called <Button />.
* This component will contain all the shared HTML structure and styling rules.
* We can then use this one component everywhere:

```typescript
<Button>Login</Button>
<Button>Submit</Button>
<Button>Add to Cart</Button>
```
Now, if we need to change the button's style, we only change the code in one place—inside the <Button /> component definition.
## Making it Smart with Props (Properties)
A button component wouldn't be very useful if every single button looked and behaved exactly the same way. We need to make our component configurable.

This is where Props (short for properties) come in. Props allow us to pass information from the parent component down to our reusable <Button /> component, customising its appearance or behavior each time we use it. We'll learn how to use props to change two key things about our reusable button:
* Custom Text: We can pass the text displayed on the button.
* Custom Behavior: We can pass a function to determine what happens when the button is clicked.

By the end of this module, you'll have a fully reusable <Button /> component that is easy to maintain, consistent across your app, and ready for any customisation you throw at it.

## Practical
Lets dive in and have a bit of a play about creating our button component that we can use throughout our application to start with

We're going to start by creating a new folder called Components within our src folder and inside there we'll create a file called Button.tsx. Inside of there we're going to create a functional component for our button

```typescript
import React from "react";

const Button: React.FC = () => {
  return <button onClick={() => alert("Button clicked!")}>Click Me</button>;
};

export default Button;
```
In the above code we're creating our functional component with everything static which doesn't make it very much of a reusable component in my opinion but for the purposes of going through step by step we'll call our new component from App.tsx and see how it looks and functions on the page. Update that file with the following

```typescript
'index.css';
import Button from "./Components/Button";

function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1 className="heading">Hello, {user}!</h1>
        <Button/>
      </div>
    </>
  )
}

export default App
``` 

With the functionality that we've added we now have a button that when clicked displays an alert but its not a very clever reusable component. In the next course section we can explore making it a bit more clever using props

## Homework
For this homework section please have a play about with adding as many buttons onto the page as you can to show how reusable our new component is