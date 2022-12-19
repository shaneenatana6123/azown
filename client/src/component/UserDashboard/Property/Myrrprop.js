import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import DashRrentProp from "../../MyRrentProp.js/DashRrentProp";
import {Card,Row,Col,Button,Modal} from 'react-bootstrap';
import img from '../../../images/singleprop.jpg'
import { leadContext } from "../../../context/LeadContext";
import LeadProfile from "./LeadProfile";
import { Link } from "react-router-dom";


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
        <Col key={property._id}>
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
      <Link className="btn btn-dark m-2" to={`/userdash/${property._id}`}>More</Link>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Leads</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ownerleaddata && ownerleaddata.map((lead)=>{
          return <div>
           < LeadProfile key={lead._id}  lead={lead}/>
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
