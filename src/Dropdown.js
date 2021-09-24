import React , {useState}  from "react";
import Select from "react-select";
import './App.css'
import './Day.css'


function Dropdown(){
    const time =[
        {
           value:1,
        time:"09:00-09:02" 
        },
        {
            value:2,
         time:"09:02-09:04",
         isDisabled:true
         },
         {
            value:3,
         time:"09:04-09:06" 
         },
         {
            value:4,
         time:"09:06-09:08" 
         },
         {
            value:5,
         time:"09:08-09:10" 
         }
        
    ];
    const type =[
        {
            
         type:"กยศ." 
         },
         {
            
         type:"กรอ." 
         }
  

    ];
    const [selectedValue, setSelectedValue] = useState(null);
    const handleChange =obj =>{
        setSelectedValue(obj);
    }
    const [selectedType, setSelectedType] = useState(null);
    const handleOnChange =obj =>{
        setSelectedType(obj);
    }
    


    return(
    <div>
        <div className="topbox">
        <img src="psu-logo.png" width="100px" className="psulogo2"  ></img>
        </div>
        <img src="estudent.jpg" width="120px"  ></img>
        <div className="dheader">ช่วงที่ 1 เวลา 09.00-10.30 น.</div>
        <div className="d1d1-grid"> 
            <div className ="App" className ="Drop1" >
            กรุณาเลือกเวลา
            <Select
            value ={selectedValue}
            options ={time}
            onChange ={handleChange}
            isOptionDisabled={options=>options.isDisabled}
            getOptionLabel={options=>options.time}
            />

            <br/>
            <b>เวลาที่คุณเลือกคือ</b>
            <pre>{JSON.stringify(selectedValue,null,2)}</pre>
            </div>



            <div className ="App" className ="Drop2" >
            กรุณาเลือกประเภท
            <Select
            value ={selectedType}
            options ={type}
            onChange ={handleOnChange}
            
            getOptionLabel={options=>options.type}
            />

            <br/>
            <b>ประเภทที่คุณเลือกคือ</b>
            <pre>{JSON.stringify(selectedType,null,2)}</pre>
            </div>
            
        </div>
    </div>
        
       
            
    )
}
export default Dropdown;