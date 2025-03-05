import { useState, useEffect } from "react"


const App = () => {

const [resourceType, setResourceType] = useState("posts")
const [items, setItems] = useState([])


useEffect(() => { //always take effect when program re renders
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
}, [resourceType]) //use effect will take effect only when [anything] re renders

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
     <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App
