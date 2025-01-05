import React, { useState } from 'react';

function UseStateComponent() {
    const [count, setcount] = useState(1);
    const [name, changeName]= useState("No name set");

    function increment(){
        // setcount(count + 1);
        // setcount(count + 1);
        // setcount(count + 1);
        // unfortunately, this will only increment the count by 1 because React is a Frontend library and it will batch the 3 command together to improve performance.
        // It is important to know that frontend libraries like React use the concept of batching to improve performance in rendering.



        // To make sure that the count is incremented by 3 (so incremented +1, but 3 times), we can use the following code:
        setcount((c)=> c+1);
        setcount((c)=> c+1);
        setcount((c)=> c+1);
        // This is a good practice while using UseState hook. It is a way to make sure that the state is updated correctly.
        // It is also a good practice while working with asynchronous code.
        // There is something special about this code. The setCount function take a function as an arguent and the parmaeter of the function is the current value of the state.
        // It is a feature specific to the useState hook.
        // So do not ask yourself how a "c" or --any other annotation given for that parameter-- can directly refer to the current value of the state. It is a feature of the useState hook.
    }

    function decrement(){
        setcount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button id='increasecount' className="useStateButton" onClick = {increment}>
                Click to increase the number displayed
            </button>
            <button id='decreasecount' className="useStateButton" onClick = {decrement}>
                Click to decrease the number displayed
            </button>
            <hr />
            <h1>{name}</h1>
            <button className="useStateButton" onClick = {() => changeName("Name set: Roch")}>
                Click to set the name
            </button>
        </>
    )
}

export default UseStateComponent;