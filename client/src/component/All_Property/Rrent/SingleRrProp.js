import React, { useContext, useEffect, useState } from "react";
import singleimage from "../../../images/singleprop.jpg";
import propertyContext from "../../../context/PropertyContext";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { leadContext } from "../../../context/LeadContext";


const SingleRrProp = () => {
  const context = useContext(propertyContext);
  const { singleRrProp, singlerrpropdata} = context;
  const [contacted,setcontacted] =useState(false)
  const leadcontext = useContext(leadContext)
  const {leadcreate} = leadcontext
  const { id } = useParams();
  useEffect(() => {
    singleRrProp(id);
  }, []);
  return (
    <div>
    <div>
    <Carousel>
   {singlerrpropdata.images && singlerrpropdata.images.map((url)=>{
    return  <Carousel.Item>
        <img
        style={{height:500}}
          className="d-block w-100 "
          src={url}
          alt="First slide"
        />
      </Carousel.Item>
   })}

    {singlerrpropdata.images &&  console.log(singlerrpropdata.images)}
     
      
    </Carousel>
    </div>
     
     
      <div class="container m-4 p-5">
        <div class="row">
          <div class="col-8">
            <div class="container">
              <h3>Overviews</h3>

              <p>{singlerrpropdata.rr_detail_description}</p>
            </div>
            <hr />
            <div class="container">
              <h5>Details:</h5>
              <div class="row m-3">
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Avail from</span>
                    </div>
                    <div class="col-6">
                      <span>
                        {singlerrpropdata.rr_rental_detail_avail_from}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Expected deposite</span>
                    </div>
                    <div class="col-6">
                      <span>
                        {singlerrpropdata.rr_rental_detail_exp_deposit}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>MAintance</span>
                    </div>
                    <div class="col-6">
                      <span>
                        {singlerrpropdata.rr_rental_detail_monthly_maintenance}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Shown by</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_rental_detail_shown_by}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Shown by num</span>
                    </div>
                    <div class="col-6">
                      <span>
                        {singlerrpropdata.rr_rental_detail_shown_by_number}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Apartment Type:</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_app_type}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>BHK Type</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_bhk_type}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Build Up Area</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_builtup_area}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Carpet Area</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_carpet_area}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Facing </span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_facing}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Floor</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_floor}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Floor Type</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_floor_type}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Total Floor</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_total_floor}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Parking</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_parking}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Furnish</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_furnishing}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>City</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_location_city}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>State</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_location_state}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Parking Car</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_parking}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Property Age</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_prop_age}</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6">
                      <span>Kitchhen Type</span>
                    </div>
                    <div class="col-6">
                      <span>{singlerrpropdata.rr_detail_kitchen_type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <h5>Amenities</h5>

              <div class="row m-3">
                <div class="col-4">
                  <span>AC </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_ac === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Child Play </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_children_play_area ===
                    "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Club House</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_club_house === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Fire Safety</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_fire_safety === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Gas Pipe</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_gas_pipeline === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Gate Seq</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_gated_security === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>GYM </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_gym === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>House Keeping</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_housekeepiing === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Intercom </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_intercom === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Internet </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_internet === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Lift</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_lift === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Park </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_park === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Power Backup</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_power_backup === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>RainWater harvesing </span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_rainwater_harvesting ===
                    "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Servant Room</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_servant_room === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Sewage Treatment</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_sewage_treatment ===
                    "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Shopping Center</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_shopping_center ===
                    "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Swimming Pool</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_swimming_pool === "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
                <div class="col-4">
                  <span>Visiter Parking</span>
                  <span className="float-end">
                    {" "}
                    {singlerrpropdata.rr_amenities_visitor_parking ===
                    "true" ? (
                      <i class="fa-solid fa-square-check fs-4"></i>
                    ) : (
                      <i class="fa-regular fa-square-check fs-4"></i>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <h5>Owner Details</h5>
            <div class="conatiner p-3">
              <img
                style={{ width: 100 , borderRadius:100}}
                class="float-start"
                src={singleimage}
                alt=""
              />
              <div class="container p-2 ms-3">
                <p>Abdul Ali</p>
                <span>Lorem ipsum dolor sit</span>
              </div>
            </div>
         {/* {console.log(singlerrpropdata.lead.includes(localStorage.getItem('userId')) )} */}
            {  singlerrpropdata.lead && singlerrpropdata.lead.includes(localStorage.getItem('userId')) ?<button className="btn btn-secondary " disabled>You Contated</button>:<button className=
            {contacted?"btn btn-secondary disabled":"btn btn-dark"} onClick={()=>{leadcreate(singlerrpropdata._id); setcontacted(true)} }>{contacted ? "You Contacted":"Contact to Owner"}</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRrProp;
