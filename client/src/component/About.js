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
    <div>
      <header class="page-header header-nav" >
      <HomeNav/>
        {/* <nav>
      <button aria-label="Open Mobile Menu" class="open-mobile-menu fa-lg">
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <a href="">
        <img class="logo horizontal-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo.svg" alt="forecastr logo" />
        <img class="logo vertical-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/vertical-logo.svg" alt="forecastr logo"/>
      </a>
      <div class="top-menu-wrapper">
        <div class="panel panel1"></div>
        <div class="panel panel2"></div>
        <ul class="top-menu">
          <li class="mob-block">
            <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo-mobile.svg" alt="forecastr horizontal mobile logo" />
            <button aria-label="Close Mobile Menu" class="close-mobile-menu fa-lg">
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li class="has-dropdown">
            <a href="">
              Why forecastr 
              <i class="fas fa-chevron-down"></i>   
            </a>
            <ul class="sub-menu">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
              <li>
                <a href="">Success Stories</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              Contact
             
            </a>
           
          </li>
          <li class="">
            <a href="">
              
             <i class="fa-solid fa-user"></i>  
            </a>
           
          </li>
         
        </ul>
        <button class="search">
          <i class="fa-solid fa-plus"></i> Submit Property 
        </button>
        
      </div>
    </nav> */}
        <section class="header-section">
          <div class="center-div">
            <h1>Find Your Dream Home</h1>
            <p>From as low as $10 per day with limited time offer discounts</p>


            <div id='section-control'>
              <span id='display-tab-control'>
                <button class='tab-control' onClick={() => { setdata(propdata[0]) }} >Residential</button>
                <button class='tab-control' onClick={() => { setdata(propdata[1]) }}>Commertial</button>
                <button class='tab-control' onClick={() => { setdata(propdata[2]) }} >Plot/Land</button>

              </span>
            </div>

            <div id='section-tabs'>

              <div className='tab' >
                {/* <h4>Rent</h4> */}
                <form onSubmit={handleClick}>
                  <div class="row">
                    <div class="col-md-2 col-xs-12">
                      <select class="form-control" name='city' onChange={handleForm} id="fields">
                        <option selected>Pune</option>
                        {city.map((city => { return <option value={city}>{city}</option> }))}
                      </select>
                    </div>
                    <div class="col-md-3 col-xs-12">
                      {/* <input type="text" class="form-control" onChange={handleForm}  name="area" placeholder="Enter Area...." /> */}
                      <select class="form-control" name='area' onChange={handleForm} id="fields">
                        {/* <option selected>Pune</option> */}
                        {area.map((area => { return <option value={area}>{area}</option> }))}
                      </select>
                      {/* <div>
                        {area.map((item)=>{return <option value={item}>item</option>})}
                      </div> */}

                    </div>
                    <div class="col-md-2">
                      <select class="form-control" name='proptype' onChange={handleForm} id="fields">
                        <option selected>Property Type</option>
                        {data.proptype.map(item => { return <option value={item}>{item}</option> })}
                      </select>
                    </div>
                    {/* <div class="col-md-2 col-xs-12">
                      <input type="text" class="form-control" id="fields" placeholder="Location " />
                    </div> */}

                    <div class="col-md-3 col-xs-12">
                      <button type='submit' class="form-control btn-theme" >Search</button>
                    </div>
                  </div>
                </form>

              </div>

              {/* <div class='tab'>
                <h4>Sale</h4>
                <from>
                  <div class="row">
                    <div class="col-md-3 col-xs-12">
                      <input type="text" class="form-control" id="fields" placeholder="Enter Keyword" value="" />
                    </div>
                    <div class="col-md-2">
                      <select class="form-control" id="fields">
                        <option selected>Property Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-2 col-xs-12">
                      <input type="text" class="form-control" id="fields" placeholder="Location " value="" />
                    </div>
                    <div class="col-md-2 col-xs-12">
                      <select class="form-control" id="fields">
                        <option selected>Rooms</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-3 col-xs-12">
                      <button class="form-control btn-theme" >Search</button>
                    </div>

                  </div>

                </from>

              </div> */}

              {/* <div class='tab'>
                <h4>Buy</h4>
                <from>
                  <div class="row">
                    <div class="col-md-3 col-xs-12">
                      <input type="text" class="form-control" id="fields" placeholder="Enter Keyword" value="" />
                    </div>
                    <div class="col-md-2">
                      <select class="form-control" id="fields">
                        <option selected>Property Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-2 col-xs-12">
                      <input type="text" class="form-control" id="fields" placeholder="Location " value="" />
                    </div>
                    <div class="col-md-2 col-xs-12">
                      <select class="form-control" id="fields">
                        <option selected>Rooms</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-3 col-xs-12">
                      <button class="form-control btn-theme" >Search</button>
                    </div>

                  </div>

                </from>

              </div> */}

            </div>
          </div>
        </section>

      </header>



    </div>
  )
}

export default About