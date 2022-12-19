import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { useNavigate ,Link} from "react-router-dom";

import RrentProp from "./RrentProp";
const Allrrprops = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  
  
  const { rrprop, fetchAllrrprop} = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllrrprop();
    } else {
      history("/login");
    }
  }, []);
  return (
    <div className="container-fluid">
      <h1 class="text-center">Residential Rent Property</h1>
      <hr />
     
      <div className="row">
        <div className="col-lg-4 col-xs-4">

       
          <div className="headding_f">
            <h3>Filter</h3>
          </div>
          
          <div className="sidebar">
            
            <div className="filter_div">
              
              <form>
                <div class="container m-3">
                  <h5>Property Type</h5>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="propertytype"
                    value="Apartment"
                    id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <p>Apartment</p>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="propertytype"
                    value="Independent House/Villa"
                    id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      <p>Independent House/Villa</p>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="propertytype"
                    value="Gate Community Villa"
                    id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      <p>Gate Community Villa</p>
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
                     <p>1 BHK</p> 
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
                      <p>2 BHK</p>
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
                      <p>3 BHK</p>
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
                      <p>4 BHK</p>
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
                    <p>2 Wheeler</p> 
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
                     <p>4 Wheeler</p> 
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
                     <p>Full</p> 
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
                     <p>Semi</p> 
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
                     <p>None</p> 
                    </label>
                  </div>
                </div>
                <button class="btn">Filter</button>
              </form>
            </div>
          </div>
      

        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 col-sm-8">
          {rrprop.map((property) => {
          
          return (

          
          
          
          <RrentProp property={property} key={property._id}/>
          
          
          
          );
        })}
        </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Allrrprops;