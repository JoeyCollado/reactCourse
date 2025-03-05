import Userprofile from "./components/Userprofile";

const App = () => {
  //component props = data that are passed into components

  //passing a function
  const callMe = () => {
    console.log("hello");
  }

  return (
    <div className="text-center bg-slate-600 text-fuchsia-50 h-screen font-semibold text-2xl">
      <h1>Root Component</h1>
      <Userprofile age={20} isLoggedIn={true} favFoods={[{
        name: "sushi",

      }]}
      callMe={callMe} 
      />
    </div>
  );
};

export default App;
