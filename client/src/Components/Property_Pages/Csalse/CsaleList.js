import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Navbar from '../../Header/Navbar'
import Csale from './Csale'
import CsaleFilter from './CsaleFilter'

const CsaleList = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [CmsData, setData] = useState([]);
  const [rr,setrr] = useState([])

  useEffect(  () => {
    async function listrrprop(){
      const responce =await  fetch(`${host}/api/property/getcms`, {
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
  {/* End Navigation */}
  <div className="clearfix" />
  {/* ============================================================== */}
  {/* Top header  */}
  {/* ============================================================== */}
  {/* ============================ All Property ================================== */}
  <section className="gray pt-4">
    <div className="container">
      <div className="row m-0">
        <div className="short_wraping">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
              <ul className="shorting_grid">
                {/* <li className="list-inline-item"><a href="grid-layout-with-sidebar.html" className="active"><span className="ti-layout-grid2" />Grid</a></li> */}
                {/* <li className="list-inline-item"><a href="list-layout-with-sidebar.html"><span className="ti-view-list" />List</a></li> */}
                <li className="list-inline-item"><a href="#"><span className="ti-mapalt" />Commercial Sale</a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
              <div className="shorting_pagination">
                <div className="shorting_pagination_laft">
                  <h5>Showing 1-25 of 72 results</h5>
                </div>
                <div className="shorting_pagination_right">
                  <ul>
                    <li><a href="javascript:void(0);" className="active">1</a></li>
                    <li><a href="javascript:void(0);">2</a></li>
                    <li><a href="javascript:void(0);">3</a></li>
                    <li><a href="javascript:void(0);">4</a></li>
                    <li><a href="javascript:void(0);">5</a></li>
                    <li><a href="javascript:void(0);">6</a></li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="row">
        {/* property Sidebar */}
        <CsaleFilter/>
        <div className="col-lg-8 col-md-12 col-sm-12">
        {CmsData.map((property) => {
          
          return (   
          <Csale property={property}  />
          );
        })}
        </div>
      
      </div>
    </div>	
  </section>

</div>

  )
}

export default CsaleList