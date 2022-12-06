import React,{useContext, useEffect} from 'react'
import propertyContext from '../context/PropertyContext'

const Venderallservice = () => {
    const context = useContext(propertyContext);
  const {venderservice,allvenderservice } = context;
  useEffect(()=>{
    allvenderservice()
  },[])
 
  return (
    <div>
      
      {venderservice.map((data)=>{
        return <div className='row'>
        <div className="col-4 border border-dark">
        <p>{data.service_name}</p>
        <p>{data.vendor_description}</p>
        <p>{data.vendor_details}</p>{data._id}
    
<button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Service Lead
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
        </div>
      })}
    </div>
  )
}

export default Venderallservice
