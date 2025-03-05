import Username from "./Username"
import Foods from "./Foods"

const Userprofile = (props) => {

  props.callMe();

  return (
    <div>
      <Username myUsername="Joey" alias="J" />
      <b>Age: </b>
      <span>{props.age}</span>
      <Foods/>

      {String(props.isLoggedIn)}
    </div>
  )
}

export default Userprofile
