import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import propertyContext from "../context/PropertyContext";


const Login = () => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  const context = useContext(propertyContext)
  const {  userdetails}=context
  useEffect(()=>{
    // getuserdetail()
  },[])
  const history = useNavigate();
  const host = "http://localhost:5000";


  const getuserdetail = async () => {
    const responce = await fetch(`${host}/api/auth/getuserdetail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetailed = await responce.json();
    console.log("new");
    console.log(userdetailed);
    // localStorage.setItem('userdetail',JSON.stringify(userdetailed))
    localStorage.setItem('userdetail',userdetailed[0].usertype)
    // console.log(userdetailed.usertype);
   
  };
  const login = async (email, password) => {
    const responce = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await responce.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken); 
      getuserdetail()
      console.log(userdetails)
      history("/");
      
      // localStorage.setItem('userdetail',userdetails[0].usertype)
      // console.log(localStorage.getItem("userdetail"))
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

export default Login;
