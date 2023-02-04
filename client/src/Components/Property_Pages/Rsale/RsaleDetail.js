import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import Alert from '../../Alert';
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'

const RsaleDetail = () => {
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
    setTimeout(() => setShowAlert(false), 3000);
  };
  const context = useContext(propertyContext);
  const { rrsDetail, rrsdata } = context;
  const data = rrsdata
  const [contacted, setcontacted] = useState(false)
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext
  const { id } = useParams();
  useEffect(() => {
    rrsDetail(id);
  }, []);
  return (
  <div id="main-wrapper">
  <Navbar/>
  {showAlert && <Alert msg='Please Login Before !!...' / > }
  <div className="clearfix" />
  <section className="gallery_parts pt-2 pb-2 d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12 pr-1" onClick={()=>{setmodel(true)}}>
              <div className="gg_single_part left"><img src={data.images && data.images.length > 0 ? data.images[0] : "assets/img/p-2.png"} className="img-fluid mx-auto" alt="img" /></div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 pl-1">
              <div className="gg_single_part-right min"><img src={data.images && data.images.length > 1? data.images[1] : "assets/img/p-2.png"} className="img-fluid mx-auto" alt='img' /></div>
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
                  <li><span className="bed">3 Beds</span></li>
                  <li><span className="bath">2 Bath</span></li>
                  <li><span className="gar">1 Garage</span></li>
                  <li><span className="sqft">800 sqft</span></li>
                </ul>
                <h2>{`${data.rrs_detail_furnishing==="Furnished"? "Furnished":""}  ${data.rrs_detail_bhk_type} ${data.rrs_detail_app_type} Available for sale in ${data.rrs_location_state}`}</h2>
                <span><i className="lni-map-marker" /> {data.rrs_location_city}</span>
              </div>
            </div>
            <div className="property_detail_section">
              <div className="prt-sect-pric">
                <ul className="_share_lists">
                  <li><a href="#"><i className="fa fa-bookmark" /></a></li>
                  <li><a href="#"><i className="fa fa-share" /></a></li>
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
              <p> {`${data.rrs_detail_property_type} for rent in ${data.rrs_location_city &&  data.rrs_location_city.split(",")[0]}`}</p>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Property Features</h4>
            </div>								
            <div className="block-body">
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/apartment.png" className="icon-details mr-1" />Apartment Type</li><p className='col-6'>Independent House Villa</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/house.png" className="icon-details mr-1" />BHK Type</li><p className='col-6'>3 BHK</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/building.png" className="icon-details mr-1" />Floor</li><p className='col-6'>2 Floor</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/all.png" className="icon-details mr-1" />Total Floor</li><p className='col-6'>20-30 FLoor</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/parquet.png" className="icon-details mr-1" />Floor Type</li><p className='col-6'>Marble</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/kitchen-set.png" className="icon-details mr-1" />Kitchen Type</li><p className='col-6'>Covered Shelves</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/cake.png" className="icon-details mr-1" />Property Age</li><p className='col-6'>0-10 yrs</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/compass.png" className="icon-details mr-1" />Facing</li><p className='col-6'>South</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/scale-screen.png" className="icon-details mr-1" />Built-up Area</li><p className='col-6'>1200 sqft.</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/armchair.png" className="icon-details mr-1" />Furnishing</li><p className='col-6'>Furnished</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/parking.png" className="icon-details mr-1" />Parking</li><p className='col-6'>Car</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/bath.png" className="icon-details mr-1" />Bathrooms</li><p className='col-6'>3 Bathrooms</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/balcony.png" className="icon-details mr-1" />balcony</li><p className='col-6'>2 Balcony</p>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/drop.png" className="icon-details mr-1" />Water Supply</li><p className='col-6'>Borewell</p>
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
                <li className={data.rrs_amenities_lift ?"active":""}>Air Conditioning</li>
                <li className={data.rrs_amenities_ac ?"active":""}>Lift</li>
                <li className={data.rrs_amenities_intercom ?"active":""}>Inter Communication</li>
                <li className={data.rrs_amenities_children_play_area ?"active":""}>Children Play Area</li>
                <li className={data.rrs_amenities_swimming_pool ?"active":""}>Swimming Pool</li>
                <li className={data.rrs_amenities_servant_room ?"active":""}>Room Servent</li>
                <li className={data.rrs_amenities_gas_pipeline ?"active":""}>Gas Pipeline</li>
                <li className={data.rrs_amenities_rainwater_harvesting ?"active":""}>Rainwater Harvesting</li>
                <li className={data.rrs_amenities_gym ?"active":""}>Gym</li>
                <li className={data.rrs_amenities_housekeepiing ?"active":""}>Housekeeping</li>
                <li className={data.rrs_amenities_visitor_parking ?"active":""}>Visiter Parking</li>
                <li className={data.rrs_amenities_internet ?"active":""}>Internet</li>
                <li className={data.rrs_amenities_club_house ?"active":""}>Club House</li>
                <li className={data.rrs_amenities_fire_safety ?"active":""}>Fire Safety</li>
                <li className={data.rrs_amenities_shopping_center ?"active":""}>Shopping Center</li>
                <li className={data.rrs_amenities_park ?"active":""}>Park</li>
                <li className={data.rrs_amenities_sewage_treatment ?"active":""}>Sewage Treatment</li>
                <li className={data.rrs_amenities_power_backup ?"active":""}>Power Backup</li>
                <li className={data.rrs_amenities_gated_security ?"active":""}>Gated Security</li>
              </ul>
            </div>
          </div>
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Property Info</h4>
            </div>
            <div className="block-body">
              <div className="block-body">
                <ul className="avl-features third">
                  <li className={data.rrs_info_prop_tax_is_paid ?"active text-success":"text-danger"}>Property Tax is Paid</li>
                  <li className={data.rrs_info_occupany_certificate_available ?"active text-success":"text-danger"}>Occupany Certificate Available</li>
                  <li className={data.rss_info_deed_certificate_is_available ?"active text-success":"text-danger"}>Deed Certificate is Available</li>
                </ul>
              </div>
            </div>
          </div>
         
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
                        <li>Maintenance<span>Rs.{data.rrs_resale_detail_maintenance}</span></li>
                        <li>Expected Deposit<span>Rs.{data.rrs_resale_detail_exp_price}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="side-booking-foot">
                    <span className="sb-header-left">Total Payment</span>
                    <h3 className="price theme-cl">Rs.{parseInt(data.rrs_resale_detail_maintenance)+parseInt(data.rrs_resale_detail_exp_price)}</h3>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="stbooking-footer mt-1">
                      <div className="form-group mb-0 pb-0">
                      {localStorage.getItem('token') ?  data.lead && data.lead.includes(localStorage.getItem('userId')) || contacted ? <button  className="btn book_btn theme-bg" style={{ backgroundColor: 'lightgrey'  }}  disabled={true}>Get Owner Details</button> : <button  className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60'  }}  onClick={()=>{leadcreate(data._id,2) ; setcontacted(true)}}>Get Owner Details</button> : <button onClick={handleAlert} className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60',outline:"2px solid #fff"  }}>Get Owner Details</button>}
                    
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
                    <h4><a href="#">Shivangi Preet</a></h4>
                    <span className="approved-agent"><i className="ti-check" />approved</span>
                  </div>
                  <div className="clearfix" />
                </div>
                <a href="#" className="agent-btn-contact" data-toggle="modal" data-target="#autho-message"><i className="ti-comment-alt" />Get Owner Detail</a>
              
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

export default RsaleDetail