import React, {useState} from 'react';
import './App.css';
import Duration1 from './Duration';
import firebase from './firebase';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Student() { 
  const [title, setTitle]  = useState('');
 const handleOnChange = (e)=>{
   setTitle(e.target.value);
 }
 const creatTodo = ()=>{
   const studentRef =firebase.database().ref("Student");
   const Student = {
     title ,
     complete:true, 
     
   };
   studentRef.push(Student);

   
 }
 

  return (
  <div>

    <div><center>
       <div className="Boxtodo" >  
      <h1>Student ID</h1><br></br><br></br>
                      <input type ="text" onChange ={handleOnChange}  value = {title}/><br></br><br></br>
                      
                      
                      <button type="button" class="btn btn-dark"onClick={creatTodo}>Add</button>

                      
      </div>


    

    </center>
     
    
    </div>    
    </div>
   
   
  );
}

export default Student;