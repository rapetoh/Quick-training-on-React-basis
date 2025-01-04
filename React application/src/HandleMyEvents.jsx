import { useState } from 'react';

function HandleMyEvents() {

    const [name, changeName] = useState("Guest");

    function modifyName(event) {
        changeName(event.target.value);
        if (name != "Guest"){
            document.getElementsByClassName("currentName")[0].style.color = "green";
        }
    }

    return (
        <>
            <input type="text" onChange={modifyName} />
            <h1 className='currentName'>Current Name: {name} </h1>
        </>
    )

}

export default HandleMyEvents;