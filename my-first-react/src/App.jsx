import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const [users, setUsers] = useState([]);

function App() {
  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
}

export default App;
