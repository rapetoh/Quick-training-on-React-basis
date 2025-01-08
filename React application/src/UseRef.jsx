/* 
The last React hook we are going to see is useRef hook.
It is a quite special one andn its role is to update the value of a variable without causing a re-render.

How to use it: 
    1- We will import the useRef function from 'react' (very  easy isn't it?)
    2- We will now create a variable (actually a const) using the useRef function.
    3- Now it give birth to an abject that have one single field: current. And that store the value of the variable we wanted to create.
    4- Finally, we can now use theVarible.current to target its value and get it changed at our convenience and most importantly, without causing a Re-render.


In which situation is useRef most of the time used:
    1- When we need to update the style of a DOM element without causing a re-render.

You should then ask me: if we can just update data' values without causing a whole re-render, why don't we use it just at the place of useState?
Well, certain variables need a re-render to display their new value after an update.

*/


import React, { useRef } from "react";


function UseRef() {

    const inputRef = useRef(null);
    

    function applyChangement() {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"; // Example: Change background color
    }

    return (
        <div>
            
            <button onClick={applyChangement}>Click me!</button>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default UseRef;