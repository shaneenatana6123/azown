import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import LocationPicker from './LocationPicker'
import propertyContext from '../../../context/PropertyContext'
import Footer from '../../Footer/Footer'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'

const EditCmr = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host,  cmrDetail, cmrdata } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    cmrDetail(id);
  }, []);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  function handleStep(step,setFieldValue) {
    function handleLocation(e) {
      console.log(e.latLng.lat())
      setFieldValue('cr_location_latitiude', e.latLng.lat())
      setFieldValue('cr_location_longitude', e.latLng.lng())
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
                  <Field type="text" name="cr_detail_description" className="form-control" />
                  <ErrorMessage name='cr_detail_description' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Property Type</label>

                  <Field as="select" className="form-control" name="cr_detail_property_type">
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
                  <ErrorMessage name='cr_detail_property_type' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Building Type</label>

                  <Field as="select" className="form-control" name="cr_detail_building_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Business Park">Business Park</option>
                    <option value="Mall">Mall</option>
                    <option value="Standalone Building">Standalone Building</option>
                    <option value="Independent Shop">Independent Shop</option>
                  </Field>
                  <ErrorMessage name='cr_detail_building_type' className='text-danger' component='div' />
                </div>


                <div className="form-group col-md-6">
                  <label>Floor</label>
                  <Field type="number" name="cr_detail_floor" className="form-control" />
                  <ErrorMessage name='cr_detail_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Total  Floor</label>
                  <Field as="select" name="cr_detail_total_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="00-10 Floor">00-10 Floor</option>
                    <option value="10-20 Floor">10-20 Floor</option>
                    <option value="20-30 Floor">20-30 Floor</option>
                    <option value="30-40 Floor">30-40 Floor</option>
                    <option value="40+ Floor">40+ Floor</option>
                  </Field>
                  <ErrorMessage name='cr_detail_total_floor' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Property Age</label>
                  <Field as="select" name="cr_detail_prop_age" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="0-10 yrs">0-10 yrs</option>
                    <option value="10-20 yrs">10-20 yrs</option>
                    <option value="20-30 yrs">20-30 yrs</option>
                    <option value="30-40 yrs">30-40 yrs</option>
                    <option value="40+ yrs">40+ yrs</option>
                  </Field>
                  <ErrorMessage name='cr_detail_prop_age' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Builtup Area</label>
                  <Field type="number" name="cr_detail_builtup_area" className="form-control" />
                  <ErrorMessage name='cr_detail_builtup_area' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Furnishing</label>
                  <Field as='select' name="cr_detail_furnishing" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </Field>
                  <ErrorMessage name='cr_detail_furnishing' className='text-danger' component='div' />
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

                <Field name='cr_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='cr_location_state' className='text-danger' component='div' />
              </div>

              <div className="form-group col-md-6">

                <Field name="cr_location_city">
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
            <h3>Rent Details</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Rent</label>
                  <Field type="number" name="cr_rental_detail_rent" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_rent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Expected Deposit</label>
                  <Field type="number" name="cr_rental_detail_exp_deposit" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_exp_deposit' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Negotiable</label>
                  <Field as="select" name="cr_rental_detail_is_nogotiable" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <ErrorMessage name='cr_rental_detail_is_nogotiable' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Monthly Maintenance</label>
                  <Field type="number" name="cr_rental_detail_monthly_maintenance" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_monthly_maintenance' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="cr_rental_detail_avail_from" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_avail_from' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Lease Duration</label>
                  <Field type="number" name="cr_rental_detail_lease_duration" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_lease_duration' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Lockin Period</label>
                  <Field type="number" name="cr_rental_detail_lockin_period" className="form-control" />
                  <ErrorMessage name='cr_rental_detail_lockin_period' className='text-danger' component='div' />
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
                        <Field id="a-1" className="checkbox-custom" name="cr_amenities_lift" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="cr_amenities_parking" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Parking</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="cr_amenities_washroom" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Washroom</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="cr_amenities_water_storage" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Water Storage</label>
                      </li>
                      <li>
                        <Field id="a-6" className="checkbox-custom" name="cr_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                      </li>
                      <li>
                        <Field id="a-7" className="checkbox-custom" name="cr_amenities_security" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Security</label>
                      </li>
                      <li>
                        <Field id="a-8" className="checkbox-custom" name="cr_amenities_wifi" type="checkbox" />
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
                  {cmrdata.images && cmrdata.images.map(item=>{
                        return <img src={item} style={{width:"100px", height:"100px" , margin:"5px"}}
                        />
                    })}
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
    cr_detail_description: Yup.string().required('This Field is Required'),
    cr_detail_property_type: Yup.string().required('This Field is Required'),
    cr_detail_building_type: Yup.string().required('This Field is Required'),
    cr_detail_floor: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cr_detail_total_floor: Yup.string().required('This Field is Required'),
    cr_detail_prop_age: Yup.string().required('This Field is Required'),
    cr_detail_builtup_area: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),

  }),
  Yup.object().shape({
    cr_location_city: Yup.string(),
    cr_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    cr_rental_detail_rent: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cr_rental_detail_exp_deposit: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cr_rental_detail_is_nogotiable: Yup.string().required('This Field is Required'),
    cr_rental_detail_monthly_maintenance: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cr_rental_detail_avail_from: Yup.string().required('This Field is Required'),
    cr_rental_detail_lease_duration: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
    cr_rental_detail_lockin_period: Yup.number().required('This Field is Required').positive("Please Enter the Positive Value"),
  }),
  Yup.object().shape({
    cr_amenities_lift: Yup.boolean(),
    cr_amenities_parking: Yup.boolean(),
    cr_amenities_washroom: Yup.boolean(),
    cr_amenities_water_storage: Yup.boolean(),
    cr_amenities_security: Yup.boolean(),
    cr_amenities_wifi: Yup.boolean(),
    cr_amenities_power_backup: Yup.boolean(),
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
                <h2 className="breadcrumb-title">Commercial Rent Property</h2>
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
                  initialValues={cmrdata}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('cr_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})
                    }else if (currentStep === 4) {
                      const formData = new FormData();
                      formData.append("cr_detail_description", values.cr_detail_description)
                      formData.append("cr_detail_property_type", values.cr_detail_property_type)
                      formData.append("cr_detail_building_type", values.cr_detail_building_type)
                      formData.append("cr_detail_prop_age", values.cr_detail_prop_age)
                      formData.append("cr_detail_floor", values.cr_detail_floor)
                      formData.append("cr_detail_total_floor", values.cr_detail_total_floor)
                      formData.append("cr_detail_builtup_area", values.cr_detail_builtup_area)
                      formData.append("cr_detail_furnishing", values.cr_detail_furnishing)
                      formData.append("cr_location_state", values.cr_location_state)
                      formData.append("cr_location_city", values.cr_location_city)
                      formData.append("cr_location_latitiude", values.cr_location_latitiude)
                      formData.append("cr_location_longitude", values.cr_location_longitude)
                      formData.append("cr_location_iframe", values.cr_location_iframe)
                      formData.append("cr_rental_detail_rent", values.cr_rental_detail_rent)
                      formData.append("cr_rental_detail_exp_deposit", values.cr_rental_detail_exp_deposit)
                      formData.append("cr_rental_detail_is_nogotiable", values.cr_rental_detail_is_nogotiable)
                      formData.append("cr_rental_detail_monthly_maintenance", values.cr_rental_detail_monthly_maintenance)
                      formData.append("cr_rental_detail_avail_from", values.cr_rental_detail_avail_from)
                      formData.append("cr_rental_detail_lease_duration", values.cr_rental_detail_lease_duration)
                      formData.append("cr_rental_detail_lockin_period", values.cr_rental_detail_lockin_period)
                      formData.append("cr_amenities_power_backup", values.cr_amenities_power_backup)
                      formData.append("cr_amenities_lift", values.cr_amenities_lift)
                      formData.append("cr_amenities_parking", values.cr_amenities_parking)
                      formData.append("cr_amenities_washroom", values.cr_amenities_washroom)
                      formData.append("cr_amenities_water_storage", values.cr_amenities_water_storage)
                      formData.append("cr_amenities_security", values.cr_amenities_security)
                      formData.append("cr_amenities_wifi", values.cr_amenities_wifi)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.put(`${host}/api/property/update-cmr/${cmrdata._id}`, formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "auth-token": localStorage.getItem("token"),
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



export default EditCmr