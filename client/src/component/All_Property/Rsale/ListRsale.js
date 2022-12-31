import React, { useContext, useState,useEffect } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import Rsale from './Rsale'
import FilterRsale from './FilterRsale'
import propertyContext from '../../../context/PropertyContext'




const ListRsale = () => {
    let history = useNavigate();
  const context = useContext(propertyContext);
  const { rrs, listrrs } = context;

  const [data, setdata] = useState(rrs);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      listrrs()
    } else {
      history("/login");
    }
  }, []);



    function handlebhkType(value){
        console.log(value);
        const filterData = data.filter((prop)=>{
          return (value.includes(prop.rr_detail_bhk_type))
        })
    setdata(filterData)
      }
      function handlePropType(value){
        console.log(value);
        const filterData = data.filter((prop)=>{
          return (value.includes(prop.rr_detail_app_type))
        })
    setdata(filterData)
      }
      function handleParking(value){
        console.log(value);
        const filterData = data.filter((prop)=>{
          return (value.includes(prop.rr_detail_parking))
        })
    setdata(filterData)
      }
      function handleFurnish(value){
        console.log(value);
        const filterData = data.filter((prop)=>{
          return (value.includes(prop.rr_detail_furnishing))
        })
    setdata(filterData)
      }
      function handleRrentRange(value){
        console.log(value);
        const filterData = data.filter((prop)=>{
          return (parseInt(prop.rr_rental_detail_exp_deposit)   < value)
        })
    setdata(filterData)
    
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
              
              <FilterRsale onPropType={handlePropType} onRrentRange={handleRrentRange}  onParking={handleParking} onFurnish={handleFurnish} onBhkType={handlebhkType}/>
            </div>
          </div>
      

        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 col-sm-8">
          {data.map((property) => {
          
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