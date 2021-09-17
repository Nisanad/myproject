import React, {useState} from 'react';
import './App.css';
import firebase from './firebase';


function App() { const [title, setTitle]  = useState('');
 const handleOnChange = (e)=>{
   setTitle(e.target.value);
 }
 const creatTodo = ()=>{
   const todoRef =firebase.database().ref("Todo");
   const todo = {
     title ,
     complete:false,
   };
   todoRef.push(todo);

 }
  return (
    <div className="App" >
     <h1>Todo</h1>
     <input type ="text" onChange ={handleOnChange}  value = {title}/>
        <button onClick={creatTodo}>Add todo</button>
     
    </div>
  );
}

export default App;

