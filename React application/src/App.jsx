import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGrettings.jsx";

function App() {
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

    <UserGreetings isloggedin= {true} username = "Roch"/>
    </>
  ); 
  

}

export default App
