import React, { useState } from 'react'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import area from './data'

import HomeNav from './Navbar/HomeNav'


const About = () => {
  const history = useNavigate()

  const [formData, setFormData] = useState({
    city: "", area: "", proptype: ""
  })

  function handleForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const propdata = [{ id: "0", proptype: ["Rent", "Resale", "Pg/Hostel", "Flates"], }, { id: "1", proptype: ["Rent", "Sale"], }, { id: "2", proptype: ["Resale"] }]
  const city = ["Mumbai", "Pune", "Banglore", "Gurgaon", "Hydrabad", "Noida", "Delhi", "Gaziabad"]

  const [data, setdata] = useState(propdata[0])

  // const handleChange = newActive => {

  //   setdata(propdata[newActive])

  //   };

  function handleClick(e) {
    e.preventDefault()
    // console.log(data.id)
    if (data.id === '0') {
      //  console.log(data.id)
      //  console.log(data.proptype)
      if (data.proptype[0] === "Rent") {
            history('/rrprop')
      }
    } else if (data.id === '1') {

    } else {

    }

  }
  return (
    <></>
  )
}

export default About