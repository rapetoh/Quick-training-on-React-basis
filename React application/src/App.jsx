import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGrettings.jsx";
import Fruits from "./Fruits.jsx";

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




    <Fruits ListToMap={fruits} category="First Fruits List"/>
    <Fruits ListToMap={fruits2} category="Second Fruits List"/>
    <Fruits ListToMap={fruits3} category="Third Fruits List"/>
    
    </>
  ); 
  

}

export default App
