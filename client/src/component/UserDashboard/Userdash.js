import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../context/PropertyContext'
import Myrrprop from './Property/Myrrprop'
import Contected from './You Contacted/Contected'
import Myprofile from './Profile/Myprofile'
import { leadContext } from '../../context/LeadContext'
import {Col,Nav,Row, Tab} from 'react-bootstrap';



const Userdash = () => {
  const history = useNavigate()
  const leadcontext = useContext(leadContext)
  const {old,value}= leadcontext
    const context = useContext(propertyContext)
    const {Userrrprop,dash,rrprop}= context
    useEffect(()=>{
      if (!localStorage.getItem("token")) {
        history("/login");
      }else{
        Userrrprop()
      }

    },[])
  return (
    <div className='container'>
      <h1 className=' m-4'>User DashBoard</h1>
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Property</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">You Contacted</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">Payment</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                  <Myprofile/>  
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Myrrprop/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Contected/>
             </Tab.Pane>
             <Tab.Pane eventKey="four">
             ....
             </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>




     
     
     

    </div>
  )
}

export default Userdash
