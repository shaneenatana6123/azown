import React,{useContext, useState} from 'react'
import { leadContext } from '../../../context/LeadContext'


const LeadProfile = (props) => {
    const {lead} = props
    const leadcontext = useContext(leadContext)
    const [clicked,setclick ]= useState(false)
    const [rejected ,setreject] = useState(false)
  const {updateleadstage} = leadcontext 
  return (
    <div><div>
    <p> <b>Client Name : </b> {lead.name}</p>
    <p> <b>Client Email : </b> {lead.email}</p>
    {lead.property_lead_stage===(0) ? <button className='btn btn-dark disabled'>Lead</button>: lead.property_lead_stage===(10) ? <><button className="btn btn-dark m-2" onClick={()=>{updateleadstage(lead._id,20); setclick(true)}}>{ clicked  ?   "Payment Pending": "Accept"}</button> <button className="btn btn-dark  m-2" onClick={()=>{updateleadstage(lead._id,-10);setreject(true)}}>{rejected?"Rejected":"Reject"}</button></> : lead.property_lead_stage===(20)?<button className="btn btn-dark disabled m-2">Pending Payment</button>: lead.property_lead_stage===(30)?<button className="btn btn-dark disabled m-2">Completed</button>:<button className="btn btn-dark disabled m-2">Rejected</button>}
    <hr/>
  </div></div>
  )
}

export default LeadProfile