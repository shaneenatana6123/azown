import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';


const SubmitProps = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='btn btn-rounded btn-light rounded-pill'  onClick={handleShow}>
   <i class="fa-solid fa-plus"></i>&nbsp;Submit Property
            </Button>

            <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Property Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"

      fill
    >
      <Tab eventKey="home" title="Residential" style={{textAlign:"center"}} >
      <Link class="btn btn-primary m-2 p-2" to="/rr-create-property">Rent</Link>
            <Link class="btn btn-secondary m-2 p-2" to="/resdential-resale">Resale</Link>
     <Link className='btn btn-secondary m-2'>Pg</Link>
     <Link className='btn btn-secondary m-2'>Flates</Link>
      </Tab>
      <Tab eventKey="profile" title="Commertial" style={{textAlign:"center"}}>
      <Link className='btn btn-primary  m-2' >Rent</Link>
     <Link className='btn btn-secondary m-2'>Sale</Link>
      </Tab>
      <Tab eventKey="longer-tab" title="Land/Plot" style={{textAlign:"center"}}>
     <Link className='btn btn-primary m-2'>Resale</Link>
      </Tab>
      
    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubmitProps