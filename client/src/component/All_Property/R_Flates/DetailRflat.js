import React, { useContext, useEffect, useState } from "react";
import singleimage from "../../../images/singleprop.jpg";
import propertyContext from "../../../context/PropertyContext";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { leadContext } from "../../../context/LeadContext";
import Navbar from "../../Navbar/Navbar";
import propimg from '../PropImg/detail.jpeg'
import nobroker from "../PropImg/no.jpeg"


const DetaiRflat = () => {
  const context = useContext(propertyContext);
  const {  rfmDetail,rfmdata} = context;
  const [contacted, setcontacted] = useState(false)
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext
  const { id } = useParams();
  useEffect(() => {
    rfmDetail(id);
  }, []);
  return (
    <>
    <Navbar/>
      <div className="container " style={{marginTop:"5%"}}>
        <div className="row">
          <div className="col-md-1 col1">
            <img className="ico_img ptr5" src={nobroker} alt="imh"/>
            <div><small>Rent</small></div>
          </div>
          <div className="col-md-4 col1">
            <h6 className="dtl">{rfmdata.rr_detail_description}</h6>
            <p className="txt1">{rfmdata.rr_location_city}, {rfmdata.rr_location_state}</p>
          </div>
          <div className="col-md-2 col1">
            <h6 className="ptr7">₹{rfmdata.rr_rental_detail_rent}/M+<span> </span></h6>
            <div><small>Negotiable</small></div>
          </div>
          <div className="col-md-2 col1">
            <h6 className="ptr7">{rfmdata.rr_detail_builtup_area}</h6>
            <div><small>Sq.Ft</small></div>
          </div>
          <div className="col-md-2 col1">
            <h6 className="ptr7">₹ {rfmdata.rr_rental_detail_exp_deposit}</h6>
            <div><small>Deposit</small></div>
          </div>
          <div className="col-md-1 col1">
            <i className="fa-solid fa-heart fs-5 pt-4"></i>
          </div>
        </div>
       
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="row g-2">
              <div className="col-lg-6 mt-2">
                <img src={propimg} style={{width:"100%",height: "472px"}} alt="dhd" />
              </div>
              <div className="col-lg-6">
                <img className="" style={{height:"232px" ,width: "100%"}} src={propimg} alt="djjd" />


                <img className="mt-2" style={{height:"232px" ,width: "100%"}} src={propimg} alt="hdhd"/>


              </div>

            </div>
          </div>
          <div className="col-md-4 cm4">
            <div className="row r1">
              <div className="col-sm-6 col-xs-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-bed fs-4 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_detail_bhk_type}</b><br /><span className="sml10"> No. of Bedroom</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-building fs-4 p-2"></i></div>
                  <div className="col-sm-9 ">
                    <div><b>{rfmdata.rr_detail_app_type}</b><br /><span className="sml10"> Apartment Type</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-users fs-4 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_rental_detail_pref_tenent}</b><br /><span className="sml10"> Prefer Tenants</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-calendar-days fs-3 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_rental_detail_avail_from}</b><br /><span className="sml10"> Available From</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-square-parking fs-3 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_deatil_parking}</b><br /><span className="sml10"> Parking</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-cake-candles fs-3 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_detail_prop_age}</b><br /><span className="sml10">Age Of Building</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-door-closed fs-3 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.rr_detail_balcony}</b><br /><span className="sml10"> No of Balcony</span></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 sm6">
                <div className="row smin6">
                  <div className="col-sm-3"><i class="fa-solid fa-calendar-days fs-3 p-2"></i></div>
                  <div className="col-sm-9">
                    <div><b>{rfmdata.date}</b><br /><span className="sml10"> Post Date</span></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
            <button className="btn btn-danger">Get Owner Details</button>

            </div> */}
            {/* <div className="row r1">
              <div className="col-sm-12 sm12">
                <div className="row tct">

                  <div className="col-sm-12 btr">
                    <button className="btn btn-danger btn1">Get Owner Details</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>

   
  <section className="sec mt-5" style={{backgroundColor:"#f2f2f2"}}>
    <div className="container ">
      <div className="row">
        <div className="col-md-8 ">
          <div className="Overview">

            <div className="row"><div className="col-sm-12"><h3 className="ove">Overview</h3></div></div><br/>

              <div className="row">
                <div className="col-sm-3">
                  <p><i className="fa-solid fa-couch"></i>&nbsp;  Furnishing Status</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_detail_furnishing}</p>

                </div>

                <div className="col-sm-3">

                  <p><i className="fa-solid fa-compass"></i> &nbsp; Facing</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_detail_facing}</p>

                </div>

              </div>


              <div className="row">
                <div className="col-sm-3">
                  <p><i className="fa-solid fa-droplet"></i> &nbsp;  &nbsp; Water Supply</p>

                </div>

                <div className="col-sm-3">

                  {/* <p>{rfmdata.rr_detail_furnishing}</p> */}
                  <p>NA</p>

                </div>

                <div className="col-sm-3">

                  <p><i className="fa-solid fa-compass"></i>  &nbsp;  Floor</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_detail_floor}/{rfmdata.rr_detail_total_floor}</p>

                </div>

              </div>

              <div className="row">
                <div className="col-sm-3">
                  <p><i className="fa-solid fa-bath"></i>  &nbsp; &nbsp;  Bathroom</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_detail_bathroom}</p>

                </div>

                <div className="col-sm-3">

                  <p><i className="fa-solid fa-salad"></i> &nbsp;   Non-Veg Allowed</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_rental_detail_is_allowed_nonveg}</p>

                </div>

              </div>

              <div className="row">
                <div className="col-sm-3">
                  <p><i className="fa-solid fa-shield-halved"></i> &nbsp;  Gated Security</p>

                </div>

                <div className="col-sm-3">

                  <p>{rfmdata.rr_amenities_gated_security}</p>

                </div>

               

              </div>


          </div>


          <div className="container parag mt-3">
            <div className="row text-center">
              <div className="col-sm-12 para_div"><h3 className="dis">Amenities</h3></div>
            </div><br/>

              <div className="row Amenitie">
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-sharp fa-solid fa-air-conditioner"></i>
                  <p>Air conditioner</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-air-conditioner fs-5 "></i>
                  <p>House keeping</p>
                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-fire-flame-simple fs-5"></i>
                  <p>Gas pipeline</p>
                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-plant-wilt fs-5"></i>
                  <p>Sewage treatment plant</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Shopping center</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Lift</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Intercom</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Children Play Area</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Servant Room</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Rain Water Harvesting</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p></p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>House Keeping</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Visiter Parking</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Internet</p>

                </div><div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Club House</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Swimming Pool</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Fire safety</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Park</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Sewage Treatment</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>Power Backup</p>

                </div>
                <div className="col-sm-2 Amenities_div">
                  <i className="fa-solid fa-shop fs-5"></i>
                  <p>GYM</p>

                </div>

              </div>
          </div>


          <div className="container paragraph mt-3">
            <div className="row ">
              <div className="col-sm-12 para_div"><h3 className="dis">Description</h3></div>
            </div><br/>

              <div className="row">
                <div className="col-sm-12 para_div">
                  <p>Are you looking for a 3 BHK for rent in Baner? . This spacious property is fully furnished and convenient for families. This East facing home is on the 10th floor & is over 1750 sqft. You get ample & dedicated car parking facility with this home.</p>

                  <p>When you need club house, children playing zone, well equipped gym, park & swimming pool for relaxation, all you have to do is step out of the door as the apartment complex has what you are looking for. If you are looking for a home with generator back up, intercom facility, security, elevator & internet, this home is just right for you. As this home comes with air conditioner, fire safety, gas pipeline, rainwater harvesting, parking for visitors, house keeping & waste treatment plant & more such amenities, living here would make life more pleasant.</p>

                  <hr/>
                    <div className="row">
                      <div className="col-sm-12 show_more">
                        <p>Show More <i className="fa-solid fa-chevron-down"></i></p>
                      </div>
                    </div>

                </div>
              </div>
          </div>
        </div>
        <div className="col-xl-4">
          
          <div className="card mb-4 mb-xl-0 border-none">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">


              <div className="row">

                <div className="col-sm-6">

                 
                  <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                </div>
                <div className="col-sm-6">
                 
                  <div className="small font-italic text-muted mb-2 mt-4"><h4>Name</h4></div>
                 
                  <div className="small font-italic text-muted mb-4"><h6>Ddescription</h6></div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     </>
   
  );
};

export default DetaiRflat;





