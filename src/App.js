
import './App.css';
import React, { useEffect,useState } from 'react';
import Login from './Login';
import Todo from './Todo';
import Duration1 from './Duration';

function App() { 
  const [session, setSession] = useState({
    isLoggedIn: false,
    cerrentUser: null,
    errorMessage: null,
  });
 return (
  <div  >
  <div>
    {session.isLoggedIn ? (
        <header >          
        </header>) :
        (<Login setSession={setSession} />)

      }</div>
      <div>
        <Todo/>
      </div>
   
    </div>
  );
};
  


export default App;

