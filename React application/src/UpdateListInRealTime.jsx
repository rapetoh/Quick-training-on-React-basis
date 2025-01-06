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