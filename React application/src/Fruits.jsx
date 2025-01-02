function Fruits(props) {

    const fruitsList = props.ListToMap.map((fruit, index) => 
                <ul>
                    <li key={index}>{fruit}</li>
                </ul>
    
    );

    return(
        <>
            <h2 className="list-category">{props.category}</h2>
            <div>
                {fruitsList}
            </div>
        </>
        
    );

}

Fruits.defaultProps = {
    category: "Fruits"
}

export default Fruits;