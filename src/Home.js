import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Duration1 from "./Duration";
import Student from "./Student";
import './App.css'
import Dropdown from "./Dropdown";


export default function App() {
  return (<div>
   
     <Router>
       <div className ="topbox"  ><img src="estudent.jpg" width="120px"  ></img></div>

      <nav class="navbar navbar-expand-sm "     >

       <div class="container-fluid" className="ul" className="li" className="a"className="lia"className=".lia:hover">
  
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="Home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Queue">Queue</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Detail">Detail</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
    </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch> 
          <Route path="/Queue">
            <Queue />
          </Route>
          <Route path="/Detail">
            <Detail />
          </Route>
          
         
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div> 
      </nav>
    </Router>
  </div>
    
   

   
  );
}

function Home() {
  return (
    < Student/>

  );
}

function Detail() {
  return <h2></h2>;
}

function Queue() {
  return (
  <Dropdown/>
  );
}
