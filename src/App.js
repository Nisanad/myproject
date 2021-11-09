
import './App.css';
import React, { useEffect,useState } from 'react';
import Login from './Login';
import Student from './Student';
import Duration1 from './Duration';
import Home from './Home';

function App() { 
  //const refreshPage = () => window.location.reload(false);
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
        <Home/>
      </div>
   
    </div>
  );
};
  


export default App;

