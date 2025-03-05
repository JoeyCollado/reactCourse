import Userprofile from "./components/Userprofile"


const App = () => {

  //component props = data that are passed into components

  return (
    <div className="text-center bg-slate-600 text-fuchsia-50 h-screen font-semibold text-2xl">
      <h1>Root Component</h1>  
      <Userprofile age={20} />  
    </div>
  )
}

export default App
