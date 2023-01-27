import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar'
import LocationPicker from './LocationPicker';
import axios from 'axios';


const ResidentialFlatmates = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()
  const [data, setdata] = useState({
    rfm_detail_description: "",
    rfm_detail_app_type: "",
    rfm_detail_bhk_type: "",
    rfm_detail_floor: "",
    rfm_detail_total_floor: "",
    rfm_detail_prop_age: "",
    rfm_detail_facing: "",
    rfm_detail_builtup_area: "",
    rfm_detail_room_type: "",
    rfm_detail_tenent_type: "",
    rfm_detail_furnishing: "",
    rfm_detail_parking: "",
    rfm_detail_bathroom: "",
    rfm_detail_balcony: "",
    rfm_detail_water_supply: "",

    rfm_rules_is_non_veg_allowed: false,

    rfm_location_state: "",
    rfm_location_city: "",
    rfm_location_latitiude: "",
    rfm_location_longitude: "",

    rfm_rental_detail_rent: "",
    rfm_rental_detail_exp_deposit: "",
    rfm_rental_detail_is_nogotiable: "",
    rfm_rental_detail_monthly_maintenance: "",
    rfm_rental_detail_avail_from: "",

    rfm_amenities_lift: false,
    rfm_amenities_ac: false,
    rfm_amenities_intercom: false,
    rfm_amenities_children_play_area: false,
    rfm_amenities_servant_room: false,
    rfm_amenities_gas_pipeline: false,
    rfm_amenities_rainwater_harvesting: false,
    rfm_amenities_housekeepiing: false,
    rfm_amenities_visitor_parking: false,
    rfm_amenities_internet: false,
    rfm_amenities_club_house: false,
    rfm_amenities_swimming_pool: false,
    rfm_amenities_fire_safety: false,
    rfm_amenities_shopping_center: false,
    rfm_amenities_park: false,
    rfm_amenities_sewage_treatment: false,
    rfm_amenities_power_backup: false,
    rfm_amenities_gated_security: false,
    rfm_amenities_gym: false,
  })
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const [file, setFile] = useState([]);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setdata({ ...data, [e.target.name]: e.target.checked })

    } else {
      setdata({ ...data, [e.target.name]: e.target.value })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("rfm_detail_description", data.rfm_detail_description)
    formData.append("rfm_detail_app_type", data.rfm_detail_app_type)
    formData.append("rfm_detail_bhk_type", data.rfm_detail_bhk_type)
    formData.append("rfm_detail_floor", data.rfm_detail_floor)
    formData.append("rfm_detail_total_floor", data.rfm_detail_total_floor)
    formData.append("rfm_detail_prop_age", data.rfm_detail_prop_age)
    formData.append("rfm_detail_facing", data.rfm_detail_facing)
    formData.append("rfm_detail_builtup_area", data.rfm_detail_builtup_area)
    formData.append("rfm_detail_room_type", data.rfm_detail_room_type)
    formData.append("rfm_detail_tenent_type", data.rfm_detail_tenent_type)
    formData.append("rfm_detail_furnishing", data.rfm_detail_furnishing)
    formData.append("rfm_detail_parking", data.rfm_detail_parking)
    formData.append("rfm_detail_bathroom", data.rfm_detail_bathroom)
    formData.append("rfm_detail_balcony", data.rfm_detail_balcony)
    formData.append("rfm_detail_water_supply", data.rfm_detail_water_supply)

    formData.append("rfm_rules_is_non_veg_allowed", data.rfm_rules_is_non_veg_allowed)

    formData.append("rfm_location_state", data.rfm_location_state)
    formData.append("rfm_location_city", data.rfm_location_city)
    formData.append("rfm_location_latitiude", data.rfm_location_latitiude)
    formData.append("rfm_location_longitude", data.rfm_location_longitude)
  

    formData.append("rfm_rental_detail_rent", data.rfm_rental_detail_rent)
    formData.append("rfm_rental_detail_exp_deposit", data.rfm_rental_detail_exp_deposit)
    formData.append("rfm_rental_detail_is_nogotiable", data.rfm_rental_detail_is_nogotiable)
    formData.append("rfm_rental_detail_monthly_maintenance", data.rfm_rental_detail_monthly_maintenance)
    formData.append("rfm_rental_detail_avail_from", data.rfm_rental_detail_avail_from)

    formData.append("rfm_amenities_lift", data.rfm_amenities_lift)
    formData.append("rfm_amenities_ac", data.rfm_amenities_ac)
    formData.append("rfm_amenities_intercom", data.rfm_amenities_intercom)
    formData.append("rfm_amenities_children_play_area", data.rfm_amenities_children_play_area)
    formData.append("rfm_amenities_servant_room", data.rfm_amenities_servant_room)
    formData.append("rfm_amenities_gas_pipeline", data.rfm_amenities_gas_pipeline)
    formData.append("rfm_amenities_rainwater_harvesting", data.rfm_amenities_rainwater_harvesting)
    formData.append("rfm_amenities_housekeepiing", data.rfm_amenities_housekeepiing)
    formData.append("rfm_amenities_visitor_parking", data.rfm_amenities_visitor_parking)
    formData.append("rfm_amenities_internet", data.rfm_amenities_internet)
    formData.append("rfm_amenities_club_house", data.rfm_amenities_club_house)
    formData.append("rfm_amenities_swimming_pool", data.rfm_amenities_swimming_pool)
    formData.append("rfm_amenities_fire_safety", data.rfm_amenities_fire_safety)
    formData.append("rfm_amenities_shopping_center", data.rfm_amenities_shopping_center)
    formData.append("rfm_amenities_park", data.rfm_amenities_park)
    formData.append("rfm_amenities_sewage_treatment", data.rfm_amenities_sewage_treatment)
    formData.append("rfm_amenities_power_backup", data.rfm_amenities_power_backup)
    formData.append("rfm_amenities_gated_security", data.rfm_amenities_gated_security)
    formData.append("rfm_amenities_gym", data.rfm_amenities_gym)
    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-rfm-prop`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmYyYWY0ZTliMTQ5YzAwMTg5ODQ4In0sImlhdCI6MTY3NDMzOTI3MX0.xYzlIULGow26waQsg85OrAsJPRtSaeQ9HFe14XIahss",
      },
    });
    console.log(responce)
    history("/")

  }


  return (
    <div id="main-wrapper">
    
      <Navbar />
      {/* End Navigation */}
      <div className="clearfix" />
    
      <div className="page-title" style={{ background: '#f4f4f4 url(assets/img/bg.jpg)' }} data-overlay={5}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="breadcrumbs-wrap">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">Submit Property</li>
                </ol>
                <h2 className="breadcrumb-title">Submit Your Property</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="alert alert-info" role="alert">
                <p>If you don't have an account you can create one by <a href="#">Click Here</a></p>              </div>
            </div>
            {/* Submit Form */}
            <div className="col-lg-12 col-md-12">
              <div className="submit-page p-0">
                <form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  {currentStep === 1 && <div className="frm_submit_block">
                    <h3>Basic Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Property Title<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                          <input type="text" name="rfm_detail_description" onChange={handleChange} value={data.rfm_detail_description} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>BHK Type</label>
                          <select id="status" name="rfm_detail_bhk_type" onChange={handleChange} value={data.rfm_detail_bhk_type} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="1 RK">1 RK</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                            <option value="4 BHK">4 BHK</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Property Type</label>
                          <select id="ptypes" className="form-control" onChange={handleChange}  name="rfm_detail_app_type"  value={data.rfm_detail_app_type}>
                            <option value>&nbsp;</option>
                            <option value="Appartment">Appartment</option>
                            <option value="Independent House Villa">Independent House Villa</option>
                            <option value="Gateed Community Villa">Gated Community Villa</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Floor</label>
                          <select id="ptypes" className="form-control" onChange={handleChange} value={data.rfm_detail_floor} name="rfm_detail_floor">
                            <option value>&nbsp;</option>
                            <option value="1 Floor">1 Floor</option>
                            <option value="2 Floor">2 Floor</option>
                            <option value="3 Floor">3 Floor</option>
                            <option value="4 Floor">4 Floor</option>
                            <option value="5 Floor">5 Floor</option>
                            <option value="6 Floor">6 Floor</option>
                            <option value="7 Floor">7 Floor</option>
                            <option value="8 Floor">8 Floor</option>
                            <option value="9 Floor">9 Floor</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Total Floor</label>
                          <select id="ptypes" className="form-control" onChange={handleChange} value={data.rfm_detail_total_floor} name="rfm_detail_total_floor">
                            <option value>&nbsp;</option>
                            <option value="0-10 Floor">0-10 Floor</option>
                            <option value="10-20 Floor">10-20 Floor</option>
                            <option value="20-30 Floor">20-30 Floor</option>
                            <option value="30-40 Floor">30-40 Floor</option>
                            <option value="40-50 Floor">40-50 Floor</option>
                            <option value="50+ Floor">50+ Floor</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Property Age</label>
                          <select id="ptypes" className="form-control" onChange={handleChange} value={data.rfm_detail_prop_age} name="rfm_detail_prop_age">
                            <option value>&nbsp;</option>
                            <option value="0-10">0-10 yrs</option>
                            <option value="10-20">10-20 yrs</option>
                            <option value="20-30">20-30 yrs</option>
                            <option value="30-40">30-40 yrs</option>
                            <option value="40-50">40-50 yrs</option>
                            <option value="50+">50+ yrs</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Facing</label>
                          <select id="ptypes" className="form-control" onChange={handleChange} value={data.rfm_detail_facing} name="rfm_detail_facing">
                            <option value>&nbsp;</option>
                            <option value="North">North</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="South">South</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Builtup Area</label>
                          <input type="number" name="rfm_detail_builtup_area" onChange={handleChange} value={data.rfm_detail_builtup_area} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Room Type</label>
                          <select id="bedrooms" name="rfm_detail_room_type" onChange={handleChange} value={data.rfm_detail_room_type} className="form-control">
                            <option disabled selected>&nbsp;</option>
                            <option value="Single">Single</option>
                            <option value="Shared">Shared</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Tenent Type</label>
                          <select id="bathrooms" name="rfm_detail_tenent_type" onChange={handleChange} value={data.rfm_detail_tenent_type} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Furnishing</label>
                          <select name="rfm_detail_furnishing" onChange={handleChange} value={data.rfm_detail_furnishing} id="bathrooms" className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Parking</label>
                          <select name="rfm_detail_parking" id="bathrooms" onChange={handleChange} value={data.rfm_detail_parking} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Both">Both</option>
                            <option value="None">none</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Bathrooms</label>
                          <input type="number" name="rfm_detail_bathroom" onChange={handleChange} value={data.rfm_detail_bathroom}  className="form-control" />
                           
                        </div>
                        <div className="form-group col-md-6">
                          <label>Balcony</label>
                          <input type="number" name="rfm_detail_balcony" onChange={handleChange} value={data.rfm_detail_balcony}  className="form-control" />
                           
                        </div>
                       
                        <div className="form-group col-md-6">
                          <label>Water Supply</label>
                          <select name="rfm_detail_water_supply" onChange={handleChange} value={data.rfm_detail_water_supply} id="bathrooms" className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Borewell">Borewell</option>
                            <option value="Corporation">Corporation</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>}
                  {currentStep === 2 && <div className="frm_submit_block">
                    <h3>Location</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                     
                        <div className="form-group col-md-12">
                          <LocationPicker handleChange={handleChange}  name='rfm_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}
                  {currentStep === 3 && <><div className="frm_submit_block">
                    <h3>Rental Detailed</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Rent</label>
                          <input name="rfm_rental_detail_rent" onChange={handleChange} value={data.rfm_rental_detail_rent} className="form-control h-120" type="number" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Expected Deposit</label>
                          <input name="rfm_rental_detail_exp_deposit" onChange={handleChange} value={data.rfm_rental_detail_exp_deposit} className="form-control h-120" type="number" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Negotiable </label>
                          <select id="bage" name="rfm_rental_detail_is_nogotiable" onChange={handleChange} value={data.rfm_rental_detail_is_nogotiable} className="form-control">
                            <option value>Select Negotiable Type</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Monthly Maintenance</label>
                          <select id="bage" name="rfm_rental_detail_monthly_maintenance" onChange={handleChange} value={data.rfm_rental_detail_monthly_maintenance} className="form-control">
                            <option>Select Monthly Maintenance</option>
                            <option value="Maintenance Included">Maintenance Included</option>
                            <option value="Maintenance Extra">Maintenance Extra</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Available From</label>
                          <input name="rfm_rental_detail_avail_from" onChange={handleChange} value={data.rfm_rental_detail_avail_from} className="form-control h-120" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </>}
                  {currentStep === 4 && <> <div className="frm_submit_block">
                    <h3>Detailed Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-1" className="checkbox-custom" onChange={handleChange} checked={data.rfm_amenities_ac} name="rfm_amenities_ac" type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">Air Condition</label>
                              </li>
                              <li>
                                <input id="a-2" className="checkbox-custom" name="rfm_amenities_lift" onChange={handleChange} checked={data.rfm_amenities_lift} type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">Lift</label>
                              </li>
                              <li>
                                <input id="a-3" className="checkbox-custom" name="rfm_amenities_intercom" onChange={handleChange} checked={data.rfm_amenities_intercom} type="checkbox" />
                                <label htmlFor="a-3" className="checkbox-custom-label">Inter communication</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom" name="rfm_amenities_internet" onChange={handleChange} checked={data.rfm_amenities_internet} type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                              </li>
                              <li>
                                <input id="a-5" className="checkbox-custom" name="rfm_amenities_children_play_area" onChange={handleChange} checked={data.rfm_amenities_children_play_area} type="checkbox" />
                                <label htmlFor="a-5" className="checkbox-custom-label">Children Play Area</label>
                              </li>
                              <li>
                                <input id="a-6" className="checkbox-custom" name="rfm_amenities_servant_room" onChange={handleChange} checked={data.rfm_amenities_servant_room} type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">Servant Room</label>
                              </li>
                              <li>
                                <input id="a-7" className="checkbox-custom" name="rfm_amenities_gas_pipeline" onChange={handleChange} checked={data.rfm_amenities_gas_pipeline} type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">Gas Pipeline</label>
                              </li>
                              <li>
                                <input id="a-8" className="checkbox-custom" onChange={handleChange} checked={data.rfm_amenities_rainwater_harvesting} name="rfm_amenities_rainwater_harvesting" type="checkbox" />
                                <label htmlFor="a-8" className="checkbox-custom-label">Rainwater Harvesting</label>
                              </li>
                              <li>
                                <input id="a-9" className="checkbox-custom" onChange={handleChange} checked={data.rfm_amenities_housekeepiing} name="rfm_amenities_housekeepiing" type="checkbox" />
                                <label htmlFor="a-9" className="checkbox-custom-label">Housekeepiing</label>
                              </li>
                              <li>
                                <input id="a-10" className="checkbox-custom" name="rfm_amenities_club_house" onChange={handleChange} checked={data.rfm_amenities_club_house} type="checkbox" />
                                <label htmlFor="a-10" className="checkbox-custom-label">Club House</label>
                              </li>
                              <li>
                                <input id="a-11" className="checkbox-custom" name="rfm_amenities_visitor_parking" onChange={handleChange} checked={data.rfm_amenities_visitor_parking} type="checkbox" />
                                <label htmlFor="a-11" className="checkbox-custom-label">Visitor Parking</label>
                              </li>
                              <li>
                                <input id="a-12" className="checkbox-custom" name="rfm_amenities_swimming_pool" onChange={handleChange} checked={data.rfm_amenities_swimming_pool} type="checkbox" />
                                <label htmlFor="a-12" className="checkbox-custom-label">Swimming Pool</label>
                              </li>
                              <li>
                                <input id="a-14" className="checkbox-custom" name="rfm_amenities_fire_safety" onChange={handleChange} checked={data.rfm_amenities_fire_safety} type="checkbox" />
                                <label htmlFor="a-14" className="checkbox-custom-label">Fire Safety</label>
                              </li>
                              <li>
                                <input id="a-15" className="checkbox-custom" name="rfm_amenities_shopping_center" onChange={handleChange} checked={data.rfm_amenities_shopping_center} type="checkbox" />
                                <label htmlFor="a-15" className="checkbox-custom-label">Shopping Center</label>
                              </li>
                              <li>
                                <input id="a-16" className="checkbox-custom" name="rfm_amenities_park" onChange={handleChange} checked={data.rfm_amenities_park} type="checkbox" />
                                <label htmlFor="a-16" className="checkbox-custom-label">Park</label>
                              </li>
                              <li>
                                <input id="a-17" className="checkbox-custom" name="rfm_amenities_sewage_treatment" onChange={handleChange} checked={data.rfm_amenities_internet} type="checkbox" />
                                <label htmlFor="a-17" className="checkbox-custom-label">Sewage Treatment</label>
                              </li>
                              <li>
                                <input id="a-18" className="checkbox-custom" name="rfm_amenities_power_backup" onChange={handleChange} checked={data.rfm_amenities_power_backup} type="checkbox" />
                                <label htmlFor="a-18" className="checkbox-custom-label">Power Backup</label>
                              </li>
                              <li>
                                <input id="a-19" className="checkbox-custom" name="rfm_amenities_gated_security" onChange={handleChange} checked={data.rfm_amenities_gated_security} type="checkbox" />
                                <label htmlFor="a-19" className="checkbox-custom-label">Gated Security</label>
                              </li>
                              <li>
                                <input id="a-20" className="checkbox-custom" name="rfm_amenities_gym" onChange={handleChange} checked={data.rfm_amenities_gym} type="checkbox" />
                                <label htmlFor="a-20" className="checkbox-custom-label">GYM</label>
                              </li>
                              {/* //////////////// */}
                              <li>
                                <input id="a-21" className="checkbox-custom" name="rfm_amenities_gym"  hidden type="checkbox" />
                                <label htmlFor="a-21" hidden className="checkbox-custom-label">GYM</label>
                              </li><li>
                                <input id="a-22" hidden className="checkbox-custom" name="rfm_amenities_gym" type="checkbox" />
                                <label htmlFor="a-22" hidden className="checkbox-custom-label">GYM</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="frm_submit_block">
                      <h3>Rules</h3>
                      <div className="frm_submit_wrap">
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <div className="o-features">
                              <ul className="no-ul-list third-row">
                                <li>
                                  <input id="a-13" className="checkbox-custom" onchange={handleChange} checked={data.rfm_rules_is_non_veg_allowed} name="rfm_rules_is_non_veg_allowed" type="checkbox" />
                                  <label htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                                </li>
                            
                                <li>
                                  <input id="a-13" className="checkbox-custom"  type="checkbox" hidden />
                                  <label hidden htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                                </li>
                                <li>
                                  <input id="a-13" className="checkbox-custom" type="checkbox" hidden />
                                  <label hidden htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></>}
                  {currentStep === 5 && <div className="frm_submit_block">
                    <h3>Gallery</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Upload Gallery</label>
                          <div className="dropzone dz-clickable primary-dropzone" >
                            <input type='file' onChange={fileSelected}

                              accept="image/*"
                              multiple />
                            <div className="dz-default dz-message">
                              <i className="ti-gallery" />
                              <span>Drag &amp; Drop To Change Logo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div>
                    {currentStep < 5 && (
                      <button type="button" className='float-right btn btn-dark' onClick={nextStep}>
                        Next
                      </button>
                    )}
                    {currentStep !== 1 && (
                      <button type="button" className='btn btn-dark float-start' onClick={prevStep}>
                        Previous
                      </button>
                    )}

                    {currentStep === 5 && (
                      <button type="submit" className='float-right btn btn-dark'>Submit</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>

  )
}

export default ResidentialFlatmates