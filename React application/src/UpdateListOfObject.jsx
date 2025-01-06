/* 
Here we are going to review how to update a list of objects in React in real time using the useState hook.
It is quite similar to what we have done previously but with a little twist.

Nothing really waouh here. It is just the combination of the knowledge we have learned so far on List and Object update with useState hook.

*/

import { useState } from 'react';

function UpdateListOfObject () {

    const initialListOfObject = [
        { id: 1, name: 'John', age: 14 },
        { id: 2, name: 'Roch', age: 21 },
        { id: 3, name: 'Senyo', age: 22 },
        { id: 4, name: 'Mike', age: 55 },
    ]

    const [listOfObject, setListOfObject] = useState(initialListOfObject);

    function addAnObjectToTheList(event){
        event.preventDefault();
        setListOfObject((thePreviousListOfObject) => ([...thePreviousListOfObject, {id: listOfObject.length + 1,name: event.target.name.value, age: event.target.age.value}]));
    }


    return(
        <div>
            <h1>My list of Object</h1>
            <ul>

                {
                    listOfObject.map((myobject,index) => 
                        ( 
                            <li key={index}>
                                <h1>Object n°{index} in the List</h1>
                                <ul>
                                    <li>The name is {myobject.name}</li>
                                    <li>The age of {myobject.name} is {myobject.age} </li>
                                </ul>
                            </li>
                        )
                    )
                }
            </ul>

            <form action="#" onSubmit={addAnObjectToTheList}>
                <input type="text" name="name" placeholder="Enter the name of the person"/> <br />
                <input type="number" name="age" placeholder="Enter the age of the person"/><br />
                <button type="submit">Add person</button>
            </form>

        </div>
    )

}

export default UpdateListOfObject