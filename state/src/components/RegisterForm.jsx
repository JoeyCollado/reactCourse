import { useState } from "react"

const RegisterForm = () => {
//use state returns an array that returns two value = first state and function or dispatch function (which is used to update state variable)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayname, setDisplayName] = useState("")
  return (
    <form>
        <div>
            <label htmlFor="username">Username</label>
            <input id="username"/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input id="password"/>
        </div>

        <div>
            <label htmlFor="displayname">Display Name</label>
            <input id="displayname"/>
        </div>
    </form>
  )
}

export default RegisterForm
