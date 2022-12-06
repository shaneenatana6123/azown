import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../context/PropertyContext";
import Venderallservice from "./Venderallservice";

const VenderService = () => {
  const context = useContext(propertyContext);
  const { fetchservice, allservice,addVenderService } = context;
  useEffect(() => {
    fetchservice();
  }, []);
  const [service, setservice]= useState({
    service_name:"",
    vendor_name:"",
    vendor_description:"",
    vendor_location:""

  })
  const handleChange=(e)=>{
    setservice({...service,[e.target.name]:e.target.value})

  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    addVenderService(service)

  }
  return (
    <div>
      <h2>Add the Service</h2>
      <form onSubmit={handleSubmit} >
      <select class="form-select" name="service_name" onChange={handleChange} aria-label="Default select example">
      <option selected>Choose...</option>
      {allservice.map((service) => {
        return (
          <>
        <option value={service.service_name}>{service.service_name}</option>
          </>
        );
      })}
      </select>
      <input type="text" onChange={handleChange} name="vendor_name"  placeholder="Enter the Name" className="form-control"/>
      <input type="text" onChange={handleChange} name="vendor_description"  placeholder="Enter the Description" className="form-control"/>
      <input type="text" onChange={handleChange} name="vendor_details" placeholder="Enter the Detail" className="form-control"/>
      <input type="text" onChange={handleChange} name="vendor_location" placeholder="Enter the Location" className="form-control"/>
      <button type="submit" className="btn btn-dark">Add</button>


      </form>
      <hr />
      <h5>All Services</h5>

      <Venderallservice/>

     
    </div>
  );
};

export default VenderService;
