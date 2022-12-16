import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import DashRrentProp from "../../MyRrentProp.js/DashRrentProp";
import {Card,Row,Col,Button,Modal} from 'react-bootstrap';
import img from '../../../images/singleprop.jpg'
import { leadContext } from "../../../context/LeadContext";


const Myrrprop = () => {
  const context = useContext(propertyContext);
  const { dash, Userrrprop,  gethandler} = context;
  const leadcontext = useContext(leadContext)
  const {ownerlead, ownerleaddata,updateleadstage} = leadcontext 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Userrrprop();
    gethandler();
  }, []);
  return (
    <>
    <Row xs={1} md={2} className="g-4">
      {dash.map((property) => (
        <Col>
          <Card>
            <Card.Img variant="top" style={{height:200}} src={img} />
            <Card.Body>
              <Card.Title>Property Title</Card.Title>
              <Card.Text>
                {property.rr_detail_description}

              </Card.Text>
              <Card.Title>
              
              <Button variant="dark" onClick={()=>{ownerlead(property._id); setShow(true)} } >
        Property Leads
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Leads</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ownerleaddata && ownerleaddata.map((lead)=>{
          return <div>
            <p> <b>Client Name : </b> {lead.name}</p>
            <p> <b>Client Email : </b> {lead.email}</p>
            {lead.property_lead_stage===(0) ? <></>: lead.property_lead_stage===(10) ? <><button className="btn btn-dark m-2" onClick={()=>{updateleadstage(lead._id,20)}}>Accept</button> <button className="btn btn-dark  m-2" onClick={()=>{updateleadstage(lead._id,-10)}}>Reject</button></> : lead.property_lead_stage===(20)?<button className="btn btn-dark disabled m-2">Pending Payment</button>: lead.property_lead_stage===(30)?<button className="btn btn-dark disabled m-2">Completed</button>:<button className="btn btn-dark disabled m-2">Rejected</button>}
            <hr/>
          </div>
        })}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </Card.Title>

            </Card.Body>
           
          </Card>
        </Col>
      ))}
    </Row>
     
    </>
  );
};

export default Myrrprop;
