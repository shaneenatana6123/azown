import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../context/PropertyContext";
import { useNavigate } from "react-router-dom";

const ResidentialRent = () => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  });
  const [property, setproperty] = useState({
    title: "",
    description: "",
    proptype: "",
  });
  const context = useContext(propertyContext);
  const { addrrProp } = context;

  const handleChange = (e) => {
    setproperty({ ...property, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addrrProp(property.title, property.description, property.proptype);
    history("/")
  };
  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
      <label htmlFor="">Property Title</label>
        <input
          type="text"
          placeholder="Title"
          value={property.title}
          className="form-control m-1"
          onChange={handleChange}
          name="title"
        />
        <label htmlFor="">Property Description</label>
        <input
          type="text"
          placeholder="Description"
          value={property.description}
          className="form-control m-1"
          onChange={handleChange}
          name="description"
        />
        <label htmlFor="">Apartment Type</label>
        <select
          class="form-select m-2"
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option name="proptype" selected>
            Open this select menu
          </option>
          <option value="1">Apartment</option>
          <option value="2">Independent House</option>
          <option value="3">Gated Community</option>
        </select>
        <label htmlFor="">BHK Type</label>
        <select
          class="form-select m-2"   
          aria-label="Default select example"
        >
          <option name="proptype" selected>
            Open this select menu
          </option>
          <option value="1">1BHK</option>
          <option value="2">2BHK</option>
          <option value="3">3BHK</option>
        </select>
        <label htmlFor="">Total floor</label>
        <select
          class="form-select m-2"   
          aria-label="Default select example"
        >
          <option name="proptype" selected>
            Open this select menu
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label htmlFor="">Facing</label>
        <select
          class="form-select m-2"   
          aria-label="Default select example"
        >
          <option name="proptype" selected>
            Open this select menu
          </option>
          <option value="1">North</option>
          <option value="2">South</option>
          <option value="3">East</option>
          <option value="3">West</option>
        </select>
        <input type="file" />
        <button className="btn btn-dark me-5 ms-5">Submit</button>
      </form>
    </div>
  );
};

export default ResidentialRent;


