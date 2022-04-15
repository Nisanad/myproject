import React, { useContext, useRef } from "react"

import "../App.css"
import Fire_store from "../config/Fire_store"
import { auth } from "../config/firebase"
import { contextSession } from "../App"
import { useHistory } from "react-router-dom"
import { Button } from 'antd'
import Register from './Register'
import { Redirect } from "react-router-dom"
const Login = () => {
  const history = useHistory()
  const { setSession } = useContext(contextSession)
 
  const userRef = useRef() 
  const pwRef = useRef()

  const handleLogin = async () => {
    const Username = userRef.current.value
    const password = pwRef.current.value

    if (Username && password) {
      // เช็คกรอก email กับ password ?
      try {
        
        await auth.signInWithEmailAndPassword(Username, password)
        // history.push("/Home") // เมื่อ login สำเร็จ redirectไปหน้า home
      } catch (error) {
        setSession({
          isLoggedIn: false,
          currentUser: null,
          errorMessage: error.Message,
        })
        alert("Incorrect User Email and/or password")
      }
    } else {
      alert("Please put your Email and/or Password")
    }
  }

  return (
   <div>
      {/* <Fire_store/> */}
      
      <center>
        <div>
          <h1 className="h1">
        
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            &emsp;&emsp;ระบบจองคิวสำหรับกองทุนกู้ยืมกยศ./กรอ.
          </h1>
        </div>
      </center>
      <center>
        <div className="Box">
          <header class="pleaseinputtext" style={{borderRadius: "30px"}}>
            Please input your email and your Password /กรุณากรอก email
            และรหัสผ่าน
          </header>
          <br></br>
          <input
            type="Email"
            placeholder="Your E-mail"
            class="holder"
            // onChange={handleUsername}
            ref={userRef}
            style={{borderRadius: "10px",border: "0px"}}
          />
          <p></p>
          <input
            type="password"
            placeholder="Password"
            class="holder"
            ref={pwRef}
            style={{borderRadius: "10px",border: "0px"}}
            // onChange={handlePassword}
          />
          <br></br>
          <br></br>
          <button
            type="button"
            class="btn btn-outline-dark"
            //class="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <br></br> <br></br>
          <button
            type="button"
            class="btn btn-outline-dark" 
            onClick={()=> history.push("/Register")}
            //class="button" 
            >      Register 
          </button>  
            </div>
      
      
       
       
      </center>
    </div>
  )
}

export default Login