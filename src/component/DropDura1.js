import React, { useState, useContext } from "react";
import Select from "react-select";
import '../App.css'
import firebase from "../config/firebase"

import { useHistory } from "react-router-dom"
import { contextSession } from "../App"

function DropDura1({ state }) {
   const { SetDetail, detail } = useContext(contextSession)
   const history = useHistory()

   const time1 = [
      {
         value: 1,
         time: "09:00-09:02"
      },
      {
         value: 2,
         time: "09:02-09:04",
         isDisabled: true
      },
      {
         value: 3,
         time: "09:04-09:06"
      },
      {
         value: 4,
         time: "09:06-09:08"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 6,
         time: "09:10-09:12"
      },
      {
         value: 7,
         time: "09:12-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },
      {
         value: 5,
         time: "09:08-09:10"
      },


   ];

   const time2 = [
      {
         value: 16,
         time: "09:30-09:32"
      },
      {
         value: 17,
         time: "09:32-09:34",
         isDisabled: true
      },
      {
         value: 18,
         time: "09:34-09:36"
      },
      {
         value: 19,
         time: "09:36-09:38"
      },
      {
         value: 20,
         time: "09:38-09:40"
      }

   ];

   const time3 = [
      {
         value: 31,
         time: "10:00-10:02"
      },
      {
         value: 32,
         time: "10:02-10:04",
         isDisabled: true
      },
      {
         value: 33,
         time: "10:04-10:06"
      },
      {
         value: 34,
         time: "10:06-10:08"
      },
      {
         value: 35,
         time: "10:08-10:10"
      }

   ];

   const type = [
      {

         type: "กยศ."
      },
      {

         type: "กรอ."
      }


   ];
   const [selectedValue1, setSelectedValue1] = useState(null);
   const handleChange1 = obj => {
      setSelectedValue1(obj);

   }

   const [selectedType, setSelectedType] = useState(null);

   const handleOnChange = obj => {
      setSelectedType(obj);
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // console.log("test");


      if(selectedValue1 && selectedType){
         
        let id = localStorage.getItem("studentID")
         SetDetail({
            range: state.range,
            timerange: state.time,
            time: selectedValue1.time,
            type: selectedType.type,
            studentID: id
         })

         localStorage.setItem("time",selectedValue1.time)
         localStorage.setItem("type",selectedType.type)
         
         history.push("/Detail")
      }
      else{
         alert("โปรดเลือกเวลาและประเภทของคุณ")
      }




   }


   const handleClear = (e) => {
      e.preventDefault()
      console.log("test");
      setSelectedType(null)
      setSelectedValue1(null)

   }

   return (

      <div>

         <div className="dheader">{`ช่วงที่ ${state.range} เวลา ${state.time} น.`}</div>

         <div className="rowDrop">


            <div class="row" >

               <div class="col-sm-3">
                  <div className="App" className="Drop1" >
                     กรุณาเลือกเวลา<br></br>
                     {/* {`${detail.timerange} น.`} */}
                     <Select
                        value={selectedValue1}
                        options={time1}
                        onChange={handleChange1}
                        isOptionDisabled={options => options.isDisabled}
                        getOptionLabel={options => options.time}
                        required

                     />

                     <b>เวลาที่คุณเลือกคือ</b>
                     <pre>{JSON.stringify(selectedValue1, null, 2)}</pre>
                  </div></div>


               <div class="col-sm-3">
                  <div className="App" className="Drop2" >
                     <br></br>
                     กรุณาเลือกประเภท
                     <Select
                        value={selectedType}
                        options={type}
                        onChange={handleOnChange}
                        required

                        getOptionLabel={options => options.type}
                     />

                     <b>ประเภทที่คุณเลือกคือ</b>
                     <pre>{JSON.stringify(selectedType, null, 2)}</pre>
                  </div>
               </div>
               <div class="col-sm-3">
                  <button class="btn btn-success" onClick={handleSubmit}>ยืนยัน</button>
                  <button type="reset" class="btn btn-danger" onClick={handleClear}>ล้าง</button>
               </div>
            </div>
         </div>

      </div>

   )
}
export default DropDura1;