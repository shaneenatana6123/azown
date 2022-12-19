import React, { useContext, useEffect,useState } from "react";
import { leadContext } from "../../../context/LeadContext";
import { Card,Button,Row,Col } from "react-bootstrap";
const CardItem = (props) => {
    const {userlead} = props
    const leadcontext = useContext(leadContext);
    const { updateleadstage} = leadcontext;
    const [tenclicked,setten] = useState(false)
    const [payed,setpay] = useState(false)

  return (
    <div>
           <Card style={{ width: '18rem' , height:'auto' }}>
      <Card.Img variant="top" src={userlead.imgurl[0]} />
      <Card.Body>
        <Card.Title>Owner Details</Card.Title>
        <Card.Text>
         <p>{userlead.name}</p>
         <p>{userlead.email}</p>
        </Card.Text>
        {userlead.property_lead_stage===(-10)  ?  <button className="btn btn-dark disabled m-2">Rejected</button> :userlead.property_lead_stage===(30)  ?  <button className="btn btn-dark disabled m-2">Completed</button> : userlead.property_lead_stage===(0)  ?  <button className="btn btn-dark "  onClick={()=>{updateleadstage(userlead._id,10); setten(true) }}  >{ tenclicked? "Pending Closure" :"Closure Req"  }</button> : userlead.property_lead_stage===(10)  ?  <button className="btn btn-dark disabled">Closure Pending</button> : <button className="btn btn-dark" onClick={()=>{updateleadstage(userlead._id,30); setpay(true)}} >{payed?"Completed":"Pay Now"}</button>}
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardItem
