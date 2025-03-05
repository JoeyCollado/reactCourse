import { useState } from "react";

const RegisterForm = () => {
  //use state returns an array that returns two value = first state and function or dispatch function (which is used to update state variable)
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayname, setDisplayName] = useState("");

  // const isDisabled = !username || !password || !displayname; //if all these forms are not filled up it's disabled otherwise enabled

  const [formField, setFormField] = useState({
    username: '',
    password: '',
    displayname: '',
  })
  return (
    <form className="flex justify-end gap-5 mr-10 pt-5">
      <div className="">
        <label htmlFor="username" className="pr-2">
          Username
        </label>
        <input
          className="pl-1"
          id="username"
          value={formField.username}
          onChange={(e) => {
            // setUsername(e.target.value);         new object (creates a copy of current state object, and copy their key value pairs of current state, and we overwrite username field with whatever the e.target.value is)
            setFormField((prevCurrentState) => ({...prevCurrentState, username: e.target.value}))
          }}
        />
      </div>

      <div>
        <label htmlFor="password" className="pr-2">
          Password
        </label>
        <input
          className="pl-1"
          id="password"
          value={formField.password}
          onChange={(e) => {
            setFormField((prevCurrentState) => ({...prevCurrentState, password: e.target.value}))
          }}
        />
      </div>

      <div>
        <label htmlFor="displayname" className="pr-2">
          Display Name
        </label>
        <input
          className="pl-1"
          id="displayname"
          value={formField.displayname}
          onChange={(e) => {
            setFormField((prevCurrentState) => ({...prevCurrentState, displayname: e.target.value}))
          }}
        />
      </div>

      <div className="flex flex-col absolute left-0 mt-10 gap-5 ml-2">
        <div className="">
          <span>Username: {formField.username}</span>
        </div>

        <div className="">
          <span>Password: {formField.password}</span>
        </div>

        <div className="">
          <span>Displayname: {formField.displayname}</span>
        </div>
      </div>

      {/* <button disabled={isDisabled} className="bg-slate-800 text-white px-2 rounded-md hover:bg-slate-500">Sign Up</button> */}
    </form>
  );
};

export default RegisterForm;
