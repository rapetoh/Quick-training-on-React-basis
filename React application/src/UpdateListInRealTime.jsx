/* 

Here the task was just to try to update a list in real time using the useState hook we've learn previously.

So what is special here is just :

1: To know how to write the new element we are adding to the list for instance. The syntax is almost similar to the one we've learned with JS objects update (i've said almost), so no big deal here.
2: Maybe smthg special is also to know how to initialize the fruitList at the begining.

*/


import { useState } from 'react';

function UpdateListInRealTime() {

    const fruits = ['apple', 'banana', 'cherry', 'date'];
    const [fruitList, setFruit] = useState(fruits);


    function updateList(event) {
        event.preventDefault();
        setFruit(previousFruitList => ([...previousFruitList, event.target.fruitname.value]));
    }

    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {
                    fruitList.map((fruitItem, key) => (
                        <li key={key}>{fruitItem}</li>
                    ))
                }
            </ul>
            <form action="#" onSubmit={updateList}>
                <input type="text" name='fruitname' />
                <button type="submit">Add fruit</button>
            </form>
        </div>
    )

}

export default UpdateListInRealTime;