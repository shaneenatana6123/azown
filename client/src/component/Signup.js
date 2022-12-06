import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const host = "http://localhost:5000"
  const history = useNavigate()
  const [credential, setcredential] = useState({name :"", email: "", password: "" });
  const signup = async (name, email, password) => {
    const responce = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await responce.json();
    // console.log(json);
    if (json.success) {
      // console.log(json.success);
      localStorage.setItem("token", json.authtoken);
      history("/")
    }else{
      history("/signup")
    }
  };
  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(credential);
    signup(credential.name , credential.email, credential.password);
    setcredential({name :"", email: "", password: "" });
  };
  return (
    <div className="container m-5">
      <form className="conatiner m-5" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"          
            name="name"
            onChange={handleChange}
            value={credential.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
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

            name="password"
            onChange={handleChange}
            minLength={5}
            required
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
