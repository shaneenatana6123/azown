import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Navbar from '../../Header/Navbar'
import Crent from './Crent'
import CrentFilter from './CrentFilter'

const CrentList = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [CmrData, setData] = useState([]);
  const [rr, setrr] = useState([])

  useEffect(() => {
    async function listrrprop() {
      const responce = await fetch(`${host}/api/property/getcmr`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const resdata = await responce.json();
      setData(resdata);
      setrr(resdata)
    }
    listrrprop()
  }, []);

  function handleFilter(value) {
    console.log(value)
    if (value.prop.length === 0 && value.bhk.length === 0 && value.park.length === 0 && value.furnish.length === 0 && value.range === 0) {
      setData(rr)
    } else {


      console.log(value.range)

      const filterData = rr.filter((property) => {

        return (value.bhk.includes(property.rr_detail_bhk_type) || value.prop.includes(property.rr_detail_parking) || value.furnish.includes(property.rr_detail_furnishing) || value.park.includes(property.rr_detail_parking) || (parseInt(property.rr_rental_detail_exp_deposit) < value.range))
      })
      setData(filterData)

      console.log(filterData)
    }
  }
  return (
    <div id="main-wrapper">
      <Navbar />
      <div className="clearfix" />

      <section className="gray pt-4">
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="row">

            <CrentFilter />
            <div className="col-lg-8 col-md-12 col-sm-12">
              {CmrData.map((property) => {

                return (
                  <Crent property={property} />
                );
              })}
            </div>

          </div>
        </div>
      </section>


    </div>

  )
}

export default CrentList