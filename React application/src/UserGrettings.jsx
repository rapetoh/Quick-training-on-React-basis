import Proptypes from 'prop-types';

function UserGreetings(props) {

    const loggedText = <h1 className="logged">Welcome back, {props.username}!</h1>;

    const unloggedText = <h1 className="unlogged">Welcome Guest!</h1>;  

     if(props.isloggedin){
        return loggedText;
    }
    else{
        return unloggedText;
    }

}

UserGreetings.defaultProps = {
    isloggedin: false,
    username: "Guest"
}
UserGreetings.propTypes = {
    isloggedin: Proptypes.bool,
    username: Proptypes.string
}

export default UserGreetings;