import React, { useContext, useState,useEffect } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import Rsale from './Rsale'
import FilterRsale from './FilterRsale'
import propertyContext from '../../../context/PropertyContext'




const ListRsale = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [RsaleData, setData] = useState([]);
  const [rr,setrr] = useState([])

  useEffect(  () => {
    if (localStorage.getItem("token")) {
      async function listrrprop(){
        const responce =await  fetch(`${host}/api/property/getrrs`, {
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
      <div className="container" style={{marginTop:"6%"}}>
      {/* <h1 class="text-center">Residential Rent Property</h1> */}
     
     
      <div className="row">
        <div className="col-lg-4 col-xs-4" style={{color:"black" }}>

       
          <div className="headding_f">
            <h3>Filter</h3>
          </div>
          
          <div className="sidebar">
            
            <div className="filter_div">
              
              <FilterRsale onFilter={handleFilter}/>
            </div>
          </div>
      

        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 col-sm-8">
          {RsaleData.map((property) => {
          
          return (   
          <Rsale property={property} key={property._id} />
          
          );
        })}
        </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ListRsale