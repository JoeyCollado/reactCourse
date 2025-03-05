import Username from "./Username"
import Foods from "./Foods"
import PropTypes from "prop-types";

const Userprofile = (props) => { //parent component

  props.callMe();

  return (
    <div id="user-profile">
      <Username username={props.username} /> {/*child component */}
      <b>Age: </b>
      <span>{props.age}</span>
      <Foods/> {/*child component */}

      {String(props.isLoggedIn)}
    </div>
  )
}

Userprofile.PropTypes = {
    Username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isLoggedIn: PropTypes.bool, //optional
    favFoods: PropTypes.arrayOf(
      PropTypes.shape({ //helps us check for specific objects and to make sure that object has a specific shape
        name: PropTypes.string.isRequired, //validating the object inside the array
        id: PropTypes.string.isRequired
      })
      )
}

export default Userprofile
