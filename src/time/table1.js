import './time.css';
import React, { useState , useContext} from 'react';
import { contextSession } from "../App"
import { useHistory } from "react-router-dom"
import Select from "react-select";
function Table1(state) {
  const { detail,
    session,
    check,
    setCheck,
    getRange,
    getTimeRange,
    setTime,
    setType,
    getTime,
    getType, } = useContext(contextSession)
  const history = useHistory()


const handleClear = (e) => {
    e.preventDefault()
    console.log("test")
    setType(null)
    setTime(null)
  }
  
  const type = [
    {
      type: "กยศ.",
    },
    {
      type: "กรอ.",
    },
  ]
  const handleOnChange = (obj) => {
    setType(obj)
 }
  return (
    <div class="row">
    <div class="col-sm-2">
    <div class="container mt-5">
    <table class=" table-hover">
    <tr>
      
       <th colspan="5" >กรุณาเลือกเวลา</th> 

    </tr>
    <tr>
      <td>
        <button type="button" class="btn btn-outline-dark btn-sm">09:00-09:02</button>
      </td>
      
      <td>
        <button type="button" class="btn btn-outline-dark btn-sm"> 09:02-09:04</button>
      </td>
      
      <td>
        <button type="button" class="btn btn-outline-dark btn-sm" >09:04-09:06</button>

      </td>
      <td>
       <button type="button" class="btn btn-outline-dark btn-sm">09:06-09:08</button> 
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:08-09:10</button>
      </td>
    </tr>

    <tr>
      
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:10-09:12</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:12-09:14</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:14-09:16</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:16-09:18 </button>
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:18-09:20</button>
      </td>
    </tr>

    <tr>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:20-09:22</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:22-09:24</button>
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 09:24-09:26</button> 
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:26-09:28</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:28-09:30</button>  
      </td>
    </tr>

    <tr>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:30-09:32</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:32-09:34</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:34-09:36</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:36-09:38</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:38-09:40</button>
      </td>  
    </tr>

    <tr>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:40-09:42</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:42-09:44</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:44-09:46</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:46-09:48</button> 
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:48-09:50</button>
      </td>
    </tr>

    <tr>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:50-09:52</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:52-09:54</button>  
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:54-09:56</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:56-09:58</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">09:58-10:00</button>  
      </td>
    </tr>

    <tr>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:00-10:02</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:02-10:04</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:04-10:06</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:06-10:08</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:08-10:10</button>  
      </td>
    </tr>


    <tr>
       <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:10-10:12</button>  
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:12-10:14</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 10:14-10:16</button> 
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:16-10:18</button>  
      </td>
      <td> 
      <button type="button" class="btn btn-outline-dark btn-sm">10:18-10:20</button>
      </td>
    </tr>


    <tr>
     <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:20-10:22</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm"> 10:22-10:24</button> 
      </td> 
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:24-10:26</button>
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:26-10:28</button>  
      </td>
      <td>
      <button type="button" class="btn btn-outline-dark btn-sm">10:28-10:30</button>  
      </td>
    </tr>


  </table>
  <div class="col-sm-3">
            <div className="drop" >
              <br></br>
              กรุณาเลือกประเภท
              <Select
               value={getType}
                options={type}
                onChange={handleOnChange}
                required
                getOptionLabel={(options) => options.type}
              />
             
            </div>
          </div>
          <div className="btcr">
            <button class="btn btn-success" style={{padding: "8px"}} >
              ยืนยัน
            </button>
            <button type="reset" class="btn btn-danger"style={{margin: "100px"}} onClick={handleClear}>
              ล้าง
            </button>
          </div>
  </div>
  </div>
  </div>
  );
}

export default Table1;