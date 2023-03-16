import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import Alert from '../../Alert';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SigninPop from './signinPop';

const RrentDetail = () => {
  

  const [model, setmodel] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow" >Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button title="Next (Right arrow key)" type="button" class="mfp-arrow mfp-arrow-right mfp-prevent-close"></button>,
    prevArrow:<button title="Previous (Left arrow key)" type="button" class="mfp-arrow mfp-arrow-left mfp-prevent-close"></button>,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };
  const context = useContext(propertyContext);
  const { rrdata,rrDetail} = context;
  const data = rrdata
  const [contacted, setcontacted] = useState(false)
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext
  const { id } = useParams();
  const [show,setShow] = useState(false)
  const [log,setlog] = useState(false)
  const [showUser,setShowUser] = useState(false)
  
 const handleClose = ()=>{
  setShowUser(false);
}

const handleSignUpPopHide = () =>{
  setShow(false);
}

  useEffect(() => {
    rrDetail(id);
  }, []);
  return (
 <div id="main-wrapper" style={show ? {overflow:"hidden"}:{overflow:"auto"}}>
<Navbar/>
{/* {showAlert && <Alert msg='Please Login Before !!...' / > } */}
{show && <SigninPop onHide={handleSignUpPopHide}/>}


{   showUser &&  <Modal show={showUser} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Get Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p>Owner will contact you shortly</p>
        <strong>Email: {data.email}</strong>
         </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>}

  <div className="clearfix" />
 
  <section className="gallery_parts pt-2 pb-2 d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12 pr-1" onClick={()=>{setmodel(true)}}>
              <div className="gg_single_part left"><img src={data.images && data.images.length > 0 ? data.images[0] : "assets/img/p-2.png"} className="img-fluid mx-auto" alt="img" /></div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 pl-1">
              <div className="gg_single_part-right min"><img src={data.images && data.images.length > 1 ? data.images[1] : "assets/img/p-2.png"} className="img-fluid mx-auto" alt='img' /></div>
              <div className="gg_single_part-right min mt-2 mb-2"><img src={data.images && data.images.length > 2 ? data.images[2] : "assets/img/p-3.png"} className="img-fluid mx-auto" alt='nu' /></div>
              <div className="gg_single_part-right min"><img src={data.images && data.images.length > 3 ? data.images[3] : "assets/img/p-4.png"} className="img-fluid mx-auto" alt='kj' /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="featured_slick_gallery gray d-block d-md-block d-lg-block d-xl-none">
        <div className="featured_slick_gallery-slide">
          <Slider {...settings}>
            {data.images && data.images.map((val) => {
              return <>
                <div className="featured_slick_padd" onClick={()=>{setmodel(true)}}><img src={val} className="img-fluid mx-auto" alt="dj" /></div>
              </>
            })}


          </Slider>

        </div>
      </div>
  <section className="pt-4">
    <div className="container">
      <div className="row">
        {/* property main detail */}
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="property_info_detail_wrap mb-4">
            <div className="property_info_detail_wrap_first">
              <div className="pr-price-into">
                <ul className="prs_lists">
                  <li><span className="bed"> {data.rr_detail_bhk_type}</span></li>
                  <li><span className="bath">{data.rr_detail_bathroom} Bath</span></li>
                  <li><span className="gar">{data.rr_detail_balcony} Balcony</span></li>
                  <li><span className="sqft">{data.rr_detail_builtup_area} sqft</span></li>
                </ul>
                <h2>{data.rr_detail_title}</h2>
                <span><i className="lni-map-marker" /> {data.rr_location_city}</span>
              </div>
            </div>
            <div className="property_detail_section">
              <div className="prt-sect-pric">
                <ul className="_share_lists">
                  <li><span><i className="fa fa-heart" style={{fontSize:"30px" ,color:"red"}} /></span></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Property Description</h4>
            </div>
            <div className="block-body">
              <p>{data.rr_detail_title}</p>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Property Features</h4>
            </div>								
            <div className="block-body">
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/apartment.png" className="icon-details mr-1" />Apartment Type</li><p className='col-6'>{data.rr_detail_app_type}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/house.png" className="icon-details mr-1" />BHK Type</li><p className='col-6'>{data.rr_detail_bhk_type}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/building.png" className="icon-details mr-1" />Floor</li><p className='col-6'>{data.rr_detail_floor}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/all.png" className="icon-details mr-1" />Total Floor</li><p className='col-6'>{data.rr_detail_total_floor}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/parquet.png" className="icon-details mr-1" />Floor Type</li><p className='col-6'>{data.rr_detail_floor_type}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/kitchen-set.png" className="icon-details mr-1" />Kitchen Type</li><p className='col-6'>{data.rr_detail_kitchen_type}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/cake.png" className="icon-details mr-1" />Property Age</li><p className='col-6'>{data.rr_detail_prop_age}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/compass.png" className="icon-details mr-1" />Facing</li><p className='col-6'>{data.rr_detail_facing}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/scale-screen.png" className="icon-details mr-1" />Built-up Area</li><p className='col-6'>{data.rr_detail_builtup_area} sqft.</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/armchair.png" className="icon-details mr-1" />Furnishing</li><p className='col-6'>{data.rr_detail_furnishing}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/parking.png" className="icon-details mr-1" />Parking</li><p className='col-6'>{data.rr_detail_parking}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/bath.png" className="icon-details mr-1" />Bathrooms</li><p className='col-6'>{data.rr_detail_bathroom}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/balcony.png" className="icon-details mr-1" />Balcony</li><p className='col-6'>{data.rr_detail_balcony}</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/drop.png" className="icon-details mr-1" />Water Supply</li><p className='col-6'>{data.rr_detail_water_supply}</p>
              </ul>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Ameneties</h4>
            </div>
            <div className="block-body">
              <ul className="avl-features third">
                <li className={data.rr_amenities_ac?"active":""}>Air Conditioning</li>
                <li className={data.rr_amenities_lift?"active":""}>Lift</li>
                <li className={data.rr_amenities_intercom?"active":""}>Inter Communication</li>
                <li className={data.rr_amenities_children_play_area?"active":""}>Children Play Area</li>
                <li className={data.rr_amenities_swimming_pool?"active":""}>Swimming Pool</li>
                <li className={data.rr_amenities_servant_room?"active":""}>Room Servent</li>
                <li className={data.rr_amenities_gas_pipeline?"active":""}>Gas Pipeline</li>
                <li className={data.rr_amenities_rainwater_harvesting?"active":""}>Rainwater Harvesting</li>
                <li className={data.rr_amenities_gym?"active":""}>Gym</li>
                <li className={data.rr_amenities_housekeepiing?"active":""}>Housekeeping</li>
                <li className={data.rr_amenities_visitor_parking?"active":""}>Visiter Parking</li>
                <li className={data.rr_amenities_internet?"active":""}>Internet</li>
                <li className={data.rr_amenities_club_house?"active":""}>Club House</li>
                <li className={data.rr_amenities_fire_safety?"active":""}>Fire Safety</li>
                <li className={data.rr_amenities_shopping_center?"active":""}>Shopping Center</li>
                <li className={data.rr_amenities_park?"active":""}>Park</li>
                <li className={data.rr_amenities_sewage_treatment?"active":""}>Sewage Treatment</li>
                <li className={data.rr_amenities_power_backup?"active":""}>Power Backup</li>
                <li className={data.rr_amenities_gated_security?"active":""}>Gated Security</li>
              </ul>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Location</h4>
            </div>
            <div className="block-body">
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15090.183774083564!2d72.82822336977539!3d18.99565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef0d17ace6f%3A0xba0d758b25d8b289!2sICICI%20Bank%20Curry%20Road%2C%20Mumbai-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1624183548415!5m2!1sen!2sin" className="full-width" height={450} style={{border: 0}} allowFullScreen loading="lazy" />
              </div>
            </div>
          </div>
          
        </div>
        {/* property Sidebar */}
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="property-sidebar">
            <div className="sider_blocks_wrap">
              <div className="side-booking-header">
                <div className="sb-header-left"><h3> Rent Details </h3></div>
                <div className="price_offer">#</div>
              </div>
              <div className="side-booking-body">
                <div className="row">											
                  <div className="col-lg12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="guests">Price &amp; Tax</label>
                    <div className="_adv_features">
                      <ul>
                        <li>Rent<span>Rs.{data.rr_rental_detail_rent}</span></li>
                        <li>Expected Deposit<span>Rs.{data.rr_rental_detail_exp_deposit}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="side-booking-foot">
                    <span className="sb-header-left">Total Payment</span>
                    <h3 className="price theme-cl">Rs.{parseInt(data.rr_rental_detail_rent)+parseInt(data.rr_rental_detail_exp_deposit)}</h3>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="stbooking-footer mt-1">
                      <div className="form-group mb-0 pb-0">
                      {/* {localStorage.getItem('token') ?  data.lead && data.lead.includes(localStorage.getItem('userId')) || contacted ? <button  className="btn book_btn theme-bg" style={{ backgroundColor: 'lightgrey'  }}  disabled={true}>Get Owner Details</button> : <button  className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60'  }}  onClick={()=>{leadcreate(data._id,1) ; setcontacted(true)}}>Get Owner Details</button> : <button onClick={handleAlert} className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60',outline:"2px solid #fff"  }}>Get Owner Details</button>} */}
                        {/* <button className="btn book_btn theme-bg">Get Owner Detail</button> */}
                        {localStorage.getItem("token") ? (
                    (data.lead &&
                      data.lead.includes(localStorage.getItem("userId"))) ||
                    contacted ? (
                      <button
                        className="prt-view"
                        style={{
                          backgroundColor: "#27ae60",
                          cursor: "pointer",
                          border:"none",
                        }}
                        //  disabled={true}
                        onClick={() => {
                          setShowUser(true);
                          //  console.log("lead already created")
                        }}
                      >
                        Get Owner Details
                      </button>
                    ) : (
                      <button
                        className="prt-view"
                        style={{
                          backgroundColor: "#27ae60",
                          cursor: "pointer",
                          border:"none",
                        }}
                        onClick={() => {
                          leadcreate(data._id, 1);
                          setcontacted(true);
                          setShowUser(true);
                          // console.log("recent lead create");
                        }}
                      >
                        Get Owner Details
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => setShow(true)}
                      // onClick={()=>console.log("User not login")}
                      className="prt-view"
                      style={{
                        backgroundColor: "#27ae60",
                        border:"none",
                        cursor: "pointer",
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
            </div>
            {/* Agent Detail */}
            <div className="sider_blocks_wrap">
              <div className="side-booking-body">
                <div className="agent-_blocks_title">
                  <div className="agent-_blocks_thumb"><img src="assets/img/user-6.jpg" alt /></div>
                  <div className="agent-_blocks_caption">
                    <h4><a href="#">{data.name}</a></h4>
                    <span className="approved-agent"><i className="ti-check" />approved</span>
                  </div>
                  <div className="clearfix" />
                </div>
               {localStorage.getItem("token") ? <Link to='/user-detail' className="agent-btn-contact" ><i className="ti-comment-alt" />View Owner Detail</Link> : <button className='agent-btn-contact w-100 ' style={{cursor:"pointer"}} onClick={()=>setShow(true)}> View Owner Detail</button>}
                {/* <span id="number" data-last={+1234567896}>
                  <span><i className="ti-headphone-alt" /><a className="see">+355(44)35...Show</a></span>s
                </span> */}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  {model && <div>
        <div class="mfp-bg mfp-fade mfp-ready"></div>
        <div className="mfp-wrap mfp-gallery mfp-auto-cursor mfp-fade mfp-ready" tabIndex={-1} style={{ overflow: 'hidden auto' }}>
          <div className="mfp-container mfp-s-ready mfp-image-holder">
            <div className="mfp-content">
              <div className="mfp-figure">
                <div className="mfp-close" />
                <Slider {...setting}>
                {data.images && data.images.map((val)=>{
                  return   <figure>
                  <img className="mfp-img" alt src={val}  style={{ maxHeight: 635 }} /><figcaption>
                    <div className="mfp-bottom-bar">
                      <div className="mfp-title" />
                      <div className="mfp-counter">9 of 12</div>
                    </div>
                  </figcaption>
                </figure>
                })}
               
                </Slider>
              
              </div>
            </div>
            <div className="mfp-preloader">Loading...</div>
            </div>
          <button title="Close (Esc)" type="button" className="mfp-close" onClick={()=>{setmodel(false)}}>×</button>
        </div>

      </div> }

</div>

  )
}

export default RrentDetail