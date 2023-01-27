import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import LocationPicker from './LocationPicker';

const CommercialSale = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()

  const [data, setdata] = useState({

    cs_detail_description:"",
    cs_detail_property_type:"",
    cs_detail_building_type:"",
    cs_detail_prop_age :"",
    cs_detail_floor :"",
    cs_detail_total_floor:"",
    cs_detail_builtup_area :"",
    cs_detail_furnishing:"",
    
    cs_location_state:"",
    cs_location_city:"",
    cs_location_latitiude:"",
    cs_location_longitude:"",
    cs_location_iframe:"",
    
    cs_resale_details_exp_price:"",
    cs_resale_details_maintenance:"",
    cs_resale_details_available_from:"",
    
    cs_amenities_power_backup :false,
    cs_amenities_lift:false,
    cs_amenities_parking:false,
    cs_amenities_washroom:false,
    cs_amenities_water_storage :false,
    cs_amenities_security:false,
    cs_amenities_wifi:false,
   
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
    formData.append("cs_detail_description",data.cs_detail_description)
    formData.append("cs_detail_property_type",data.cs_detail_property_type)
    formData.append("cs_detail_building_type",data.cs_detail_building_type)
    formData.append("cs_detail_prop_age",data.cs_detail_prop_age)
    formData.append("cs_detail_floor",data.cs_detail_floor)
    formData.append("cs_detail_total_floor",data.cs_detail_total_floor)
    formData.append("cs_detail_builtup_area",data.cs_detail_builtup_area)
    formData.append("cs_detail_furnishing",data.cs_detail_furnishing)
    
    formData.append("cs_location_state",data.cs_location_state)
    formData.append("cs_location_city",data.cs_location_city)
    formData.append("cs_location_latitiude",data.cs_location_latitiude)
    formData.append("cs_location_longitude",data.cs_location_longitude)
    formData.append("cs_location_iframe",data.cs_location_iframe)
    
    formData.append("cs_resale_details_exp_price",data.cs_resale_details_exp_price)
    formData.append("cs_resale_details_maintenance",data.cs_resale_details_maintenance)
    formData.append("cs_resale_details_available_from",data.cs_resale_details_available_from)
    
    formData.append("cs_amenities_power_backup",data.cs_amenities_power_backup)
    formData.append("cs_amenities_lift",data.cs_amenities_lift)
    formData.append("cs_amenities_parking",data.cs_amenities_parking)
    formData.append("cs_amenities_washroom",data.cs_amenities_washroom)
    formData.append("cs_amenities_water_storage",data.cs_amenities_water_storage)
    formData.append("cs_amenities_security",data.cs_amenities_security)
    formData.append("cs_amenities_wifi",data.cs_amenities_security)

    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-cms-prop`, formData, {
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
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* ============================ Page Title Start================================== */}
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
                  {currentStep === 1 && <div className="frm_submit_block">
                    <h3>Basic Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Property Title<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                          <input type="text" name="cs_detail_description" onChange={handleChange} value={data.cs_detail_description} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Property Type</label>
                          <select id="ptypes" name="cs_detail_property_type" onChange={handleChange} value={data.cs_detail_property_type} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Office Space">Office Space</option>
                            <option value="Co-Working">Co-Working</option>
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
                          <input type="text" name="cs_detail_builtup_area" onChange={handleChange} value={data.cs_detail_builtup_area} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Building Type</label>
                          <select id="bedrooms" name="cs_detail_building_type" onChange={handleChange} value={data.cs_detail_building_type} className="form-control">
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
                          <select id="bathrooms" name="cs_detail_prop_age" onChange={handleChange} value={data.cs_detail_prop_age} className="form-control">
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
                          <select id="bathrooms" name="cs_detail_floor" onChange={handleChange} value={data.cs_detail_floor} className="form-control">
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
                          <select id="bathrooms" name="cs_detail_total_floor" onChange={handleChange} value={data.cs_detail_total_floor} className="form-control">
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
                          <label>Furnishing</label>
                          <select id="bathrooms" name="cs_detail_furnishing" onChange={handleChange} value={data.cs_detail_furnishing} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
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
                          <LocationPicker handleChange={handleChange}  name='cs_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}
                  {currentStep === 3 && <>    <div className="frm_submit_block">
                    <h3>Resale Detailed</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Resale</label>
                          <input type="number" className="form-control h-120" onChange={handleChange} value={data.cs_resale_details_exp_price} name="cs_resale_details_exp_price" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Maintenance</label>
                          <select id="bage" name="cs_resale_details_maintenance" onChange={handleChange} value={data.cs_resale_details_maintenance} className="form-control">
                            <option value>&nbsp;</option>
                            <option value="Maintenance Included">Maintenance Included</option>
                            <option value="Maintenance Extra">Maintenance Extra</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Available From</label>
                          <input type="date" className="form-control h-120" onChange={handleChange} value={data.cs_resale_details_available_from} name="cs_resale_details_available_from" />
                        </div>
                        <div className="form-group col-md-12">
                          <label>Other Features (optional)</label>
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-1" className="checkbox-custom" name="cs_amenities_power_backup" onChange={handleChange} checked={data.cs_amenities_power_backup} type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">Power Backup</label>
                              </li>
                              <li>
                                <input id="a-2" className="checkbox-custom" name="cs_amenities_lift" onChange={handleChange} checked={data.cs_amenities_lift} type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">Lift</label>
                              </li>
                              <li>
                                <input id="a-3" className="checkbox-custom" name="cs_amenities_parking" onChange={handleChange} checked={data.cs_amenities_parking} type="checkbox" />
                                <label htmlFor="a-3" className="checkbox-custom-label">Parking</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom" name="cs_amenities_washroom" onChange={handleChange} checked={data.cs_amenities_washroom} type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">Washroom</label>
                              </li>
                              <li>
                                <input id="a-5" className="checkbox-custom" name="cs_amenities_water_storage" onChange={handleChange} checked={data.cs_amenities_water_storage} type="checkbox" />
                                <label htmlFor="a-5" className="checkbox-custom-label">Water Storage</label>
                              </li>
                              <li>
                                <input id="a-6" className="checkbox-custom" name="cs_amenities_security" onChange={handleChange} checked={data.cs_amenities_security} type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">Security</label>
                              </li>
                              <li>
                                <input id="a-7" className="checkbox-custom" name="cs_amenities_wifi" onChange={handleChange} checked={data.cs_amenities_power_wifi} type="checkbox" />
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
  <Footer/>
    </div>

  )
}

export default CommercialSale