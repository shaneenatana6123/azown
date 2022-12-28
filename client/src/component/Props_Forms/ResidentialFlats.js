import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const steps = ['Property Detail', 'Location', 'Rental Detail','Rules', 'Amenities', 'Gallery'];


export default function ResidentialSale() {
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [data, setdata] = useState({

    rfm_detail_description:"",
rfm_detail_app_type :"",
rfm_detail_bhk_type:"",
rfm_detail_floor :"",
rfm_detail_total_floor:"",
rfm_detail_prop_age :"",
rfm_detail_facing :"",
rfm_detail_builtup_area :"",
rfm_detail_room_type :"",
rfm_detail_tenent_type :"",
rfm_detail_furnishing :"",
rfm_detail_parking :"",
rfm_detail_bathroom :"",
rfm_detail_balcony:"",
rfm_detail_water_supply:"",

rfm_rules_is_non_veg_allowed:"",

rfm_location_state:"",
rfm_location_city:"",
rfm_location_latitiude:"",
rfm_location_longitude:"",
rfm_location_iframe:"",

rfm_rental_detail_rent :"",
rfm_rental_detail_exp_deposit:"",
rfm_rental_detail_is_nogotiable:"",
rfm_rental_detail_monthly_maintenance:"",
rfm_rental_detail_avail_from:"",

rfm_amenities_lift:"",
rfm_amenities_ac:"",
rfm_amenities_intercom:"",
rfm_amenities_children_play_area:"",
rfm_amenities_servant_room:"",
rfm_amenities_gas_pipeline:"",
rfm_amenities_rainwater_harvesting:"",
rfm_amenities_housekeepiing:"",
rfm_amenities_visitor_parking:"",
rfm_amenities_internet:"",
rfm_amenities_club_house:"",
rfm_amenities_swimming_pool:"",
rfm_amenities_fire_safety:"",
rfm_amenities_shopping_center:"",
rfm_amenities_park:"",
rfm_amenities_sewage_treatment:"",
rfm_amenities_power_backup:"",
rfm_amenities_gated_security:"",
rfm_amenities_gym:"",
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
                    name="rfm_detail_description"
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
                  Apartment Type
                </label>
                <select
                  name="rfm_detail_app_type"
                  class="form-select"
                  id="validationCustom04"
                  required
                  onChange={handleChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="appartment">appartment</option>
                  <option value="independent">independent</option>
                  <option value="house villa"> house villa</option>
                  <option value="gated community villa">
                    gated community villa
                  </option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    BHK Type
                  </label>
                  <select
                    class="form-select"
                    name="rfm_detail_bhk_type"
                    id="validationCustom04"
                    onChange={handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Floor
                  </label>
                  <select
                    name="rfm_detail_floor"
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
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Total Floor
                  </label>
                  <select
                    name="rfm_detail_total_floor"
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
               
                
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Prop Age
                  </label>
                  <select
                    name="rfm_detail_prop_age "
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

                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Facing
                  </label>
                  <select
                    name="rfm_detail_facing"
                    class="form-select"
                    id="validationCustom04"
                    onChange={handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="north">north</option>
                    <option value="south">south</option>
                    <option value="east">east</option>
                    <option value="west">west</option>
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
                    name="rfm_detail_builtup_area"
                    class="form-control"
                    placeholder="Enter the Area"
                    aria-label="First name"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Room Type
                  </label>
                  <select
                    type="text"
                    name="rfm_detail_room_type"
                    class="form-select"
                    
                    aria-label="First name"
                    onChange={handleChange}>
                    <option>Select</option>
                    <option value="single">Single</option>
                    <option value="shared">Shared</option>
                  </select>

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Tenent Type
                  </label>
                  <select
                    name="rfm_detail_tenent_type"
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
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Furnished
                  </label>
                  <select
                    name="rfm_detail_furnishing"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="furnished">Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Parking
                  </label>
                  <select
                    name="rfm_detail_parking"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="car">car</option>
                    <option value="bike">bike</option>
                    <option value="both">both</option>
                    <option value="none">none</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Bathrooms
                  </label>
                  <select
                    name="rfm_detail_bathroom"
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
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Balcony
                  </label>
                  <select
                    name="rfm_detail_balcony"
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
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Water Supply
                  </label>
                  <select
                    name="rfm_detail_water_supply"
                    class="form-select"
                    id="validationCustom04"
                    onChange={handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="borewell">borewell</option>
                    <option value="corporation">corporation</option>
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
              name="rfm_location_state"
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
              name="rfm_location_city"
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
              name="rfm_location_latitiude"
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
              name="rfm_location_longitude"
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
              name="rfm_location_iframe"
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
          <div class="row">
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Rent
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="rfm_rental_detail_rent"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Expected Deposite
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="rfm_rental_detail_exp_deposit"
                    placeholder="Enter the Amount"
                    aria-label="First name"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
               
              
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Monthly Maintenance
                </label>
                <select
                  name="rfm_rental_detail_monthly_maintenance"
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


            
                <div class="col-md-5">
                  <label for="validationCustom04" class="form-label">
                    Available From
                  </label>
                  <input
                    type="date"
                    name="rfm_rental_detail_avail_from"
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
                  <div class="col-3">Navogation</div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="rfm_rental_detail_is_nogotiable"
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
                      name="rfm_rental_detail_is_nogotiable"
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
                  name="rfm_rules_is_non_veg_allowed"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                />
                <label class="form-check-label " for="defaultCheck1">
                  Non Veg Allowed
                </label>
              </div>
            </div>
          </div>               
        </div>
         
        )
      case 4:
        return (
          <div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rfm_amenities_lift"
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
                  class="form-check-input"
                  name="rfm_amenities_ac"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  AC
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rfm_amenities_intercom"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Intercom
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="rfm_amenities_children_play_area"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Children Play Area
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_servant_room"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Servant Room
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_gas_pipeline"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Gas Pineline
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_rainwater_harvestingg"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Rainwater Harvesting
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_housekeepiing"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  House Keeping
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_visitor_parking"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Visiter Parking
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_internet"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1 "
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Internet
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_club_house"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Club House
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_swimming_pool"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Swimming Pool
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_fire_safety"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Fire Safety
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_shopping_center"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Shopping center
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_park"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label " for="defaultCheck1">
                  Park
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_sewage_treatment"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Sewage treatment
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_power_backup"
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
                  name="rfm_amenities_gated_security"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  gated Security
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  name="rfm_amenities_gym"
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="defaultCheck1">
                  GYM
                </label>
              </div>
            </div>
          </div>
        </div>

        )
        case 5:
          return (
            <div>
            <input
              onChange={fileSelected}
              type="file"
              accept="image/*"
              multiple
            />
          </div>
          )
      default:
        return 'Unknown step';
    }
  }

  const handleNext =async () => {
    if (activeStep === steps.length - 1) {
   
      const formData = new FormData();
      formData.append("rfm_detail_description",data.rfm_detail_description)
      formData.append("rfm_detail_app_type ",data.rfm_detail_app_type)
      formData.append("rfm_detail_bhk_type",data.rfm_detail_bhk_type)
      formData.append("rfm_detail_floor ",data.rfm_detail_floor)
      formData.append("rfm_detail_total_floor",data.rfm_detail_total_floor)
      formData.append("rfm_detail_prop_age ",data.rfm_detail_prop_age)
      formData.append("rfm_detail_facing ",data.rfm_detail_facing)
      formData.append("rfm_detail_builtup_area ",data.rfm_detail_builtup_area)
      formData.append("rfm_detail_room_type ",data.rfm_detail_room_type)
      formData.append("rfm_detail_tenent_type ",data.rfm_detail_tenent_type)
      formData.append("rfm_detail_furnishing ",data.rfm_detail_furnishing)
      formData.append("rfm_detail_parking ",data.rfm_detail_parking)
      formData.append("rfm_detail_bathroom ",data.rfm_detail_bathroom)
      formData.append("rfm_detail_balcony",data.rfm_detail_balcony)
      formData.append("rfm_detail_water_supply",data.rfm_detail_water_supply)
      
      formData.append("rfm_rules_is_non_veg_allowed",data.rfm_rules_is_non_veg_allowed)
      
      formData.append("rfm_location_state",data.rfm_location_state)
      formData.append("rfm_location_city",data.rfm_location_city)
      formData.append("rfm_location_latitiude",data.rfm_location_latitiude)
      formData.append("rfm_location_longitude",data.rfm_location_longitude)
      formData.append("rfm_location_iframe",data.rfm_location_iframe)
      
      formData.append("rfm_rental_detail_rent ",data.rfm_rental_detail_rent)
      formData.append("rfm_rental_detail_exp_deposit",data.rfm_rental_detail_exp_deposit)
      formData.append("rfm_rental_detail_is_nogotiable",data.rfm_rental_detail_is_nogotiable)
      formData.append("rfm_rental_detail_monthly_maintenance",data.rfm_rental_detail_monthly_maintenance)
      formData.append("rfm_rental_detail_avail_from",data.rfm_rental_detail_avail_from)
      
      formData.append("rfm_amenities_lift",data.rfm_amenities_lift)
      formData.append("rfm_amenities_ac",data.rfm_amenities_ac)
      formData.append("rfm_amenities_intercom",data.rfm_amenities_intercom)
      formData.append("rfm_amenities_children_play_area",data.rfm_amenities_children_play_area)
      formData.append("rfm_amenities_servant_room",data.rfm_amenities_servant_room)
      formData.append("rfm_amenities_gas_pipeline",data.rfm_amenities_gas_pipeline)
      formData.append("rfm_amenities_rainwater_harvesting",data.rfm_amenities_rainwater_harvesting)
      formData.append("rfm_amenities_housekeepiing",data.rfm_amenities_housekeepiing)
      formData.append("rfm_amenities_visitor_parking",data.rfm_amenities_visitor_parking)
      formData.append("rfm_amenities_internet",data.rfm_amenities_internet)
      formData.append("rfm_amenities_club_house",data.rfm_amenities_club_house)
      formData.append("rfm_amenities_swimming_pool",data.rfm_amenities_swimming_pool)
      formData.append("rfm_amenities_fire_safety",data.rfm_amenities_fire_safety)
      formData.append("rfm_amenities_shopping_center",data.rfm_amenities_shopping_center)
      formData.append("rfm_amenities_park",data.rfm_amenities_park)
      formData.append("rfm_amenities_sewage_treatment",data.rfm_amenities_sewage_treatment)
      formData.append("rfm_amenities_power_backup",data.rfm_amenities_power_backup)
      formData.append("rfm_amenities_gated_security",data.rfm_amenities_gated_security)
      formData.append("rfm_amenities_gym",data.rfm_amenities_gym)
      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post("http://localhost:5000/api/property/add-rfm-prop", formData, {
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
  );
}
