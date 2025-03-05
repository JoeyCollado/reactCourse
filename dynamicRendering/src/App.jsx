//map = functino that can be called in an array, it applies transformation on all the elements in that array and returns a new array with each elements transformed
import { UserDetails } from "./components/userDetails";

function App() {
  const mockUsers = [
    //mock api data, json object
    {
      id: 1,
      username: "joey",
      email: "joeycollado@gmail.com",
    },
    {
      id: 2,
      username: "joey2",
      email: "joeycollado2@gmail.com",
    },
    {
      id: 3,
      username: "joey3",
      email: "joeycollado3@gmail.com",
    },
    {
      id: 4,
      username: "joey4",
      email: "joeycollado4@gmail.com",
    },
  ];
  return (
    <div>
      {mockUsers.map((user) => {
        //rendering the component
          return <UserDetails key={user.id} user={user} />;
        })}
    </div>
  );
}

  //pass callback function
    //tranforming all json object into jsx element

            //direct rendering
            // <div key={user.id}> {/* user.id access unique id given by json object, you can also assume the datas are auto incremented in database going from 1 to upwards to give unique id */}
            //   {/* <b>ID: </b>
            //   <span>{user.id}</span>
            //   <br />
            //   <b>Username: </b>
            //   <span>{user.username}</span>
            //   <br />
            //   <b>Email: </b>
            //   <span>{user.email}</span> */}
            // </div>

export default App;
