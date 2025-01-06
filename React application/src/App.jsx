import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGrettings.jsx";
import Fruits from "./Fruits.jsx";
import { useState } from "react";
import UseStateComponent from "./UseStateComponent.jsx";
import HandleMyEvents from "./HandleMyEvents.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UseStateWithAnObject from "./UseStateWithAnObject.jsx";
import UpdateListInRealTime from "./UpdateListInRealTime.jsx";
import UpdateListOfObject from "./UpdateListOfObject.jsx";


function App() {



  const fruits = ['apple', 'banana', 'cherry', 'date', 'xigua', 'yellow watermelon', 'zucchini'];
  const fruits2 = ['apple', 'banana', 'cherry', 'date', 'xigua', 'yellow watermelon', 'zucchini'];
  const fruits3 = ['apple', 'banana', 'cherry', 'date'];

  return (
    <>
      {/* <Header />
    <Food />
    <Footer /> */}

      {/* <Button></Button>
    <Card />
    <Card />
    <Card />
    <Card />  */}

      {/* <Student name="John" age="27" isStudent = {true}/>
    <Student name="Jessica"/>
    <Student name="Isaac" age={25} isStudent = {false}/> */}

      {/* <UserGreetings isloggedin= {true} username = "Roch"/> */}




      {/* <Fruits ListToMap={fruits} category="First Fruits List"/>
    <Fruits ListToMap={fruits2} category="Second Fruits List"/>
    <Fruits ListToMap={fruits3} category="Third Fruits List"/> */}

      {/* <Button></Button> */}

      {/* <UseStateComponent></UseStateComponent> */}


      {/* <HandleMyEvents></HandleMyEvents> */}


      {/* <ColorPicker></ColorPicker> */}

      {/* <UseStateComponent></UseStateComponent> */}

      {/* <UseStateWithAnObject></UseStateWithAnObject> */}

      {/* <UpdateListInRealTime></UpdateListInRealTime> */}

      <UpdateListOfObject></UpdateListOfObject>
    </>
  );


}

export default App
