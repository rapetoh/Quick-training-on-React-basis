import UseContextC from './UseContextC';

function UseContextB() {

    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <p>Element B</p><br />
            <UseContextC />
        </div>
    )

}

export default UseContextB;