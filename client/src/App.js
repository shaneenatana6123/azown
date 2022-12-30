import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProperty from "./component/CreateProperty";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import About from "./component/About";
import ListRrent from "./component/All_Property/Rrent/ListRrent";
import Userdash from "./component/UserDashboard/Userdash";
import ResidentialRent from "./component/Props_Forms/ResidentialRent";
import Brokerdash from "../src/component/BrokerDashboard/Brokerdash";
import propertyContext from "./context/PropertyContext";
import Adminpanel from "./component/Adminpanel";
import Adminlogin from "./component/Adminlogin";
import Venderdash from "./component/Venderdash";
import Services from "./component/Services";
import DetailRrent from "./component/All_Property/Rrent/DetailRrent";
import OwnerRrentProp from "../src/component/UserDashboard/Property/OwnerRrentProp";
import ResidentialSale from "./component/Props_Forms/ResidentialSale";
import ResidentialPG from "./component/Props_Forms/ResidentialPG";
import ResidentialFlats from "./component/Props_Forms/ResidentialFlats"
import CommerRent from "./component/Props_Forms/CommerRent";
import CommerSale from './component/Props_Forms/CommerSale'
import LandPlots from "./component/All_Property/Plot-Lands/LandPlots";
import PlotResale from "./component/Props_Forms/PlotResale";
import Rsale from "./component/All_Property/Rsale/Rsale";
import ListRsale from "./component/All_Property/Rsale/ListRsale";
import DetailRsale from "./component/All_Property/Rsale/DetailRsale";
import ListRpg from "./component/All_Property/Rpg/ListRpg";
import DetailRpg from "./component/All_Property/Rpg/DetailRpg";
import ListRflat from "./component/All_Property/R_Flates/ListRflat";
import DetailRflat from "./component/All_Property/R_Flates/DetailRflat";
import ListCrent from "./component/All_Property/Crent/ListCrent";
import DetailCrent from "./component/All_Property/Crent/DetailCrent";
import ListCsale from "./component/All_Property/Csale/ListCsale";
import DetailCsale from "./component/All_Property/Csale/DetailCsale";
import ListPlot from "./component/All_Property/Plot-Lands/ListPlot";
import DetailPlot from "./component/All_Property/Plot-Lands/DetailPlot";


function App() {
  const context = useContext(propertyContext);
  const { userdeatils } = context;
 
 
 
  return (
    <div>
      <Router>     
        <Routes>
        <Route path="/admin" element={<Adminlogin/>} ></Route>
        <Route path="/adminpanel" element={<Adminpanel/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
         
          <Route path="/userdash/:id" element={<OwnerRrentProp/>}  ></Route>
          {/* <Route path="/userdash" element={<Venderdash/>}></Route> */}
          <Route path="/service/:name" element={<Services />} />
{/* {console.log(localStorage.getItem('userdetail'))} */}
{localStorage.getItem("token") && ( <Route path="/userdash" element={ localStorage.getItem('userType') === "broker" ? (<Brokerdash /> ) :localStorage.getItem('userType') === "vender"? <Venderdash/>: (<Userdash />) } ></Route>)}
          {/* {localStorage.getItem("token") && ( <Route path="/userdash" element={ userdeatils[0].usertype === "broker" ? (<Brokerdash /> ) :userdeatils[0].usertype === "vender"? <Venderdash/>: (<Userdash />) } ></Route>)} */}
          <Route  path="/rr-create-property" element={<ResidentialRent />}  ></Route>
          <Route path="/resdential-resale"  element={<ResidentialSale/>}></Route>
          <Route path="/residential-pg" element={<ResidentialPG/>}> </Route>
          <Route path="/resdential-flat"  element={<ResidentialFlats/>}></Route>
          <Route path="/commertial-rent" element={<CommerRent/>}></Route>
          <Route path="/commertial-sale" element={<CommerSale/>}></Route>
          <Route path="/land-plot" element={<PlotResale/>}></Route>
          <Route path="/createproperty" element={<CreateProperty />}></Route>

           <Route path="/rrent-list" element={<ListRrent />}></Route>
          <Route path="/rrent-detail/:id" element={<DetailRrent/>}  ></Route>

          <Route path="/rsale-list" element={<ListRsale/>}></Route>
          <Route path="/rsale-detail/:id" element={<DetailRsale/>}></Route>

          <Route path="/rpg-list" element={<ListRpg/>}></Route>
          <Route path="/rpg-detail/:id" element={<DetailRpg/>}></Route>

          <Route path="/rfm-list" element={<ListRflat/>}></Route>
          <Route path="/rfm-detail/:id" element={<DetailRflat/>}></Route>

          <Route path="/cmr-list" element={<ListCrent/>}></Route>
          <Route path="/cmr-detail/:id" element={<DetailCrent/>}></Route>

          <Route path="/cms-list" element={<ListCsale/>}></Route>
          <Route path="/cms-detail/:id" element={<DetailCsale/>}></Route>

          <Route path="/plot-list" element={<ListPlot/>}></Route>
          <Route path="/plot-detail/:id" element={<DetailPlot/>}></Route>







        </Routes>
      </Router>
    </div>
  );
}
export default App;
