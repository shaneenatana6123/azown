import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Navbar from '../../Header/Navbar'
import Plot from './Plot'
import PlotFilter from './PlotFilter'

const PlotList = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [PlotData, setData] = useState([]);
  const [rr,setrr] = useState([])
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(  () => {
    async function listrrprop(){
      const responce =await  fetch(`${host}/api/property/getplot`, {
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
   <div id="main-wrapper">
 <Navbar/>
 {showAlert && <Alert msg="Please Login Before!!" />}
  <div className="clearfix" />
 
  <section className="gray pt-4">
    <div className="container">
      <div className="row">
        {/* property Sidebar */}
      <PlotFilter/>
      <div className="col-lg-8 col-md-12 col-sm-12">
      {PlotData.map((property) => {
          
          return (   
          <Plot property={property} key={property._id}  onAlert={handleAlert}  />
          );
        })}
      </div>
      
      </div>
    </div>	
  </section>
 
</div>

  )
}

export default PlotList