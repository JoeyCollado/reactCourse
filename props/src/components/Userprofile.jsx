import Username from "./Username"
import Foods from "./Foods"

const Userprofile = (props) => {
  return (
    <div>
      <Username myUsername="Joey" alias="J" />
        
      <b>Age: </b>
      <span>{props.age}</span>

      <Foods/>
    </div>
  )
}

export default Userprofile
