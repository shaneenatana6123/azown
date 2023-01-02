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

const steps = ['Property Detail', 'Location', 'Sale Detail', 'Property Info', 'Amenities', 'Rules', 'Gallery'];
const PlotResale = () => {
  const context = useContext(propertyContext)
  const {host} = context
  const history = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [data, setdata] = useState({

    ps_detail_description: "",
    ps_detail_plot_length: "",
    ps_detail_plot_width: "",
    ps_detail_width_of_facing_road: "",
    ps_detail_has_boundary: "",
    ps_detail_inside_gated_project: "",

    ps_rules_allowed_floors: "",

    ps_location_state: "",
    ps_location_city: "",
    ps_location_latitiude: "",
    ps_location_longitude: "",

    ps_sale_detail_price: "",
    ps_sale_detail_available_from: "",
    ps_sale_detail_is_negotiable: "",
    ps_sale_detail_currently_under_loan: "",

    ps_amenities_water: "",
    ps_amenities_sewage_connection: "",
    ps_amenities_gated_security: "",
    ps_amenities_electricity_connection: "",

    ps_info_ownership: "",
    ps_info_khata_certificate_is_available: "",
    ps_info_conversion_certificate_is_available: "",
    ps_info_sale_deed_certificate_is_available: "",
    ps_info_encumbrance_certificate_is_available: "",
    ps_info_is_rera_approved: "",


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
                name="ps_detail_description"
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
              Plot Length
            </label>
            <input
              name="ps_detail_plot_length"
              class="form-control"
              onChange={handleChange}
              id="exampleFormControlTextarea1"
              placeholder="write the text......"
              rows="3"
            />
              <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                Plot Width
              </label>
              <input
                name="ps_detail_plot_width"
                class="form-control"
                onChange={handleChange}
                id="exampleFormControlTextarea1"
                placeholder="write the text......"
                rows="3"
             / >
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">
                Facing Road
              </label>
              <input
                name="ps_detail_width_of_facing_road"
                class="form-control"
                onChange={handleChange}
                id="exampleFormControlTextarea1"
                placeholder="write the text......"
                rows="3"
              />
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
            </div>
            <div class="col-md-2">
              <label for="validationCustom04" class="form-label">
                Boundary
              </label>
              <input
                name="ps_detail_has_boundary"
                class="form-control"
                onChange={handleChange}
                id="exampleFormControlTextarea1"
                placeholder="write the text......"
                rows="3"
             / >
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-2">
              <label for="validationCustom04" class="form-label">
                Gated Project
              </label>
              <input
                name="ps_detail_has_boundary"
                class="form-control"
                onChange={handleChange}
                id="exampleFormControlTextarea1"
                placeholder="write the text......"
                rows="3"
              ></input>
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
            </div>
          </div>
        </div>
        )
         

       
      case 1:
        return (
          <div>
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                State
              </label>
              <select
                name="ps_location_state"
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
                name="ps_location_city"
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
                name="ps_location_latitiude"
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
                name="ps_location_longitude"
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
          <div>
            <div class="row">
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Sale Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="ps_sale_detail_price"
                  placeholder="Enter the Amount"
                  aria-label="First name"
                  onChange={handleChange}
                />
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Available From
                </label>
                <input
                  type="date"
                  name="ps_sale_detail_available_from"
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
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    class="form-check-input"
                    name="ps_sale_detail_is_negotiable"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Negotiable
                  </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    class="form-check-input"
                    name="ps_sale_detail_currently_under_loan"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Currently Under Loan
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
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  Ownership Type
                </label>
                <select
                  name="ps_info_ownership"
                  class="form-select"
                  id="validationCustom04"
                  onChange={handleChange}
                  required
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="freehold">freehold</option>
                  <option value="leasehold">leasehold</option>
                  <option value="co-operative society">co-operative society</option>
                  <option value="power of attorney">power of attorney</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    class="form-check-input"
                    name="ps_info_khata_certificate_is_available"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Khata Certicifate Available
                  </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_info_conversion_certificate_is_available"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Conversion Certificate Available
                  </label>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_info_sale_deed_certificate_is_available"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Deed Certificate Available
                  </label>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_info_encumbrance_certificate_is_available"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Encumbrance Certificate Available
                  </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_info_is_rera_approved"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Rera Approved
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    class="form-check-input"
                    name="ps_amenities_water"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Water
                  </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_amenities_sewage_connection"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Sewage Connection
                  </label>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_amenities_gated_security"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Gated Security
                  </label>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-check m-2 p-2">
                  <input
                    name="ps_amenities_electricity_connection"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    id="defaultCheck1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label " for="defaultCheck1">
                    Electricity
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div class="row">

            <div class="col-4">
              <div class="form-check m-2 p-2">
                <input
                  class="form-check-input"
                  name="ps_rules_allowed_floors"
                  type="checkbox"
                  value="true"
                  id="defaultCheck1"
                />
                <label class="form-check-label " for="defaultCheck1">
                  Allowed Floor
                </label>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <input
              onChange={fileSelected}
              type="file"
              accept="image/*"
              multiple
            ></input>
          </div>
        );

      default:
        return 'Unknown step';
    }
  }

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // console.log(data)
      // handleSubmit()
      const formData = new FormData();
      formData.append("ps_detail_description", data.ps_detail_description)
      formData.append("ps_detail_plot_length ", data.ps_detail_plot_length)
      formData.append("ps_detail_plot_width ", data.ps_detail_plot_width)
      formData.append("ps_detail_width_of_facing_road", data.ps_detail_width_of_facing_road)
      formData.append("ps_detail_has_boundary ", data.ps_detail_has_boundary)
      formData.append("ps_detail_inside_gated_project", data.ps_detail_inside_gated_project)

      formData.append("ps_rules_allowed_floors ", data.ps_rules_allowed_floors)

      formData.append("ps_location_state", data.ps_location_state)
      formData.append("ps_location_city", data.ps_location_city)
      formData.append("ps_location_latitiude", data.ps_location_latitiude)
      formData.append("ps_location_longitude", data.ps_location_longitude)

      formData.append("ps_sale_detail_price", data.ps_sale_detail_price)
      formData.append("ps_sale_detail_available_from ", data.ps_sale_detail_available_from)
      formData.append("ps_sale_detail_is_negotiable", data.ps_sale_detail_is_negotiable)
      formData.append("ps_sale_detail_currently_under_loan", data.ps_sale_detail_currently_under_loan)

      formData.append("ps_amenities_water", data.ps_amenities_water)
      formData.append("ps_amenities_sewage_connection", data.ps_amenities_sewage_connection)
      formData.append("ps_amenities_gated_security", data.ps_amenities_gated_security)
      formData.append("ps_amenities_electricity_connection", data.ps_amenities_electricity_connection)

      formData.append("ps_info_ownership ", data.ps_info_ownership)
      formData.append("ps_info_khata_certificate_is_available", data.ps_info_khata_certificate_is_available)
      formData.append("ps_info_conversion_certificate_is_available", data.ps_info_conversion_certificate_is_available)
      formData.append("ps_info_sale_deed_certificate_is_available", data.ps_info_sale_deed_certificate_is_available)
      formData.append("ps_info_encumbrance_certificate_is_available", data.ps_info_encumbrance_certificate_is_available)
      formData.append("ps_info_is_rera_approved", data.ps_info_is_rera_approved)

      Array.from(file).forEach((item) => {
        formData.append("image", item);
      });
      const responce = await axios.post(`${host}/api/property/add-plot-prop`, formData, {
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
      <Navbar />
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

export default PlotResale



