import React,{useContext, useEffect,useState} from 'react'
import { HandlerContext } from '../../../context/HandlerContext'
import {Card,Row,Col,Button,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { leadContext } from '../../../context/LeadContext';
import img from '../../../images/singleprop.jpg'
import LeadProfile from '../../UserDashboard/Property/LeadProfile';


const HandledProperty = () => {
    const handlercontext = useContext(HandlerContext)
    const {handprops,handpropsdata,handleads,handleaddata} = handlercontext
    const leadcontext = useContext(leadContext)
  const {ownerlead, ownerleaddata} = leadcontext 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    useEffect(()=>{
        handprops()
    },[])
  return (
    <Row xs={1} md={2} className="g-4">
      {handpropsdata.map((property) => (
        <Col>
          <Card>
            <Card.Img variant="top" style={{height:200}} src={img} />
            <Card.Body>
              <Card.Title>Property Title</Card.Title>
              <Card.Text>
                {property.rr_detail_description}

              </Card.Text>
              <Card.Title>
              
              <Button variant="dark" onClick={()=>{handleads(property._id); setShow(true)} } >
        Property Leads
      </Button>
      <Link className="btn btn-dark m-2" to={`/userdash/${property._id}`}>More</Link>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Leads</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* {console.log(handleaddata)} */}
            {handleaddata && handleaddata.map((lead)=>{
          return <div>
           < LeadProfile key={lead._id}  lead={lead}/>
          </div>
        })}
        </Modal.Body>
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
  )
}

export default HandledProperty