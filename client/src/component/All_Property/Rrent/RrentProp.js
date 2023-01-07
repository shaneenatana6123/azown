import React, { useContext, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { leadContext } from "../../../context/LeadContext";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import locationImg from "../PropImg/location.png"
import light from "../PropImg/light.png"
import unlike from '../PropImg/unlike.png'
import like from '../PropImg/like.png'
import image from '../../../images/image-main.jpg';
const RrentProp = (props) => {
  const { property } = props;

  const context = useContext(propertyContext);
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext

  const { lead, handlereq } = context;

  const [contacted, setcontacted] = useState(false);
  return (
    <div class="p-2 ">
      <div class=" card mb-3" style={{ boxShadow: "1px 3px 4px 2px  gray ", background: "f8f8f8", padding: "20px" }}>
        <div className="row" style={{ borderBottom: "2px solid lightgray" }}>
          <div class="col-sm-9" >
            <h5 className="fs-8 mb-0"> <b>{property.rr_detail_description}</b> <i class="fa-solid fs-4 fa-square-arrow-up-right"></i> </h5>
            <p><span> {property.rr_location_city} , {property.rr_location_state} </span><i className="fa-solid fa-location-dot"></i></p>
          </div>
          <div className="col-sm-3">
            <Link className="text-decoration-none" style={{ padding: "12px", backgroud: "#fff", border: "1px solid #e4e4e4", borderRadius: "20px 1px 1px 20px ", color: "black", float: "right" }}>   <img src={light} style={{ width: "25px", float:"left"}} alt="light" />3 </Link>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center", padding: "4px", borderBottom: "2px solid lightgray" }}>
          <div className="col-md-4" style={{ borderRight: "2px solid lightgray" }}>
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>₹{property.rr_rental_detail_rent}</span>
              </div>
              <p className="mb-0" ><small>Rent (negotable)</small></p>
            </div>
          </div>
          <div className="col-md-4" style={{ borderRight: "2px solid lightgray" }}>
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>₹{property.rr_rental_detail_exp_deposit}</span>
              </div>
              <p className="mb-0" ><small>Deposite (negotable)</small></p>
            </div>
          </div>
          <div className="col-md-4" >
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>{property.rr_detail_builtup_area}</span>
              </div>
              <p className="mb-0" ><small>Build up Area</small></p>
            </div>
          </div>

        </div>
        <div class="row g-0 m-1">
          <div class="col-md-4">
            <Carousel>
              <Carousel.Item>
                <img style={{ height: "190px" }}
                  className="d-block w-100 "
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div class="col-md-8 p-2 ">
            <div className="row  border border-2 ms-1">
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                    {/* <i class="fa-solid fa-chair fs-3 p-2"></i> */}
                    <i class="fa-solid fa-couch fs-3 p-2"></i>
                                        
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>{property.rr_detail_furnishing}</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Furnishing</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-building fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>{property.rr_detail_bhk_type}</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Apartment Type</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-users fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>{property.rr_rental_detail_pref_tenent}</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Prefer Tenants</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-calendar-days fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>{property.rr_rental_detail_avail_from}</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Available From</b></p>
                  </div>
                </div>
              </div>

            </div>
            <div className="row mt-2">

            <div className="col-md-6 col-xs-12">
                    <Link className="btn btn-dark border-radius-none m-1 " style={{ borderRadius: "0px",width: "240px" }} to={`/rrprop/${property._id}`}>
                    Get Owner Details
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                      <Link className="btn btn-danger border-radius-none m-1"  to={`/rrprop/${property._id}`} style={{ borderRadius: "0px" }}  >
                      <i class="fa-solid fa-heart fs-4"></i>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link className="btn btn-outline-dark m-1" style={{ borderRadius: "0px", width: "90px" }} to={`/rrent-detail/${property._id}`}>
                    More
                  </Link>
                </div>



            </div>
          </div>

        </div>


        {/* <i class="fa-solid fa-building"></i>
        <i class="fa-solid fa-people-simple"></i>
        <i class="fa-solid fa-key"></i> */}



        {/* <div class="row m-2 text-center">
          <div class="col-4 rounded border border-dark ">
            <p>{property.rr_detail_builtup_area} SQRT</p>
            <p>Built Up</p>
          </div>
          <div class="col-4 rounded border border-dark">
            <p>RS. {property.rr_rental_detail_exp_deposit}</p>
            <p>Deposit</p>
          </div>
          <div class="col-4 rounded border border-dark">
            <p>{property.rr_detail_bhk_type}</p>
            <p>BHK</p>
          </div>
        </div> */}

        {/* <div class="row g-0">
          <div class="col-md-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row text-center">
                <div class="col-2 ">
                  <p>{property.rr_detail_floor_type} </p>
                </div>
                <div class="col-2 ">
                  <p> {property.rr_detail_kitchen_type} </p>
                </div>
                <div class="col-2 ">
                  <p>{property.rr_detail_furnishing} </p>
                </div>
                <div class="col-2 ">
                  <p> {property.rr_detail_parking} </p>
                </div>
                <div class="col-2 ">
                  <p>{property.rr_rental_detail_monthly_maintenance} </p>
                </div>
              </div>
              <div class="row text-center">
                <h6 className="text-center">Amineties</h6>
                <div class="col-1 ">
                  <p>{property.rr_amenities_lift === "true" ? "Lift" : ""}</p>
                </div>
                <div class="col-1 ">
                  <p>{property.rr_amenities_gym === "true" ? "GYM" : ""}</p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_gated_security === "true"
                      ? "Security"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_servant_room === "true"
                      ? "Servant Room"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_gas_pipeline === "true"
                      ? "Gas"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_internet === "true"
                      ? "Internet"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_club_house === "true"
                      ? "Club"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_swimming_pool === "true"
                      ? "Pool"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_shopping_center === "true"
                      ? "Shopping"
                      : ""}
                  </p>
                </div>
                <div class="col-1 ">
                  <p>
                    {property.rr_amenities_power_backup === "true"
                      ? "Power"
                      : ""}
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RrentProp;