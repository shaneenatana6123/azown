import React, { useContext, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { leadContext } from "../../../context/LeadContext";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import image from '../../../images/image-main.jpg';
const RrentProp = (props) => {
  const { property } = props;

  const context = useContext(propertyContext);
  const leadcontext = useContext(leadContext)
  const {leadcreate}  = leadcontext

  const { lead, handlereq } = context;

  const [contacted, setcontacted] = useState(false);
  return (
    <div class="col-9">
      <div class="p-3">
        <div class="card mb-3" style={{ width: 900 }}>
          <h5 className="">{property.rr_detail_description}</h5>
          <p class="fs-6">{property.rr_detail_app_type}</p>
          <div class="row m-2 text-center">
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
          </div>

          <div class="row g-0">
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

                <button class="btn btn-dark m-2">Add</button>
                {localStorage.getItem("userType") === "broker" ? (
                  property.handlerIds &&
                  property.handlerIds.includes(
                    localStorage.getItem("userId")
                  ) ? (
                    <button className="btn btn-secondry m-2" disabled>
                      {" "}
                      Requested
                    </button>
                  ) : (
                    <button
                      className={
                        contacted
                          ? "btn btn-secondary disabled"
                          : "btn btn-dark"
                      }
                      onClick={() => {
                        handlereq(property._id,property.userid,property.rr_detail_description);
                        setcontacted(true);
                      }}
                    >
                      {" "}
                      {contacted ? "Requested" : "Send Handler"}{" "}
                    </button>
                  )
                ) : property.lead &&
                  property.lead.includes(localStorage.getItem("userId")) ? (
                  <button className="btn btn-secondary " disabled>
                    You Contated
                  </button>
                ) : (
                  <button
                    className={
                      contacted ? "btn btn-secondary disabled" : "btn btn-dark"
                    }
                    onClick={() => {
                      leadcreate(property._id);
                      setcontacted(true);
                    }}
                  >
                    {contacted ? "You Contacted" : "Contact to Owner"}
                  </button>
                )}
                <Link className="btn btn-dark" to={`/rrprop/${property._id}`}>
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RrentProp;
