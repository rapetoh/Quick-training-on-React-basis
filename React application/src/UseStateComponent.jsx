import React, { useState } from 'react';

function UseStateComponent() {
    const [count, setcount] = useState(1);
    const [name, changeName]= useState("No name set");

    return (
        <>
            <h1>{count}</h1>
            <button id='increasecount' className="useStateButton" onClick = {() => setcount(count + 1)}>
                Click to increase the number displayed
            </button>
            <button id='decreasecount' className="useStateButton" onClick = {() => setcount(count - 1)}>
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