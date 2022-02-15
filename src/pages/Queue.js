import React, { useState, useContext } from 'react';
import DropDura1 from '../component/DropDura1';
import Duration1 from '../component/Duration';

// import Calendar from '../component/calendar';

import { Calendar } from 'antd'
import { Redirect } from "react-router-dom"
import { contextSession } from "../App"
import "../App.css"


export default function Queue() {

  const [selectedDate , setSelectedDate] = useState(null)
  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);

    setSelectedDate(value.format('YYYY-MM-DD'))
    console.log(selectedDate) // firebase
  }
    const { check ,getRange ,setRange,} = useContext(contextSession)


    return (
        <div>
         
           {!check && !localStorage.getItem("studentID") && <Redirect to="/Home"/> }
      {getRange? 
      (
        
       <DropDura1/>
      ) : (
       // <Duration1  />
         <div className='calendar'>
           กรุณาเลือกวันจองส่งเอกสาร <br></br>
           <Calendar onChange={onPanelChange}/>
         </div>
      )}

      {getRange  ? (
        <div className='back'>
        <button 
          class="btn btn-dark" style={{margin:"30px"}}
          onClick={() => setRange(null)}
        >
          ย้อนกลับ
        </button>
        </div>
      ) : null}

    </div>
    )

}