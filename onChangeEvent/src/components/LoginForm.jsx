export function LoginForm() {
  return (
    <form className="text-center gap-2 flex flex-row justify-end pt-10 pr-10">
      <label htmlFor="username" className="text-white ">
        Username
      </label>
      <input id="username" className="pl-2" onChange={(e) => {
        console.log(`Username: ${e.target.value}`)
        console.log("value changed")
      }}/> {/* onchange event will trigger whenever a value is changed */} {/* target = references the actual html element */}
      <br />
      <label htmlFor="password" className="text-white ">
        Password
      </label>
      <input id="password" type="password" className="pl-2" onChange={(e) => {
        console.log(`Password: ${e.target.value}`)
      }}/>

      <button className="ml-10 bg-white px-2 rounded-sm">Login</button>
    </form>

    
  );
}
