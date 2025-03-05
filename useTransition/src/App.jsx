import { useState, useTransition } from 'react'

//help speed up applcations and make them responsive
// high priority is first to render low priority comes after

const App = () => {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const List_Size = 20000

  function handleChange(e){
    setInput(e.target.value) //high priority

    startTransition(() => { //all code that is encased here is low priority, anything that is not here is high priority
      const l = []
      for(let i = 0; i < List_Size; i++){
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return (
    <>
    <input type='text' value={input} onChange={handleChange}></input>
    {isPending ? "Loading..." : list.map((item, index) => { //isPending is just to show a loading state
      return <div key={index}>{item}</div>
    })}
    </>
  )
}

export default App
