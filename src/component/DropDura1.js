import React, { useState, useContext } from "react";
import Select from "react-select";
import '../App.css'

import { db } from "../config/firebase"
import { time1, time2, time3, time4 } from '../dataTime/index';
import { useHistory } from "react-router-dom"
import { contextSession } from "../App"

function DropDura1({ state }) {
  const { SetDetail, detail, session, check } = useContext(contextSession)
  const history = useHistory()

  const seletTime = () => {
    if (state.range === 1) {
      return time1
    } else if (state.range === 2) {
      return time2
    } else if (state.range === 3) {
      return time3
    } else if (state.range === 4) {
      return time4
    }
  }

  const type = [
    {
      type: "กยศ.",
    },
    {
      type: "กรอ.",
    },
  ]
  const [selectedValue1, setSelectedValue1] = useState(null)
  const handleChange1 = (obj) => {
    setSelectedValue1(obj)
  }

 

  const [selectedType, setSelectedType] = useState(null)

  const handleOnChange = (obj) => {
    setSelectedType(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("test");
    // window.location.reload()
    let id = localStorage.getItem("studentID")

    if (selectedValue1 && selectedType) {
      if (check) {
        const pushData = {
          range: state.range,
          timerange: state.time,
          time: selectedValue1.time,
          type: selectedType.type,
        }
        db.database().ref("Data").child(detail.id).update(pushData)
      } else {
        SetDetail({
          range: state.range,
          timerange: state.time,
          time: selectedValue1.time,
          type: selectedType.type,
          studentID: id,
          // email: session.cerrentUser.email
        })
        const pushData = {
          range: state.range,
          timerange: state.time,
          time: selectedValue1.time,
          type: selectedType.type,
          studentID: id,
          email: session.cerrentUser.email,
        }
        console.log(pushData)
        db.database().ref(`Data`).push(pushData)

        localStorage.setItem("time", selectedValue1.time)
        localStorage.setItem("type", selectedType.type)
      }
      history.push("/Detail")
    } else {
      alert("โปรดเลือกเวลาและประเภทของคุณ")
    }
  }

  const handleClear = (e) => {
    e.preventDefault()
    console.log("test")
    setSelectedType(null)
    setSelectedValue1(null)
  }

  return (
    <div>
      <div className="p3">{`ช่วงที่ ${state.range} เวลา ${state.time} น.`}</div>

      <div className="rowDrop">
        <div class="row">
          <div class="col-sm-3">
            <div className="App" className="Drop1">
              กรุณาเลือกเวลา<br></br>
              {/* {`${detail.timerange} น.`} */}
              <Select
                value={selectedValue1}
                options={seletTime()}
                onChange={handleChange1}
                isOptionDisabled={(options) => options.isDisabled}
                getOptionLabel={(options) => options.time}
                required
              />
              
            </div>
          </div>


          <div class="col-sm-3">
            <div className="App" className="Drop1">
              กรุณาเลือกเวลา<br></br>
              {/* {`${detail.timerange} น.`} */}
              <Select
                value={selectedValue1}
                
              />
              
            </div>
          </div>

   <div class="col-sm-3">
            <div className="App" className="Drop1">
              กรุณาเลือกเวลา<br></br>
              {/* {`${detail.timerange} น.`} */}
              <Select
                value={selectedValue1}
              
              />
              
            </div>
          </div>




          <div class="col-sm-3">
            <div className="App" className="Drop2">
              <br></br>
              กรุณาเลือกประเภท
              <Select
                value={selectedType}
                options={type}
                onChange={handleOnChange}
                required
                getOptionLabel={(options) => options.type}
              />
             
            </div>
          </div>
          <div class="col-sm-3" className="btcr">
            <button class="btn btn-success"  style={{margin: "20px"}} onClick={handleSubmit}>
              ยืนยัน
            </button>
            <button type="reset" class="btn btn-danger" onClick={handleClear}>
              ล้าง
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DropDura1