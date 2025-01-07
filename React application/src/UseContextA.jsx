import UseContextB from './UseContextB.jsx';

function UseContextA() {

    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <p>Element A</p><br />
            <UseContextB />
        </div>
    )

}

export default UseContextA;