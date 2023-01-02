import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import propertyContext from '../../context/PropertyContext';

const steps = ['Property Detail', 'Location', 'Resale Detail', 'Amenities', 'Gallery'];


export default function ResidentialSale() {
  const context = useContext(propertyContext)
  const {host} = context
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [data, setdata] = useState({

    rrs_detail_description: "",
    rrs_detail_app_type: "",
    rrs_detail_bhk_type: "",
    rrs_detail_floor: "",
    rrs_detail_total_floor: "",
    rrs_detail_floor_type: "",
    rrs_detail_kitchen_type: "",
    rrs_detail_prop_age: "",
    rrs_detail_builtup_area: "",
    rrs_detail_carpet_area: "",
    rrs_detail_furnishing: "",
    rrs_detail_parking: "",
    rrs_detail_bathroom: "",
    rrs_detail_balcony: "",
    rrs_detail_water_supply: "",

    rrs_location_state: "",
    rrs_location_city: "",
    rrs_location_latitude: "",
    rrs_location_longitude: "",
    rrs_location_iframe: "",

    rrs_resale_detail_exp_price: "",
    rrs_resale_detail_maintenance: "",
    rrs_resale_detail_available_from: "",

    rrs_amenities_lift: "",
    rrs_amenities_ac: "",
    rrs_amenities_intercom: "",
    rrs_amenities_children_play_area: "",
    rrs_amenities_servant_room: "",
    rrs_amenities_gas_pipeline: "",
    rrs_amenities_rainwater_harvesting: "",
    rrs_amenities_housekeepiing: "",
    rrs_amenities_visitor_parking: "",
    rrs_amenities_internet: "",
    rrs_amenities_club_house: "",
    rrs_amenities_swimming_pool: "",
    rrs_amenities_fire_safety: "",
    rrs_amenities_shopping_center: "",
    rrs_amenities_park: "",
    rrs_amenities_sewage_treatment: "",
    rrs_amenities_power_backup: "",
    rrs_amenities_gated_security: "",
    rrs_amenities_gym: "",
  })
  const [file, setFile] = useState([]);
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(data)
  // }
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
                  name="rrs_detail_description"
                  class="form-control"
                  onChange={handleChange}
                  id="exampleFormControlTextarea1"
                  placeholder="write the text......"
                  rows="3"
                  value={data.rrs_detail_description}
                ></textarea>
              </div>
            </div>
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                Apartment Type
              </label>
              <select
                name="rrs_detail_app_type"
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
                  name="rrs_detail_bhk_type"
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
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Floor
                </label>
                <select
                  name="rrs_detail_floor"
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
                  name="rrs_detail_total_floor"
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
                  Floor Type
                </label>
                <select
                  name="rrs_detail_floor_type"
                  class="form-select"
                  id="validationCustom04"
                  required
                  onChange={handleChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="vitrified tiles">vitrified tiles</option>
                  <option value="mossaic">mossaic</option>
                  <option value="marble">marble</option>
                  <option value="granite">granite</option>
                  <option value="wooden">wooden</option>
                  <option value="cement">cement</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom04" class="form-label">
                  Kichen Type
                </label>
                <select
                  name="rrs_detail_kitchen_type"
                  class="form-select"
                  id="validationCustom04"
                  required
                  onChange={handleChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="modular">modular</option>
                  <option value="covered shelves">covered shelves</option>
                  <option value="open shelve">open shelve</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom04" class="form-label">
                  Prop Age
                </label>
                <select
                  name="rrs_detail_prop_age "
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
              <div class="col-md-2">
                <label for="validationCustom04" class="form-label">
                  Facing
                </label>
                <select
                  name="rrs_detail_facing"
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
                  name="rrs_detail_builtup_area"
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
                  Carpet Area
                </label>
                <input
                  type="text"
                  name="rrs_detail_carpet_area"
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
                  name="rrs_detail_furnishing"
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
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Parking
                </label>
                <select
                  name="rrs_detail_parking"
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
                  name="rrs_detail_bathroom"
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
                  name="rrs_detail_balcony"
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
                  name="rrs_detail_water_supply"
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
                name="rrs_location_state"
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
                name="rrs_location_city"
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
                name="rrs_location_latitude"
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
                name="rrs_location_longitude"
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
                name="rrs_location_iframe"
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
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Expected Deposite
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="rrs_resale_detail_exp_price"
                  placeholder="Enter the Amount"
                  aria-label="First name"
                  onChange={handleChange}
                />
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">
                Maintenance
              </label>
              <select
                name="rrs_resale_detail_maintenance"
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
                  name="rrs_resale_detail_available_from"
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
                    name="rrs_amenities_lift"
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
                    name="rrs_amenities_ac"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    AC{" "}
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    class="form-check-input"
                    name="rrs_amenities_intercom"
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
                    name="rrs_amenities_children_play_area"
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
                    name="rrs_amenities_servant_room"
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
                    name="rrs_amenities_gas_pipeline"
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
                    name="rrs_amenities_rainwater_harvesting"
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
                    name="rrs_amenities_housekeepiing"
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
                    name="rrs_amenities_visitor_parking"
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
                    name="rrs_amenities_internet"
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
                    name="rrs_amenities_club_house"
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
                    name="rrs_amenities_swimming_pool"
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
                    name="rrs_amenities_fire_safety"
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
                    name="rrs_amenities_shopping_center"
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
                    name="rrs_amenities_park"
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
                    name="rrs_amenities_sewage_treatment"
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
                    name="rrs_amenities_power_backup"
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
                    name="rrs_amenities_gated_security"
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
                    name="rrs_amenities_gym"
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
      formData.append("rrs_detail_description",data.rrs_detail_description)
      formData.append("rrs_detail_app_type",data.rrs_detail_app_type)
      formData.append("rrs_detail_bhk_type",data.rrs_detail_bhk_type)
      formData.append("rrs_detail_floor",data.rrs_detail_floor)
      formData.append("rrs_detail_total_floor",data.rrs_detail_total_floor)
      formData.append("rrs_detail_floor_type",data.rrs_detail_floor_type)
      formData.append("rrs_detail_kitchen_type",data.rrs_detail_kitchen_type)
      formData.append("rrs_detail_prop_age",data.rrs_detail_prop_age)
      formData.append("rrs_detail_facing",data.rrs_detail_facing)
      formData.append("rrs_detail_builtup_area",data.rrs_detail_builtup_area)
      formData.append("rrs_detail_carpet_area",data.rrs_detail_carpet_area)
      formData.append("rrs_detail_furnishing",data.rrs_detail_furnishing)
      formData.append("rrs_detail_parking",data.rrs_detail_parking)
      formData.append("rrs_detail_bathroom",data.rrs_detail_bathroom)
      formData.append("rrs_detail_balcony",data.rrs_detail_balcony)
      formData.append("rrs_detail_water_supply",data.rrs_detail_water_supply)

      formData.append("rrs_location_state",data.rrs_location_state)
      formData.append("rrs_location_city",data.rrs_location_city)
      formData.append("rrs_location_latitude",data.rrs_location_latitude)
      formData.append("rrs_location_longitude",data.rrs_location_longitude)
      formData.append("rrs_location_iframe",data.rrs_location_iframe)

      formData.append("rrs_resale_detail_exp_price",data.rrs_resale_detail_exp_price)
      formData.append("rrs_resale_detail_maintenance",data.rrs_resale_detail_maintenance)
      formData.append("rrs_resale_detail_available_from",data.rrs_resale_detail_available_from)

      formData.append("rrs_amenities_lift",data.rrs_amenities_lift)
      formData.append("rrs_amenities_ac",data.rrs_amenities_ac)
      formData.append("rrs_amenities_intercom",data.rrs_amenities_intercom)
      formData.append("rrs_amenities_children_play_area",data.rrs_amenities_children_play_area)
      formData.append("rrs_amenities_servant_room",data.rrs_amenities_servant_room)
      formData.append("rrs_amenities_gas_pipeline",data.rrs_amenities_gas_pipeline)
      formData.append("rrs_amenities_rainwater_harvesting",data.rrs_amenities_rainwater_harvesting)
      formData.append("rrs_amenities_housekeepiing",data.rrs_amenities_housekeepiing)
      formData.append("rrs_amenities_visitor_parking",data.rrs_amenities_visitor_parking)
      formData.append("rrs_amenities_internet",data.rrs_amenities_internet)
      formData.append("rrs_amenities_club_house",data.rrs_amenities_club_house)
      formData.append("rrs_amenities_swimming_pool",data.rrs_amenities_swimming_pool)
      formData.append("rrs_amenities_fire_safety",data.rrs_amenities_fire_safety)
      formData.append("rrs_amenities_shopping_center",data.rrs_amenities_shopping_center)
      formData.append("rrs_amenities_park",data.rrs_amenities_park)
      formData.append("rrs_amenities_sewage_treatment",data.rrs_amenities_sewage_treatment)
      formData.append("rrs_amenities_power_backup",data.rrs_amenities_power_backup)
       formData.append("rrs_amenities_gated_security",data.rrs_amenities_gated_security)
      formData.append("rrs_amenities_gym",data.rrs_amenities_gym)
      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post(`${host}/api/property/add-rrs-prop`, formData, {
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
