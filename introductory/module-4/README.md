# Clever components
In the last section we created our reusable component but thats all it was, reusable. It wasn't a clever reusable component each button has the same text and functionality. Now, we're going to learn about props and how we can use those to make our resusable button truely reusable and a bit more clever.

## What are props
Props is short-hand for properties. Props can be used as a, sort of, customisation for components. It means that, instead of a component only having one job it could have multiple jobs depending on what information is being sent with it when you call it. 

Props work in a two-step process which is the passing and receiving. You pass the information when you call the component from the parent and the component will receive the information

Parent
```typescript
<Image src="/link/to/my/img.png"/ alt="this is my image"/>
<Image src="/link/to/my/different-img.png"/ alt="this is my other image"/>
```
Child
```typscript
function Image(props) {
    return (
        <img src={props.src} alt={props.alt}/>
    )
}
```

In the example above you can see that the props that we're sending (src and alt) from the parent are being received by the child and are being used within the html tag. This is what makes the reusable component clever.

## Practical

Realistically in our previous section all we did was add in a couple of lines, one to call the button component file and what want from it, and one to actually call the component code.

As I said, its reusable but not very clever so lets make a change to that by jumping back into the button code. Add in the following

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