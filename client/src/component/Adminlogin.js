import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import propertyContext from "../context/PropertyContext";


const Adminlogin = () => {
    const [credential, setcredential] = useState({ email: "", password: "" });
    const context = useContext(propertyContext)
    const {  getuserdetail}=context
    const history = useNavigate();
    const host = "http://localhost:5000";
    const login = async (email, password) => {
      const responce = await fetch(`${host}/api/admin/adminlogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await responce.json();
      console.log(json);
      if (json.success==="true") {
        history("/adminpanel");
      }else{
        history("/login") 
      }
    };
    const handleChange = (e) => {
      setcredential({ ...credential, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      login(credential.email, credential.password);
      setcredential({ email: "", password: "" });
    };
    return (
      <div className="container m-5">
        <form className="conatiner m-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleChange}
              value={credential.email}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credential.password}
              id="exampleInputPassword1"
              name="password"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };

export default Adminlogin
