import React,{useContext, useEffect} from 'react'
import propertyContext from '../context/PropertyContext'


const Handler = () => {
  const context =useContext(propertyContext)
  const {gethandle,gethandler} = context
  useEffect(()=>{
   gethandler()
  },[])
console.log(gethandle);
  return (
    <div>
        <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">You Requested</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">incoming req</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Accepted</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
{gethandle.map((handledata)=>{
  return (
    <div className='row'>
    <div className="col-6 border border-dark m-2">
      <p>Property id:{handledata.property_id}</p>
      <p>Owner id:{handledata.property_owner_id}</p>
    <button> {handledata.property_broker_requested ?"Accepted":"Pending" }</button> 
    </div>

    </div>
  )
})}
    
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
    </div>
  )
}

export default Handler