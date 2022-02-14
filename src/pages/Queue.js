import React, { useState, useContext } from 'react';
import DropDura1 from '../component/DropDura1';
import Duration1 from '../component/Duration';
import { Redirect } from "react-router-dom"
import { contextSession } from "../App"
import "../App.css"
import Date from "../component/Date";

export default function Queue() {

    const { check ,getRange ,setRange,setDate,getDate } = useContext(contextSession)


    return (
        <div>
           {!check && !localStorage.getItem("studentID") && <Redirect to="/Home"/> }
      {getRange? 
      (
       
        <DropDura1/>
      ) : (
        <Duration1  />
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