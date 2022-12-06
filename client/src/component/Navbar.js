import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const Navbar = () => {
  let history = useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userdetail")
    history("/login")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Azown
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
              <li className="nav-item">
                <Link className="nav-link me-3" to="/createproperty">
                  Create Property
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link me-3" to="/rr-create-property">
                  All RR Props
                </Link>
              </li> */}
              <li className="nav-item">
               {localStorage.getItem("token") && <Link className="nav-link me-3" to="/userdash">
                  userdash
                </Link> } 
              </li>
              {localStorage.getItem("token")? <button onClick={handleClick} className="btn btn-dark">Logout</button>:<>              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
</>}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
