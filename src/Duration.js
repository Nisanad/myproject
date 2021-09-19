import React from 'react';
import { Component } from 'react';
import './App.css';




function Duration1(){
    return (
        
        <div > 
            <div className="topbox" >
            
            <img src="psu-logo.png" width="100px" className="psulogo2"  ></img> </div>

            <img src="estudent.jpg" width="120px"  ></img>
            
            <h2 className="h2header" >กรุณาเลือกช่วงเวลา</h2>
            <br></br><br></br>
            <div className="dura">
            <div>  
          
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 1 09.00-10:30</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 1 10:30-12:00</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 1 13:00-14:30</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 1 14:30-16:00</button>
            </div>
                <br></br><br></br><br></br><br></br>
            <div>
                <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 2 09.00-10:30</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 2 10:30-12:00</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 2 13:00-14:30</button>&emsp;&emsp;&emsp;&emsp;
            <button type="button" class="btn btn-outline-info" className="buttonD1" >ช่วงที่ 2 14:30-16:00</button>
            </div>
            </div>
    
            
            
            
         
            
        </div>
    );
}
export default Duration1;