import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import LocationPicker from './LocationPicker';

const CommercialRent = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()

  const [data, setdata] = useState({

    cr_detail_description:"",
    cr_detail_property_type:"",
    cr_detail_building_type :"",
    cr_detail_prop_age:"",
    cr_detail_floor:"",
    cr_detail_total_floor:"",
    cr_detail_builtup_area:"",
    cr_detail_furnishing :"",
    
    cr_location_state:"",
    cr_location_city:"",
    cr_location_latitiude:"",
    cr_location_longitude:"",
    cr_location_iframe:"",
    
    cr_rental_detail_rent :"",
    cr_rental_detail_exp_deposit:"",
    cr_rental_detail_is_nogotiable:"",
    cr_rental_detail_monthly_maintenance :"",
    cr_rental_detail_avail_from:"",
    cr_rental_detail_lease_duration:"",
    cr_rental_detail_lockin_period  :"",
    
    cr_amenities_power_backup :false,
    cr_amenities_lift:false,
    cr_amenities_parking:false,
    cr_amenities_washroom:false,
    cr_amenities_water_storage :false,
    cr_amenities_security:false,
    cr_amenities_wifi:false,
   
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
    formData.append("cr_detail_description",data.cr_detail_description)
      formData.append("cr_detail_property_type ",data.cr_detail_property_type)
      formData.append("cr_detail_building_type",data.cr_detail_building_type)
      formData.append("cr_detail_prop_age",data.cr_detail_prop_age)
      formData.append("cr_detail_floor",data.cr_detail_floor)
      formData.append("cr_detail_total_floor",data.cr_detail_total_floor)
      formData.append("cr_detail_builtup_area ",data.cr_detail_builtup_area)
      formData.append("cr_detail_furnishing",data.cr_detail_furnishing)
      
      formData.append("cr_location_state",data.cr_location_state)
      formData.append("cr_location_city",data.cr_location_city)
      formData.append("cr_location_latitiude",data.cr_location_latitiude)
      formData.append("cr_location_longitude",data.cr_location_longitude)
      formData.append("cr_location_iframe",data.cr_location_iframe)
      
      formData.append("cr_rental_detail_rent",data.cr_rental_detail_rent)
      formData.append("cr_rental_detail_exp_deposit",data.cr_rental_detail_exp_deposit)
      formData.append("cr_rental_detail_is_nogotiable",data.cr_rental_detail_is_nogotiable)
      formData.append("cr_rental_detail_monthly_maintenance ",data.cr_rental_detail_monthly_maintenance)
      formData.append("cr_rental_detail_avail_from",data.cr_rental_detail_avail_from)
      formData.append("cr_rental_detail_lease_duration",data.cr_rental_detail_lease_duration)
      formData.append("cr_rental_detail_lockin_period",data.cr_rental_detail_lockin_period)
      
      formData.append("cr_amenities_power_backup",data.cr_amenities_power_backup)
      formData.append("cr_amenities_lift",data.cr_amenities_lift)
      formData.append("cr_amenities_parking",data.cr_amenities_parking)
      formData.append("cr_amenities_washroom",data.cr_amenities_washroom)
      formData.append("cr_amenities_water_storage",data.cr_amenities_water_storage)
      formData.append("cr_amenities_security",data.cr_amenities_security)
      formData.append("cr_amenities_wifi",data.cr_amenities_wifi)


    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-cmr-prop`, formData, {
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
                          <label>Property Title<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                          <input type="text" name="cr_detail_description" onChange={handleChange} value={data.cr_detail_description} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Property Type</label>
                          <select id="ptypes" name="cr_detail_property_type" onChange={handleChange} value={data.cr_detail_property_type} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Office Sspace">Office Space</option>
                            <option value="Co-Working">co-working</option>
                            <option value="Shop">Shop</option>
                            <option value="Showroom">Showroom</option>
                            <option value="Godown">Godown</option>
                            <option value="Warehouse">Warehouse</option>
                            <option value="Industrial Shed">Industrial Shed</option>
                            <option value="Industrial Building">Industrial Building</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Other Business">Other Business</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Builtup Area</label>
                          <input type="number" name="cr_detail_builtup_area" onChange={handleChange} value={data.cr_detail_builtup_area} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Building Type</label>
                          <select id="bedrooms" name="cr_detail_building_type onChange={handleChange} value={data.cr_detail_building_type}" className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Independent House">Independent House</option>
                            <option value="Business Park">Business Park</option>
                            <option value="Mall">Mall</option>
                            <option value="Standalone Building">Standalone Building</option>
                            <option value="Independent Shop">Independent Shop</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>property Age</label>
                          <select id="bathrooms" name="cr_detail_prop_age" onChange={handleChange} value={data.cr_detail_prop_age} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="0-10 yrs">0-10 yrs</option>
                            <option value="10-20 yrs">00-20 yrs</option>
                            <option value="20-30 yrs">20-30 yrs</option>
                            <option value="30-40 yrs">30-40 yrs</option>
                            <option value="40-50 yrs">40-50 yrs</option>
                            <option value="50+ yrs">50+ yrs</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Floor</label>
                          <select id="bathrooms" name="cr_detail_floor" onChange={handleChange} value={data.cr_detail_floor} className="form-control">
                            <option value>&nbsp;</option>
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
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Total Floor</label>
                          <select id="bathrooms" name="cr_detail_total_floor" onChange={handleChange} value={data.cr_detail_total_floor} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="0-10 floor">0-10 Floor</option>
                            <option value="10-20 floor">00-20 Floor</option>
                            <option value="20-30 floor">20-30 Floor</option>
                            <option value="30-40 floor">30-40 Floor</option>
                            <option value="40-50 floor">40-50 Floor</option>
                            <option value="50+ floor">50+ Floor</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Furnishing</label>
                          <select id="bathrooms" name="cr_detail_furnishing" onChange={handleChange} value={data.cr_detail_furnishing} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div></>}
                  {currentStep === 2 && <div className="frm_submit_block">
                    <h3>Location</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                     
                        <div className="form-group col-md-12">
                          <LocationPicker handleChange={handleChange}  name='cr_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}

                  {currentStep === 3 && <> <div className="frm_submit_block">
                    <h3>Rental Detailed</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Rent</label>
                          <input type="number" className="form-control h-120" onChange={handleChange} value={data.cr_rental_detail_rent} name="cr_rental_detail_rent" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Expected Deposit</label>
                          <input type="number" className="form-control h-120" name="cr_rental_detail_exp_deposit" onChange={handleChange} value={data.cr_rental_detail_exp_deposit} />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Negotiable</label>
                          <select id="bage" name="cr_rental_detail_is_nogotiable" onChange={handleChange} value={data.cr_rental_detail_is_nogotiable} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Monthly Maintenance</label>
                          <select id="bage" name="cr_rental_detail_monthly_maintenance" onChange={handleChange} value={data.cr_rental_detail_monthly_maintenance} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Maintenance Included">Maintenance Included</option>
                            <option value="Maintenance Extra">Maintenance Extra</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Available From</label>
                          <input type="date" className="form-control h-120" name="cr_rental_detail_avail_from" onChange={handleChange} value={data.cr_rental_detail_avail_from} />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Lease Duration</label>
                          <select id="garage" name="cr_rental_detail_lease_duration" onChange={handleChange} value={data.cr_rental_detail_lease_duration} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="0-10 yrs">0-10 yrs</option>
                            <option value="10-20 yrs">10-20 yrs</option>
                            <option value="20-30 yrs">20-30 yrs</option>
                            <option value="30-40 yrs">30-40 yrs</option>
                            <option value="40-50 yrs">40-50 yrs</option>
                            <option value="50+ yrs">50+ yrs</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Lockin Period</label>
                          <select id="garage" name="cr_rental_detail_lockin_period" onChange={handleChange} value={data.cr_rental_detail_lockin_period} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="0-10 yrs">0-10 yrs</option>
                            <option value="10-20 yrs">10-20 yrs</option>
                            <option value="20-30 yrs">20-30 yrs</option>
                            <option value="30-40 yrs">30-40 yrs</option>
                            <option value="40-50 yrs">40-50 yrs</option>
                            <option value="50+ yrs">50+ yrs</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Other Features (optional)</label>
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-1" className="checkbox-custom" name="cr_amenities_power_backup" onChange={handleChange} checked={data.cr_amenities_power_backup} type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">Power Backup</label>
                              </li>
                              <li>
                                <input id="a-2" className="checkbox-custom" onChange={handleChange} checked={data.cr_amenities_lift} name="cr_amenities_lift" type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">Lift</label>
                              </li>
                              <li>
                                <input id="a-3" className="checkbox-custom" onChange={handleChange} checked={data.cr_amenities_parking} name="cr_amenities_parking" type="checkbox" />
                                <label htmlFor="a-3" className="checkbox-custom-label">Parking</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom" name="cr_amenities_washroom" onChange={handleChange} checked={data.cr_amenities_washroom} type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">Washroom</label>
                              </li>
                              <li>
                                <input id="a-5" className="checkbox-custom" name="cr_amenities_water_storage" onChange={handleChange} checked={data.cr_amenities_water_storage} type="checkbox" />
                                <label htmlFor="a-5" className="checkbox-custom-label">Water Storage</label>
                              </li>
                              <li>
                                <input id="a-6" className="checkbox-custom" name="cr_amenities_security" onChange={handleChange} checked={data.cr_amenities_security} type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">Security</label>
                              </li>
                              <li>
                                <input id="a-7" className="checkbox-custom" name="cr_amenities_wifi" onChange={handleChange} checked={data.cr_amenities_wifi} type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">WiFi</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></>}
                  {currentStep === 4 && <div className="frm_submit_block">
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
                    {currentStep < 4 && (
                      <button type="button" className='float-right btn btn-dark' onClick={nextStep}>
                        Next
                      </button>
                    )}
                    {currentStep !== 1 && (
                      <button type="button" className='btn btn-dark float-start' onClick={prevStep}>
                        Previous
                      </button>
                    )}

                    {currentStep === 4 && (
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

export default CommercialRent