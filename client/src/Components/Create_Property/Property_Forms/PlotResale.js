import React, { useContext, useRef, useState } from 'react'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LocationPicker from './LocationPicker'
import propertyContext from '../../../context/PropertyContext'
import Footer from '../../Footer/Footer'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'

const PlotResale = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  if (!isLoaded) {
    return <h4>Loading....</h4>
  }
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  function handleStep(step,setFieldValue) {
    function handleLocation(e) {
      console.log(e.latLng.lat())
      setFieldValue('ps_location_latitiude', e.latLng.lat())
      setFieldValue('ps_location_longitude', e.latLng.lng())
    }
    switch (step) {

      case 0:
        return <>
          <div className="frm_submit_block">
            <h3>Basic Information</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Property Description<a href className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                  <Field type="text" name="ps_detail_description" className="form-control" />
                  <ErrorMessage name='ps_detail_description' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Plot Length (.ft)</label>
                  <Field type="number" name="ps_detail_plot_length" className="form-control" />
                  <ErrorMessage name='ps_detail_plot_length' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Plot Width (.ft)</label>
                  <Field type="number" name="ps_detail_plot_width" className="form-control" />
                  <ErrorMessage name='ps_detail_plot_width' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Width of Facing Road (.ft)</label>
                  <Field type="number" name="ps_detail_width_of_facing_road" className="form-control" />
                  <ErrorMessage name='ps_detail_width_of_facing_road' className='text-danger' component='div' />
                </div>




                <ul className="no-ul-list mt-2">
                  <li>
                    <Field id="a-99" className="checkbox-custom" name="ps_detail_has_boundary" type="checkbox" />
                    <label htmlFor="a-99" className="checkbox-custom-label">Lift</label>
                  </li>
                  <li>
                    <Field id="a-98" className="checkbox-custom" name="ps_detail_inside_gated_project" type="checkbox" />
                    <label htmlFor="a-98" className="checkbox-custom-label">Parking</label>
                  </li>
                </ul>


              </div>
            </div>
          </div></>
case 1:
  return <div className="frm_submit_block">
    <h3>Location</h3>
    <div className="frm_submit_wrap">
      <div className="form-row">
      <div className="form-group col-md-6">
            
           <Field name='ps_location_state' type='text' className='form-control' placeholder="Enter the Society" />
            <ErrorMessage name='ps_location_state' className='text-danger' component='div' />
          </div>

        <div className="form-group col-md-6">

          <Field name="ps_location_city">
            {({ values, field, form }) => (
              <div>
                <Autocomplete>
                  <input type='text' placeholder='Enter the Location' className='form-control' ref={originRef} required />

                </Autocomplete>
              </div>

            )}

          </Field>
        </div>
        <div className="form-group col-md-12">
          <LocationPicker onLocation={handleLocation} />
        </div>


      </div>
    </div>
  </div>
      case 2:
        return <div className="frm_submit_block">
          <h3>Rules</h3>
          <div className="frm_submit_wrap">


            <div className="o-features">
              <ul className="no-ul-list">
                <li>
                <label  className="checkbox-custom-label">Allowed Floor</label>
                  <Field  className="checkbox-custom" name="ps_rules_allowed_floors" type="number" />
               
                </li>
              </ul>
            </div>

          </div>
        </div>



      case 3:
        return <>
          <div className="frm_submit_block">
            <h3> land/Plot Details</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label> Land/Plot Price</label>
                  <Field type="number" name="ps_sale_detail_price" className="form-control" />
                  <ErrorMessage name='ps_sale_detail_price' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="ps_sale_detail_available_from" className="form-control" />
                  <ErrorMessage name='ps_sale_detail_available_from' className='text-danger' component='div' />
                </div>

                <div className="o-features">
                  <ul className="no-ul-list px-3">
                    <li>
                      <Field id="a-101" className="checkbox-custom" name="ps_sale_detail_is_negotiable" type="checkbox" />
                      <label htmlFor="a-101" className="checkbox-custom-label">Negotiable</label>
                    </li>
                    <li>
                      <Field id="a-102" className="checkbox-custom" name="ps_sale_detail_currently_under_loan" type="checkbox" />
                      <label htmlFor="a-102" className="checkbox-custom-label">Currently Under Loan</label>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </>
      case 4:
        return <>
          <div className="frm_submit_block">
            <h3>Detailed Information</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Other Features (optional)</label>
                  <div className="o-features">
                    <div className="form-group col-md-6">
                      <label>Building Type</label>

                      <Field as="select" className="form-control" name="ps_info_ownership">
                        <option value={undefined} selected>Select</option>
                        <option value="Freehold">Freehold</option>
                        <option value="Leasehold">Leasehold</option>
                        <option value="Co-Operative Society">Co-Operative Society</option>
                        <option value="Power of Attorney">Power of Attorney</option>
                      </Field>
                      <ErrorMessage name='ps_info_ownership' className='text-danger' component='div' />
                    </div>
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="ps_amenities_water" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Water</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="ps_amenities_sewage_connection" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Sewage Connection</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="ps_amenities_gated_security" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Gated Security</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="ps_amenities_electricity_connection" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Electricity  Connection</label>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      case 5:
        return <>
          <div className="frm_submit_block">
            <h3>Property Information</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <div className="o-features">
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="ps_info_khata_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Khata Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="ps_info_conversion_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Conversion Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="ps_info_sale_deed_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Deed Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="ps_info_encumbrance_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Encumbrance Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-4567" className="checkbox-custom" name="ps_info_is_rera_approved" type="checkbox" />
                        <label htmlFor="a-4567" className="checkbox-custom-label">Rera Approved</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      case 6:
        return <> <div className="frm_submit_block">
          <h3>Gallery</h3>
          <div className="frm_submit_wrap">
            <div className="form-row">
              <div className="form-group col-md-12">
                <label>Upload Gallery</label>
                <div className="dropzone dz-clickable primary-dropzone" >
                  <Field type='file' name='file' onChange={fileSelected}
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
        </div></>

      default:
        break;
    }
  }



  const Schema = [Yup.object().shape({
    ps_detail_description: Yup.string().required('This Field is Required'),
    ps_detail_plot_length: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_plot_width: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_width_of_facing_road: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_has_boundary: Yup.boolean(),
    ps_detail_inside_gated_project: Yup.boolean(),

  }),
  Yup.object().shape({
    ps_location_city: Yup.string(),
    ps_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    ps_rules_allowed_floors: Yup.number().required('Required').positive("Please Enter the Positive Value")
  }),
  
  Yup.object().shape({
    ps_sale_detail_price: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_sale_detail_available_from: Yup.string().required('This Field is Required'),
    ps_sale_detail_is_negotiable: Yup.boolean(),
    ps_sale_detail_currently_under_loan: Yup.boolean(),
  }),
  Yup.object().shape({
    ps_amenities_water: Yup.boolean(),
    ps_amenities_sewage_connection: Yup.boolean(),
    ps_amenities_gated_security: Yup.boolean(),
    ps_amenities_electricity_connection: Yup.boolean(),
  }),
  Yup.object().shape({
    ps_info_ownership: Yup.string().required('This Field is Required'),
    ps_info_khata_certificate_is_available: Yup.boolean(),
    ps_info_conversion_certificate_is_available: Yup.boolean(),
    ps_info_sale_deed_certificate_is_available: Yup.boolean(),
    ps_info_encumbrance_certificate_is_available: Yup.boolean(),
  }),
  Yup.object().shape({


  }),



  ]







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
                  <li className="breadcrumb-item"><a href>Home</a></li>
                  <li className="breadcrumb-item"><a href>Create Property</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Submit Your Property</li>
                </ol>
                <h2 className="breadcrumb-title">Land/Plot Property</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="submit-page p-0">

                <Formik
                  initialValues={{
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

                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('ps_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})
                    }else if (currentStep === 6) {
                      const formData = new FormData();
                      formData.append("ps_detail_description", values.ps_detail_description)
                      formData.append("ps_detail_plot_length", values.ps_detail_plot_length)
                      formData.append("ps_detail_plot_width", values.ps_detail_plot_width)
                      formData.append("ps_detail_width_of_facing_road", values.ps_detail_width_of_facing_road)
                      formData.append("ps_detail_has_boundary", values.ps_detail_has_boundary)
                      formData.append("ps_detail_inside_gated_project", values.ps_detail_inside_gated_project)

                      formData.append("ps_rules_allowed_floors", values.ps_rules_allowed_floors)

                      formData.append("ps_location_state", values.ps_location_state)
                      formData.append("ps_location_city", values.ps_location_city)
                      formData.append("ps_location_latitiude", values.ps_location_latitiude)
                      formData.append("ps_location_longitude", values.ps_location_longitude)

                      formData.append("ps_sale_detail_price", values.ps_sale_detail_price)
                      formData.append("ps_sale_detail_available_from", values.ps_sale_detail_available_from)
                      formData.append("ps_sale_detail_is_negotiable", values.ps_sale_detail_is_negotiable)
                      formData.append("ps_sale_detail_currently_under_loan", values.ps_sale_detail_currently_under_loan)

                      formData.append("ps_amenities_water", values.ps_amenities_water)
                      formData.append("ps_amenities_sewage_connection", values.ps_amenities_sewage_connection)
                      formData.append("ps_amenities_gated_security", values.ps_amenities_gated_security)
                      formData.append("ps_amenities_electricity_connection", values.ps_amenities_electricity_connection)

                      formData.append("ps_info_ownership", values.ps_info_ownership)
                      formData.append("ps_info_khata_certificate_is_available", values.ps_info_khata_certificate_is_available)
                      formData.append("ps_info_conversion_certificate_is_available", values.ps_info_conversion_certificate_is_available)
                      formData.append("ps_info_sale_deed_certificate_is_available", values.ps_info_sale_deed_certificate_is_available)
                      formData.append("ps_info_encumbrance_certificate_is_available", values.ps_info_encumbrance_certificate_is_available)
                      formData.append("ps_info_is_rera_approved", values.ps_info_is_rera_approved)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.post(`${host}/api/property/add-plot-prop`, formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "auth-token": localStorage.getItem('token'),
                        },
                      }).then((response) => {
                        console.log(response);
                        setSubmitting(false);
                        history('/')
                      })
                        .catch((error) => {
                          console.error(error);
                          setSubmitting(false);
                        });

                    } else {

                      setCurrentStep(currentStep + 1);
                      setSubmitting(false);
                      console.log(values)
                      setTouched({})
                    }
                  }
                  }
                >
                  {({ values, isSubmitting,setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep,setFieldValue)}
                      <button type='submit' className='btn btn-dark float-right'  >{currentStep === 6 ? 'Submit' : 'Next'}</button>
                      <button type='button' onClick={prevStep} className='btn btn-dark float-left' disabled={currentStep === 0}>Prev</button>
                    </Form>

                  )}

                </Formik>
              </div>
            </div>
          </div>
        </div>


      </section >
      <Footer />
    </div >

  )
}

export default PlotResale