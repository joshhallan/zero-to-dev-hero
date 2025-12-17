# Welcome
Hello :) welcome to the introductory section of the React training course. As we've said, the aim of this course is get someone from knowing nothing about development to creating your own fully functioning React application. 

Things that we will cover in this section
- Installing everything that you need
- Creating a new React project
- Explain the different folders

## The install
In order to create your new React application you will need to install an IDE (integrated development environment). Head over to this URL to install VSCode

[Installation portal](https://portal.meraki.com/leighton-sm/706502191543858740/devices/managed/706502191543823375/apps)

From there you can search for the application and install it in the background.

Once we have our IDE installed we can install the version of Node that we need to build our React application.

We recommend installing Node.js using the [**Node Version Manager (NVM)**](https://github.com/nvm-sh/nvm). It allows you to easily switch between Node versions and keeps your system clean.

>
> ```bash
> # Download and install a version of node that is not already on your machine.
> nvm install 22 # This downloads and switches to node 22.
> nvm install lts/jod #This also downloads and switches to node 22, using its codename, Jod.
>
> # Switch to an already installed version of node.
> nvm use 22
> nvm use lts/jod
>```

### Install NVM

Depending on your OS, there are slight differences in how we install NVM.

#### macOS / Linux

You can view the [steps to install NVM here](https://github.com/nvm-sh/nvm).

#### Windows

If you are on Windows [please take a look here](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) instead.

## Creating the project
Somewhere, anywhere (maybe not anywhere), on your laptop create a new folder. This new folder will hold all of the code that we're going to create for the new project. Now, open up VSCode and locate and open the new folder that you created. We're now going to use the integrated terminal in VSCode to run the commands install everything needed for the React project. If you're unable to see the terminal at the bottom of the window there should be a "Terminal" tab at the top of the screen, click that and select new terminal. In the terminal use the following command to create your React project

```
npm create vite@latest
```

As you go through the installer you'll be asked questions about the project. Please use the following

- Project name
    - Internal-react-project
- Select a framework
    - Use the arrows on the keyboard to select React and press enter
- Select a variant
   - Typescript
- Use rolldown-vite?
   - No
- Install with npm and start now?
   - Yes

As you can see in your terminal your project is currently running locally at [http://localhost:5173](http://localhost:5173). Please open up a web browser and navigate to that url to see your project running. 

## The folders
Head back into VSCode and you can see that a project folder has been created with the project name you chose during the install. If we open that up we have 3 top folders and bunch of files created. Well go through and explain some of those

### Node_modules
Here is an explanation of the purpose of the node modules folder from chatgpt because it's much better at words than I am (apparently).

> The node_modules folder is like a giant storage box filled with all the special, pre-made LEGO bricks and pieces you need to build your project.
> 1. Someone Else Made It
>    - When you build a big website using React, you don't want to write every single line of code yourself.
>    - Instead, smart people have already created little packages of code (called dependencies or modules) that do common, tricky things—like making a calendar, drawing a chart, or handling dates.
>    - The node_modules folder is where your computer puts all those borrowed, pre-made packages.
> 2. Why It's So Big
>    - If you need a special "Date Picker" package, you tell your project to get it.
>    - But that Date Picker package might itself need a "Color Picker" package, and the Color Picker might need a "Math Helper" package, and so on.
>    - The node_modules folder stores your chosen packages and all the other little packages they need to work. That's why it can get so huge!
> 3. The Simple Purpose
>    - It holds all the code your project needs that you didn't write yourself.

### Public 
This folder will hold all of your static assets that are needed within the application

### Src
This is the main folder that we need as this is the source folder where we're going to store all of the code that we create that will be built 

## Homework
Yes homework in module 1, only a little one though. 

In the src folder we have a file called App.tsx, this is the page that is currently on your web browser. Please just have a play about with this page and see your changes come through into the app

> Hint
> 
> Below line 30 you can use the following
> ```
> <p>
> 	Hello there my name is [INSERT NAME HERE], and I'm working on a new React project
> </p>
> ```

