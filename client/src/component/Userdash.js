import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../context/PropertyContext'
import Myrrprop from './Myrrprop'
import Contected from './Contected'
import Myprofile from './Myprofile'
const Userdash = () => {
  const history = useNavigate()
    const context = useContext(propertyContext)
    const {Userrrprop,dash,rrprop}= context
    useEffect(()=>{
      if (!localStorage.getItem("token")) {
        history("/login");
      }else{
        Userrrprop()
      }

    },[])
  return (
    <div className='container'>
      <h2>Userdash</h2>
      <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Property</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >You Contacted</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Payment</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">

<Myprofile/>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

<Myrrprop/>

    </div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
     <Contected/>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
  </div>
</div>
     
      {/* {rrprop.map((propert)=>{
        return (
            <div className="row">
                <div className="col-4 m-3 border border-dark">
                    <h5>{propert.title}</h5>
                    <p>{propert.description}</p>
                    <button onClick={()=>console.log()}>Click</button>
                </div>
            </div>
        )
      })} */}

    </div>
  )
}

export default Userdash
