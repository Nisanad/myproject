import React , {useState}  from "react";
import Select from "react-select";
import './App.css'
import './Day.css'


function Dropdown(){
    const time1 =[
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

    const time2 =[
        {
           value:16,
        time:"09:30-09:32" 
        },
        {
            value:17,
         time:"09:32-09:34",
         isDisabled:true
         },
         {
            value:18,
         time:"09:34-09:36" 
         },
         {
            value:19,
         time:"09:36-09:38" 
         },
         {
            value:20,
         time:"09:38-09:40" 
         }
        
    ];

    const time3 =[
        {
           value:31,
        time:"10:00-10:02" 
        },
        {
            value:32,
         time:"10:02-10:04",
         isDisabled:true
         },
         {
            value:33,
         time:"10:04-10:06" 
         },
         {
            value:34,
         time:"10:06-10:08" 
         },
         {
            value:35,
         time:"10:08-10:10" 
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
    const [selectedValue1, setSelectedValue1] = useState(null);
    const handleChange1 =obj =>{
        setSelectedValue1(obj);
    }
    const [selectedValue2, setSelectedValue2] = useState(null);
    const handleChange2 =obj =>{
        setSelectedValue2(obj);
    }
    const [selectedValue3, setSelectedValue3] = useState(null);
    const handleChange3 =obj =>{
        setSelectedValue3(obj);
    }

    const [selectedType, setSelectedType] = useState(null);
    const handleOnChange =obj =>{
        setSelectedType(obj);
    }
    


    return(
    <div>
       
        <div className="dheader">ช่วงที่ 1 เวลา 09.00-10.30 น.</div>
        
        <div className ="rowDrop">

       
        <div class="row"  >

                <div class="col-sm-3">
                    <div className ="App" className ="Drop1" >
                     กรุณาเลือกเวลา<br></br>
                      09:00 - 09:30
                    <Select
                    value ={selectedValue1}
                     options ={time1}
                    onChange ={handleChange1}
                    isOptionDisabled={options=>options.isDisabled}
                     getOptionLabel={options=>options.time}
                     /> 
                     <br></br><br></br>
                        <div>
                        <button type="button" class="btn btn-success">ยืนยัน</button>
                        <button type="button" class="btn btn-danger">ยกเลิก</button>
                        </div>
                     <br/>
                     <b>เวลาที่คุณเลือกคือ</b>
                     <pre>{JSON.stringify(selectedValue1,null,2)}</pre>
                     </div></div>



                 <div class="col-sm-3">
                     <div className ="App" className ="Drop1" >
                    กรุณาเลือกเวลา <br></br>
                      09:30 - 10:00
                    <Select
                    value ={selectedValue2}
                     options ={time2}
                    onChange ={handleChange2}
                    isOptionDisabled={options=>options.isDisabled}
                     getOptionLabel={options=>options.time}
                     />
                         <br></br><br></br>
                        <div>
                        <button type="button" class="btn btn-success">ยืนยัน</button>
                        <button type="button" class="btn btn-danger">ยกเลิก</button>
                        </div>
                     <br/>
                    <b>เวลาที่คุณเลือกคือ</b>
                     <pre>{JSON.stringify(selectedValue2,null,2)}</pre>
                     </div>

                </div>



                <div class="col-sm-3">
                    <div className ="App" className ="Drop1" >
                     กรุณาเลือกเวลา<br></br>
                      10:00 - 10:30
                     <Select
                    value ={selectedValue3}
                    options ={time3}
                    onChange ={handleChange3}
                    isOptionDisabled={options=>options.isDisabled}
                    getOptionLabel={options=>options.time}
                    />
                         <br></br><br></br>
                        <div>
                        <button type="button" class="btn btn-success">ยืนยัน</button>
                        <button type="button" class="btn btn-danger" margin="20px" >ยกเลิก</button>
                        </div>
                    <br/>
                    <b>เวลาที่คุณเลือกคือ</b>
                    <pre>{JSON.stringify(selectedValue3,null,2)}</pre>
                    </div>

                </div>


                <div class="col-sm-3">
                    <div className ="App" className ="Drop2" >
                       <br></br>
                    กรุณาเลือกประเภท
                     <Select
                    value ={selectedType}
                    options ={type}
                     onChange ={handleOnChange}
            
                     getOptionLabel={options=>options.type}
                    />
                         <br></br><br></br>
                        <div>
                        <button type="button" class="btn btn-success">ยืนยัน</button>
                        <button type="button" class="btn btn-danger">ยกเลิก</button>
                        </div>
                     <br/>
                    <b>ประเภทที่คุณเลือกคือ</b>
                    <pre>{JSON.stringify(selectedType,null,2)}</pre>
                    </div>
                </div>
 </div>
</div>
</div>
  
        
       
            
    )
}
export default Dropdown;