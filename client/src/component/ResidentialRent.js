import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResidentialRent = () => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  });
  const [rrproperty, setrrproperty] = useState({
    rr_detail_description: "",
    rr_detail_app_type: "",
    rr_detail_bhk_type: "",
    rr_detail_floor: "",
    rr_detail_total_floor: "",
    rr_detail_floor_type: "",
    rr_detail_kitchen_type: "",
    rr_detail_prop_age: "",
    rr_detail_facing: "",
    rr_detail_builtup_area: "",
    rr_detail_carpet_area: "",
    rr_detail_furnishing: "",
    rr_detail_parking: "",
    rr_detail_bathroom: "",
    rr_detail_balcony: "",
    rr_detail_water_supply: "",
    rr_location_state: "",
    rr_location_city: "",
    rr_location_latitude: "",
    rr_location_longitude: "",
    rr_rental_detail_rent: "",
    rr_rental_detail_exp_deposit: "",
    rr_rental_detail_is_nogotiable: "",
    rr_rental_detail_monthly_maintenance: "",
    rr_rental_detail_avail_from: "",
    rr_rental_detail_pref_tenent: "",
    rr_rental_detail_is_allowed_nonveg: "",
    rr_rental_detail_shown_by: "",
    rr_rental_detail_shown_by_number: "",

    rr_amenities_lift: "",
    rr_amenities_ac: "",
    rr_amenities_intercom: "",
    rr_amenities_children_play_area: "",
    rr_amenities_servant_room: "",
    rr_amenities_gas_pipeline: "",
    rr_amenities_rainwater_harvesting: "",
    rr_amenities_housekeepiing: "",
    rr_amenities_visitor_parking: "",
    rr_amenities_internet: "",
    rr_amenities_club_house: "",
    rr_amenities_swimming_pool: "",
    rr_amenities_fire_safety: "",
    rr_amenities_shopping_center: "",
    rr_amenities_park: "",
    rr_amenities_sewage_treatment: "",
    rr_amenities_power_backup: "",
    rr_amenities_gated_security: "",
    rr_amenities_gym: "",
  });
  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    setrrproperty({ ...rrproperty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("rr_detail_description", rrproperty.rr_detail_description);
  formData.append("rr_detail_app_type",rrproperty.rr_detail_app_type)
  formData.append("rr_detail_bhk_type",rrproperty.rr_detail_bhk_type)
  formData.append("rr_detail_floor",rrproperty.rr_detail_floor)
  formData.append("rr_detail_total_floor",rrproperty.rr_detail_total_floor)
  formData.append("rr_detail_floor_type",rrproperty.rr_detail_floor_type)
  formData.append("rr_detail_kitchen_type",rrproperty.rr_detail_kitchen_type)
  formData.append("rr_detail_prop_age",rrproperty.rr_detail_prop_age)
  formData.append("rr_detail_facing",rrproperty.rr_detail_facing)
  formData.append("rr_detail_builtup_area",rrproperty.rr_detail_builtup_area)

  formData.append("rr_detail_carpet_area",rrproperty.rr_detail_carpet_area)
  formData.append("rr_detail_furnishing",rrproperty.rr_detail_furnishing)
  formData.append("rr_detail_parking",rrproperty.rr_detail_parking)
  formData.append("rr_detail_bathroom",rrproperty.rr_detail_bathroom)
  formData.append("rr_detail_balcony",rrproperty.rr_detail_balcony)
  formData.append("rr_location_state",rrproperty.rr_location_state)
  formData.append("rr_location_city",rrproperty.rr_location_city)
  formData.append("rr_location_latitude",rrproperty.rr_location_latitude)
  formData.append("rr_location_longitude",rrproperty.rr_location_longitude)
  formData.append("rr_rental_detail_rent",rrproperty.rr_rental_detail_rent)
  formData.append("rr_rental_detail_exp_deposit",rrproperty.rr_rental_detail_exp_deposit)
  formData.append("rr_rental_detail_is_nogotiable",rrproperty.rr_rental_detail_is_nogotiable)
  formData.append("rr_rental_detail_monthly_maintenance",rrproperty.rr_rental_detail_monthly_maintenance)
  formData.append("rr_rental_detail_avail_from",rrproperty.rr_rental_detail_avail_from)

  formData.append("rr_rental_detail_pref_tenent",rrproperty.rr_rental_detail_pref_tenent)
  formData.append("rr_rental_detail_is_allowed_nonveg",rrproperty.rr_rental_detail_is_allowed_nonveg)
  formData.append("rr_rental_detail_shown_by",rrproperty.rr_rental_detail_shown_by)
  formData.append("rr_rental_detail_shown_by_number",rrproperty.rr_rental_detail_shown_by_number)
  formData.append("rr_amenities_lift",rrproperty.rr_amenities_lift)
  formData.append("rr_amenities_ac",rrproperty.rr_amenities_ac)
  formData.append("rr_amenities_intercom",rrproperty.rr_amenities_intercom)
  formData.append("rr_amenities_children_play_area",rrproperty.rr_amenities_children_play_area)
  formData.append("rr_amenities_servant_room",rrproperty.rr_amenities_servant_room)
  formData.append("rr_amenities_gas_pipeline",rrproperty.rr_amenities_gas_pipeline)
  formData.append("rr_amenities_rainwater_harvesting",rrproperty.rr_amenities_rainwater_harvesting)
  formData.append("rr_amenities_housekeepiing",rrproperty.rr_amenities_housekeepiing)
  formData.append("rr_amenities_visitor_parking",rrproperty.rr_amenities_visitor_parking)
  formData.append("rr_amenities_internet",rrproperty.rr_amenities_internet)
  formData.append("rr_amenities_club_house",rrproperty.rr_amenities_club_house)
  formData.append("rr_amenities_swimming_pool",rrproperty.rr_amenities_swimming_pool)
  formData.append("rr_amenities_fire_safety",rrproperty.rr_amenities_fire_safety)
  formData.append("rr_amenities_shopping_center",rrproperty.rr_amenities_shopping_center)
  formData.append("rr_amenities_park",rrproperty.rr_amenities_park)
  formData.append("rr_amenities_sewage_treatment",rrproperty.rr_amenities_sewage_treatment)

  formData.append("rr_amenities_power_backup",rrproperty.rr_amenities_power_backup)
  formData.append("rr_amenities_gated_security",rrproperty.rr_amenities_gated_security)
  formData.append("rr_amenities_gym",rrproperty.rr_amenities_gym)

    Array.from(file).forEach((item) => {
      formData.append("image", item);
    });
    // console.log(formData);
    const responce = await axios.post("http://localhost:5000/api/property/addprop", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(responce);
    history("/")
  };
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
        <h1 class="text-center"> Residential Rent </h1>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#property"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Property details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#location"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Location Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#rental"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Rental Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#amenity"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Amenities
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#gallery"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Galery
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="property"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h1>Property Detail</h1>
            <div>
              <div class="row">
                <div class="col-md-5">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Description
                  </label>
                  <textarea
                    name="rr_detail_description"
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
                  name="rr_detail_app_type"
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
                    name="rr_detail_bhk_type"
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
                    name="rr_detail_floor"
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
                    name="rr_detail_total_floor"
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
                    name="rr_detail_floor_type"
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
                    name="rr_detail_kitchen_type"
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
                    name="rr_detail_prop_age "
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
                    name="rr_detail_facing"
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
                    name="rr_detail_builtup_area"
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
                    name="rr_detail_carpet_area"
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
                    name="rr_detail_furnishing"
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
                    name="rr_detail_parking"
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
                    name="rr_detail_bathrrom"
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
                    name="rr_detail_balcony"
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
                    name="rr_detail_water_supply"
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
          </div>

          <div
            class="tab-pane fade"
            id="location"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <h1>Location details</h1>
            <div>
              <div class="col-md-5">
                <label for="validationCustom04" class="form-label">
                  State
                </label>
                <select
                  name="rr_location_state"
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
                  name="rr_location_city"
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
                  name="rr_location_latitude"
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
                  name="rr_location_longitute"
                  type="text"
                  class="form-control"
                  placeholder="Enter the Latitute"
                  aria-label="First name"
                  onChange={handleChange}
                />

                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="rental"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <h1>Rental Detail</h1>
            <div>
              <div class="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Expected Deposite
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="rr_rental_detail_exp_deposit"
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
                      name="rr_rental_detail_is_nogotiable"
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
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Monthly Maintenance
                </label>
                <select
                  name="rr_rental_detail_monthly_maintenance"
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
                    name="rr_rental_detail_avail_from"
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
                    Preferred Tenants
                  </label>
                  <select
                    name="rr_rental_detail_pref_tenent"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="doesnot matter">doesnot matter</option>
                    <option value="family">family</option>
                    <option value="bachelors">bachelors</option>
                    <option value="company">company</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    shown By
                  </label>
                  <select
                    name="rr_rental_detail_shown_by"
                    class="form-select"
                    id="validationCustom04"
                    required
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="i will show">i will show</option>
                    <option value="friends">friends</option>
                    <option value="neighbour">neighbour</option>
                    <option value="tenents">tenents</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">
                    Shown by Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="rr_rental_detail_shown_by_number"
                    onChange={handleChange}
                  />

                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="amenity"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <h1>Amenities Detail</h1>
            <div>
              <div class="row">
                <div class="col-4">
                  <div class="form-check m-2 p-2">
                    <input
                      class="form-check-input"
                      name="rr_amenities_lift"
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
                      name="rr_amenities_ac"
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
                      name="rr_amenities_intercom"
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
                      name="rr_amenities_children_play_area"
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
                      name="rr_amenities_servant_room"
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
                      name="rr_amenities_gas_pipeline"
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
                      name="rr_amenities_rainwater_harvesting"
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
                      name="rr_amenities_housekeepiing"
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
                      name="rr_amenities_visitor_parking"
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
                      name="rr_amenities_internet"
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
                      name="rr_amenities_club_house"
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
                      name="rr_amenities_swimming_pool"
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
                      name="rr_amenities_fire_safety"
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
                      name="rr_amenities_shopping_center"
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
                      name="rr_amenities_park"
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
                      name="rr_amenities_sewage_treatment"
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
                      name="rr_amenities_power_backup"
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
                      name="rr_amenities_gated security"
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
                      name="rr_amenities_gym"
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
          </div>
          <div
            class="tab-pane fade"
            id="gallery"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <h1>Gallery Detail</h1>

            <div>
              <input
                onChange={fileSelected}
                type="file"
                accept="image/*"
                multiple
              ></input>
            </div>
          </div>
        </div>
        <input
          type="submit"
          class="btn btn-dark p-2 m-2"
          value="Final Submit"
        />
      </form>
    </div>
  );
};

export default ResidentialRent;
