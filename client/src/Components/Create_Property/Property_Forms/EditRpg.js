
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

const EditRpg = () => {
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host,rpgDetail,   rpgdata } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);
   
  const { id } = useParams();
  useEffect(() => {
    rpgDetail(id);
  }, []);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })

  if (!isLoaded) {
    return <h4> Loading....</h4>
  }
  function handleStep(step, setFieldValue) {
    function handleLocation(e) {
      console.log(e.latLng.lat())
      setFieldValue('rpg_location_latitiude', e.latLng.lat())
      setFieldValue('rpg_location_longitude', e.latLng.lng())
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
                  <Field type="text" name="rpg_detail_description" className="form-control" />
                  <ErrorMessage name='rpg_detail_description' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Occupany Type</label>


                  <Field type="number" className="form-control" name="rpg_detail_room_occupany" />
                  <ErrorMessage name='rpg_detail_room_occupany' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Room Rent</label>
                  <Field type="number" name="rpg_detail_room_rent" className="form-control" />
                  <ErrorMessage name='rpg_detail_room_rent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Room Deposit</label>
                  <Field type="number" name="rpg_detail_room_deposit" className="form-control" />
                  <ErrorMessage name='rpg_detail_room_deposit' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available For</label>
                  <Field as="select" name="rpg_detail_availablefor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Anyone">Anyone</option>

                  </Field>
                  <ErrorMessage name='rpg_detail_availablefor' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Prefered Guest</label>
                  <Field as="select" name="rpg_detail_pref_guest" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Student">Student</option>
                    <option value="Both">Both</option>
                  </Field>
                  <ErrorMessage name='rpg_detail_pref_guest' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="rpg_detail_available_from" className="form-control" />
                  <ErrorMessage name='rpg_detail_available_from' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Gate Shut Time</label>
                  <Field type="time" name="rpg_detail_gate_shut_time" className="form-control" />
                  <ErrorMessage name='rpg_detail_gate_shut_time' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6 mt-5">
                  <ul className="no-ul-list third-row">
                    <li>
                      <Field id="a-123" className="checkbox-custom" name="rpg_detail_food_included" type="checkbox" />
                      <label htmlFor="a-123" className="checkbox-custom-label">Food Included</label>
                    </li>
                  </ul>
                </div>

                <div className="form-group col-md-6">
                  <label>Parking</label>
                  <Field as="select" name="rpg_detail_parking" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Both">Both</option>
                    <option value="Bone">None</option>
                  </Field>
                  <ErrorMessage name='rpg_detail_parking' className='text-danger' component='div' />
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

                <Field name='rpg_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='rpg_location_state' className='text-danger' component='div' />
              </div>

              <div className="form-group col-md-6">

                <Field name="rpg_location_city">
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
                  <Field id="a-100" className="checkbox-custom" name="rpg_rules_no_smoking" type="checkbox" />
                  <label htmlFor="a-100" className="checkbox-custom-label">No Smooking</label>
                </li>
                <li>
                  <Field id="a-101" className="checkbox-custom" name="rpg_rules_no_guardian_stay" type="checkbox" />
                  <label htmlFor="a-101" className="checkbox-custom-label">No  Guardian Stay</label>
                </li>
                <li>
                  <Field id="a-102" className="checkbox-custom" name="rpg_rules_no_girls_entry" type="checkbox" />
                  <label htmlFor="a-102" className="checkbox-custom-label">No Girls Entry</label>
                </li>
                <li>
                  <Field id="a-103" className="checkbox-custom" name="rpg_rules_no_drinking" type="checkbox" />
                  <label htmlFor="a-103" className="checkbox-custom-label">No Drinking</label>
                </li>
                <li>
                  <Field id="a-104" className="checkbox-custom" name="rpg_rules_no_non_veg" type="checkbox" />
                  <label htmlFor="a-104" className="checkbox-custom-label">No Non-Veg</label>
                </li>
              </ul>
            </div>
          </div>
        </div>


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
                        <Field id="a-1" className="checkbox-custom" name="rpg_amenities_cupboard" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Cupboard</label>
                      </li>
                      <li>
                        <Field id="a-13" className="checkbox-custom" name="rpg_amenities_tv" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">TV</label>
                      </li>
                      <li>
                        <Field id="a-14" className="checkbox-custom" name="rpg_amenities_bed" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Bed</label>
                      </li>
                      <li>
                        <Field id="a-15" className="checkbox-custom" name="rpg_amenities_geyser" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Geyser</label>
                      </li>
                      <li>
                        <Field id="a-16" className="checkbox-custom" name="rpg_amenities_ac" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">AC</label>
                      </li>
                      <li>
                        <Field id="a-17" className="checkbox-custom" name="rpg_amenities_attached_bathroom" type="checkbox" />
                        <label htmlFor="a-17" className="checkbox-custom-label">Bathroom</label>
                      </li>
                      <li>
                        <Field id="a-18" className="checkbox-custom" name="rpg_amenities_laundry" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Laundry</label>
                      </li>
                      <li>
                        <Field id="a-19" className="checkbox-custom" name="rpg_amenities_room_cleaning" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Room Cleaning</label>
                      </li>
                      <li>
                        <Field id="a-20" className="checkbox-custom" name="rpg_amenities_warden_facility" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Warden Facility</label>
                      </li>
                      <li>
                        <Field id="a-21" className="checkbox-custom" name="rpg_amenities_common_tv" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">Common TV</label>
                      </li>
                      <li>
                        <Field id="a-22" className="checkbox-custom" name="rpg_amenities_lift" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-50" className="checkbox-custom" name="rpg_amenities_wifi" type="checkbox" />
                        <label htmlFor="a-50" className="checkbox-custom-label">WiFi</label>
                      </li>
                      <li>
                        <Field id="a-2" className="checkbox-custom" name="rpg_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Power backup</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="rpg_amenities_mess" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Mess</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="rpg_amenities_fridge" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Fridge</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="rpg_amenities_mess_cooking" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Mess Cooking</label>
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
                  <div>
                    {rpgdata.images && rpgdata.images.map(item=>{
                        return <img src={item} style={{width:"100px", height:"100px" , margin:"5px"}}
                        />
                    })}
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
    rpg_detail_description: Yup.string().required('This Field is Required'),
    rpg_detail_room_occupany: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_room_rent: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_room_deposit: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_availablefor: Yup.string().required('This Field is Required'),
    rpg_detail_pref_guest: Yup.string().required('This Field is Required'),
    rpg_detail_available_from: Yup.string().required('This Field is Required'),
    rpg_detail_food_included: Yup.boolean(),
    rpg_detail_gate_shut_time: Yup.string().required('This Field is Required'),
    rpg_detail_parking: Yup.string().required('This Field is Required'),

  }),
  Yup.object().shape({
    rpg_location_city: Yup.string(),
    rpg_location_state: Yup.string().required('Required'),
  }),
  Yup.object().shape({
    rpg_rules_no_smoking: Yup.string().required('Required'),
    rpg_rules_no_guardian_stay: Yup.string().required('Required'),
    rpg_rules_no_girls_entry: Yup.string().required('Required'),
    rpg_rules_no_drinking: Yup.string().required('Required'),
    rpg_rules_no_non_veg: Yup.string().required('Required'),
  }),

  Yup.object().shape({
    rpg_amenities_cupboard: Yup.boolean(),
    rpg_amenities_tv: Yup.boolean(),
    rpg_amenities_bed: Yup.boolean(),
    rpg_amenities_geyser: Yup.boolean(),
    rpg_amenities_ac: Yup.boolean(),
    rpg_amenities_attached_bathroom: Yup.boolean(),
    rpg_amenities_laundry: Yup.boolean(),
    rpg_amenities_room_cleaning: Yup.boolean(),
    rpg_amenities_warden_facility: Yup.boolean(),
    rpg_amenities_common_tv: Yup.boolean(),
    rpg_amenities_lift: Yup.boolean(),
    rpg_amenities_wifi: Yup.boolean(),
    rpg_amenities_power_backup: Yup.boolean(),
    rpg_amenities_mess: Yup.boolean(),
    rpg_amenities_fridge: Yup.boolean(),
    rpg_amenities_mess_cooking: Yup.boolean(),
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
                <h2 className="breadcrumb-title">Residential Pg Property</h2>
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
                  initialValues={rpgdata}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setFieldValue, setTouched }) => {
                    if (currentStep === 1) {
                      setFieldValue('rpg_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})

                    } else if (currentStep === 4) {
                      const formData = new FormData();
                      formData.append("rpg_detail_description", values.rpg_detail_description)
                      formData.append("rpg_detail_room_occupany", values.rpg_detail_room_occupany)
                      formData.append("rpg_detail_room_deposit", values.rpg_detail_room_deposit)
                      formData.append("rpg_detail_availablefor", values.rpg_detail_availablefor)
                      formData.append("rpg_detail_pref_guest", values.rpg_detail_pref_guest)
                      formData.append("rpg_detail_available_from", values.rpg_detail_available_from)
                      formData.append("rpg_detail_food_included", values.rpg_detail_food_included)
                      formData.append("rpg_detail_gate_shut_time", values.rpg_detail_gate_shut_time)
                      formData.append("rpg_detail_parking", values.rpg_detail_parking)
                      formData.append("rpg_rules_no_girls_entry", values.rpg_rules_no_girls_entry)
                      formData.append("rpg_rules_no_drinking", values.rpg_rules_no_drinking)
                      formData.append("rpg_rules_no_non_veg", values.rpg_rules_no_non_veg)

                      formData.append("rpg_detail_room_rent", values.rpg_detail_room_rent)

                      formData.append("rpg_location_state", values.rpg_location_state)
                      formData.append("rpg_location_city", values.rpg_location_city)
                      formData.append("rpg_location_latitiude", values.rpg_location_latitiude)
                      formData.append("rpg_location_longitude", values.rpg_location_longitude)
                      formData.append("rpg_location_iframe", values.rpg_location_iframe)

                      formData.append("rpg_amenities_cupboard", values.rpg_amenities_cupboard)
                      formData.append("rpg_amenities_tv", values.rpg_amenities_tv)
                      formData.append("rpg_amenities_bed", values.rpg_amenities_bed)
                      formData.append("rpg_amenities_geyser", values.rpg_amenities_geyser)
                      formData.append("rpg_amenities_ac", values.rpg_amenities_ac)
                      formData.append("rpg_amenities_attached_bathroom", values.rpg_amenities_attached_bathroom)
                      formData.append("rpg_amenities_laundry", values.rpg_amenities_laundry)
                      formData.append("rpg_amenities_room_cleaning", values.rpg_amenities_room_cleaning)
                      formData.append("rpg_amenities_lift", values.rpg_amenities_lift)
                      formData.append("rpg_amenities_wifi", values.rpg_amenities_wifi)
                      formData.append("rpg_amenities_power_backup", values.rpg_amenities_power_backup)
                      formData.append("rpg_amenities_mess", values.rpg_amenities_mess)
                      formData.append("rpg_amenities_fridge", values.rpg_amenities_fridge)
                      formData.append("rpg_amenities_mess_cooking", values.rpg_amenities_mess_cooking)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.put(`${host}/api/property/update-rpg/${rpgdata._id}`, formData, {
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
                      setTouched({})
                      console.log(values)

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


export default EditRpg