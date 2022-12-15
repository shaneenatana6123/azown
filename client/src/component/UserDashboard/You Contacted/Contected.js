import React, { useContext, useEffect,useState } from "react";
import { leadContext } from "../../../context/LeadContext";
import { Card,Button,Row,Col } from "react-bootstrap";

import CardItem from "./CardItem";

const Contected = () => {
  const leadcontext = useContext(leadContext);
  const { userlead, userleadsdata ,updateleadstage} = leadcontext;
  const [loading , setloading] = useState(false)

  useEffect(() => {
   
    userlead();
   
  }, []);
  function handleupdate(e,lid,stage){
    e.preventDefault()
    console.log("click");
    setloading(true)
updateleadstage(lid,stage)
userlead()
setloading(false)
}
  return (
    loading ?<h1>Loading....</h1>:
   
    <div className="container">
     <Row xs={1} md={3} className="g-4">
     
      {userleadsdata && userleadsdata.map((userlead) => {
          return (
           <Col>
           <Card style={{ width: '18rem' , height:'7rem' }}>
      <Card.Img variant="top" src={userlead.imgurl[0]} />
      <Card.Body>
        <Card.Title>Owner Details</Card.Title>
        <Card.Text>
         <p>{userlead.name}</p>
         <p>{userlead.email}</p>
        </Card.Text>
    {userlead.property_lead_stage===(-10)  ?  <button className="btn btn-dark disabled">Rejected</button> :userlead.property_lead_stage===(30)  ?  <button className="btn btn-dark disabled">Completed</button> : userlead.property_lead_stage===(0)  ?  <button className="btn btn-dark "  onClick={(e)=>{ handleupdate(e,userlead._id,10) }}  >Closure Req</button> : userlead.property_lead_stage===(10)  ?  <button className="btn btn-dark disabled">Closure Pending</button> : <button className="btn btn-dark" onClick={(e)=>{handleupdate(e)}} >Pay Now</button>}
       
      </Card.Body>
    </Card>
        {/* <CardItem userlead = {userlead}/> */}
           </Col>
             
             
           
          );
        })}
     
     </Row>
              
    
    </div>
  );
};

export default Contected;
