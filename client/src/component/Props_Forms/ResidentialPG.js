import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import propertyContext from '../../context/PropertyContext';



const steps = ['Property Detail', 'Location',  'Amenities','Rules', 'Gallery'];
const ResidentialPG = () => {
  const context = useContext(propertyContext)
  const {host} = context
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [data, setdata] = useState({
  
rpg_detail_description: "",
rpg_detail_room_occupany : "",
rpg_detail_room_deposit: "",
rpg_detail_availablefor : "",
rpg_detail_pref_guest : "",
rpg_detail_available_from : "",
rpg_detail_food_included: "",
rpg_detail_gate_shut_time: "",
rpg_detail_parking : "",
    
    rpg_rules_no_smoking:"",
    rpg_rules_no_guardian_stay:"",
    rpg_rules_no_girls_entry :"",
    rpg_rules_no_drinking:"",
    rpg_rules_no_non_veg:"",
    
    rpg_location_state :"",
    rpg_location_city :"",
    rpg_location_latitiude :"",
    rpg_location_longitude :"",
    rpg_location_iframe :"",
    
    rpg_amenities_cupboard :"",
    rpg_amenities_tv:"",
    rpg_amenities_bed:"",
    rpg_amenities_geyser:"",
    rpg_amenities_ac:"",
    rpg_amenities_attached_bathroom:"",
    rpg_amenities_laundry:"",
    rpg_amenities_room_cleaning :"",
    rpg_amenities_lift:"",
    rpg_amenities_wifi:"",
    rpg_amenities_power_backup:"",
    rpg_amenities_mess:"",
    rpg_amenities_fridge:"",
    rpg_amenities_mess_cooking:"",
    
  })
  const [file, setFile] = useState([]);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (

          <div>
              <div class="row">
                <div class="col-md-5">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Description
                  </label>
                  <textarea
                    name="rpg_detail_description"
                    class="form-control"
                    onChange={handleChange}
                    id="exampleFormControlTextarea1"
                    placeholder="write the text......"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Room Occupany
                </label>
                <select
                  name="rpg_detail_room_occupany"
                  class="form-select"
                  id="validationCustom04"
                  required
                  onChange={handleChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="4"> 4</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Room Rent
                  </label>
                  <input
                  name="rpg_detail_room_rent"
                  type="number"
                  class="form-control"
                  placeholder="Enter the Rent"
                  aria-label="First name"
                  onChange={handleChange}
                />
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                   Deposit
                  </label>
                  <input
                    name="rpg_detail_room_deposit"
                    class="form-select"
                    id="validationCustom04"
                    onChange={handleChange}
                    required
                  />
                   
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Gender
                  </label>
                  <select
                    name="rpg_detail_availablefor"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="Anyone">Anyone</option>

                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Guest Type
                  </label>
                  <select
                    name="rpg_detail_pref_guest"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="working professional">working professional</option>
                    <option value="student">student</option>
                    <option value="both">both</option>
                   </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Available From
                  </label>
                  <input
                    type="date"
                    name="rpg_detail_available_from"
                    class="form-control"
                    placeholder=""
                    aria-label="First name"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
               
               <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Gate Close Time
                  </label>
                  <input
                    type="time"
                    name="rpg_detail_gate_shut_time"
                    class="form-control"
                    placeholder=""
                    aria-label="First name"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Parking
                  </label>
                  <select
                    name="rpg_detail_parking"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="car">Car</option>
                    <option value="bike">bike</option>
                    <option value="both">Both</option>
                    <option value="none">None</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                
              </div>  
          </div>
        );
      case 1:
        return (
          <div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  State
                </label>
                <select
                  name="rpg_location_state"
                  class="form-select"
                  id="validationCustom04"
                  onChange={handleChange}
                  required
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="Utter Pradesh">Utter Pradesh</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  City
                </label>
                <select
                  name="rpg_location_city"
                  class="form-select"
                  id="validationCustom04"
                  onChange={handleChange}
                  required
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Lucknow">Lucknow</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Latitute
                </label>
                <input
                  name="rpg_location_latitiude"
                  type="text"
                  class="form-control"
                  placeholder="Enter the Latitute"
                  aria-label="First name"
                  onChange={handleChange}
                />

                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Longitute
                </label>
                <input
                  name="rpg_location_longitude"
                  type="text"
                  class="form-control"
                  placeholder="Enter the Latitute"
                  aria-label="First name"
                  onChange={handleChange}
                />

                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Iframe
                </label>
                <input
                  name="rpg_location_iframe"
                  type="text"
                  class="form-control"
                  placeholder="Enter the Iframe"
                  aria-label="First name"
                  onChange={handleChange}
                />

                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
            </div>
        );
      case 2:
        return (
          <div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_amenities_cupboard"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                />
                <label class="form-check-label " for="defaultCheck1">
                  Cupboard
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_amenities_tv"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  TV
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_amenities_bed"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Bed
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_amenities_geyser"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  geyser
                </label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_detail_food_included"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1 "
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Food Included
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_ac"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  AC
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_attached_bathroom"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Attached Bathroom
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_laundry"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Laundry
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_room_cleaning"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Room Service
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_warden_facility"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Warden Facility
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_common_tv"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1 "
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Common TV
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_lift"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Lift
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_wifi"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  WiFi
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_power_backup"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                 Power Backup
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_mess"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Mess
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_fridge"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Fridge
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_amenities_mess_cooking"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Mess Cooking
                </label>
              </div>
            </div>
          </div>
           
           
        </div>
        );
      case 3:
        return (
          <div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_rules_no_smoking"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                />
                <label class="form-check-label " for="defaultCheck1">
                  No Smiking
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_rules_no_guardian_stay"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  No Gaurdian Stay
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_rules_no_girls_entry"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  No Girl Entry
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rpg_rules_no_drinking"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  No Drinking
                </label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-check m-2 p-2">
                <input
                  name="rpg_rules_no_non_veg"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1 "
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                 NO  Non Veg
                </label>
              </div>
            </div>
          </div>           
        </div>
          
        )
      case 4:
        return (
          <div>
            <input
              onChange={fileSelected}
              type="file"
              accept="image/*"
              multiple
            ></input>
          </div>

        )
      default:
        return 'Unknown step';
    }
  }

  const handleNext =async () => {
    if (activeStep === steps.length - 1) {
    
      const formData = new FormData();
      formData.append("rpg_detail_description",data.rpg_detail_description)
formData.append("rpg_detail_room_occupany",data.rpg_detail_room_occupany)
formData.append("rpg_detail_room_deposit",data.rpg_detail_room_deposit)
formData.append("rpg_detail_availablefor",data.rpg_detail_availablefor)
formData.append("rpg_detail_pref_guest",data.rpg_detail_pref_guest)
formData.append("rpg_detail_available_from",data.rpg_detail_available_from)
formData.append("rpg_detail_food_included",data.rpg_detail_food_included)
formData.append("rpg_detail_gate_shut_time",data.rpg_detail_gate_shut_time)
formData.append("rpg_detail_parking ",data.rpg_detail_parking)
    formData.append("rpg_rules_no_girls_entry",data.rpg_rules_no_girls_entry)
    formData.append("rpg_rules_no_drinking",data.rpg_rules_no_drinking)
    formData.append("rpg_rules_no_non_veg",data.rpg_rules_no_non_veg)
    
    formData.append("rpg_location_state",data.rpg_location_state)
    formData.append("rpg_location_city",data.rpg_location_city)
    formData.append("rpg_location_latitiude",data.rpg_location_latitiude)
    formData.append("rpg_location_longitude",data.rpg_location_longitude)
    formData.append("rpg_location_iframe",data.rpg_location_iframe)
    
    formData.append("rpg_amenities_cupboard",data.rpg_amenities_cupboard)
    formData.append("rpg_amenities_tv",data.rpg_amenities_tv)
    formData.append("rpg_amenities_bed",data.rpg_amenities_bed)
    formData.append("rpg_amenities_geyser",data.rpg_amenities_geyser)
    formData.append("rpg_amenities_ac",data.rpg_amenities_ac)
    formData.append("rpg_amenities_attached_bathroom",data.rpg_amenities_attached_bathroom)
    formData.append("rpg_amenities_laundry",data.rpg_amenities_laundry)
    formData.append("rpg_amenities_room_cleaning ",data.rpg_amenities_room_cleaning)
    formData.append("rpg_amenities_lift",data.rpg_amenities_lift)
    formData.append("rpg_amenities_wifi",data.rpg_amenities_wifi)
    formData.append("rpg_amenities_power_backup",data.rpg_amenities_power_backup)
    formData.append("rpg_amenities_mess",data.rpg_amenities_mess)
    formData.append("rpg_amenities_fridge",data.rpg_amenities_fridge)
    formData.append("rpg_amenities_mess_cooking",data.rpg_amenities_mess_cooking)
   
      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post(`${host}/api/property/add-rpg-prop`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(responce)
    history("/")
    
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault()
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
    <Navbar/>
      <Box sx={{ width: '100%' }} style={{ padding: "5rem", color: "black" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />

          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}> {getStepContent(activeStep)}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button onClick={handleNext} >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </>
  );
}

export default ResidentialPG