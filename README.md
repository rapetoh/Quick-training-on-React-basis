# Quick-refresher-on-React-basis
Just a wrap up of core concepts

- React is actually a set of JS librairies (not a framework) aimed at helping developper build web front end pages through reusable components quickly and more efficiently.
    - React use JSX which is a specific type of javascript (Javascript XML to help developer to write more easily their javascript code.). It is actually a mix of HTML and JS

    - Now the problem is that the JSX is not well understood by all the browsers. This is where BABEL comes in. (babel also convert ES6 into JS understandable versions for browsers).

    - It transpiles if i may say it that way, that specific version of Javascript into a version that browsers could understand.
     
    - Then, developpers are free to write React code using JSX and browsers understand also perfectly what is written. 
    
    - React also uses a virtual DOM (a lightweight in-memory representation of the real DOM)
    - React use a virtual DOM. What means that it applies modification to a virtual DOM. And after that only the modified elements on that virtual DOM are coupled with the real (assuming that the virtual was actually the same as the real DOM just before). It helps to actually reduce the rendering and that is just how React works

1- Use React implies 3 main importations 
    - React to create components that will be rendered after
    - ReactDOM to render the component in the DOM or in other words, create DOM elements 
    - Babel

2- The way React works in general, is that: you create a React element (a function that return HTML stuffs) and those elements are assigned to a div or just converted into DOM elements using ReactDOM to get displayed.

3- We can write React code 2 different ways:
    - JSX (it is not a valid Javscript syntax): once written in JSX, the React then need to be converted in a understandable version for browser. That is when Babel comes

    - ES6 (a recent version of JS allowing for instance let, import, export): once written that way, we have to enable ES6 understanding by using the type = "module" in the script tag that target the React code.



