import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import Slider from 'react-slick';
import Alert from '../../Alert';
import { leadContext } from '../../../context/LeadContext';

const PlotDetail = () => {
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
  const context = useContext(propertyContext);
  const {  plotDetail,plotdata} = context;
  const data = plotdata
  const [contacted, setcontacted] = useState(false)
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  const { id } = useParams();
  useEffect(() => {
    plotDetail(id);
  }, []);
  return (
   <div id="main-wrapper">
  
  <Navbar/>
  {showAlert && <Alert msg="Please Login Before!!" />}

  
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
                  <li><span className="bed">{data.ps_rules_allowed_floors} Floor Allowed</span></li>
                  {/* <li><span className="bath">2 Bath</span></li> */}
                  {/* <li><span className="gar">1 Garage</span></li> */}
                  {/* <li><span className="sqft">800 sqft</span></li> */}
                </ul>
                <h2>{`${data.ps_info_ownership} for Sale in ${data.ps_location_city && data.ps_location_city.split(",")[0]}`}</h2>
                <span><i className="lni-map-marker" /> {data.ps_location_city}</span>
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
              <p> {`${data.ps_detail_plot_length} X ${data.ps_detail_plot_width} SQFT ${data.ps_detail_has_boundary && "With Boundary Wall"} Available In front of ${data.ps_detail_width_of_facing_road}FT Road in ${data.ps_location_state}`}</p>
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Property Features</h4>
            </div>								
            <div className="block-body">
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/resize.png" className="icon-details mr-1" />Plot Height (ft.)</li><p className='col-6'>{data.ps_detail_plot_length} sqft</p><hr />
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/width.png" className="icon-details mr-1" />Plot Width (ft.)</li><p className='col-6'>{data.ps_detail_plot_width} sqft</p><hr />
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/road.png" className="icon-details mr-1" />Width of Facing Road</li><p className='col-6'>{data.ps_detail_width_of_facing_road} ft.</p><hr />
                <a href="https://www.flaticon.com/free-icons/width" title="width icons" />
              </ul>
            </div>
          </div>
          {/* <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Rules</h4>
            </div>
            <div className="block-body">
              <ul className="avl-features third">
                <li className="active">Allowed Floors</li>
              </ul>
            </div>
          </div> */}
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Ameneties</h4>
            </div>
            <div className="block-body">
              <ul className="avl-features third">
                <li className={data.ps_amenities_water ?"active":""}>Water</li>
                <li className={data.ps_amenities_sewage_connection ?"active":""}>Sewage Connection</li>
                <li className={data.ps_amenities_electricity_connection ?"active":""}>Electricity Connection</li>
                <li className={data.ps_amenities_gated_security ?"active":""}>gated Security</li>
                <li className={data.ps_detail_has_boundary ?"active":""}>Boundary</li>
                <li className={data.ps_detail_inside_gated_project ?"active":""}>Inside gated Project</li>
              </ul>
            </div>
          </div>
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Plot Sale Info</h4>
            </div>
            <div className="block-body">
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/ownership.png" className="icon-details mr-1 "/>{`${data.ps_info_ownership? "Yes":"Not" } OwnerShip `}</li>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/standard.png" className="icon-details mr-1" />{`Khata Certificate is ${data.ps_info_khata_certificate_is_available? "":"Not"}  Available`}</li>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/document.png" className="icon-details mr-1" />{`Conversion Certificate is ${data.ps_info_conversion_certificate_is_available?"":"Not"} Available`}</li>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/certificate.png" className="icon-details mr-1" />{`Sale Deed Certificate is ${data.ps_info_sale_deed_certificate_is_available?"":"Not"} Available`}</li>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/license.png" className="icon-details mr-1" />{`Encumbrance Certificate is ${data.ps_info_encumbrance_certificate_is_available?"":"Not"} Available `}</li>
                <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/approve.png" className="icon-details mr-1" />{`  Rera ${data.ps_info_is_rera_approved?"":"Not"} Approved`}</li>
              </ul>
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
                        {/* <li>Rent<span>$310</span></li> */}
                        <li>Sale Price<span>Rs.{data.ps_sale_detail_price}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="side-booking-foot">
                    <span className="sb-header-left">Total Payment</span>
                    <h3 className="price theme-cl">Rs.{data.ps_sale_detail_price}</h3>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="stbooking-footer mt-1">
                      <div className="form-group mb-0 pb-0">
                      {localStorage.getItem('token') ?  data.lead && data.lead.includes(localStorage.getItem('userId')) || contacted ? <button  className="btn book_btn theme-bg" style={{ backgroundColor: 'lightgrey'  }}  disabled={true}>Get Owner Details</button> : <button  className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60'  }}  onClick={()=>{leadcreate(data._id,7) ; setcontacted(true)}}>Get Owner Details</button> : <button onClick={handleAlert} className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60',outline:"2px solid #fff"  }}>Get Owner Details</button>}
                        {/* <button className="btn book_btn theme-bg">Get Owner Detail</button> */}
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
                {/* <span id="number" data-last={+1234567896}>
                  <span><i className="ti-headphone-alt" /><a className="see">+355(44)35...Show</a></span>
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

export default PlotDetail