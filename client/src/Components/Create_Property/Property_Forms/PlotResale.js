import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../../context/PropertyContext';
import Navbar from '../../Header/Navbar';
import LocationPicker from './LocationPicker';

const PlotResale = () => {
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(1);
  const history = useNavigate()

  const [data, setdata] = useState({

    ps_detail_description: "",
    ps_detail_plot_length: "",
    ps_detail_plot_width: "",
    ps_detail_width_of_facing_road: "",
    ps_detail_has_boundary: false,
    ps_detail_inside_gated_project: false,

    ps_rules_allowed_floors: "",

    ps_location_state: "",
    ps_location_city: "",
    ps_location_latitiude: "",
    ps_location_longitude: "",

    ps_sale_detail_price: "",
    ps_sale_detail_available_from: "",
    ps_sale_detail_is_negotiable: false,
    ps_sale_detail_currently_under_loan: false,

    ps_amenities_water: false,
    ps_amenities_sewage_connection: false,
    ps_amenities_gated_security: false,
    ps_amenities_electricity_connection: false,

    ps_info_ownership: "",
    ps_info_khata_certificate_is_available: false,
    ps_info_conversion_certificate_is_available: false,
    ps_info_sale_deed_certificate_is_available: false,
    ps_info_encumbrance_certificate_is_available: false,
    ps_info_is_rera_approved: false,


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
    formData.append("ps_detail_description", data.ps_detail_description)
    formData.append("ps_detail_plot_length", data.ps_detail_plot_length)
    formData.append("ps_detail_plot_width", data.ps_detail_plot_width)
    formData.append("ps_detail_width_of_facing_road", data.ps_detail_width_of_facing_road)
    formData.append("ps_detail_has_boundary", data.ps_detail_has_boundary)
    formData.append("ps_detail_inside_gated_project", data.ps_detail_inside_gated_project)

    formData.append("ps_rules_allowed_floors", data.ps_rules_allowed_floors)

    formData.append("ps_location_state", data.ps_location_state)
    formData.append("ps_location_city", data.ps_location_city)
    formData.append("ps_location_latitiude", data.ps_location_latitiude)
    formData.append("ps_location_longitude", data.ps_location_longitude)

    formData.append("ps_sale_detail_price", data.ps_sale_detail_price)
    formData.append("ps_sale_detail_available_from", data.ps_sale_detail_available_from)
    formData.append("ps_sale_detail_is_negotiable", data.ps_sale_detail_is_negotiable)
    formData.append("ps_sale_detail_currently_under_loan", data.ps_sale_detail_currently_under_loan)

    formData.append("ps_amenities_water", data.ps_amenities_water)
    formData.append("ps_amenities_sewage_connection", data.ps_amenities_sewage_connection)
    formData.append("ps_amenities_gated_security", data.ps_amenities_gated_security)
    formData.append("ps_amenities_electricity_connection", data.ps_amenities_electricity_connection)

    formData.append("ps_info_ownership", data.ps_info_ownership)
    formData.append("ps_info_khata_certificate_is_available", data.ps_info_khata_certificate_is_available)
    formData.append("ps_info_conversion_certificate_is_available", data.ps_info_conversion_certificate_is_available)
    formData.append("ps_info_sale_deed_certificate_is_available", data.ps_info_sale_deed_certificate_is_available)
    formData.append("ps_info_encumbrance_certificate_is_available", data.ps_info_encumbrance_certificate_is_available)
    formData.append("ps_info_is_rera_approved", data.ps_info_is_rera_approved)

    console.log(formData)
    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    const responce = await axios.post(`${host}/api/property/add-plot-prop`, formData, {
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
                {currentStep===1 && <> <div className="frm_submit_block">
                    <h3>Basic Information</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Property Title<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                          <input type="text" name="ps_detail_description" onChange={handleChange}  value={data.ps_detail_description}
                           className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Plot Length (.ft)</label>
                          <input type="number" name="ps_detail_plot_length" onChange={handleChange}  value={data.ps_detail_plot_length} className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Plot Width (.ft)</label>
                          <input type="number" name="ps_detail_plot_width" onChange={handleChange}  value={data.ps_detail_plot_width} className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Width of Facing Road (.ft)</label>
                          <input type="number" name="ps_detail_width_of_facing_road" onChange={handleChange}  value={data.ps_detail_width_of_facing_road} className="form-control" />
                        </div>
                        <div className="form-group col-md-12 py-3">
                          <ul className="no-ul-list third-row">
                            <li>
                              <input id="a-7" className="checkbox-custom" onChange={handleChange}  checked={data.ps_detail_has_boundary} name="ps_detail_has_boundary" type="checkbox" />
                              <label htmlFor="a-7" className="checkbox-custom-label">Boundary</label>
                            </li>
                            <li>
                              <input id="a-8" className="checkbox-custom" onChange={handleChange}  checked={data.ps_detail_inside_gated_project} name="ps_detail_inside_gated_project" type="checkbox" />
                              <label htmlFor="a-8" className="checkbox-custom-label">Gated Security</label>
                            </li>
                            <li>
                              <input hidden id="a-8" className="checkbox-custom"  type="checkbox" />
                              <label hidden htmlFor="a-8" className="checkbox-custom-label">Gated Security</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div></>}
                  {currentStep === 2 && <div className="frm_submit_block">
                    <h3>Location</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                     
                        <div className="form-group col-md-12">
                          <LocationPicker handleChange={handleChange}  name='ps_location_city'/>
                        </div>


                      </div>
                    </div>
                  </div>}
                 
                  
             {currentStep===3 && <>  <div className="frm_submit_block">
                    <h3>Rules</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Allowed Floors</label>
                          <input type="number" onChange={handleChange}  value={data.ps_rules_allowed_floors} className="form-control h-120" name="ps_rules_allowed_floors" />
                        </div>
                      </div>
                    </div>
                  </div></>}
                
                  {/* Detailed Information */}
                  {currentStep===4 && <> <div className="frm_submit_block">
                    <h3>Sale Detailed</h3>
                    <div className="frm_submit_wrap">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Sale</label>
                          <input type="number" onChange={handleChange}  value={data.ps_sale_detail_price} className="form-control h-120" name="ps_sale_detail_price" />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Available From</label>
                          <input type="date" className="form-control h-120" onChange={handleChange}  value={data.ps_sale_detail_available_from} name="ps_sale_detail_available_from" />
                        </div>
                        <div className="form-group col-md-12 py-3">
                          <ul className="no-ul-list third-row">
                            <li>
                              <input id="a-9" className="checkbox-custom" onChange={handleChange}  checked={data.ps_sale_detail_is_negotiable} name="ps_sale_detail_is_negotiable" type="checkbox" />
                              <label htmlFor="a-9" className="checkbox-custom-label">Negotiable</label>
                            </li>
                            <li>
                              <input id="a-10" className="checkbox-custom"   onChange={handleChange}  checked={data.ps_sale_detail_currently_under_loan} name="ps_sale_detail_currently_under_loan" type="checkbox" />
                              <label htmlFor="a-10" className="checkbox-custom-label">Currently Under Loan</label>
                            </li>
                            <li>
                              <input id="a-10" hidden className="checkbox-custom" name="ps_sale_detail_currently_under_loan" type="checkbox" />
                              <label htmlFor="a-10" hidden className="checkbox-custom-label">Currently Under Loan</label>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Other Features (optional)</label>
                          <div className="o-features">
                            <ul className="no-ul-list third-row">
                              <li>
                                <input id="a-1" className="checkbox-custom" onChange={handleChange}  checked={data.ps_amenities_water} name="ps_amenities_water" type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">Water</label>
                              </li>
                              <li>
                                <input id="a-2" className="checkbox-custom" onChange={handleChange}  checked={data.ps_amenities_sewage_connection} name="ps_amenities_sewage_connection" type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">Sewage Connection</label>
                              </li>
                              <li>
                                <input id="a-3" className="checkbox-custom" onChange={handleChange}  checked={data.ps_amenities_gated_security} name="ps_amenities_gated_security" type="checkbox" />
                                <label htmlFor="a-3" className="checkbox-custom-label">Gated Security</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom" onChange={handleChange}  checked={data.ps_amenities_electricity_connection} name="ps_amenities_electricity_connection" type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">Electricity Connection</label>
                              </li>
                              <li>
                                <input id="a-4" className="checkbox-custom " hidden  name="ps_amenities_electricity_connection" type="checkbox" />
                                <label htmlFor="a-4" hidden className="checkbox-custom-label">Electricity Connection</label>
                              </li>
                              <li>
                                <input id="a-4" hidden className="checkbox-custom " name="ps_amenities_electricity_connection" type="checkbox" />
                                <label htmlFor="a-4" hidden className="checkbox-custom-label">Electricity Connection</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* PS INFO */}
                        <div className="frm_submit_block">
                          <h3>PS INFO</h3>
                          <div className="frm_submit_wrap">
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Ownership</label>
                                <select id="status" name="ps_info_ownership" onChange={handleChange}  value={data.ps_info_ownership} className="form-control">
                                  <option value>&nbsp;</option>
                                  <option value="Freehold">Freehold</option>
                                  <option value="Leasehold">Leasehold</option>
                                  <option value="Co-Operative Society">Co-Operative Society</option>
                                  <option value="Power of Attorney">Power of Attorney</option>
                                </select>
                              </div>
                              <ul className="no-ul-list third-row">
                                <li>
                                  <input id="a-5" className="checkbox-custom" onChange={handleChange}  checked={data.ps_info_khata_certificate_is_available} name="ps_info_khata_certificate_is_available" type="checkbox" />
                                  <label htmlFor="a-5" className="checkbox-custom-label">Khata Certificate is Available</label>
                                </li>
                                <li>
                                  <input id="a-6" className="checkbox-custom" onChange={handleChange}  checked={data.ps_info_conversion_certificate_is_available} name="ps_info_conversion_certificate_is_available" type="checkbox" />
                                  <label htmlFor="a-6" className="checkbox-custom-label">Conversion Certificate is Available</label>
                                </li>
                                <li>
                                  <input id="a-7" className="checkbox-custom" onChange={handleChange}  checked={data.ps_info_sale_deed_certificate_is_available}  name="ps_info_sale_deed_certificate_is_available" type="checkbox" />
                                  <label htmlFor="a-7" className="checkbox-custom-label">Sale Deed Certificate is Available</label>
                                </li>
                                <li>
                                  <input id="a-11" className="checkbox-custom" onChange={handleChange}  checked={data.ps_info_encumbrance_certificate_is_available} name="ps_info_encumbrance_certificate_is_available" type="checkbox" />
                                  <label htmlFor="a-11" className="checkbox-custom-label">Encumbrance Certificate is Available</label>
                                </li>
                                <li>
                                  <input id="a-12" className="checkbox-custom" onChange={handleChange}  checked={data.ps_info_is_rera_approved}  name="ps_info_is_rera_approved" type="checkbox" />
                                  <label htmlFor="a-12" className="checkbox-custom-label">Rera Approved</label>
                                </li>
                                <li>
                                  <input hidden id="a-13" className="checkbox-custom" name="ps_info_is_rera_approved" type="checkbox" />
                                  <label hidden htmlFor="a-13" className="checkbox-custom-label">Rera Approved</label>
                                </li>
                              </ul></div>
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
                <div className="resp_log_thumb" style={{ background: 'url(assets/img/log.jpg)no-repeat' }} />
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

export default PlotResale