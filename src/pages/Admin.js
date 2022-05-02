
import "../App.css"
import React from "react"
import { DatePicker, Space } from 'antd';



export default function Admin() {
    const Status = () => (
        <Space 
            direction="vertical"
            style={{
                width: '125%',
            }} >
            <div>
              
                <DatePicker
                    status="error"
                style={{
                    width: '150%',
                }}
                />
               
                   <DatePicker 
                    status="warning"
                style={{
                    width: '150%',
                }}
                />
             </div>
              
            

        </Space>

    );

    return (
        <div><br></br>
                <h2 className='h2ad'>กรุณากำหนดวันที่</h2>
                
            <div className='calendaradmin'>
               <p >Start-End</p>
                <Status />

                <div className='bcadmin'>
                    <button class="btn btn-success"
                        style={{ borderRadius: "15px", }}>
                        ยืนยัน
                    </button>
                </div>

            </div>
        </div>

    )

}




