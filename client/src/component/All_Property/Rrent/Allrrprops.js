import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { useNavigate ,Link} from "react-router-dom";

import RrentProp from "./RrentProp";
import FilterRrent from "./FilterRrent";
const Allrrprops = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  
  
  const { rrprop, fetchAllrrprop} = context;

  const [RrentData, setData] = useState(rrprop);
  
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
              
              <FilterRrent/>
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