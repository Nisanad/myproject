import React, { useContext } from "react"
import Student from '../component/Student';
import { contextSession } from "../App"
import "../App.css"



export default function Home() {

  const { SetDetail } = useContext(contextSession)
  return (
    <div>
      <Student SetDetail={SetDetail} />
    </div>
  )
}
