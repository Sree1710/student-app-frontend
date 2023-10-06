import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = () => {
    const [inputField,setInputField]=useState(
        {name:"",rollno:"",admno:"",colg:""}
    )
    
    const apiLink="http://localhost:3001/add"

    const inputHandler=(event)=>{
        axios.post(apiLink).then(
            setInputField({...inputField,[event.target.name]:event.target.value})
        )
        
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Student</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="name" value={inputField.name} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Roll No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="rollno" value={inputField.rollno} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="admno" value={inputField.admno} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="colg" value={inputField.colg} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onChange={readValue} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent