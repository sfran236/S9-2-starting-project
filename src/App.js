import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';


function App() {
  const [usersList,setUsersList] = useState([])

  const addUserHandler = (uName, uAge) =>{
  setUsersList((prevUsersList) => {
    return [...prevUsersList,{name:uName, age: uAge , id: Math.random().toString()}]
  });
}
  return (
    <div>
      <AddUser AddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
