import  { useRef, useState } from 'react'

const App = () => {

  const [name,setName] = useState('')
  const inputRef = useRef(0)

  function focus(){
    inputRef.current.focus()
  }

  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
