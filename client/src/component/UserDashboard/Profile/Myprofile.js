import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import profile from '../../../images/image-main.jpg'
import UpdateModal from "./UpdateModal";
const Myprofile = () => {
  const context = useContext(propertyContext);
  const { getuserdetail, userdetail, kycupdatefun } = context;
 
  useEffect(() => {
    getuserdetail();
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={!userdetail.imgname ? profile : userdetail.imgname} style={{ height: '5rem' }} alt='' />
        </div>
        <div className='col-4 m-2'>
          <h5><b>Name</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.name}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Email</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.email}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Phone</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.phone}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Description</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.description}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>D.O.B</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.dob}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>User Type</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.usertype}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Adhaar No.</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.adharno}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>PanCard No.</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.pancardno}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>LandMark</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.landmark}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Street</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.street}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>City</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.city}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>State</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.state}</h5>
        </div>
        <div className='col-4 m-2'>
          <h5><b>Country</b></h5>
        </div>
        <div className="col-6 m-2">
          <h5>{userdetail && userdetail.country}</h5>
        </div>
       

      </div>
      <div>
        <UpdateModal userdetail={userdetail}/>
       </div>
    </div>

  )
};

export default Myprofile;



