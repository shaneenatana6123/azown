import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import LocationPicker from './LocationPicker';

const ResidentialPg = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setdata] = useState({

    rpg_detail_description: "",
    rpg_detail_room_occupany: "",
    rpg_detail_room_deposit: "",
    rpg_detail_availablefor: "",
    rpg_detail_pref_guest: "",
    rpg_detail_available_from: "",
    rpg_detail_food_included: "",
    rpg_detail_gate_shut_time: "",
    rpg_detail_parking: "",

    rpg_detail_room_rent:"",

    rpg_rules_no_smoking:false,
    rpg_rules_no_guardian_stay:false,
    rpg_rules_no_girls_entry:false,
    rpg_rules_no_drinking:false,
    rpg_rules_no_non_veg:false,

    rpg_location_state: "",
    rpg_location_city: "",
    rpg_location_latitiude: "",
    rpg_location_longitude: "",
    rpg_location_iframe: "",


    rpg_amenities_cupboard: false,
    rpg_amenities_tv: false,
    rpg_amenities_bed: false,
    rpg_amenities_geyser: false,
    rpg_amenities_ac: false,
    rpg_amenities_attached_bathroom: false,
    rpg_amenities_laundry: false,
    rpg_amenities_room_cleaning: false,
    rpg_amenities_lift: false,
    rpg_amenities_wifi: false,
    rpg_amenities_power_backup: false,
    rpg_amenities_mess: false,
    rpg_amenities_fridge: false,
    rpg_amenities_mess_cooking: false,

  })
  const history = useNavigate()
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
    formData.append("rpg_detail_description", data.rpg_detail_description)
    formData.append("rpg_detail_room_occupany", data.rpg_detail_room_occupany)
    formData.append("rpg_detail_room_deposit", data.rpg_detail_room_deposit)
    formData.append("rpg_detail_availablefor", data.rpg_detail_availablefor)
    formData.append("rpg_detail_pref_guest", data.rpg_detail_pref_guest)
    formData.append("rpg_detail_available_from", data.rpg_detail_available_from)
    formData.append("rpg_detail_food_included", data.rpg_detail_food_included)
    formData.append("rpg_detail_gate_shut_time", data.rpg_detail_gate_shut_time)
    formData.append("rpg_detail_parking", data.rpg_detail_parking)
    formData.append("rpg_rules_no_girls_entry", data.rpg_rules_no_girls_entry)
    formData.append("rpg_rules_no_drinking", data.rpg_rules_no_drinking)
    formData.append("rpg_rules_no_non_veg", data.rpg_rules_no_non_veg)

    formData.append("rpg_detail_room_rent",data.rpg_detail_room_rent) 

    formData.append("rpg_location_state", data.rpg_location_state)
    formData.append("rpg_location_city", data.rpg_location_city)
    formData.append("rpg_location_latitiude", data.rpg_location_latitiude)
    formData.append("rpg_location_longitude", data.rpg_location_longitude)
    formData.append("rpg_location_iframe", data.rpg_location_iframe)

    formData.append("rpg_amenities_cupboard", data.rpg_amenities_cupboard)
    formData.append("rpg_amenities_tv", data.rpg_amenities_tv)
    formData.append("rpg_amenities_bed", data.rpg_amenities_bed)
    formData.append("rpg_amenities_geyser", data.rpg_amenities_geyser)
    formData.append("rpg_amenities_ac", data.rpg_amenities_ac)
    formData.append("rpg_amenities_attached_bathroom", data.rpg_amenities_attached_bathroom)
    formData.append("rpg_amenities_laundry", data.rpg_amenities_laundry)
    formData.append("rpg_amenities_room_cleaning", data.rpg_amenities_room_cleaning)
    formData.append("rpg_amenities_lift", data.rpg_amenities_lift)
    formData.append("rpg_amenities_wifi", data.rpg_amenities_wifi)
    formData.append("rpg_amenities_power_backup", data.rpg_amenities_power_backup)
    formData.append("rpg_amenities_mess", data.rpg_amenities_mess)
    formData.append("rpg_amenities_fridge", data.rpg_amenities_fridge)
    formData.append("rpg_amenities_mess_cooking", data.rpg_amenities_mess_cooking)
    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-rpg-prop`, formData, {
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
                  {currentStep === 1 && <> <div className="frm_submit_block">
                    <h3>Basic Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Property Title<a href className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                          <input type="text" name="rpg_detail_description" onChange={handleChange}  value={data.rpg_detail_description} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Room Occupany</label>
                          <select id="status" className="form-control" onChange={handleChange} value={data.rpg_detail_room_occupany}  name="rpg_detail_room_occupany">
                            <option value>&nbsp;</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Prefered Guest</label>
                          <select id="ptypes" name="rpg_detail_pref_guest" onChange={handleChange} value={data.rpg_detail_pref_guest}   className="form-control">
                            <option value>&nbsp;</option>
                            <option value="working professional">Working Professional</option>
                            <option value="student">Student</option>
                            <option value="both">Both</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Rent</label>
                          <input type="number" name="rpg_detail_room_rent" onChange={handleChange} value={data.rpgde}   className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Room Deposit</label>
                          <input name="rpg_detail_room_deposit" type="number" onChange={handleChange} value={data.rpg_detail_room_deposit}   className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Available For</label>
                          <select id="bedrooms" name="rpg_detail_availablefor" onChange={handleChange} value={data.rpg_detail_availablefor}   className="form-control">
                            <option value>&nbsp;</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="anyone">Anyone</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Parking</label>
                          <select id="bathrooms" name="rpg_detail_parking" onChange={handleChange} value={data.rpg_detail_parking}   className="form-control">
                            <option value>&nbsp;</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="both">Both</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Available From</label>
                          <input name="rpg_detail_available_from" onChange={handleChange} value={data.rpg_detail_available_from}   type="date" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Gate Close Time</label>
                          <input name="rpg_detail_gate_shut_time" onChange={handleChange} value={data.rpg_detail_gate_shut_time}   type="time" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div></>}
                  {currentStep === 2 && <div className="frm_submit_block">
                    <h3>Location</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                     
                        <div className="form-group col-md-12">
                          <LocationPicker handleChange={handleChange}  name='rpg_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}
                  {currentStep === 3 && <> <div className="frm_submit_block">
                    <h3>Detailed Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Other Features</label>
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-6" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_cupboard}    name="rpg_amenities_cupboard" type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">Cupboard</label>
                              </li>
                              <li>
                                <input id="a-7" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_tv} name="rpg_amenities_tv" type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">TV</label>
                              </li>
                              <li>
                                <input id="a-8" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_bed} name="rpg_amenities_bed" type="checkbox" />
                                <label htmlFor="a-8" className="checkbox-custom-label">Bed</label>
                              </li>
                              <li>
                                <input id="a-9" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_geyser} name="rpg_amenities_geyser" type="checkbox" />
                                <label htmlFor="a-9" className="checkbox-custom-label">Geyser</label>
                              </li>
                              <li>
                                <input id="a-10" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_ac} name="rpg_amenities_ac" type="checkbox" />
                                <label htmlFor="a-10" className="checkbox-custom-label">AC</label>
                              </li>
                              <li>
                                <input id="a-11" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_attached_bathroom} name="rpg_amenities_attached_bathroom" type="checkbox" />
                                <label htmlFor="a-11" className="checkbox-custom-label">Attached Bathroom</label>
                              </li>
                              <li>
                                <input id="a-12" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_laundry} name="rpg_amenities_laundry" type="checkbox" />
                                <label htmlFor="a-12" className="checkbox-custom-label">Laundry</label>
                              </li>
                              <li>
                                <input id="a-13" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_room_cleaning} name="rpg_amenities_room_cleaning" type="checkbox" />
                                <label htmlFor="a-13" className="checkbox-custom-label">Room Cleaning</label>
                              </li>
                              {/* <li>
                                <input id="a-14" className="checkbox-custom" onChange={handleChange} checked={} name="rpg_amenities_warden_facility" type="checkbox" />
                                <label htmlFor="a-14" className="checkbox-custom-label">Warden Facility</label>
                              </li> */}
                              
                              <li>
                                <input id="a-16" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_lift} name="rpg_amenities_lift" type="checkbox" />
                                <label htmlFor="a-16" className="checkbox-custom-label">Lift</label>
                              </li>
                              <li>
                                <input id="a-17" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_wifi} name="rpg_amenities_wifi" type="checkbox" />
                                <label htmlFor="a-17" className="checkbox-custom-label">WiFi</label>
                              </li>
                              <li>
                                <input id="a-18" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_power_backup} name="rpg_amenities_power_backup" type="checkbox" />
                                <label htmlFor="a-18" className="checkbox-custom-label">Power Bakup</label>
                              </li>
                              <li>
                                <input id="a-19" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_mess} name="rpg_amenities_mess" type="checkbox" />
                                <label htmlFor="a-19" className="checkbox-custom-label">Mess</label>
                              </li>
                              <li>
                                <input id="a-20" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_fridge} name="rpg_amenities_fridge" type="checkbox" />
                                <label htmlFor="a-20" className="checkbox-custom-label">Mess</label>
                              </li>
                              <li>
                                <input id="a-21" className="checkbox-custom" onChange={handleChange} checked={data.rpg_amenities_mess_cooking} name="rpg_amenities_mess_cooking" type="checkbox" />
                                <label htmlFor="a-21" className="checkbox-custom-label">Mess Cooking</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  </>}
                  {currentStep === 4 && <><div className="frm_submit_block">
                    <h3>Rules</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <ul className="no-ul-list third-row">
                          <li>
                            <input id="a-1" className="checkbox-custom" onChange={handleChange} checked={data.rpg_rules_no_smoking}  name="rpg_rules_no_smoking" type="checkbox" />
                            <label htmlFor="a-1" className="checkbox-custom-label">No Smoking</label>
                          </li>
                          <li>
                            <input id="a-2" className="checkbox-custom" onChange={handleChange} checked={data.rpg_rules_no_guardian_stay} name="rpg_rules_no_guardian_stay" type="checkbox" />
                            <label htmlFor="a-2" className="checkbox-custom-label">No Guardian Stay</label>
                          </li>
                          <li>
                            <input id="a-3" className="checkbox-custom" onChange={handleChange} checked={data.rpg_rules_no_girls_entry} name="rpg_rules_no_girls_entry" type="checkbox" />
                            <label htmlFor="a-3" className="checkbox-custom-label">No Girls Entry</label>
                          </li>
                          <li>
                            <input id="a-4" className="checkbox-custom" onChange={handleChange} checked={data.rpg_rules_no_drinking}  name="rpg_rules_no_drinking" type="checkbox" />
                            <label htmlFor="a-4" className="checkbox-custom-label">No Drinking</label>
                          </li>
                          <li>
                            <input id="a-5" className="checkbox-custom" onChange={handleChange} checked={data.rpg_rules_no_non_veg}  name="rpg_rules_no_non_veg" type="checkbox" />
                            <label htmlFor="a-5" className="checkbox-custom-label">No Non-Veg</label>
                          </li>
                          <li>
                            <input hidden id="a-5" className="checkbox-custom" onChange={handleChange}   type="checkbox" />
                            <label hidden htmlFor="a-5" className="checkbox-custom-label">No Non-Veg</label>
                          </li>
                        </ul>
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
      {/* ============================ Submit Property End ================================== */}
      {/* ============================ Call To Action ================================== */}
      <Footer />

    </div>

  )
}

export default ResidentialPg