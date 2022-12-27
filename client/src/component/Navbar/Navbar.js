import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from "../Login";
import Signup from "../Signup";
import DashIcon from "./DashIcon";

const Navbar = () => {
  
  let history = useNavigate()
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClick = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem("userId")
    history("/login")
  }
  return (
    <div className="fixed-top">
      <nav class="navbar navbar-expand-lg " style={{color:"#fff",backgroundColor:"#ed1849"}}>
        <div class="container-fluid">
          <Link class="navbar-brand ms-4 " to="/">
            <b>Azown</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
             
              {/* <li className="nav-item">
                <Link className="nav-link me-3" to="/rr-create-property">
                  All RR Props
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="btn btn-rounded btn-light rounded-pill  me-3" to="/createproperty">
                <i class="fa-solid fa-plus"></i>  Submit Property
                </Link>
              </li>
              {/* <li className="nav-item">
                {localStorage.getItem("token") && <Link className="nav-link me-3" to="/userdash">
                  UserdashBoard
                </Link>}
              </li> */}
              {/* {localStorage.getItem("token") ? <button onClick={handleClick} className="btn btn-dark">Logout</button> : <>              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>} */}
              {!localStorage.getItem("token") &&  <li className="nav-item">
                <i class="fa-solid fa-user"></i>
                <span onClick={() => setSmShow(true)} className="">
                  Login
                </span>/
                <span onClick={() => setLgShow(true)} className="">Sign up</span>
                <Modal
                  size="lg"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      Login
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Login/>
                  </Modal.Body>
                </Modal>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Sign Up
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body><Signup/> </Modal.Body>
                </Modal>
              </li>}
             
              <li className="nav-item">

             {localStorage.getItem("token") ? <DashIcon/>:  <li className="nav-item">
                <Link className="btn btn-rounded btn-light rounded-pill  me-3" to="/createproperty">
                <i class="fa-solid fa-plus"></i>  Submit Property
                </Link>
              </li> } 
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
