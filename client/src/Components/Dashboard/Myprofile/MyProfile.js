import React, { useContext, useEffect } from 'react'
import propertyContext from '../../../context/PropertyContext'

const MyProfile = () => {
  const context = useContext(propertyContext);
  const { userdetail,getuserdetail,} = context
  
  useEffect(()=>{
    getuserdetail()
  },[])
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
    <div className="dashboard-body mb-3">
    <div className="dashboard-wraper">
      
      <div className='row'>
      <div className='col-2'><h6>40% Completed</h6></div>
      <div className='col-10'>
  <div className="progress">
  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%',height:"4%" ,backgroundColor:"#27AE60"}}>
    40% Complete (success)
  </div>
</div>


      </div>
      <div className='col-2'><h6></h6></div>
      <div className='col-10'><p>To get verified , Complete Your Profile 100%</p></div>
      

         
      </div>
     
      
    </div>
  </div>
  <div className="dashboard-body mb-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>Basic Information <i className="fas fa-plus-circle m-0"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Name</h6></div>
      <div className='col-9'><p>{userdetail.name}</p></div>
      <div className='col-3'><h6>Email</h6></div>
      <div className='col-9'><p>{userdetail.email}</p></div>
      <div className='col-3'><h6>Phone No.</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>User Type</h6></div>
      <div className='col-9'><p>{userdetail.usertype}</p></div>   
      </div>
      {/* <button className='btn  btn-dark py-2 px-4 '>Edit</button> */}
      
    </div>
  </div>
  <div className="dashboard-body my-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>Add Social Media<i className="fas fa-plus-circle m-2"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Linked In</h6></div>
      <div className='col-3'><h6>FaceBook</h6></div>
      <div className='col-3'><h6>Twitter</h6></div>
      <div className='col-3'><h6>Instagram</h6></div>
      <div className='col-3'><p>https://linkedin.com</p></div>
      <div className='col-3'><p>https://facebook.com</p></div>
      <div className='col-3'><p>https://twitter.com</p></div>
      <div className='col-3'><p>https://instagram.com</p></div>
    
         
      </div>
      {/* <button className='btn  btn-dark py-2 px-4 '>Edit</button> */}
      
    </div>
  </div>
  <div className="dashboard-body my-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>KYC Update<i className="fas fa-plus-circle m-2"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Business Name</h6></div>
      <div className='col-9'><p>{userdetail.name}</p></div>
      <div className='col-3'><h6>Working Area</h6></div>
      <div className='col-9'><p>{userdetail.email}</p></div>
      <div className='col-3'><h6>Shop Address</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>Locality</h6></div>
      <div className='col-9'><p>{userdetail.usertype}</p></div>   
      <div className='col-3'><h6>Landmark</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6> City</h6></div>
      <div className='col-9'><p>234567890</p></div>
       <div className='col-3'><h6>State</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6>GST No</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6>Rera No.</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>Work Exp.</h6></div>
      <div className='col-9'><p>234567890</p></div>
    
         
      </div>
     


      
    </div>
  </div>
  
</div>

  )
}

export default MyProfile