/* 

Here we are going to reivew something a bit more complex than the previous hooks. IT is the useContext hook.

First let know why useContext hook is used.
    1- We want to pass some data to a component and we don't want to pass it through props.
    2- If all the components we want to pass the data are nested, we don't want to pass the data through all the components. It can be a bit cumbersome or tedious. Especially when there is a lot of components to pass the data through.
    3- In 1 word, We want to avoid prop drilling (actually in 6 word* haha).
    4- Then useContext hook comes to the rescue to stand as a mean to share data.

How to use the useContext hook?
    1- We have to keep to important fucntion to import here: createContext and useContext.
    2- We will create a context in the component whose data we want to share (and then export it because it will be used somewhere later). -- export const myNameContext = createContext(); --
    3- We will then need to create a Provider, that will obviously provide the value we want to share to the components that will need it. -- <myNameContext.Provider value={myName}>  </myNameContext.Provider>--
    4- inside this provider tag we will have the component that will need the data. (if it is a tree of nested compnents, just adding the one at the head is enough).

    5- Now in any component in that tree that want to use the data, he will import the useContext function first and then import the context initially created (myNameContext). 
    6- Once done create a variable that receives the useContext function and pass the context as an argument. -- const myName = useContext(myNameContext); --
    7- Now we can use the variable myName to display the data in the component.

When to use the useContext hook?
    1- When we want to share data between nested components.
    2- When we want to avoid prop drilling.
    3- When we want to make the code cleaner and more readable.

In which case we should not use the useContext hook?
    1- For instance when we want to pass informations of a connected user to nested components.
    2- When implementing a dark/light theme in a React application.


*/




import UseContextA from "./UseContextA.jsx";
import { useState, createContext } from "react";

export const myNameContext = createContext();


function UseContext() {

    const [myName, setMyName] = useState("Roch");

    return (
        <>
            <p>Main Element</p>
            <h3>Hello {myName} </h3>

            <myNameContext.Provider value={myName}>

                <UseContextA />

            </myNameContext.Provider>
        </>

    )

}

export default UseContext;