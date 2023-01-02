import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../../../context/PropertyContext";
import { useNavigate } from "react-router-dom";

import RrentProp from "./RrentProp";
import FilterRrent from "./FilterRrent";
import Navbar from "../../Navbar/Navbar";

const ListRrent = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  
  
  const { rrprop, fetchAllrrprop,host } = context;

  const [RrentData, setData] = useState([]);
  const [rr,setrr] = useState([])

  useEffect(  () => {
    if (localStorage.getItem("token")) {
      // fetchAllrrprop();
      // console.log(rrprop)
      // setData(rrprop)
      async function listrrprop(){
        const responce =await  fetch(`${host}/api/property/getrrprop`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const resdata =await  responce.json();
        setData(resdata);
        setrr(resdata)
      } 
      listrrprop()
    } else {
      history("/login");
    }
  }, []);


  function handlebhkType(value){
    // console.log(rr)
    // console.log(value);
    // // console.log(RrentData)
    // if (value.length===0){
    //   setData(rr)  
    // }else{
    //   const filterData = rr.filter((prop)=>{
    //     return (value.includes(prop.rr_detail_bhk_type))
    //   })
    //   console.log(filterData)
    //   setData(filterData)
    // }  
  }
  function handlePropType(value){
    // console.log(value)
    // if (value===0){
    //   setData(rr)
    // }else{
    //   const filterData = rr.filter((prop)=>{
    //     return (value.includes(prop.rr_detail_app_type))
    //   })
    //  setData(filterData)
    // }

    }
    
    
  function handleParking(value){
//     console.log(value);
//     setData(rr)
//     const filterData = RrentData.filter((prop)=>{
//       return (!value.includes(prop.rr_detail_parking))
//     })
// setData(filterData)
  }
  function handleFurnish(value){
//     console.log(value);
//     setData(rr)
//     const filterData = RrentData.filter((prop)=>{
//       return (!value.includes(prop.rr_detail_furnishing))
//     })
// setData(filterData)
  }
  function handleRrentRange(value){
//     console.log(value);
//     setData(rr)
//     const filterData = RrentData.filter((prop)=>{
//       return (parseInt(prop.rr_rental_detail_exp_deposit)   < value)
//     })
// setData(filterData)

  }
  function handleFilter(value){
    console.log(value)
    if (value.prop.length===0 && value.bhk.length===0 && value.park.length===0 && value.furnish.length===0 &&value.range===0){
      setData(rr)
    }else{
     

      console.log(value.range)

      const filterData = rr.filter((property)=>{
        
              return (value.bhk.includes(property.rr_detail_bhk_type) || value.prop.includes(property.rr_detail_parking) || value.furnish.includes(property.rr_detail_furnishing) || value.park.includes(property.rr_detail_parking) || (parseInt(property.rr_rental_detail_exp_deposit)  < value.range) )
            })
        setData(filterData)

      console.log(filterData)
    }
  }
  return (
    <>
      <Navbar/>
      {/* <div className="mt-5 fixed-top">
      <input className="" placeholder="Serarch..."/> 
       <button className="">Serarch</button>
      <hr />
      </div> */}
      <div className="container-fluid" style={{marginTop:"6%"}}>
      {/* <h1 class="text-center">Residential Rent Property</h1> */}
     
     
      <div className="row">
        <div className="col-lg-4 col-xs-4" style={{color:"black" }}>

       
          <div className="headding_f">
            <h3>Filter</h3>
          </div>
          
          <div className="sidebar">
            
            <div className="filter_div">
              
              <FilterRrent onPropType={handlePropType} onRrentRange={handleRrentRange}  onParking={handleParking} onFurnish={handleFurnish} onBhkType={handlebhkType} onFilter={handleFilter}/>
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