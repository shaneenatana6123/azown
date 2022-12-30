import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { useNavigate } from "react-router-dom";

import RrentProp from "./RrentProp";
import FilterRrent from "./FilterRrent";
import Navbar from "../../Navbar/Navbar";
const ListRrent = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  
  
  const { rrprop, fetchAllrrprop } = context;

  const [RrentData, setData] = useState(rrprop);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllrrprop();
    } else {
      history("/login");
    }
  }, []);
 
  function handlebhkType(value){
    console.log(value);
    const filterData = rrprop.filter((prop)=>{
      return (value.includes(prop.rr_detail_bhk_type))
    })
setData(filterData)
  }
  function handlePropType(value){
    console.log(value);
    const filterData = rrprop.filter((prop)=>{
      return (value.includes(prop.rr_detail_app_type))
    })
setData(filterData)
  }
  function handleParking(value){
    console.log(value);
    const filterData = rrprop.filter((prop)=>{
      return (value.includes(prop.rr_detail_parking))
    })
setData(filterData)
  }
  function handleFurnish(value){
    console.log(value);
    const filterData = rrprop.filter((prop)=>{
      return (value.includes(prop.rr_detail_furnishing))
    })
setData(filterData)
  }
  function handleRrentRange(value){
    console.log(value);
    const filterData = rrprop.filter((prop)=>{
      return (parseInt(prop.rr_rental_detail_exp_deposit)   < value)
    })
setData(filterData)

  }
  return (
    <>
      <Navbar/>
      {/* <div className="mt-5 fixed-top">
      <input className="" placeholder="Serarch..."/> 
       <button className="">Serarch</button>
      <hr />
      </div> */}
      <div className="container" style={{marginTop:"6%"}}>
      {/* <h1 class="text-center">Residential Rent Property</h1> */}
     
     
      <div className="row">
        <div className="col-lg-4 col-xs-4" style={{color:"black" }}>

       
          <div className="headding_f">
            <h3>Filter</h3>
          </div>
          
          <div className="sidebar">
            
            <div className="filter_div">
              
              <FilterRrent onPropType={handlePropType} onRrentRange={handleRrentRange}  onParking={handleParking} onFurnish={handleFurnish} onBhkType={handlebhkType}/>
            </div>
          </div>
      

        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 col-sm-8">
          {RrentData.map((property) => {
          
          return (
          
          <RrentProp property={property} key={property._id}/>
          
          
          
          );
        })}
        </div>
          </div>
        </div>
      </div>

    </div>
    </>
   
  );
};

export default ListRrent;