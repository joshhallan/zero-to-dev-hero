# Introduction to JSX
JSX stands for Javascript XML and this basically means that it is syntax extension that allows you to create and use HTML objects directly in your Javascript code. In order to use JSX within our React project there are certain rules that you must follow

## DA RULES

1. The return must have a single root element
    - This means that when we do a return statement there must be one parent element encapsulating the entirety of the code that we're returning

### Wrong
```
return (
    <div>
      <h1>Some text</h1>
    </div>
    <div>
      <h1>Some more text</h1>
    </div>
  )
```

### Correct
```
return (
    <div>
        <h1>Some text</h1>
    <div/>
  )
```

2. Use CamelCase for attributes
    - The reason for this is because there are a certain keywords that Javascript uses 
        - class = className
        - for = htmlFor

3. All tags must close
    - In some standard HTML we have tags that are self closing such as an img tag but all tags within JSX must either have a matching tag with a "/" or be self closing using "/" at the end of the tag

### Wrong
```
<img src="folder/folder/cats.jpg">
```

### Correct
```
<img src="folder/folder/cats.jpg />
```

4. Use curly braces when using JS within JSX
    - This means that when you want to insert some dynamic data or functions or variables directly in the JSX return statement you must use curly braces 
```
Const userName = "Josh"
	
function Welcome() {
	Return (
		<h1> Welcome, {useName} </h1>
	)
}
```

Now that the boring part is out of the way, lets get to adding some code into our project with some JSX!

## Coding
If we open up our project and navigate to the terminal and type in 

```
Npm run dev
```

> Note - if the terminal isn't running in your VSCode we can use the Terminal tab at the top of the page and select "New Terminal". Depending on your folder structure you may need to type in the following to get into the folder for the project
> ```
> cd internal-react-project
> ```

This will get our project loading up in the browser like we did before. I'm sure you've done your homework from the previous module and found that when you make changes to the App.tsx file they're reflected immediately in the browser. 

Firstly we're going to delete the entire contents of the index.css file because we don't want styling to interfere at the moment. Then we're going to delete everything out of the App.tsx file and start fresh for our new project to get used to creating the code within the environment. 

Now we've got our blank canvas we're going to add in the following code to the page. We're going to start with adding Hello, world! *(classic)* to page

```typescript
function App() {

  return (
    <>
      <div>
        <h1>Hello, world!</h1>
      </div>
    </>
  )
}

export default App
```

And just like magic we're able to see the code that we've just wrote reflected on the web page. Now we've got our basic page build I think we should add some javascript functionality to demonstrate how it comes together within JSX. Please update the code with the following, save and see the changes on the page.

```typescript
function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1>Hello, {user}!</h1>
      </div>
    </>
  )
}

export default App
```
As you can see we've now added a variable for our user and we're calling our variable directly in our return statement. 
I'm not overly keen on black and white so I think that we should update our styling to make it look a bit better. We're going to have to add a className to our heading for our CSS to find and then create our CSS markup to display the style changes. The following code should be added to App.tsx 

```typescript
'index.css';

function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1 className="heading">Hello, {user}!</h1>
      </div>
    </>
  )
}

export default App
```

Above we've created a call to our css file so that our App file knows where to get the stying from and added our class name for the css file to pick up. In the index.css file we'll add the following

```css
.heading {
  color: red;
  font-size: 52px;
}
```
There, those colours are looking good; red and white is much better than black and white. So, we've updated the font colour and the font size so that our message stands out more on the page

In this module we've learnt a lot about JSX and how it comes together within our application and we've also looked at changing the styling and using some javascript to pull in variables

## Homework
Yes, more home work but again its not a big one. I want you to have a play around with the App.tsx and index.css, try adding in more HTML, using more js and variables and also changing the styling :)


