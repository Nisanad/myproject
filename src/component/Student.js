import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "../App.css"

function Student({ SetDetail }) {

  const history = useHistory()
  const [id, setId] = useState("")
  const handleOnChange = (e) => {
    setId(e.target.value)
  }

  const handleID = (e) => {
    e.preventDefault()
    if (id) {
      localStorage.setItem("studentID", id)
      history.push("/Queue")
    }
    else{
      alert("โปรดกรอกรหัสนักศึกษา")
    }

  }


  return (
    <div>
      <div>
        <center>
          <div className="Boxtodo">
            <h1 className="p3">Student ID</h1>
            <br></br>
            <br></br>
            <input type="text" onChange={handleOnChange} value={id} />
            <br></br>
            <br></br>

            <button type="button" class="btn btn-dark" onClick={handleID}>
              Add
            </button>
          </div>
        </center>
      </div>
    </div>
  )
}

export default Student
