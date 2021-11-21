import "./App.css"
import React, { useEffect, useState, createContext } from "react"
import Login from "./pages/Login"

import "./App.css"
import Queue from "./pages/Queue"
import { Route, Redirect, Switch } from "react-router-dom"
import Home from "./pages/Home"
import { auth } from "./config/firebase"
import Detail from "./pages/Detail"
import News from "./pages/News"
import Nav from './component/Nav';

const contextSession = createContext() // ศึกษาเรื่อง  useContext

function App() {
  //const refreshPage = () => window.location.reload(false);
  const [session, setSession] = useState({
    isLoggedIn: false,
    cerrentUser: null,
    errorMessage: null,
  })
  //  aunnisanad16@gmail.com
  //  0950123409aunp

  const [detail, SetDetail] = useState({
    range: 0,
    timerange: null,
    time: null,
    type: null,
    studentID: null,
  })






  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // เช็คสถานะ login
      if (user) {
        setSession({
          isLoggedIn: true,
          cerrentUser: user,
          errorMessage: null,
        })
        sessionStorage.setItem("session", true)

        const _range = localStorage.getItem("range")
        const _timerange = localStorage.getItem("timerange")
        const _time = localStorage.getItem("time")
        const _type = localStorage.getItem("type")
        const _studentID = localStorage.getItem("studentID")

        SetDetail({
          range: _range ,
          timerange: _timerange,
          time: _time,
          type: _type,
          studentID: _studentID,
        })


      }
    })
  }, [])

  return (
    <contextSession.Provider value={{ setSession, session, SetDetail, detail }}>
      {/* เช็ค Login */}
      {session.isLoggedIn ? (
        <>
          <Nav />
          <Route exact path="/Home" component={Home} />
          <Route path="/Queue" component={Queue} />
          <Route path="/Detail" component={Detail} />
          <Route path="/News" component={News} />
        </>
      ) : (
        <>
          <Route exact path="/login" component={Login} />
          {!sessionStorage.getItem("session") ? (
            <Redirect to="/login" />
          ) : (
            // โหลดตอน refresh หน้าเว็บ
            <h1 style={{ color: "blueviolet", textAlign: "center" }}>
              ...loading
            </h1>
          )}
        </>
      )}
    </contextSession.Provider>
  )
}
export { contextSession }
export default App
