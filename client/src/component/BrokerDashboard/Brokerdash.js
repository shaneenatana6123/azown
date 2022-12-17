import React from 'react'
import Myprofile from '../UserDashboard/Profile/Myprofile'
import {Tab,Nav, Row,Col} from 'react-bootstrap';
import HandledProperty from './HandledProperty/HandledProperty'
import HandContact from './Contacted/HandContact';

const Brokerdash = () => {
  return (
    
    <div className='container'>
      <h3 className='m-3'>Broker DashBoard</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Handower Props</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">You Contacted(H)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">Payment</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <Myprofile/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <HandledProperty/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <HandContact/>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
              ...
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </div>



//     <div className='container'>
//     <div class="d-flex align-items-start">
//   <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//     <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
//     <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Handler</button>
//     <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >Disabled</button>
//     <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
//     <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
//   </div>
//   <div class="tab-content" id="v-pills-tabContent">
//     <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
// <Myprofile/>

//     </div>
//     <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
// {/* <Handler/> */}

//     </div>
//     <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
//     <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
//     <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
//   </div>
// </div>

//     </div>
  )
}

export default Brokerdash