import { useContext } from 'react';

import '../App.css';
import { contextSession } from '../App';


function Date( ) {
    const { setDate} = useContext(contextSession)

 
    const date =[
        {
        _date1:"06/03/2565"
        },
        {
        _date2:"07/03/2565"
        },
        
]
return (

      <div  >
          

          <h2 className="p3"  >กรุณาเลือกวันที่ต้องการ</h2>
          <br></br><br></br>
          <div  style={{textAlign:"center"}}>
              <div style={{ display: "inline-flex" }}  >
                  {
                      date.map((val, i) => (
                          <div key={i}>
                              <button
                                  type="button"
                                  class="btn btn-outline-info"
                                  style={{
                                      margin: "20px" 
                                  }}
                                  onClick={() => {
                                    setDate(val._date)
                                      localStorage.setItem("date", val._date)
                                   

                                  }}
                                  className="buttonDate"  >{`วันที่ ${val._date} `}</button>

                          </div>
                      ))
                  }
              </div>
              <br></br><br></br><br></br><br></br>

          </div>



      </div>
  );
}
export default Date;