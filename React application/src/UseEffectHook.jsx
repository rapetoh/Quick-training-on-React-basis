/*
Here we are talking about the useEffect hook in React.
The useEffect hook is used to perform side effects in your functional components.
What that means? Let me split it into 3 parts:

1- When you want a specific action to be performed after every re-rerendering, you use the useEffect hook.
2- When you want a specific action to be perormed after the stae of a variable created with useState hook has changed, you use the useEffect hook.
3- When you want a specific action to be performed only once after the first rendering (so after the mount), you use the useEffect hook.


The general syntax of the useEffect hook is: useEffect(  ()=>{ your code here },   [dependencies]   );
You will see down below the syntax for the 3 and what it implies.

*/



import { useEffect } from "react";
import { useState } from "react";

function UseEffectHook() {

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount((previousCount)=> (previousCount + 1));
  }

  function decreaseCount(){
    setCount((previousCount)=> (previousCount - 1));
  }

  function onChange(){
    document.title = `Count: ${count}`;
  }

  useEffect(onChange,[count]);// onChange will be executed only when the count variable has changed.
  // But if for instance your onChange function is going to display another useState variable, you will have to add that variable in the dependencies array.
  useEffect(onChange,[]);// onChange will be executed only once after the first rendering.
  useEffect(onChange);// onChange will be executed after every re-rendering.

  return (
    <div>
      <h1>Count: {count} </h1>

      <button onClick={increaseCount} >Increase</button>
      <button onClick={decreaseCount} >Decrease</button>
    </div>
  )

}

export default UseEffectHook;