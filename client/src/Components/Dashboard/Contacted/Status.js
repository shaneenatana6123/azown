import React, { useContext, useState } from 'react'
import { leadContext } from '../../../context/LeadContext';

const Status = ({item}) => {
    const leadcontext = useContext(leadContext);
    const { updateleadstage} = leadcontext;
    const [tenclicked,setten] = useState(false)
    const [payed,setpay] = useState(false)
  return (
    <div>
          {item.property_lead_stage===(-10)  ?  <button className="btn btn-danger disabled  p-2 ">Rejected</button> :item.property_lead_stage===(30)  ?  <button className="btn btn-dark disabled m-2">Completed</button> : item.property_lead_stage===(0)  ?  <button className="btn btn-dark p-2"  onClick={()=>{updateleadstage(item._id,10); setten(true) }}  >{ tenclicked? "Pending Closure" :"Closure Req"  }</button> : item.property_lead_stage===(10)  ?  <button className="btn btn-dark disabled p-2">Closure Pending</button> : <button className="btn btn-dark p-2" onClick={()=>{updateleadstage(item._id,30); setpay(true)}} >{payed?"Completed":"Pay Now"}</button>}
    </div>
  )
}

export default Status