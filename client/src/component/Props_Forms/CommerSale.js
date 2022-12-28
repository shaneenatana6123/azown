import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const steps = ['Property Detail', 'Location', 'Resale Detail', 'Amenities', 'Gallery'];
const CommerSale = () => {
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
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
    
    cs_amenities_power_backup :"",
    cs_amenities_lift:"",
    cs_amenities_parking:"",
    cs_amenities_washroom:"",
    cs_amenities_water_storage :"",
    cs_amenities_security:"",
    cs_amenities_wifi:"",
   
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
      formData.append("cs_detail_description",data.cs_detail_description)
      formData.append("cs_detail_property_type",data.cs_detail_property_type)
      formData.append("cs_detail_building_type",data.cs_detail_building_type)
      formData.append("cs_detail_prop_age ",data.cs_detail_prop_age)
      formData.append("cs_detail_floor ",data.cs_detail_floor)
      formData.append("cs_detail_total_floor",data.cs_detail_total_floor)
      formData.append("cs_detail_builtup_area ",data.cs_detail_builtup_area)
      formData.append("cs_detail_furnishing",data.cs_detail_furnishing)
      
      formData.append("cs_location_state",data.cs_location_state)
      formData.append("cs_location_city",data.cs_location_city)
      formData.append("cs_location_latitiude",data.cs_location_latitiude)
      formData.append("cs_location_longitude",data.cs_location_longitude)
      formData.append("cs_location_iframe",data.cs_location_iframe)
      
      formData.append("cs_resale_details_exp_price",data.cs_resale_details_exp_price)
      formData.append("cs_resale_details_maintenance",data.cs_resale_details_maintenance)
      formData.append("cs_resale_details_available_from",data.cs_resale_details_available_from)
      
      formData.append("cs_amenities_power_backup ",data.cs_amenities_power_backup)
      formData.append("cs_amenities_lift",data.cs_amenities_lift)
      formData.append("cs_amenities_parking",data.cs_amenities_parking)
      formData.append("cs_amenities_washroom",data.cs_amenities_washroom)
      formData.append("cs_amenities_water_storage ",data.cs_amenities_water_storage)
      formData.append("cs_amenities_security",data.cs_amenities_security)
      formData.append("cs_amenities_wifi",data.cs_amenities_security)
      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post("http://localhost:5000/api/property/add-cmr-prop", formData, {
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

export default CommerSale