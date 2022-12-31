import React, { useContext, useEffect, useState } from "react";
import singleimage from "../../../images/singleprop.jpg";
import propertyContext from "../../../context/PropertyContext";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { leadContext } from "../../../context/LeadContext";
import Navbar from "../../Navbar/Navbar";


const DetailRrent = () => {
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
    <>
      <div className="container-fluid m-3">
      <div className="row">
       <div className="col-1 border border-dark text-center">
       new
        
       </div>
       <div className="col-4">
p

       </div>
      </div>

      </div>
    </>
   
  );
};

export default DetailRrent;
