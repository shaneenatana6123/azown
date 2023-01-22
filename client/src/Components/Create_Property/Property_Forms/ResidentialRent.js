import React, { useRef, useState } from 'react'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Autocomplete} from '@react-google-maps/api'

// import { GoogleMap } from "react-google-maps/api";

import LocationPicker from './LocationPicker'
const ResidentialRent = () => {
  
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const host ="http://localhost:5000"
  const [data, setdata] = useState({
    rr_detail_description: "",
    rr_detail_app_type: "",
    rr_detail_bhk_type: "",
    rr_detail_floor: "",
    rr_detail_total_floor: "",
    rr_detail_floor_type: "",
    rr_detail_kitchen_type: "",
    rr_detail_prop_age: "",
    rr_detail_facing: "",
    rr_detail_builtup_area: "",
    rr_detail_carpet_area: "",
    rr_detail_furnishing: "",
    rr_detail_parking: "",
    rr_detail_bathroom: "",
    rr_detail_balcony: "",
    rr_detail_water_supply: "",
    rr_location_state: "",
    rr_location_city: "",
    rr_location_latitude: "",
    rr_location_longitude: "",
    rr_rental_detail_rent: "",
    rr_rental_detail_exp_deposit: "",
    rr_rental_detail_is_nogotiable: "",
    rr_rental_detail_monthly_maintenance: "",
    rr_rental_detail_avail_from: "",
    rr_rental_detail_pref_tenent: "",
    rr_rental_detail_is_allowed_nonveg: "",
    rr_rental_detail_shown_by: "",
    rr_rental_detail_shown_by_number: "",

    rr_amenities_lift: false,
    rr_amenities_ac: false,
    rr_amenities_intercom: false,
    rr_amenities_children_play_area:false,
    rr_amenities_servant_room: false,
    rr_amenities_gas_pipeline: false,
    rr_amenities_rainwater_harvesting: false,
    rr_amenities_housekeepiing: false,
    rr_amenities_visitor_parking: false,
    rr_amenities_internet: false,
    rr_amenities_club_house: false,
    rr_amenities_swimming_pool: false,
    rr_amenities_fire_safety: false,
    rr_amenities_shopping_center: false,
    rr_amenities_park: false,
    rr_amenities_sewage_treatment: false,
    rr_amenities_power_backup: false,
    rr_amenities_gated_security: false,
    rr_amenities_gym: false,
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
    if(e.target.type ==="checkbox"){
      setdata({ ...data, [e.target.name]: e.target.checked })
      // if(e.target.checked){
      //   setdata({ ...data, [e.target.name]: e.target.checked })
      // }else{
      //   setdata({ ...data, [e.target.name]: false })
      // }
    

    }else{
      setdata({ ...data, [e.target.name]: e.target.value })
    }
    

   
  }
const handleSubmit = async (e)=>{
  e.preventDefault()
  const formData = new FormData();
  formData.append("rr_detail_description", data.rr_detail_description);
  formData.append("rr_detail_app_type",data.rr_detail_app_type)
  formData.append("rr_detail_bhk_type",data.rr_detail_bhk_type)
  formData.append("rr_detail_floor",data.rr_detail_floor)
  formData.append("rr_detail_total_floor",data.rr_detail_total_floor)
  formData.append("rr_detail_floor_type",data.rr_detail_floor_type)
  formData.append("rr_detail_kitchen_type",data.rr_detail_kitchen_type)
  formData.append("rr_detail_prop_age",data.rr_detail_prop_age)
  formData.append("rr_detail_facing",data.rr_detail_facing)
  formData.append("rr_detail_builtup_area",data.rr_detail_builtup_area)

  formData.append("rr_detail_carpet_area",data.rr_detail_carpet_area)
  formData.append("rr_detail_furnishing",data.rr_detail_furnishing)
  formData.append("rr_detail_parking",data.rr_detail_parking)
  formData.append("rr_detail_bathroom",data.rr_detail_bathroom)
  formData.append("rr_detail_balcony",data.rr_detail_balcony)
  formData.append("rr_location_state",data.rr_location_state)
  formData.append("rr_location_city",data.rr_location_city)
  formData.append("rr_location_latitude",data.rr_location_latitude)
  formData.append("rr_location_longitude",data.rr_location_longitude)

  formData.append("rr_rental_detail_rent",data.rr_rental_detail_rent)
  formData.append("rr_rental_detail_exp_deposit",data.rr_rental_detail_exp_deposit)
  formData.append("rr_rental_detail_is_nogotiable",data.rr_rental_detail_is_nogotiable)
  formData.append("rr_rental_detail_monthly_maintenance",data.rr_rental_detail_monthly_maintenance)
  formData.append("rr_rental_detail_avail_from",data.rr_rental_detail_avail_from)

  formData.append("rr_rental_detail_pref_tenent",data.rr_rental_detail_pref_tenent)
  formData.append("rr_rental_detail_is_allowed_nonveg",data.rr_rental_detail_is_allowed_nonveg)
  formData.append("rr_rental_detail_shown_by",data.rr_rental_detail_shown_by)
  formData.append("rr_rental_detail_shown_by_number",data.rr_rental_detail_shown_by_number)

  formData.append("rr_amenities_lift",data.rr_amenities_lift)
  formData.append("rr_amenities_ac",data.rr_amenities_ac)
  formData.append("rr_amenities_intercom",data.rr_amenities_intercom)
  formData.append("rr_amenities_children_play_area",data.rr_amenities_children_play_area)
  formData.append("rr_amenities_servant_room",data.rr_amenities_servant_room)
  formData.append("rr_amenities_gas_pipeline",data.rr_amenities_gas_pipeline)
  formData.append("rr_amenities_rainwater_harvesting",data.rr_amenities_rainwater_harvesting)
  formData.append("rr_amenities_housekeepiing",data.rr_amenities_housekeepiing)
  formData.append("rr_amenities_visitor_parking",data.rr_amenities_visitor_parking)
  formData.append("rr_amenities_internet",data.rr_amenities_internet)
  formData.append("rr_amenities_club_house",data.rr_amenities_club_house)
  formData.append("rr_amenities_swimming_pool",data.rr_amenities_swimming_pool)
  formData.append("rr_amenities_fire_safety",data.rr_amenities_fire_safety)
  formData.append("rr_amenities_shopping_center",data.rr_amenities_shopping_center)
  formData.append("rr_amenities_park",data.rr_amenities_park)
  formData.append("rr_amenities_sewage_treatment",data.rr_amenities_sewage_treatment)

  formData.append("rr_amenities_power_backup",data.rr_amenities_power_backup)
  formData.append("rr_amenities_gated_security",data.rr_amenities_gated_security)
  formData.append("rr_amenities_gym",data.rr_amenities_gym)
  console.log(formData)
  Array.from(file).forEach((item) => {
    formData.append("image", item);
  });
  const responce = await axios.post(`${host}/api/property/addprop`, formData, {
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
 <Navbar/>
  {/* End Navigation */}
  <div className="clearfix" />
  {/* ============================================================== */}
  {/* Top header  */}
  {/* ============================================================== */}
  {/* ============================ Page Title Start================================== */}
  <div className="page-title" style={{background: '#f4f4f4 url(assets/img/bg.jpg)'}} data-overlay={5}>
  <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="breadcrumbs-wrap">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href>Home</a></li>
                    <li className="breadcrumb-item"><a href>Create Property</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Submit Your Property</li>
                  </ol>
                  <h2 className="breadcrumb-title">Residential Rent Property</h2>
                </div>
              </div>
            </div>
          </div>
    
  </div>
  {/* ============================ Page Title End ================================== */}
  {/* ============================ Submit Property Start ================================== */}
  <section>
  <form onSubmit={handleSubmit}>
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
            {currentStep===1 &&  <div className="frm_submit_block">	
              <h3>Basic Information</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Property Description<a href className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                    <input type="text" name="rr_detail_description" value={data.rr_detail_description} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Apartment Type</label>
               
                      
                    <select id="status" className="form-control" onChange={handleChange}  name="rr_detail_app_type" value={data.rr_detail_app_type} required>
                      <option value="" disabled selected>Select</option>
                      <option value="Appartment">Appartment</option>
                      <option value="Independent house villa">Independent house villa</option>
                      <option value="Gated Community Villa">Gated Community Villa</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>BHK Type</label>
                    <select id="ptypes" name="rr_detail_bhk_type" value={data.rr_detail_bhk_type} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="1 RK">1 RK</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Floor</label>
                    <select id="ptypes" name="rr_detail_floor" value={data.rr_detail_floor} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="1 Floor">1 Floor</option>
                      <option value="2 Floor">2 Floor</option>
                      <option value="3 Floor">3 Floor</option>
                      <option value="4 Floor">4 Floor</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Total  Floor</label>
                    <select id="ptypes" name="rr_detail_total_floor" value={data.rr_detail_total_floor} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="1 Floor">1 Floor</option>
                      <option value="2 Floor">2 Floor</option>
                      <option value="3 Floor">3 Floor</option>
                      <option value="4 Floor">4 Floor</option>
                      <option value="99+ Floor">99+ Floor</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Floor Type</label>
                    <select id="ptypes" name="rr_detail_floor_type" value={data.rr_detail_floor_type} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="Vitrified Tiles">Vitrified Tiles</option>
                      <option value="Mossaic">Mossaic</option>
                      <option value="Marble">Marble</option>
                      <option value="Granite">Granite</option>
                      <option value="Cement">Cement</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Kitchen Type</label>
                    <select id="ptypes" name="rr_detail_kitchen_type" value={data.rr_detail_kitchen_type} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="Modular">Modular</option>
                      <option value="Covered Shelves">Covered Shelves</option>
                      <option value="Open Shelves">open Shelves</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Building Age</label>
                    <select id="ptypes" name="rr_detail_prop_age" value={data.rr_detail_prop_age} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="0-10yrs">0-10yrs</option>
                      <option value="10-20yrs">10-20yrs</option>
                      <option value="20-30yrs">20-30yrs</option>
                      <option value="30-40yrs">30-40yrs</option>
                      <option value="40+ yrs">40+ yrs</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Facing</label>
                    <select id="ptypes" name="rr_detail_facing" value={data.rr_detail_facing} onChange={handleChange} className="form-control" required>
                    <option value="" disabled selected>Select</option>
                      <option value="North">North</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="South">South</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Builtup Area</label>
                    <input type="number" name="rr_detail_builtup_area" value={data.rr_detail_builtup_area} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Carpet Area</label>
                    <input type="number" name="rr_detail_carpet_area" value={data.rr_detail_carpet_area} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Furnishing</label>
                    <select id="bedrooms" name="rr_detail_furnishing" value={data.rr_detail_furnishing} onChange={handleChange} className="form-control">
                    <option value="" disabled selected>Select</option>
                      <option value="Furnished">Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                      <option value="Semi Furnished">Semi Furnished</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Parking</label>
                    <select id="parking" name="rr_detail_parking" value={data.rr_detail_parking} onChange={handleChange} className="form-control">
                    <option value="" disabled selected>Select</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Both">Both</option>
                      <option value="Bone">None</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Bathroom</label>
                    <input type="number" name="rr_detail_bathroom" value={data.rr_detail_bathroom} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Balcony</label>
                    <input type="number" name="rr_detail_balcony" value={data.rr_detail_balcony} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Water Supply</label>
                    <select id="Bathroom" onChange={handleChange} value={data.rr_detail_water_supply} name="rr_detail_water_supply" className="form-control">
                    <option value="" disabled selected>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Borewell">Borewell</option>
                      <option value="Corporation">Corporation</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>}
           
            {/* Gallery */}
          
            {/* Location */}
            {currentStep ===2 &&  <div className="frm_submit_block">	
              <h3>Location</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  {/* <div className="form-group col-md-6">
                    <label>City</label>
                    <input type="search" id="gsearch" className="form-control" onChange={handleChange} />
                  </div> */}
                  <div className="form-group col-md-6">
                    <label>Locality</label>
                    {/* <Autocomplete> */}
                    <input type="text" className="form-control" value={data.rr_location_city} onChange={handleChange}  name="rr_location_city"    />
                    {/* </Autocomplete> */}
                    
                  </div>
                  {/* <div className="form-group col-md-6">
                    <label>Area</label>
                    <input type="text" name="rr_location_state" onChange={handleChange} className="form-control" />
                  </div> */}
                  {/* <div className="form-group col-md-6">
                    <label>Zip Code</label>
                    <input type="text" className="form-control" onChange={handleChange} />
                  </div> */}
                  <div  className="form-group col-md-12">
                  <LocationPicker/>
                  </div>
            
        
                </div>
              </div>
            </div>}
           
            {/* Rent Details */}
            {currentStep===3 && <div className="frm_submit_block">	
              <h3>Rent Details</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Rent</label>
                    <input type="number" name="rr_rental_detail_rent" onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Expected Deposit</label>
                    <input type="number" name="rr_rental_detail_exp_deposit" value={data.rr_rental_detail_exp_deposit} placeholder="Enter the Expected Deposite" onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Negotiable</label>
                    <select id="Bathroom"  name="rr_rental_detail_is_nogotiable" value={data.rr_rental_detail_is_nogotiable} onChange={handleChange} className="form-control" required>
                    
                      <option value="Yes" selected>Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Monthly Maintenance</label>
                    <select id="Bathroom" name="rr_rental_detail_monthly_maintenance"  onChange={handleChange} className="form-control" required>
                    <option value="" selected disabled></option>
                      <option value="Maintenance Included">Maintenance Included</option>
                      <option value="Maintenance Extra">Maintenance Extra</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Available From</label>
                    <input type="date" name="rr_rental_detail_avail_from" onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Prefered Tenent</label>
                    <select id="Bathroom" name="rr_rental_detail_pref_tenent" onChange={handleChange} className="form-control" required>
                    <option value="" selected disabled></option>
                      <option value="Doesnot Matter">Doesnt Matter</option>
                      <option value="Family">Family</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Company">Company</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Non-Veg Allowed</label>
                    <select id="Non-Veg Allowed" name="rr_rental_detail_is_allowed_nonveg" onChange={handleChange} className="form-control" required>
                    <option value="No">No</option>
                      <option value="Yes" >Yes</option>
                      
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Shown By</label>
                    <select id="Bathroom" name="rr_rental_detail_shown_by" onChange={handleChange} className="form-control" required>
                    <option value="" selected disabled></option>
                      <option value="Doesnot Matter">Doesnt Matter</option>
                      <option value="I will show">I Will Show</option>
                      <option value="Friends">Friends</option>
                      <option value="Neighbour">Neighbour</option>
                      <option value="Security">Security</option>
                      <option value="Tenents">Tenents</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Shown By Number</label>
                    <input type="number" name="rr_rental_detail_shown_by_number" onChange={handleChange} className="form-control" required />
                  </div>
                </div>
              </div>
            </div>}
            
            {/* Detailed Information */}
            {currentStep===4 &&  <div className="frm_submit_block">	
              <h3>Detailed Information</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Other Features (optional)</label>
                    <div className="o-features">
                      <ul className="no-ul-list third-row">
                        <li>
                          <input id="a-1" className="checkbox-custom" onChange={handleChange} name="rr_amenities_lift" type="checkbox"  checked={data.rr_amenities_lift}  />
                          <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                        </li>
                        <li>
                          <input id="a-13" className="checkbox-custom" onChange={handleChange} name="rr_amenities_ac" type="checkbox" value="true"  />
                          <label htmlFor="a-13" className="checkbox-custom-label">Air Condition</label>
                        </li>
                        <li>
                          <input id="a-14" className="checkbox-custom" onChange={handleChange} name="rr_amenities_intercom" type="checkbox" />
                          <label htmlFor="a-14" className="checkbox-custom-label">Inter Communication</label>
                        </li>
                        <li>
                          <input id="a-15" className="checkbox-custom" onChange={handleChange} name="rr_amenities_children_play_area" type="checkbox" />
                          <label htmlFor="a-15" className="checkbox-custom-label">Children Play Area</label>
                        </li>
                        <li>
                          <input id="a-16" className="checkbox-custom" onChange={handleChange} name="rr_amenities_servant_room" type="checkbox" />
                          <label htmlFor="a-16" className="checkbox-custom-label">Servent Room</label>
                        </li>
                        <li>
                          <input id="a-17" className="checkbox-custom" onChange={handleChange} name="rr_amenities_gas_pipeline" type="checkbox" />
                          <label htmlFor="a-17" className="checkbox-custom-label">Gas Pipeline</label>
                        </li>
                        <li>
                          <input id="a-18" className="checkbox-custom" onChange={handleChange} name="rr_amenities_rainwater_harvesting" type="checkbox" />
                          <label htmlFor="a-18" className="checkbox-custom-label">Rainwater Harvesting</label>
                        </li>
                        <li>
                          <input id="a-19" className="checkbox-custom" onChange={handleChange} name="rr_amenities_housekeepiing" type="checkbox" />
                          <label htmlFor="a-19" className="checkbox-custom-label">Housekeeping</label>
                        </li>
                        <li>
                          <input id="a-20" className="checkbox-custom" onChange={handleChange} name="rr_amenities_visitor_parking" type="checkbox" />
                          <label htmlFor="a-20" className="checkbox-custom-label">Visitor Parking</label>
                        </li>
                        <li>
                          <input id="a-21" className="checkbox-custom" onChange={handleChange} name="rr_amenities_club_house" type="checkbox" />
                          <label htmlFor="a-21" className="checkbox-custom-label">House Club</label>
                        </li>
                        <li>
                          <input id="a-22" className="checkbox-custom" onChange={handleChange} name="rr_amenities_swimming_pool" type="checkbox" value={true}  />
                          <label htmlFor="a-22" className="checkbox-custom-label">Swimming Pool</label>
                        </li>
                        <li>
                          <input id="a-50" className="checkbox-custom" name="rr_amenities_fire_safety" type="checkbox" />
                          <label htmlFor="a-50" className="checkbox-custom-label">Fire Safety</label>
                        </li>
                        <li>
                          <input id="a-2" className="checkbox-custom" name="rr_amenities_shopping_center" type="checkbox" />
                          <label htmlFor="a-2" className="checkbox-custom-label">Shopping Center</label>
                        </li>
                        <li>
                          <input id="a-3" className="checkbox-custom" name="rr_amenities_park" type="checkbox" />
                          <label htmlFor="a-3" className="checkbox-custom-label">Park</label>
                        </li>
                        <li>
                          <input id="a-4" className="checkbox-custom" name="rr_amenities_internet" type="checkbox" />
                          <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                        </li>
                        <li>
                          <input id="a-5" className="checkbox-custom" name="rr_amenities_sewage_treatment" type="checkbox" />
                          <label htmlFor="a-5" className="checkbox-custom-label">Sewage Treatment</label>
                        </li>
                        <li>
                          <input id="a-6" className="checkbox-custom" name="rr_amenities_power_backup" type="checkbox" />
                          <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                        </li>
                        <li>
                          <input id="a-7" className="checkbox-custom" name="rr_amenities_gated_security" type="checkbox" />
                          <label htmlFor="a-7" className="checkbox-custom-label">Gated Security</label>
                        </li>
                        <li>
                          <input id="a-8" className="checkbox-custom" name="rr_amenities_gym" type="checkbox" />
                          <label htmlFor="a-8" className="checkbox-custom-label">GYM</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
           {currentStep ===5  &&  <div className="frm_submit_block">	
              <h3>Gallery</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Upload Gallery</label>
                    <div className="dropzone dz-clickable primary-dropzone" >
                    <input type='file'  onChange={fileSelected}
           
            accept="image/*"
            multiple/>
                      <div className="dz-default dz-message">
                        <i className="ti-gallery" />
                        <span>Drag &amp; Drop To Change Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> }
           
            {/* <div className="form-group">
              <div className="col-lg-12 col-md-12">
                <button className="btn btn-theme" type="submit">Submit &amp; Preview</button>
              </div>
            </div> */}
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
          </div>
        </div>
      </div>
    </div>
  </form>
   
  </section>
  {/* ============================ Submit Property End ================================== */}
  {/* ============================ Call To Action ================================== */}
  <section className="theme-bg call_action_wrap-wrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call_action_wrap">
            <div className="call_action_wrap-head">
              <h3>Do You Have Questions ?</h3>
              <span>We'll help you to grow your career and growth.</span>
            </div>
            <a href="#" className="btn btn-call_action_wrap">Contact Us Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============================ Call To Action End ================================== */}
  {/* ============================ Footer Start ================================== */}
  <footer className="dark-footer skin-dark-footer style-2">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="footer_widget">
              <img src="assets/img/logo-light.png" className="img-footer small mb-2" alt />
              <h4 className="extream mb-3">Do you need help with<br />anything?</h4>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="foot-news-last">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <div className="input-group-append">
                    <button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 ml-auto">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Layouts</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Home Page</a></li>
                    <li><a href="#">About Page</a></li>
                    <li><a href="#">Service Page</a></li>
                    <li><a href="#">Property Page</a></li>
                    <li><a href="#">Contact Page</a></li>
                    <li><a href="#">Single Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">All Sections</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Headers<span className="new">New</span></a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Attractive<span className="new">New</span></a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Footers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Company</h4>
                  <ul className="footer-menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Changelog<span className="update">Update</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <p className="mb-0">© 2021 RentUP. Designd By <a href="https://themezhub.com/">ThemezHub</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ============================ Footer End ================================== */}
  {/* Log In Modal */}
  <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
    <div className="modal-dialog modal-xl login-pop-form" role="document">
      <div className="modal-content overli" id="registermodal">
        <div className="modal-body p-0">
          <div className="resp_log_wrap">
            <div className="resp_log_thumb" style={{background: 'url(assets/img/log.jpg)no-repeat'}} />
            <div className="resp_log_caption">
              <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
              <div className="edlio_152">
                <ul className="nav nav-pills tabs_system center" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true"><i className="fas fa-sign-in-alt mr-2" />Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false"><i className="fas fa-user-plus mr-2" />Register</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                  <div className="login-form">
                    <form>
                      <div className="form-group">
                        <label>User Name</label>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                          <input type="password" className="form-control" />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="eltio_ol9">
                          <div className="eltio_k1">
                            <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                            <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                          </div>	
                          <div className="eltio_k2">
                            <a href="#">Lost Your Password?</a>
                          </div>	
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                  <div className="login-form">
                    <form>
                      <div className="form-group">
                        <label>Full Name</label>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email ID</label>
                        <div className="input-with-icon">
                          <input type="email" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                          <input type="password" className="form-control" />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="eltio_ol9">
                          <div className="eltio_k1">
                            <input id="dds" className="checkbox-custom" name="dds" type="checkbox" />
                            <label htmlFor="dds" className="checkbox-custom-label">By using the website, you accept the terms and conditions</label>
                          </div>	
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal */}
  <a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
</div>

  )
}

export default ResidentialRent