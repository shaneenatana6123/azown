import React, { useContext, useRef, useState } from 'react'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LocationPicker from './LocationPicker'
import Footer from '../../Footer/Footer'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import propertyContext from '../../../context/PropertyContext'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'

const ResidentialFlatmates = () => {
 
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  if (!isLoaded) {
    return <h4> Loading....</h4>
  }
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  function handleStep(step,setFieldValue) {
    function handleLocation(e) {
      console.log(e.latLng.lat())
      setFieldValue('rfm_location_latitiude', e.latLng.lat())
      setFieldValue('rfm_location_longitude', e.latLng.lng())
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
                  <Field type="text" name="rfm_detail_description" className="form-control" />
                  <ErrorMessage name='rfm_detail_description' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Apartment Type</label>


                  <Field as="select" className="form-control" name="rfm_detail_app_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Appartment">Appartment</option>
                    <option value="Independent house villa">Independent house villa</option>
                    <option value="Gated Community Villa">Gated Community Villa</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_app_type' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>BHK Type</label>
                  <Field as="select" name="rfm_detail_bhk_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1 RK">1 RK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_bhk_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Floor</label>
                  <Field type="number" name="rfm_detail_floor" className="form-control" />
                  <ErrorMessage name='rfm_detail_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Total  Floor</label>
                  <Field as="select" name="rfm_detail_total_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="00-10 Floor">00-10 Floor</option>
                    <option value="10-20 Floor">10-20 Floor</option>
                    <option value="20-30 Floor">20-30 Floor</option>
                    <option value="30-40 Floor">30-40 Floor</option>
                    <option value="40+ Floor">40+ Floor</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_total_floor' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Property Age</label>
                  <Field as="select" name="rfm_detail_prop_age" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="00-10 yrs">00-10 yrs</option>
                    <option value="10-20 yrs">10-20 yrs</option>
                    <option value="20-30 yrs">20-30 yrs</option>
                    <option value="30-40 yrs">30-40 yrs</option>
                    <option value="40+ yrs">40+ yrs</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_prop_age' className='text-danger' component='div' />
                </div>


                <div className="form-group col-md-6">
                  <label>Facing</label>
                  <Field as="select" name="rfm_detail_facing" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="North">North</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_facing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Builtup Area</label>
                  <Field type="number" name="rfm_detail_builtup_area" className="form-control" />
                  <ErrorMessage name='rfm_detail_builtup_area' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Room Type</label>
                  <Field as='select' name="rfm_detail_room_type" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Shared">shared</option>
                    <option value="Single">Single</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_room_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Tenent Type</label>
                  <Field as='select' name="rfm_detail_tenent_type" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_tenent_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Furnishing</label>
                  <Field as='select' name="rfm_detail_furnishing" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_furnishing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Parking</label>
                  <Field as="select" name="rfm_detail_parking" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Both">Both</option>
                    <option value="Bone">None</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_parking' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Bathroom</label>
                  <Field type="number" name="rfm_detail_bathroom" className="form-control" />
                  <ErrorMessage name='rfm_detail_bathroom' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Balcony</label>
                  <Field type="number" name="rfm_detail_balcony" className="form-control" />
                  <ErrorMessage name='rfm_detail_balcony' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Water Supply</label>
                  <Field as='select' name="rfm_detail_water_supply" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Borewell">Borewell</option>
                    <option value="Corporation">Corporation</option>
                  </Field>
                  <ErrorMessage name='rfm_detail_water_supply' className='text-danger' component='div' />
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
                
               <Field name='rfm_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='rfm_location_state' className='text-danger' component='div' />
              </div>

            <div className="form-group col-md-6">

              <Field name="rfm_location_city">
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
            <div className="">
              <ul className="">
                <li>
                  <Field id="a-100" className="checkbox-custom" name="rfm_rules_is_non_veg_allowed" type="checkbox" />
                  <label htmlFor="a-100" className="checkbox-custom-label">Non-Veg Allowed</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

    
      case 3:
        return <>
          <div className="frm_submit_block">
            <h3>Rent Details</h3>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Rent</label>
                  <Field type="number" name="rfm_rental_detail_rent" className="form-control" />
                  <ErrorMessage name='rfm_rental_detail_rent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Expected Deposit</label>
                  <Field type="number" name="rfm_rental_detail_exp_deposit" className="form-control" />
                  <ErrorMessage name='rfm_rental_detail_exp_deposit' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Negotiable</label>
                  <Field as="select" name="rfm_rental_detail_is_nogotiable" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <ErrorMessage name='rfm_rental_detail_is_nogotiable' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Monthly Maintenance</label>
                  <Field type="number" name="rfm_rental_detail_monthly_maintenance" className="form-control" />
                  <ErrorMessage name='rfm_rental_detail_monthly_maintenance' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="rfm_rental_detail_avail_from" className="form-control" />
                  <ErrorMessage name='rfm_rental_detail_avail_from' className='text-danger' component='div' />
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
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="rfm_amenities_lift" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-13" className="checkbox-custom" name="rfm_amenities_ac" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">Air Condition</label>
                      </li>
                      <li>
                        <Field id="a-14" className="checkbox-custom" name="rfm_amenities_intercom" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Inter Communication</label>
                      </li>
                      <li>
                        <Field id="a-15" className="checkbox-custom" name="rfm_amenities_children_play_area" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Children Play Area</label>
                      </li>
                      <li>
                        <Field id="a-16" className="checkbox-custom" name="rfm_amenities_servant_room" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">Servent Room</label>
                      </li>
                      <li>
                        <Field id="a-17" className="checkbox-custom" name="rfm_amenities_gas_pipeline" type="checkbox" />
                        <label htmlFor="a-17" className="checkbox-custom-label">Gas Pipeline</label>
                      </li>
                      <li>
                        <Field id="a-18" className="checkbox-custom" name="rfm_amenities_rainwater_harvesting" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Rainwater Harvesting</label>
                      </li>
                      <li>
                        <Field id="a-19" className="checkbox-custom" name="rfm_amenities_housekeepiing" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Housekeeping</label>
                      </li>
                      <li>
                        <Field id="a-20" className="checkbox-custom" name="rfm_amenities_visitor_parking" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Visitor Parking</label>
                      </li>
                      <li>
                        <Field id="a-21" className="checkbox-custom" name="rfm_amenities_club_house" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">House Club</label>
                      </li>
                      <li>
                        <Field id="a-22" className="checkbox-custom" name="rfm_amenities_swimming_pool" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Swimming Pool</label>
                      </li>
                      <li>
                        <Field id="a-50" className="checkbox-custom" name="rfm_amenities_fire_safety" type="checkbox" />
                        <label htmlFor="a-50" className="checkbox-custom-label">Fire Safety</label>
                      </li>
                      <li>
                        <Field id="a-2" className="checkbox-custom" name="rfm_amenities_shopping_center" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Shopping Center</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="rfm_amenities_park" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Park</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="rfm_amenities_internet" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="rfm_amenities_sewage_treatment" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Sewage Treatment</label>
                      </li>
                      <li>
                        <Field id="a-6" className="checkbox-custom" name="rfm_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                      </li>
                      <li>
                        <Field id="a-7" className="checkbox-custom" name="rfm_amenities_gated_security" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Gated Security</label>
                      </li>
                      <li>
                        <Field id="a-8" className="checkbox-custom" name="rfm_amenities_gym" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">GYM</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      case 5:
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



  const Schema = [ Yup.object().shape({
    rfm_detail_description: Yup.string().required('This Field is Required'),
    rfm_detail_app_type: Yup.string().required('This Field is Required'),
    rfm_detail_bhk_type: Yup.string().required('This Field is Required'),
    rfm_detail_floor: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_detail_total_floor: Yup.string().required('This Field is Required'),
    rfm_detail_prop_age: Yup.string().required('This Field is Required'),
    rfm_detail_facing: Yup.string().required('This Field is Required'),
    rfm_detail_room_type: Yup.string().required('This Field is Required'),
    rfm_detail_tenent_type: Yup.string().required('This Field is Required'),
    rfm_detail_builtup_area: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_detail_furnishing: Yup.string().required('This Field is Required'),
    rfm_detail_parking: Yup.string().required('This Field is Required'),
    rfm_detail_bathroom: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_detail_balcony: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_detail_water_supply: Yup.string().required('This Field is Required'),

  }),
  Yup.object().shape({
    rfm_location_city: Yup.string(),
    rfm_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    rfm_rules_is_non_veg_allowed: Yup.string().required('Required')
  }),
  
  Yup.object().shape({
    rfm_rental_detail_rent: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_rental_detail_exp_deposit: Yup.number().required('This Field is Required').positive("Please Enter Positive Value"),
    rfm_rental_detail_is_nogotiable: Yup.string().required('This Field is Required'),
    rfm_rental_detail_monthly_maintenance: Yup.number().required('This Field is Required').min(0,"Please Enter Positive Value"),
    rfm_rental_detail_avail_from: Yup.string().required('This Field is Required'),
  }),
  Yup.object().shape({
    rfm_amenities_lift: Yup.boolean(),
    rfm_amenities_ac: Yup.boolean(),
    rfm_amenities_intercom: Yup.boolean(),
    rfm_amenities_children_play_area: Yup.boolean(),
    rfm_amenities_servant_room: Yup.boolean(),
    rfm_amenities_gas_pipeline: Yup.boolean(),
    rfm_amenities_rainwater_harvesting: Yup.boolean(),
    rfm_amenities_housekeepiing: Yup.boolean(),
    rfm_amenities_visitor_parking: Yup.boolean(),
    rfm_amenities_internet: Yup.boolean(),
    rfm_amenities_club_house: Yup.boolean(),
    rfm_amenities_swimming_pool: Yup.boolean(),
    rfm_amenities_fire_safety: Yup.boolean(),
    rfm_amenities_shopping_center: Yup.boolean(),
    rfm_amenities_park: Yup.boolean(),
    rfm_amenities_sewage_treatment: Yup.boolean(),
    rfm_amenities_power_backup: Yup.boolean(),
    rfm_amenities_gated_security: Yup.boolean(),
    rfm_amenities_gym: Yup.boolean(),
  }),
  Yup.object().shape({
    // files: Yup.array().of(Yup.mixed().required('At least one image is required'))
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
                <h2 className="breadcrumb-title">Residential Flatemates Property</h2>
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
                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('rfm_location_city', originRef.current.value)
                      setCurrentStep(currentStep + 1)
                      setSubmitting(false);
                      setTouched({})
                    }else if (currentStep === 5) {
                      const formData = new FormData();
                      formData.append("rfm_detail_description", values.rfm_detail_description)
                      formData.append("rfm_detail_app_type", values.rfm_detail_app_type)
                      formData.append("rfm_detail_bhk_type", values.rfm_detail_bhk_type)
                      formData.append("rfm_detail_floor", values.rfm_detail_floor)
                      formData.append("rfm_detail_total_floor", values.rfm_detail_total_floor)
                      formData.append("rfm_detail_prop_age", values.rfm_detail_prop_age)
                      formData.append("rfm_detail_facing", values.rfm_detail_facing)
                      formData.append("rfm_detail_builtup_area", values.rfm_detail_builtup_area)
                      formData.append("rfm_detail_room_type", values.rfm_detail_room_type)
                      formData.append("rfm_detail_tenent_type", values.rfm_detail_tenent_type)
                      formData.append("rfm_detail_furnishing", values.rfm_detail_furnishing)
                      formData.append("rfm_detail_parking", values.rfm_detail_parking)
                      formData.append("rfm_detail_bathroom", values.rfm_detail_bathroom)
                      formData.append("rfm_detail_balcony", values.rfm_detail_balcony)
                      formData.append("rfm_detail_water_supply", values.rfm_detail_water_supply)

                      formData.append("rfm_rules_is_non_veg_allowed", values.rfm_rules_is_non_veg_allowed)

                      formData.append("rfm_location_state", values.rfm_location_state)
                      formData.append("rfm_location_city", values.rfm_location_city)
                      formData.append("rfm_location_latitiude", values.rfm_location_latitiude)
                      formData.append("rfm_location_longitude", values.rfm_location_longitude)


                      formData.append("rfm_rental_detail_rent", values.rfm_rental_detail_rent)
                      formData.append("rfm_rental_detail_exp_deposit", values.rfm_rental_detail_exp_deposit)
                      formData.append("rfm_rental_detail_is_nogotiable", values.rfm_rental_detail_is_nogotiable)
                      formData.append("rfm_rental_detail_monthly_maintenance", values.rfm_rental_detail_monthly_maintenance)
                      formData.append("rfm_rental_detail_avail_from", values.rfm_rental_detail_avail_from)

                      formData.append("rfm_amenities_lift", values.rfm_amenities_lift)
                      formData.append("rfm_amenities_ac", values.rfm_amenities_ac)
                      formData.append("rfm_amenities_intercom", values.rfm_amenities_intercom)
                      formData.append("rfm_amenities_children_play_area", values.rfm_amenities_children_play_area)
                      formData.append("rfm_amenities_servant_room", values.rfm_amenities_servant_room)
                      formData.append("rfm_amenities_gas_pipeline", values.rfm_amenities_gas_pipeline)
                      formData.append("rfm_amenities_rainwater_harvesting", values.rfm_amenities_rainwater_harvesting)
                      formData.append("rfm_amenities_housekeepiing", values.rfm_amenities_housekeepiing)
                      formData.append("rfm_amenities_visitor_parking", values.rfm_amenities_visitor_parking)
                      formData.append("rfm_amenities_internet", values.rfm_amenities_internet)
                      formData.append("rfm_amenities_club_house", values.rfm_amenities_club_house)
                      formData.append("rfm_amenities_swimming_pool", values.rfm_amenities_swimming_pool)
                      formData.append("rfm_amenities_fire_safety", values.rfm_amenities_fire_safety)
                      formData.append("rfm_amenities_shopping_center", values.rfm_amenities_shopping_center)
                      formData.append("rfm_amenities_park", values.rfm_amenities_park)
                      formData.append("rfm_amenities_sewage_treatment", values.rfm_amenities_sewage_treatment)
                      formData.append("rfm_amenities_power_backup", values.rfm_amenities_power_backup)
                      formData.append("rfm_amenities_gated_security", values.rfm_amenities_gated_security)
                      formData.append("rfm_amenities_gym", values.rfm_amenities_gym)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.post(`${host}/api/property/add-rfm-prop`, formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "auth-token":localStorage.getItem('token'),
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
                      setTouched({})
                      console.log(values)
                    }
                  }
                  }
                >
                  {({ values, isSubmitting,setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep,setFieldValue)}
                      <button type='submit' className='btn btn-dark float-right'  >{currentStep === 5 ? 'Submit' : 'Next'}</button>
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

export default ResidentialFlatmates