import React, {useState} from 'react';
import './App.css';
import Duration1 from './Duration';
import firebase from './firebase';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Todo() { 
  const [title, setTitle]  = useState('');
 const handleOnChange = (e)=>{
   setTitle(e.target.value);
 }
 const creatTodo = ()=>{
   const todoRef =firebase.database().ref("Student");
   const todo = {
     title ,
     complete:true, 
     
   };
   todoRef.push(todo);

   
 }
 

  return (
  <div>
<div className ="topbox"  ><img src="psu-logo.png" width="100px" className="psulogo2"  ></img></div>
<img src="estudent.jpg" width="150px"  ></img>
    <div><center>
       <div className="Boxtodo" >  
      <h1>Student ID</h1><br></br><br></br>
                      <input type ="text" onChange ={handleOnChange}  value = {title}/><br></br><br></br>
                      
                      
                      <button type="button" class="btn btn-dark"onClick={creatTodo}>Add</button>

                      
      </div>


    

    </center>
     
      <div>
        <center><button type="button" class="btn btn-info" >ถัดไป</button></center>

      
      </div>
    </div>    
    </div>
   
   
  );
}

export default Todo;