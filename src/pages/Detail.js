import React, { useContext } from 'react'
import "../App.css"
import { contextSession } from "../App"
import { useHistory } from "react-router-dom"

export default function Detail() {
  const history = useHistory()

  const { detail, check } = useContext(contextSession)


 console.log(detail)
  return (
    <>
   {!check ? history.push("/Queue") : null }
   <body >
       <div >  
         <center>
        <h1 className="p3"> รายละเอียดการจอง </h1>
       
          
           <div className="detailbox"  >
         <div classname="middlede">
           <br></br> <br></br> <br></br><br></br><br></br>
            <h2>{`Email: ${detail.email}`}</h2>
          <h2>{`รหัสนักศึกษา ${detail.studentID}`}</h2>
          <h2>{`ช่วงที่ ${detail.range}`}</h2>
          <h3>{`ช่วงเวลา ${detail.timerange}`}</h3>
          <p>{`เวลาที่เลือก ${detail.time}`}</p>
          <p>{`ประเภท ${detail.type}`}</p>
          <br></br>
         </div>
         
        </div>
        
        </center>
        
       
      </div>
   </body>
    
    </>
  )
}