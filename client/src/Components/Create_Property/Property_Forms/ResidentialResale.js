import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import LocationPicker from './LocationPicker';
const ResidentialResale = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()

  const [data, setdata] = useState({
    rrs_detail_description: "",
    rrs_detail_app_type: "",
    rrs_detail_bhk_type: "",
    rrs_detail_floor: "",
    rrs_detail_total_floor: "",
    rrs_detail_floor_type: "",
    rrs_detail_kitchen_type: "",
    rrs_detail_prop_age: "",
    rrs_detail_builtup_area: "",
    rrs_detail_carpet_area: "",
    rrs_detail_furnishing: "",
    rrs_detail_parking: "",
    rrs_detail_bathroom: "",
    rrs_detail_balcony: "",
    rrs_detail_water_supply: "",

    rrs_location_state: "",
    rrs_location_city: "",
    rrs_location_latitude: "",
    rrs_location_longitude: "",
    rrs_location_iframe: "",

    rrs_resale_detail_exp_price: "",
    rrs_resale_detail_maintenance: "",
    rrs_resale_detail_available_from: "",

    rrs_amenities_lift: false,
    rrs_amenities_ac: false,
    rrs_amenities_intercom: false,
    rrs_amenities_children_play_area: false,
    rrs_amenities_servant_room: false,
    rrs_amenities_gas_pipeline: false,
    rrs_amenities_rainwater_harvesting: false,
    rrs_amenities_housekeepiing: false,
    rrs_amenities_visitor_parking: false,
    rrs_amenities_internet: false,
    rrs_amenities_club_house: false,
    rrs_amenities_swimming_pool: false,
    rrs_amenities_fire_safety: false,
    rrs_amenities_shopping_center: false,
    rrs_amenities_park: false,
    rrs_amenities_sewage_treatment: false,
    rrs_amenities_power_backup: false,
    rrs_amenities_gated_security: false,
    rrs_amenities_gym: false,
    rrs_info_prop_tax_is_paid: false,
    rrs_info_occupany_certificate_available: false,
    rss_info_deed_certificate_is_available: false
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
    formData.append("rrs_detail_description", data.rrs_detail_description)
    formData.append("rrs_detail_app_type", data.rrs_detail_app_type)
    formData.append("rrs_detail_bhk_type", data.rrs_detail_bhk_type)
    formData.append("rrs_detail_floor", data.rrs_detail_floor)
    formData.append("rrs_detail_total_floor", data.rrs_detail_total_floor)
    formData.append("rrs_detail_floor_type", data.rrs_detail_floor_type)
    formData.append("rrs_detail_kitchen_type", data.rrs_detail_kitchen_type)
    formData.append("rrs_detail_prop_age", data.rrs_detail_prop_age)
    formData.append("rrs_detail_facing", data.rrs_detail_facing)
    formData.append("rrs_detail_builtup_area", data.rrs_detail_builtup_area)
    formData.append("rrs_detail_carpet_area", data.rrs_detail_carpet_area)
    formData.append("rrs_detail_furnishing", data.rrs_detail_furnishing)
    formData.append("rrs_detail_parking", data.rrs_detail_parking)
    formData.append("rrs_detail_bathroom", data.rrs_detail_bathroom)
    formData.append("rrs_detail_balcony", data.rrs_detail_balcony)
    formData.append("rrs_detail_water_supply", data.rrs_detail_water_supply)

    formData.append("rrs_location_state", data.rrs_location_state)
    formData.append("rrs_location_city", data.rrs_location_city)
    formData.append("rrs_location_latitude", data.rrs_location_latitude)
    formData.append("rrs_location_longitude", data.rrs_location_longitude)
    formData.append("rrs_location_iframe", data.rrs_location_iframe)

    formData.append("rrs_resale_detail_exp_price", data.rrs_resale_detail_exp_price)
    formData.append("rrs_resale_detail_maintenance", data.rrs_resale_detail_maintenance)
    formData.append("rrs_resale_detail_available_from", data.rrs_resale_detail_available_from)

    formData.append("rrs_amenities_lift", data.rrs_amenities_lift)
    formData.append("rrs_amenities_ac", data.rrs_amenities_ac)
    formData.append("rrs_amenities_intercom", data.rrs_amenities_intercom)
    formData.append("rrs_amenities_children_play_area", data.rrs_amenities_children_play_area)
    formData.append("rrs_amenities_servant_room", data.rrs_amenities_servant_room)
    formData.append("rrs_amenities_gas_pipeline", data.rrs_amenities_gas_pipeline)
    formData.append("rrs_amenities_rainwater_harvesting", data.rrs_amenities_rainwater_harvesting)
    formData.append("rrs_amenities_housekeepiing", data.rrs_amenities_housekeepiing)
    formData.append("rrs_amenities_visitor_parking", data.rrs_amenities_visitor_parking)
    formData.append("rrs_amenities_internet", data.rrs_amenities_internet)
    formData.append("rrs_amenities_club_house", data.rrs_amenities_club_house)
    formData.append("rrs_amenities_swimming_pool", data.rrs_amenities_swimming_pool)
    formData.append("rrs_amenities_fire_safety", data.rrs_amenities_fire_safety)
    formData.append("rrs_amenities_shopping_center", data.rrs_amenities_shopping_center)
    formData.append("rrs_amenities_park", data.rrs_amenities_park)
    formData.append("rrs_amenities_sewage_treatment", data.rrs_amenities_sewage_treatment)
    formData.append("rrs_amenities_power_backup", data.rrs_amenities_power_backup)
    formData.append("rrs_amenities_gated_security", data.rrs_amenities_gated_security)
    formData.append("rrs_amenities_gym", data.rrs_amenities_gym)
    formData.append("rrs_info_prop_tax_is_paid", data.rrs_info_prop_tax_is_paid)
    formData.append("rrs_info_occupany_certificate_available",data.rrs_info_occupany_certificate_available)
    formData.append("rss_info_deed_certificate_is_available", data.rss_info_deed_certificate_is_available)

   
    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-rrs-prop`, formData, {
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
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* Start Navigation */}
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
      {/* ============================ Page Title End ================================== */}
      {/* ============================ Submit Property Start ================================== */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="alert alert-info" role="alert">
                <p>If you don't have an account you can create one by <a href="#">Click Here</a></p>
              </div>
            </div>
            {/* Submit Form */}
            <div className="col-lg-12 col-md-12">
              <div className="submit-page p-0">
                {/* Basic Information */}
                <form onSubmit={handleSubmit}>
                {currentStep === 1 && <>  <div className="frm_submit_block">
                  <h3>Basic Information</h3>
                  <div className="frm_submit_wrap">
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label>Property Description<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                        <input type="text" name="rrs_detail_description" onChange={handleChange} value={data.rrs_detail_description} className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Property Type</label>
                        <select  name="rrs_detail_app_type" onChange={handleChange} value={data.rrs_detail_app_type} className="form-control">
                          <option> Select Property Type</option>
                          <option value="Appartment">Appartment</option>
                          <option value="Independent House Villa">Independent House Villa</option>
                          <option value="Gated Community villa">Gated Community Villa</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>BHK Type</label>
                        <select id="status" name="rrs_detail_bhk_type" onChange={handleChange} value={data.rrs_detail_bhk_type} className="form-control">
                          <option selected disabled>Select BHK Type </option>
                          <option value="1 Rk">1 RK</option>
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Floor</label>
                        <select name="rrs_detail_floor" onChange={handleChange} value={data.rrs_detail_floor} className="form-control">
                          <option>Select Floor</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value="10+">10+</option>
                          Total Floor
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Total Floor</label>
                        <select id="status" name="rrs_detail_total_floor" onChange={handleChange} value={data.rrs_detail_total_floor} className="form-control">
                          <option>Select Total Floor</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value="10+">10+</option>
                          Total Floor
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Floor Type</label>
                        <select id="status" name="rrs_detail_floor_type" onChange={handleChange} value={data.rrs_detail_floor_type} className="form-control">
                          <option>Select Floor Type</option>
                          <option value="Vitrified Tiles">Vitrified Tiles</option>
                          <option value="Mossaic">Mossaic</option>
                          <option value="Marble">Marble</option>
                          <option value="Granite">Granite</option>
                          <option value="Wooden">Wooden</option>
                          <option value="Cement">Cement</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Kitchen Type</label>
                        <select id="status" name="rrs_detail_kitchen_type" onChange={handleChange} value={data.rrs_detail_kitchen_type} className="form-control">
                          <option>Select Kitchen Type </option>
                          <option value="Modular">Modular</option>
                          <option value="Covered Shelves">Covered Shelves</option>
                          <option value="Open Shelves">Open Shelves</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Building Age</label>
                        <select id="ptypes" name="rrs_detail_prop_age" onChange={handleChange} value={data.rrs_detail_prop_age} className="form-control" >
                          <option>Select Building Age</option>
                          <option value="0-10">0-10yrs</option>
                          <option value="10-20">10-20yrs</option>
                          <option value="20-30">20-30yrs</option>
                          <option value="30-40">30-40yrs</option>
                          <option value="40+">40+ yrs</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Facing</label>
                        <select id="ptypes" name="rrs_detail_facing" onChange={handleChange} value={data.rrs_detail_facing} className="form-control" >
                          <option>Select Facing</option>
                          <option value="North">North</option>
                          <option value="East">East</option>
                          <option value="West">West</option>
                          <option value="South">South</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Builtup Area</label>
                        <input type="number" name="rrs_detail_builtup_area" onChange={handleChange} value={data.rrs_detail_builtup_area} className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Carpet Area</label>
                        <input type="number" name="rrs_detail_carpet_area" onChange={handleChange} value={data.rrs_detail_carpet_area} className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Furnishing</label>
                        <select id="bedrooms" name="rrs_detail_furnishing" onChange={handleChange} value={data.rrs_detail_furnishing} className="form-control">
                          <option>Select Furnishing Type</option>
                          <option value="Furnished">Furnished</option>
                          <option value="Unfurnished">Unfurnished</option>
                          <option value="Semi furnished">Semi Furnished</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Parking</label>
                        <select id="bathrooms" name="rrs_detail_parking" onChange={handleChange} value={data.rrs_detail_parking} className="form-control">
                          <option>Select Parking</option>
                          <option value="Car">Car</option>
                          <option value="Bike">Bike</option>
                          <option value="Both">Both</option>
                          <option value="None">None</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Bathroom</label>
                        <select id="bathrooms" name="rrs_detail_bathroom" onChange={handleChange} value={data.rrs_detail_bathroom} className="form-control">
                          <option>Select Bathroom</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Balcony</label>
                        <select id="bathrooms" name="rrs_detail_balcony"  onChange={handleChange} value={data.rrs_detail_balcony} className="form-control">
                          <option disabled selected>Select Balcony</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Water Supply</label>
                        <select id="bathrooms" name="rrs_detail_water_supply" onChange={handleChange} value={data.rrs_detail_water_supply} className="form-control">
                          <option disabled selected>Select Water Supply</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Borewell">Borewell</option>
                          <option value="Corporation">Corporation</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div></>}

                {/* Gallery */}

                {currentStep === 2 && <div className="frm_submit_block">
                    <h3>Location</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                     
                        <div className="form-group col-md-12">
                          <LocationPicker handleChange={handleChange}  name='rrs_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}
                {/* Detailed Information */}
                {currentStep === 3 && <>   <div className="frm_submit_block">
                  <h3>Resale Information</h3>
                  <div className="frm_submit_wrap">
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Expected Price</label>
                        <input type="number" value={data.rrs_resale_detail_exp_price} onChange={handleChange} className="form-control h-120" name="rrs_resale_detail_exp_price" />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Miantenance Price</label>
                        <input type="number" className="form-control h-120" onChange={handleChange}name="rrs_resale_detail_maintenance" value={data.rrs_resale_detail_maintenance} />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Miantenance Price</label>
                        <input type="date" className="form-control h-120" onChange={handleChange}name="rrs_resale_detail_available_from" value={data.rrs_resale_detail_available_from} />
                      </div>
                      <div className="form-group col-md-12">
                        <label>Other Features <label>
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-1" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_ac} name="rrs_amenities_ac" type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">Air Condition</label>
                              </li>
                              <li>
                                <input id="a-2" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_lift} name="rrs_amenities_lift" type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">Lift</label>
                              </li>
                              <li>
                                <input id="a-3" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_intercom} name="rrs_amenities_intercom" type="checkbox" />
                                <label htmlFor="a-3" className="checkbox-custom-label">Inter Communication</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_intercom} name="rrs_amenities_internet" type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                              </li>
                              <li>
                                <input id="a-5" className="checkbox-custom" onChange={handleChange}name="rrs_amenities_children_play_area" checked={data.rrs_amenities_children_play_area} type="checkbox" />
                                <label htmlFor="a-5" className="checkbox-custom-label">Children Play Area</label>
                              </li>
                              <li>
                                <input id="a-6" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_servant_room} name="rrs_amenities_servant_room" type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">Servent Room</label>
                              </li>
                              <li>
                                <input id="a-7" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_gas_pipeline} name="rrs_amenities_gas_pipeline" type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">Gas Pipeline</label>
                              </li>
                              <li>
                                <input id="a-8" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_rainwater_harvesting} name="rrs_amenities_rainwater_harvesting" type="checkbox" />
                                <label htmlFor="a-8" className="checkbox-custom-label">Rain Water Harvesting</label>
                              </li>
                              <li>
                                <input id="a-9" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_housekeepiing} name="rrs_amenities_housekeepiing" type="checkbox" />
                                <label htmlFor="a-9" className="checkbox-custom-label">Housekeeping</label>
                              </li>

                              <li>
                                <input id="a-11" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_visitor_parking} name="rrs_amenities_visitor_parking" type="checkbox" />
                                <label htmlFor="a-11" className="checkbox-custom-label">Visiter Parking</label>
                              </li>
                              <li>
                                <input id="a-12" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_club_house} name="rrs_amenities_club_house" type="checkbox" />
                                <label htmlFor="a-12" className="checkbox-custom-label">Club Housing</label>
                              </li>
                              {/* <li>
                                <input id="a-13" className="checkbox-custom" name="rrs_amenities_swimming_pool" type="checkbox" />
                                <label htmlFor="a-13" className="checkbox-custom-label">Club Housing</label>
                              </li> */}
                              <li>
                                <input id="a-14" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_fire_safety} name="rrs_amenities_fire_safety" type="checkbox" />
                                <label htmlFor="a-14" className="checkbox-custom-label">Fire Safety</label>
                              </li>
                              <li>
                                <input id="a-15" className="checkbox-custom" onChange={handleChange} checked={data.rrs_amenities_shopping_center} name="rrs_amenities_shopping_center" type="checkbox" />
                                <label htmlFor="a-15" className="checkbox-custom-label">Shopping Center</label>
                              </li>
                              <li>
                                <input id="a-16" onChange={handleChange} className="checkbox-custom" checked={data.rrs_amenities_shopping_center} name="rrs_amenities_park" type="checkbox" />
                                <label htmlFor="a-16" className="checkbox-custom-label">Park</label>
                              </li>
                              <li>
                                <input id="a-17" onChange={handleChange} className="checkbox-custom" checked={data.rrs_amenities_sewage_treatment} name="rrs_amenities_sewage_treatment" type="checkbox" />
                                <label htmlFor="a-17" className="checkbox-custom-label">Sewage Treatment</label>
                              </li>
                              <li>
                                <input id="a-18" onChange={handleChange} className="checkbox-custom" checked={data.rrs_amenities_power_backup} name="rrs_amenities_power_backup" type="checkbox" />
                                <label htmlFor="a-18" className="checkbox-custom-label">Power Backup</label>
                              </li>
                              <li>
                                <input id="a-19" onChange={handleChange} className="checkbox-custom" checked={data.rrs_amenities_gated_security}
                                  name="rrs_amenities_gated_security" type="checkbox" />
                                <label htmlFor="a-19" className="checkbox-custom-label">Gated Security</label>
                              </li>
                              <li>
                                <input id="a-20" onChange={handleChange} className="checkbox-custom" checked={data.rrs_amenities_gym} name="rrs_amenities_gym" type="checkbox" />
                                <label htmlFor="a-20" className="checkbox-custom-label">GYM</label>
                              </li>

                            </ul>
                          </div>
                        </label>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Contact Information */}

                </div></>}
                {currentStep === 4 && <>
                  <div className="frm_submit_block">
                    <h3>Property Info</h3>
                    <div className="frm_submit_wrap">
                      <div className="o-features">
                        <ul className="no-ul-list third-row">
                          <li>
                            <input id="a-21" onChange={handleChange} className="checkbox-custom" checked={data.rrs_info_prop_tax_is_paid} name="rrs_info_prop_tax_is_paid" type="checkbox" />
                            <label htmlFor="a-21" className="checkbox-custom-label">Property Tax is Paid</label>
                          </li>
                          <li>
                            <input id="a-22" className="checkbox-custom" name="rrs_info_occupany_certificate_available" onChange={handleChange} checked={data.rrs_info_occupany_certificate_available} type="checkbox" />
                            <label htmlFor="a-22" className="checkbox-custom-label">Occupany Cirtificate Available</label>
                          </li>
                          <li>
                            <input id="a-23" onChange={handleChange} className="checkbox-custom" checked={data.rss_info_deed_certificate_is_available} name="rss_info_deed_certificate_is_available" type="checkbox" />
                            <label htmlFor="a-23" className="checkbox-custom-label">Deed Cirtificate Available</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>}
                {currentStep === 5 && <div className="frm_submit_block">
                    <h3>Gallery</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Upload Gallery</label>
                          <div className="dropzone dz-clickable primary-dropzone" >
                            <input type='file' onChange={fileSelected}

                              accept="image/*"
                              multiple  />
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
      {/* ============================ Submit Property End ================================== */}
      {/* ============================ Call To Action ================================== */}
      <Footer />

    </div>

  )
}

export default ResidentialResale