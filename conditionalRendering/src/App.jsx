export default function App(){
  //1st instance
  // const isAuthenticated = false;

  // if(isAuthenticated){
  //   return <div>
  //     <h1>
  //       Welcome User
  //     </h1>
  //   </div>
  // }
  // else{
  //   return <div><span>You are not logged in</span></div>
  // }
  
  //2nd instance, two values
  // const isAuthenticated = false;
  // return isAuthenticated ? <div><h1>Welcome</h1></div> : <div><h1>You are not logged in</h1></div>

  //3rd instance, more than two possible values
  //NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
  const USER_STATUS = 'NOT_VERIFIED';

  if(USER_STATUS === 'NOT_VERIFIED'){
    return <div><h1>You are not verified, please verify using email or mobile number</h1></div>
  }
  else if(USER_STATUS === 'VERIFIED'){
    return <div><h1>You are verified, Congrats!</h1></div>
  }
  else if(USER_STATUS === 'ACCOUNT_DISABLED'){
    return <div><h1>Your Account is Disabled</h1></div>
  }
  else{
    <h1>Please contact a system admin</h1>
  }

}

//conditional rendering = rendering elements to the documents based on a certain condition
//common way to use it is by using = ternary operator
// ? = then = truthy
// : = false
// avoid nesting ternary operators, if possible values are more than 2 use if else instead or switch