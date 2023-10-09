import { useState } from 'react';

import UserProfile from './UserProfile';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: "Hiro",
    age: 300,
    location: "Melbourne",
    skills: "Full Stack Web Developer",
  })
  return (
    <div className="App">
    <UserProfile userData={user}/>


      
    </div>
  );
}

export default App;
