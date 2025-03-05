import {useState} from 'react'

//hook can only be used in function class components
//     can only be at top level, not inside a function not inside an if etc

function App() {
//   [current state, function] =     (default value)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('blue')

function decrementCount(){
  setCount(prevCount => prevCount - 1)
  setColor("blue")
}

function incrementCount(){
  setCount(prevCount => prevCount + 1)
  setColor("red")
}

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{color}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
