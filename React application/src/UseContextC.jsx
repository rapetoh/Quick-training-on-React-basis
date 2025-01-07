import { useContext } from "react";
import { myNameContext } from './UseContext.jsx' 


function UseContextC() {

    const myName = useContext(myNameContext)

    return(
        
        <div style={{border: "1px solid black", padding: "10px"}}>
            <p>Element C</p><br />
            <h3> Bye {myName} </h3>
        </div>
    )
}

export default UseContextC;