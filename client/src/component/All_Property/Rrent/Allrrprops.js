import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { useNavigate ,Link} from "react-router-dom";

import RrentProp from "./RrentProp";
const Allrrprops = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  
  const { rrprop, fetchAllrrprop, lead, handlereq,singleRrProp, userdeatils } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllrrprop();
    } else {
      history("/login");
    }
  }, []);
  return (
    <div>
      <h1 class="text-center">Residential Rent Property</h1>
      <hr />
      <div className="container">
        <div className="row">
          {/* <div class="col-3">
            <h2>Filter</h2>
            <form>
              <div class="container m-3">
                <h5>Property Type</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Apartment
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Independent House/Villa
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Gate Community Villa
                  </label>
                </div>
              </div>
              <div class="container m-3">
                <h5>BHK Type</h5>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    1 BHK
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    2 BHK
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3">
                    3 BHK
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3">
                    4 BHK
                  </label>
                </div>
              </div>
              <div class="container m-3">
                <h5>Parking</h5>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    2 Wheeler
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    4 Wheeler
                  </label>
                </div>
              </div>
              <div class="container m-3">
                <h5>Furnishing</h5>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Full
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Semi
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3">
                    None
                  </label>
                </div>
              </div>
              <button class="btn">Filter</button>
            </form>
          </div> */}
          {rrprop.map((property) => {
            
            return (
              <RrentProp property={property} key={property._id}/>
             
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Allrrprops;
