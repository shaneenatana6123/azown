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

const CommercialSale = () => {
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
  function handleStep(step, setFieldValue) {
    function handleLocation(e) {
      console.log(e.latLng.lat())
      setFieldValue('cs_location_latitiude', e.latLng.lat())
      setFieldValue('cs_location_longitude', e.latLng.lng())
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
                  <Field type="text" name="cs_detail_description" className="form-control" />
                  <ErrorMessage name='cs_detail_description' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Property Type</label>

                  <Field as="select" className="form-control" name="cs_detail_property_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Office Space">Office Space</option>
                    <option value="Independent house villa">Independent house villa</option>
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
                  </Field>
                  <ErrorMessage name='cs_detail_property_type' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Building Type</label>

                  <Field as="select" className="form-control" name="cs_detail_building_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Business Park">Business Park</option>
                    <option value="Mall">Mall</option>
                    <option value="Standalone Building">Standalone Building</option>
                    <option value="Independent Shop">Independent Shop</option>
                  </Field>
                  <ErrorMessage name='cs_detail_building_type' className='text-danger' component='div' />
                </div>


                <div className="form-group col-md-6">
                  <label>Floor</label>
                  <Field type="number" name="cs_detail_floor" className="form-control" />
                  <ErrorMessage name='cs_detail_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Total  Floor</label>
                  <Field as="select" name="cs_detail_total_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="00-10 Floor">00-10 Floor</option>
                    <option value="10-20 Floor">10-20 Floor</option>
                    <option value="20-30 Floor">20-30 Floor</option>
                    <option value="30-40 Floor">30-40 Floor</option>
                    <option value="40+ Floor">40+ Floor</option>
                  </Field>
                  <ErrorMessage name='cs_detail_total_floor' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Property Age</label>
                  <Field as="select" name="cs_detail_prop_age" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="0-10 yrs">0-10 yrs</option>
                    <option value="10-20 yrs">10-20 yrs</option>
                    <option value="20-30 yrs">20-30 yrs</option>
                    <option value="30-40 yrs">30-40 yrs</option>
                    <option value="40+ yrs">40+ yrs</option>
                  </Field>
                  <ErrorMessage name='cs_detail_prop_age' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Builtup Area</label>
                  <Field type="number" name="cs_detail_builtup_area" className="form-control" />
                  <ErrorMessage name='cs_detail_builtup_area' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Furnishing</label>
                  <Field as='select' name="cs_detail_furnishing" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </Field>
                  <ErrorMessage name='cs_detail_furnishing' className='text-danger' component='div' />
                </div>
              </div>
            </div>
          </div></>

      case 1:
        return <div className="frm_submit_block">
          <h3>Location</h3>
          <div className="frm_submit_wrap">
            <div className="form-row">
              <div className="form-group col-md-6">
                <Field name='cs_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='cs_location_state' className='text-danger' component='div' />
              </div>
              <div className="form-group col-md-6">
                <Field name="cs_location_city">
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
        return <>
          <div className="frm_submit_block">
            <h3>Resale Details</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Expected Price</label>
                  <Field type="number" name="cs_resale_details_exp_price" className="form-control" />
                  <ErrorMessage name='cs_resale_details_exp_price' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Monthly Maintenance</label>
                  <Field type="number" name="cs_resale_details_maintenance" className="form-control" />
                  <ErrorMessage name='cs_resale_details_maintenance' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="cs_resale_details_available_from" className="form-control" />
                  <ErrorMessage name='cs_resale_details_available_from' className='text-danger' component='div' />
                </div>

              </div>
            </div>
          </div>
        </>
      case 3:
        return <>
          <div className="frm_submit_block">
            <h3>Detailed Information</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Other Features (optional)</label>
                  <div className="o-features">
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="cs_amenities_lift" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="cs_amenities_parking" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Parking</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="cs_amenities_washroom" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Washroom</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="cs_amenities_water_storage" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Water Storage</label>
                      </li>
                      <li>
                        <Field id="a-6" className="checkbox-custom" name="cs_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                      </li>
                      <li>
                        <Field id="a-7" className="checkbox-custom" name="cs_amenities_security" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Security</label>
                      </li>
                      <li>
                        <Field id="a-8" className="checkbox-custom" name="cs_amenities_wifi" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">WiFi</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      case 4:
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
    cs_detail_description: Yup.string().required('This Field is Required'),
    cs_detail_property_type: Yup.string().required('This Field is Required'),
    cs_detail_building_type: Yup.string().required('This Field is Required'),
    cs_detail_floor: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cs_detail_total_floor: Yup.string().required('This Field is Required'),
    cs_detail_prop_age: Yup.string().required('This Field is Required'),
    cs_detail_builtup_area: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),

  }),
  Yup.object().shape({
    cs_location_city: Yup.string(),
    cs_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    cs_resale_details_exp_price: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cs_resale_details_maintenance: Yup.number().required('This Field is Required').min(0, "Please Enter the Positive Value"),
    cs_resale_details_available_from: Yup.string().required('This Field is Required'),
  }),
  Yup.object().shape({
    cs_amenities_lift: Yup.boolean(),
    cs_amenities_parking: Yup.boolean(),
    cs_amenities_washroom: Yup.boolean(),
    cs_amenities_water_storage: Yup.boolean(),
    cs_amenities_security: Yup.boolean(),
    cs_amenities_wifi: Yup.boolean(),
    cs_amenities_power_backup: Yup.boolean(),
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
                <h2 className="breadcrumb-title">Commercial Sale Property</h2>
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
                    cs_detail_description: "",
                    cs_detail_property_type: "",
                    cs_detail_building_type: "",
                    cs_detail_prop_age: "",
                    cs_detail_floor: "",
                    cs_detail_total_floor: "",
                    cs_detail_builtup_area: "",
                    cs_detail_furnishing: "",

                    cs_location_state: "",
                    cs_location_city: "",
                    cs_location_latitiude: "",
                    cs_location_longitude: "",
                    cs_location_iframe: "",

                    cs_resale_details_exp_price: "",
                    cs_resale_details_maintenance: "",
                    cs_resale_details_available_from: "",

                    cs_amenities_power_backup: false,
                    cs_amenities_lift: false,
                    cs_amenities_parking: false,
                    cs_amenities_washroom: false,
                    cs_amenities_water_storage: false,
                    cs_amenities_security: false,
                    cs_amenities_wifi: false,
                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('cs_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})
                    } else if (currentStep === 4) {
                      const formData = new FormData();
                      formData.append("cs_detail_description", values.cs_detail_description)
                      formData.append("cs_detail_property_type", values.cs_detail_property_type)
                      formData.append("cs_detail_building_type", values.cs_detail_building_type)
                      formData.append("cs_detail_prop_age", values.cs_detail_prop_age)
                      formData.append("cs_detail_floor", values.cs_detail_floor)
                      formData.append("cs_detail_total_floor", values.cs_detail_total_floor)
                      formData.append("cs_detail_builtup_area", values.cs_detail_builtup_area)
                      formData.append("cs_detail_furnishing", values.cs_detail_furnishing)
                      formData.append("cs_location_state", values.cs_location_state)
                      formData.append("cs_location_city", values.cs_location_city)
                      formData.append("cs_location_latitiude", values.cs_location_latitiude)
                      formData.append("cs_location_longitude", values.cs_location_longitude)
                      formData.append("cs_location_iframe", values.cs_location_iframe)
                     

 
                     formData.append("cs_resale_details_exp_price",values.cs_resale_details_exp_price)
                     formData.append("cs_resale_details_maintenance",values.cs_resale_details_maintenance)
                     formData.append("cs_resale_details_available_from",values.cs_resale_details_available_from)

                      formData.append("cs_amenities_power_backup", values.cs_amenities_power_backup)
                      formData.append("cs_amenities_lift", values.cs_amenities_lift)
                      formData.append("cs_amenities_parking", values.cs_amenities_parking)
                      formData.append("cs_amenities_washroom", values.cs_amenities_washroom)
                      formData.append("cs_amenities_water_storage", values.cs_amenities_water_storage)
                      formData.append("cs_amenities_security", values.cs_amenities_security)
                      formData.append("cs_amenities_wifi", values.cs_amenities_wifi)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.post(`${host}/api/property/add-cms-prop`, formData, {
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
                  {({ values, isSubmitting, setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep, setFieldValue)}
                      <button type='submit' className='btn btn-dark float-right'  >{currentStep === 4 ? 'Submit' : 'Next'}</button>
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



export default CommercialSale