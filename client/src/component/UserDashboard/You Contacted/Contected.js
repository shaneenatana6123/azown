import React, { useContext, useEffect,useState } from "react";
import { leadContext } from "../../../context/LeadContext";
import { Card,Button,Row,Col } from "react-bootstrap";

import CardItem from "./CardItem";

const Contected = () => {
  const leadcontext = useContext(leadContext);
  const { userlead, userleadsdata } = leadcontext;
  // const [loading , setloading] = useState(false)

  useEffect(() => {
    // setloading(true)
    userlead();
    // setloading(false)
  }, []);

  return (
    // loading ?<h1>Loading....</h1>:
   
    <div className="container">
     <Row xs={1} md={3} className="g-4">
     
      {userleadsdata && userleadsdata.map((userlead) => {
          return (
           <Col key={userlead._id}>
        <CardItem userlead = {userlead} />
           </Col>
             
             
           
          );
        })}
     
     </Row>
              
    
    </div>
  );
};

export default Contected;
