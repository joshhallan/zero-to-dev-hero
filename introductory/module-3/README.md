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

Realistically we're only adding in 2 lines, one to call the button component file and what we want from it, and one to actually call the component code.

As I said, its not very reusable so lets make a change to that by jumping back into the button code. Add in the following

```typescript 
import React from "react";

interface ButtonProps {
  label: string;
  message: string;
}

const Button: React.FC<ButtonProps> = ({ label, message }) => {
  return <button className="btn" onClick={() => alert(message)}>{label}</button>;
};

export default Button;
```

So now we've added an interface so that the button knows what properties it should be receiving, our label and message. We'll now update our App.tsx code to call the button a couple of times with different props passed and see what happens

```typescript
'index.css';
import Button from "./Components/Button";

function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1 className="heading">Hello, {user}!</h1>
        <Button label="button 1" message="Hello from button 1!" />
        <Button label="button 2" message="Hello from button 2!"/>
        <Button label="button 3" message="Hello from button 3!"/>
      </div>
    </>
  )
}

export default App
```

Now that we've got a couple of more buttons added with only minimal props passed we've created a reusable component. Lets look at adding classes for variations on the buttons. We're going to update our files with the following code

index.css
```css

.btn.success {
  background-color: green;
  color: white;
}

.btn.danger {
  background-color: red;
  color: white;
}

.btn.neutral {
  background-color: blue;
  color: white;
}
```
App.tsx
```typescript
'index.css';
import Button from "./Components/Button";

function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1 className="heading">Hello, {user}!</h1>
        <Button label="button 1" message="Hello from button 1!" style="success"/>
        <Button label="button 2" message="Hello from button 2!" style="danger"/>
        <Button label="button 3" message="Hello from button 3!" style="neutral"/>
      </div>
    </>
  )
}

export default App
```

Button.tsx
```typescript
import React from "react";

interface ButtonProps {
  label: string;
  message: string;
  style: string;
}

const Button: React.FC<ButtonProps> = ({ label, message, style }) => {
  return <button className={`btn ${style}`} onClick={() => alert(message)}>{label}</button>;
};

export default Button;
```

The above changes are creating different css styling for the different buttons that we may need, we've updated the button component call to include the style of button that we want and we've update the button component to accept that style and place it into the class of the button to control how it looks visually

Congratulations on creating your first reusable component

## Homework
Yes more homework, but again this isn't going to be a big big one. Please just continue on with what we've been doing by having a play around with the different styles by adding more css classes for different buttons and calling it within the components