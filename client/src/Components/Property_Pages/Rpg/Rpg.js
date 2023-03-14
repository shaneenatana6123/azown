import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import img from '../../images/p-1.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SigninPop from '../SigninPopUp';


const Rpg = ({property,onAlert}) => {
  const context = useContext(propertyContext);
  const leadcontext = useContext(leadContext)
  const { leadcreate,likeprop } = leadcontext
  const [liked, setliked] = useState(false)
  const { lead, handlereq,cmrDetail,cmrdata } = context;
  const [contacted, setcontacted] = useState(false);
  const [show,setShow] = useState(false)
  const [log,setlog] = useState(false)
  const [showUser,setShowUser] = useState(false)
  const [btnText,setBtnText] = useState("Get Owner Details")
  const data = cmrdata;

  const getUserInfo = (id) =>{
    cmrDetail(id);
  }
 const handleClose = ()=>{
  setShowUser(false);
}

const handleSignUpPopHide = () =>{
  setShow(false);
}

  
  return (
   
    <div className="row justify-content-center">
      {/* Single Property */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="property-listing list_view">
          <div className="listing-img-wrapper">
            <div className="_exlio_125">For PG</div>
            <div className="list-img-slide">
              <div className="click">
              <div><a href><img src={property.images && property.images.length===0?img:property.images[0]} className="img-fluid mx-auto" alt="djk" /></a></div>
              </div>
            </div>
          </div>

          {show && <SigninPop onHide={handleSignUpPopHide}/>}
          {   showUser &&  <Modal show={showUser} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Get Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p>Owner will contact you shortly</p>
<strong>Email: {data.email}</strong>
</Modal.Body>        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>}

          <div className="list_view_flex">										
            <div className="listing-detail-wrapper mt-1">
              <div className="listing-short-detail-wrap">
                <div className="_card_list_flex mb-2">
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h6 className="cms_title mb-0"><Link style={{fontSize:"15px"}} to={`/rpg-detail/${property._id}`}>{property.rpg_detail_title} </Link></h6>
                    </div>
                  </div>
                  
                  <div className="_card_flex_last">
                    <h6 className="cms_amount mb-0">{property.rpg_detail_room_rent}</h6>
                  </div> 
                </div>
              </div>
            </div>
            <div style={{borderTop: '#dddddd solid', borderBottom: '#dddddd solid', paddingBottom: 10}}>
              <br /><div className="_card_list_flex">
                <div className="_card_flex_01">
                  {/* <h4 class="listing-name verified" style="padding-top: 10px;"><a href="single-property-1.html" class="prt-link-detail">5689 Resot Relly Market, Montreal Canada</a></h4> */}
                </div>
              </div>												
              <div className="_card_list_flex mb-2">
                <p className="location_fuzail"><i className="lni-map-marker" />{property.rpg_location_city}</p>
              </div>											
              <div className="row" style={{paddingLeft: 17}}>
                <div className="row col-lg-12 col-md-12">
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">₹{property.rpg_detail_room_deposit}</p>
                    <i className="fa fa-money pr-1" /> Deposit
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_room_occupany}</p>
                    <i className="fa fa-bed pr-1" />Room Occupy
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_availablefor}</p>
                    <i className="fa fa-building pr-1" />Prefered Tenent
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_available_from}</p>
                    <i className="fa fa-parking pr-1" />Posted on
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rpg_detail_food_included}</p>
                    <i className="fa fa-building pr-1" />Food Facility
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rpg_detail_gate_shut_time}</p>
                    <i className="fa fa-clock pr-1" />Gate Closing Time
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-detail-footer" style={{marginTop: 0, paddingRight: 0}}>
              <div className="footer-first">
                <div className="foot-rates">
                  <span className="elio_rate good">4.2</span>
                  <div className="_rate_stio">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {localStorage.getItem('token') ? property.like && property.like.includes(localStorage.getItem('userId')) || liked ? <span  >  <i className=" fa fa-heart" style={{fontSize: 35,color:"red", paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span> :<span onClick={()=>{setliked(true);likeprop(property._id,3)}} >  <i className=" fa fa-heart" style={{fontSize: 35,color:`${ !liked ? "#27ae60":"red"}`, paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span>  :  <span onClick={onAlert} >  <i className=" fa fa-heart" style={{fontSize: 35,color:"#27ae60", paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span> }
              <div className="footer-flex">
              {localStorage.getItem("token") ?
                   (
                    (property.lead &&
                      property.lead.includes(localStorage.getItem("userId"))) ||
                    contacted ?
                     (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60",cursor:"not-allowed" }}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                        //  console.log("lead already created")
                        getUserInfo(property._id)

                        }}
                        
                      >
                        Get Owner Details
                      </button> 
                    ) : (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60" ,cursor:"pointer"}}
                        onClick={() => {
                          leadcreate(property._id, 3);
                          setcontacted(true);
                           setShowUser(true)
                           getUserInfo(property._id)


                          // console.log("recent lead create");
                        }}
                      >
                        Get Owner Details
                      </button>
                    )
                  ) : (
                    <button
                     onClick={()=>setShow(true)}
                    // onClick={()=>console.log("User not login")}
                      className="prt-view"
                      style={{
                        backgroundColor: "#27ae60",
                        outline: "2px solid #fff",
                        cursor:"pointer"
                      }}
                    >
                      Get Owner Details
                    </button>
                  )}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Property */}
      {/* ////////////////////////////////////// */}
      {/* ///////////////////////////////////////// */}
    </div>
   

  )
}

export default Rpg