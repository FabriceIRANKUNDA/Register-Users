import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [users,setUsers] = useState([])

  const onSaveUserHandler = user =>{
    setUsers(prevState =>[...prevState, user])
  }

  return (
    <div>
      <AddUser onSaveUser={onSaveUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
