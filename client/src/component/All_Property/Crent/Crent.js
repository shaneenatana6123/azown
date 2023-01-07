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

const Crent = (props) => {
    const { property } = props;

  const context = useContext(propertyContext);
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext

  const { lead, handlereq } = context;

  const [contacted, setcontacted] = useState(false);
  return (
    <div class="p-2 ">
      <div class=" card mb-3" style={{ boxShadow: "1px 4px 6px 2px  gray ", background: "f8f8f8", padding: "25px" }}>
        <div className="row" style={{ borderBottom: "2px solid lightgray" }}>
          <div class="col-sm-9" >
            <h5 className="fs-8 mb-0"> <b>{property.rr_detail_description}</b> <i class="fa-solid fs-4 fa-square-arrow-up-right"></i> </h5>
            <p><span> {property.rr_location_city} , {property.rr_location_state} </span><img style={{ width: "20px" }} src={locationImg} alt="location" /></p>
          </div>
          <div className="col-sm-3">
            <Link className="text-decoration-none" style={{ padding: "12px", backgroud: "#fff", border: "1px solid #e4e4e4", borderRadius: "20px 1px 1px 20px ", color: "black", float: "right" }}>   <img src={light} style={{ width: "25px" }} alt="light" />3 </Link>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center", padding: "4px", borderBottom: "2px solid lightgray" }}>
          <div className="col-md-4" style={{ borderRight: "2px solid lightgray" }}>
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>₹1500</span>
              </div>
              <p className="mb-0" ><small>Rent (Negotable)</small></p>
            </div>
          </div>
          <div className="col-md-4" style={{ borderRight: "2px solid lightgray" }}>
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>₹1500</span>
              </div>
              <p className="mb-0" ><small>Deposite (negotable)</small></p>
            </div>
          </div>
          <div className="col-md-4" >
            <div  >
              <div>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>₹1500</span>
              </div>
              <p className="mb-0" ><small>Build Up Area</small></p>
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
          <div class="col-md-8 p-2">
            <div className="row  border border-3 ms-1">
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                    {/* <i class="fa-solid fa-chair fs-3 p-2"></i> */}
                    <i class="fa-solid fa-building fs-3 p-2"></i>
                                        
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>Semi Furnished</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Property Type</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-square-parking fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>Semi Furnished</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Parking</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-couch fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>Semi Furnished</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Furnishing</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2" style={{ borderRight: "2px solid lightgrey", borderBottom: "2px solid lightgrey" }}>
                <div className="row">
                  <div className="col-md-3">
                  <i class="fa-solid fa-calendar-days fs-3 p-2"></i>
                  </div>
                  <div className="col-md-9 ">
                    <p className="m-0 " style={{ fontSize: "12px" }}>Semi Furnished</p>
                    <p className="m-0 " style={{ fontSize: "14px" }}><b>Available From</b></p>
                  </div>
                </div>
              </div>

            </div>
            <div className="row m-2 mb-0">

              <Link className="btn btn-dark border-radius-none col-md-6 m-1  ms-3" style={{ borderRadius: "0px" }} to={`/rrprop/${property._id}`}>
                Get Owner Details
              </Link>
              <Link className=" col-md-2 m-1 " style={{ border: "1px solid black", textAlign: "center", alignItems: "center" }} to={`/rrprop/${property._id}`}>
                <img src={like} style={{ width: "30px" }} alt="unlike" />
              </Link>
              <Link className="btn btn-outline-dark col-md-2 m-1 " style={{ borderRadius: "0px" }} to={`/cmr-detail/${property._id}`}>
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crent