import React, { useContext, useEffect } from 'react'
import propertyContext from '../context/PropertyContext'


const Contected = () => {
    const context = useContext(propertyContext)
    const {userlead,userleadsdata }= context

useEffect(()=>{
userlead()
},[])
  return (
    <div className='container'>
    {userleadsdata.map((userlead)=>{
                return ( <div className="row">
        <div className="col-6">
        {
            userlead.property_is_open && <div><h6>Client id</h6>
            <p>{userlead.property_client_id}</p>
            {userlead.property_closure_requested && <button>{userlead.property_closure_requested ? "Cleser pending": ""}</button>}
            {userlead.property_closure_accepted && <button>{userlead.property_closure_accepted ? "Pay now": ""}</button>}

            </div>
        }
          
            
            
        </div>
    </div>)
            })}
   

    </div>
  )
}

export default Contected