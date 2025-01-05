import {useState} from 'react';

function UseStateWithAnObject() {

    const [car, setCar] = useState({make: "Toyota", model:"Avensis", year: 2005});

    function changeCarMake(event){
        setCar((theCar) => ({...theCar, make: event.target.value}) );
    }

    function changeCarModel(event){
        setCar((theCar) => ({...theCar, model: event.target.value}) );
    }

    function changeCarYear(event){
        setCar((theCar) => ({...theCar, year: event.target.value}) );
    }

    return(
        <>
        <h1>The car's features are make: {car.make}, model: {car.model}, year: {car.year}</h1>

        <input type="text" value={car.make}  onChange={changeCarMake}/>
        <input type="text" value={car.model} onChange={changeCarModel}/>
        <input type="text" value={car.year}  onChange={changeCarYear}/>
        </>
    )

}
export default UseStateWithAnObject;

 