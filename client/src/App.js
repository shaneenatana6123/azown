import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProperty from "./component/CreateProperty";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import About from "./component/About";
import Allrrprops from "./component/All_Property/Rrent/Allrrprops";
import Userdash from "./component/UserDashboard/Userdash";
import ResidentialRent from "./component/Props_Forms/ResidentialRent";
import Brokerdash from "../src/component/BrokerDashboard/Brokerdash";
import propertyContext from "./context/PropertyContext";
import Adminpanel from "./component/Adminpanel";
import Adminlogin from "./component/Adminlogin";
import Venderdash from "./component/Venderdash";
import Services from "./component/Services";
import SingleRrProp from "../src/component/All_Property/Rrent/SingleRrProp";
import OwnerRrentProp from "../src/component/UserDashboard/Property/OwnerRrentProp";
import ResidentialSale from "./component/Props_Forms/ResidentialSale";
import ResidentialPG from "./component/Props_Forms/ResidentialPG";
import ResidentialFlats from "./component/Props_Forms/ResidentialFlats"
import CommerRent from "./component/Props_Forms/CommerRent";
import CommerSale from './component/Props_Forms/CommerSale'
import LandPlots from "./component/All_Property/Plot-Lands/LandPlots";
import PlotResale from "./component/Props_Forms/PlotResale";

function App() {
  const context = useContext(propertyContext);
  const { userdeatils } = context;
 
 
 
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
       
        <Routes>
        <Route path="/admin" element={<Adminlogin/>} ></Route>
        <Route path="/adminpanel" element={<Adminpanel/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/rrprop" element={<Allrrprops />}></Route>
          <Route path="/createproperty" element={<CreateProperty />}></Route>
          <Route path="/rrprop/:id" element={<SingleRrProp/>}  ></Route>
          <Route path="/userdash/:id" element={<OwnerRrentProp/>}  ></Route>
          {/* <Route path="/userdash" element={<Venderdash/>}></Route> */}
          <Route path="/service/:name" element={<Services />} />
{/* {console.log(localStorage.getItem('userdetail'))} */}
{localStorage.getItem("token") && ( <Route path="/userdash" element={ localStorage.getItem('userType') === "broker" ? (<Brokerdash /> ) :localStorage.getItem('userType') === "vender"? <Venderdash/>: (<Userdash />) } ></Route>)}
          {/* {localStorage.getItem("token") && ( <Route path="/userdash" element={ userdeatils[0].usertype === "broker" ? (<Brokerdash /> ) :userdeatils[0].usertype === "vender"? <Venderdash/>: (<Userdash />) } ></Route>)} */}
          <Route
            path="/rr-create-property"
            element={<ResidentialRent />}
          ></Route>
          <Route path="/resdential-resale"  element={<ResidentialSale/>}></Route>
          <Route path="/residential-pg" element={<ResidentialPG/>}> </Route>
          <Route path="/resdential-flat"  element={<ResidentialFlats/>}></Route>
          <Route path="/commertial-rent" element={<CommerRent/>}></Route>
          <Route path="/commertial-sale" element={<CommerSale/>}></Route>
          <Route path="/land-plot" element={<PlotResale/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
