import React, { useState,useContext } from 'react'
import propertyContext from '../context/PropertyContext'

const CreateService = () => {
    const context = useContext(propertyContext)
    const {addservice} = context
    const [service, setservice ]= useState({
        service_name: "",
        service_desc:"",
        service_charge:"",
        
      })
    const handleSubmit =(e)=>{
e.preventDefault()
addservice(service.service_name,service.service_desc, service.service_charge)
setservice({
    service_name: "",
    service_desc:"",
    service_charge:"",
    
  })
    }
    const handleChange = (e)=>{
        setservice({...service,[e.target.name]:e.target.value})    
    }
  return (
    <div>
      <h3 class="text-center">Create the Service for the Vender</h3>
            <form onSubmit={handleSubmit} class="container m-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Service Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='service_name'
                 onChange={handleChange}
                 value={service.service_name}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  
                  Discription Of the Service
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='service_desc'
                  onChange={handleChange}
                  value={service.service_desc}
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Charge of Service
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='service_charge'
                  value={service.service_charge}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <button
                  type="submit"
                  class="form-control btn btn-dark"
                  id="exampleFormControlInput1" 
                >Create the Service</button>
              </div>
            </form>
    </div>
  )
}

export default CreateService
