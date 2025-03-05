import List from "./List";
import { useState } from "react";

const App = () => {

    const [input,setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

  return (
    <>
    <input type="text" value={input} onChange={handleChange}></input>
    <List input={input}></List>
    </>
  )
}

export default App
