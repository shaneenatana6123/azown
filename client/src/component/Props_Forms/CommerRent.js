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


const steps = ['Property Detail', 'Location', 'Resale Detail', 'Amenities', 'Gallery'];
const CommerRent = () => {
  const context = useContext(propertyContext)
  const {host} = context
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [data, setdata] = useState({

    cr_detail_description:"",
    cr_detail_property_type  :"",
    cr_detail_building_type :"",
    cr_detail_prop_age :"",
    cr_detail_floor :"",
    cr_detail_total_floor:"",
    cr_detail_builtup_area :"",
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
    
    cr_amenities_power_backup :"",
    cr_amenities_lift:"",
    cr_amenities_parking:"",
    cr_amenities_washroom:"",
    cr_amenities_water_storage :"",
    cr_amenities_security:"",
    cr_amenities_wifi:"",
   
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
                name="cr_detail_description"
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
              Property Type
            </label>
            <select
              name="cr_detail_property_type"
              class="form-select"
              id="validationCustom04"
              required
              onChange={handleChange}
            >
              <option selected disabled value="">
                Select
              </option>
              <option value="office space">office space</option>
              <option value="co-working">co-working</option>
              <option value="shop">shop</option>
              <option value="showroom">
                showroom
              </option><option value="godown">
                godown
              </option><option value="warehouse">
                warehouse
              </option><option value="industrial shed">
                industrial shed
              </option><option value="industrial building">
                industrial building
              </option><option value="restaurant">
                restaurant
              </option><option value="cafe">
                cafe
              </option><option value="other business">
                other business
              </option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                Building Type
              </label>
              <select
                class="form-select"
                name="rr_detail_bhk_type"
                id="validationCustom04"
                onChange={handleChange}
                required
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="independent house">independent house</option>
                <option value="business park">business park</option>
                <option value="mall">mall</option>
                <option value="standalone building">standalone building</option>         
                <option value="independent shop">independent shop</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">
                Floor
              </label>
              <select
                name="cr_detail_floor"
                class="form-select"
                id="validationCustom04"
                onChange={handleChange}
                required
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-2">
              <label for="validationCustom04" class="form-label">
                Total Floor
              </label>
              <select
                name="cr_detail_total_floor"
                class="form-select"
                id="validationCustom04"
                required
                onChange={handleChange}
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
          </div>
          <div class="row">
             
             
            <div class="col-md-2">
              <label for="validationCustom04" class="form-label">
                Prop Age
              </label>
              <select
                name="cr_detail_prop_age "
                class="form-select"
                id="validationCustom04"
                onChange={handleChange}
                required
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
             
          </div>
          <div class="row">
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                Build Up Area
              </label>
              <input
                type="text"
                name="cr_detail_builtup_area"
                class="form-control"
                placeholder="Enter the Area"
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
                Furnishing
              </label>
              <select
                name="cr_detail_furnishing"
                class="form-select"
                id="validationCustom04"
                required
                onChange={handleChange}
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="furnished">furnished</option>
                <option value="unfurnished">unfurnished</option>
                <option value="semi furnished">semi furnished</option>
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
                  name="cr_location_state"
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
                  name="cr_location_citycr_location_latitiude"
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
                  name="cr_location_latitiude"
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
                  name="cr_location_longitude"
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
                  IFrame
                </label>
                <input
                  name="cr_location_iframe"
                  type="text"
                  class="form-control"
                  placeholder="Enter the Latitute"
                  aria-label="First name"
                  onChange={handleChange}
                />

                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
            </div>
        );
      case 2:
        return (
          <div class="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Expected Deposite
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="cr_rental_detail_exp_deposit"
                    placeholder="Enter the Amount"
                    aria-label="First name"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-6">
                  <div class="col-3">Navogation</div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="cr_rental_detail_is_nogotiable"
                      id="inlineRadio1"
                      value="true"
                      onChange={handleChange}
                    />
                    <label
                      class="form-check-label"
                      value="Yes"
                      for="inlineRadio1"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="rr_rental_detail_is_nogotiable"
                      id="inlineRadio2"
                      value="true"
                      onChange={handleChange}
                    />
                    <label
                      class="form-check-label"
                      value="No"
                      for="inlineRadio2"
                    >
                      No
                    </label>
                  </div>                
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Monthly Maintenance
                </label>
                <select
                  name="cr_rental_detail_monthly_maintenance"
                  class="form-select"
                  id="validationCustom04"
                  required
                  onChange={handleChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="maintenance_included">
                    maintenance included
                  </option>
                  <option value="maintenance_extra">maintenance extra</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Available From
                  </label>
                  <input
                    type="date"
                    name="cr_rental_detail_avail_from"
                    class="form-control"
                    placeholder=""
                    aria-label="First name"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Lease Duration
                  </label>
                  <select
                    name="cr_rental_detail_lease_duration"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Lockin Period
                  </label>
                  <select
                    name="cr_rental_detail_lease_duration"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
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
                      name="cr_amenities_lift"
                      type="checkbox"
                      value="true"
                      id="defaultCheck1"
                    />
                    <label class="form-check-label " for="defaultCheck1">
                      Lift
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check m-2 p-2">
                    <input
                      name="cr_amenities_wifi"
                      class="form-check-input"
                      type="checkbox"
                      value="true"
                      id="defaultCheck1"
                      onChange={handleChange}
                    />
                    <label class="form-check-label " for="defaultCheck1">
                      WiFi
                    </label>
                  </div>
                </div>     
                 
              </div>
              
              
               
              <div class="row">
                <div class="col-4">
                  <div class="form-check m-2 p-2">
                    <input
                      name="cr_amenities_parking"
                      class="form-check-input"
                      type="checkbox"
                      value="true"
                      id="defaultCheck1"
                      onChange={handleChange}
                    />
                    <label class="form-check-label " for="defaultCheck1">
                      Parking
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check m-2 p-2">
                    <input
                      name="cr_amenities_washroom"
                      class="form-check-input"
                      type="checkbox"
                      value="true"
                      id="defaultCheck1"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Washroom
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-check m-2 p-2">
                    <input
                      name="cr_amenities_power_backup"
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
                      name="cr_amenities_security"
                      class="form-check-input"
                      type="checkbox"
                      value="true"
                      id="defaultCheck1"
                      onChange={handleChange}
                    />
                    <label class="form-check-label " for="defaultCheck1">
                      Security
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
      // console.log(data)
      // handleSubmit()
      const formData = new FormData();
      formData.append("cr_detail_description",data.cr_detail_description)
      formData.append("cr_detail_property_type  ",data.cr_detail_property_type)
      formData.append("cr_detail_building_type ",data.cr_detail_building_type)
      formData.append("cr_detail_prop_age ",data.cr_detail_prop_age)
      formData.append("cr_detail_floor ",data.cr_detail_floor)
      formData.append("cr_detail_total_floor",data.cr_detail_total_floor)
      formData.append("cr_detail_builtup_area ",data.cr_detail_builtup_area)
      formData.append("cr_detail_furnishing ",data.cr_detail_furnishing)
      
      formData.append("cr_location_state",data.cr_location_state)
      formData.append("cr_location_city",data.cr_location_city)
      formData.append("cr_location_latitiude",data.cr_location_latitiude)
      formData.append("cr_location_longitude",data.cr_location_longitude)
      formData.append("cr_location_iframe",data.cr_location_iframe)
      
      formData.append("cr_rental_detail_rent ",data.cr_rental_detail_rent)
      formData.append("cr_rental_detail_exp_deposit",data.cr_rental_detail_exp_deposit)
      formData.append("cr_rental_detail_is_nogotiable",data.cr_rental_detail_is_nogotiable)
      formData.append("cr_rental_detail_monthly_maintenance ",data.cr_rental_detail_monthly_maintenance)
      formData.append("cr_rental_detail_avail_from",data.cr_rental_detail_avail_from)
      formData.append("cr_rental_detail_lease_duration",data.cr_rental_detail_lease_duration)
      formData.append("cr_rental_detail_lockin_period  ",data.cr_rental_detail_lockin_period)
      
      formData.append("cr_amenities_power_backup ",data.cr_amenities_power_backup)
      formData.append("cr_amenities_lift",data.cr_amenities_lift)
      formData.append("cr_amenities_parking",data.cr_amenities_parking)
      formData.append("cr_amenities_washroom",data.cr_amenities_washroom)
      formData.append("cr_amenities_water_storage ",data.cr_amenities_water_storage)
      formData.append("cr_amenities_security",data.cr_amenities_security)
      formData.append("cr_amenities_wifi",data.cr_amenities_wifi)
      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post(`${host}/api/property/add-cmr-prop`, formData, {
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

export default CommerRent