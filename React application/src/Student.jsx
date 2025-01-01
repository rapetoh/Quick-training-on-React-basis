import propTypes from 'prop-types';
import defaultProps from 'prop-types';

function Student (props) {
    return (
        <div className="student">
            <p>Nom: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.defaultProps = {
    name: "Guest",
    age: 18,
    isStudent: true
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

export default Student;