
import RegisterForm from "./components/RegisterForm";

export default function app() {


  window.addEventListener('resize', (e) => {
    console.log(window.innerWidth, window.innerHeight)
  })
  
  return (
    <div className="bg-slate-800 w-full h-screen ">
      <RegisterForm/>
    </div>
  );
}

//handling events for user input
//state = representation of data that can change
