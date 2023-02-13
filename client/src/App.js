import './App.css';
import Home from './Components/Home/Home';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CreateProperty from './Components/Create_Property/CreateProperty';
import ResidentialRent from './Components/Create_Property/Property_Forms/ResidentialRent';
import ResidentialResale from './Components/Create_Property/Property_Forms/ResidentialResale';
import ResidentialPg from './Components/Create_Property/Property_Forms/ResidentialPg';
import ResidentialFlatmates from './Components/Create_Property/Property_Forms/ResidentialFlatmates';
import CommercialRent from './Components/Create_Property/Property_Forms/CommercialRent';
import CommercialSale from './Components/Create_Property/Property_Forms/CommercialSale';
import PlotResale from './Components/Create_Property/Property_Forms/PlotResale';

import RrentDetail from './Components/Property_Pages/Rrent/RrentDetail';
import RrentList from './Components/Property_Pages/Rrent/RrentList';
import RsaleList from './Components/Property_Pages/Rsale/RsaleList';
import RpgList from './Components/Property_Pages/Rpg/RpgList';

import RpgDetail from './Components/Property_Pages/Rpg/RpgDetail';
import RflatList from './Components/Property_Pages/Rflat/RflatList';
import RflateDetail from './Components/Property_Pages/Rflat/RflateDetail';
import CrentList from './Components/Property_Pages/Crent/CrentList';
import CrentDetail from './Components/Property_Pages/Crent/CrentDetail';
import CsaleList from './Components/Property_Pages/Csalse/CsaleList';
import CsaleDetail from './Components/Property_Pages/Csalse/CsaleDetail';
import PlotList from './Components/Property_Pages/Plot/PlotList';
import PlotDetail from './Components/Property_Pages/Plot/PlotDetail';
import RsaleDetail from './Components/Property_Pages/Rsale/RsaleDetail';
import Dashboard from './Components/Dashboard/Dashboard';
import Alert from './Components/Alert';
import UserDetail from './Components/Property_Pages/UserDetail';
import EditRrent from './Components/Create_Property/Property_Forms/EditRrent';
import EditRsale from './Components/Create_Property/Property_Forms/EditRsale';
import EditRpg from './Components/Create_Property/Property_Forms/EditRpg';
import EditRfm from './Components/Create_Property/Property_Forms/EditRfm';
import EditCmr from './Components/Create_Property/Property_Forms/EditCmr';
import EditCms from './Components/Create_Property/Property_Forms/EditCms';
import EditPlot from './Components/Create_Property/Property_Forms/EditPlot';
import Admin from './Components/Admin/Admin';





function App() {
  return (
    <>


      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create-property' element={<CreateProperty />} ></Route>
          <Route path='/residential-rent' element={<ResidentialRent />} ></Route>
          <Route path='/residential-resale' element={<ResidentialResale />} ></Route>
          <Route path='/residential-pg' element={<ResidentialPg />} ></Route>
          <Route path='/residential-flatmate' element={<ResidentialFlatmates />} ></Route>
          <Route path='/commercial-rent' element={<CommercialRent />} ></Route>
          <Route path='/commercial-sale' element={<CommercialSale />} ></Route>
          <Route path='/plot-resale' element={<PlotResale />} ></Route>

          <Route path="/rrent-list" element={<RrentList />}></Route>
          <Route path="/rrent-detail/:id" element={<RrentDetail />}  ></Route>

          <Route path="/rsale-list" element={<RsaleList />}></Route>
          <Route path="/rsale-detail/:id" element={<RsaleDetail />}></Route>

          <Route path="/rpg-list" element={<RpgList />}></Route>
          <Route path="/rpg-detail/:id" element={<RpgDetail />}></Route>

          <Route path="/rfm-list" element={<RflatList />}></Route>
          <Route path="/rfm-detail/:id" element={<RflateDetail />}></Route>

          <Route path="/cmr-list" element={<CrentList />}></Route>
          <Route path="/cmr-detail/:id" element={<CrentDetail />}></Route>

          <Route path="/cms-list" element={<CsaleList />}></Route>
          <Route path="/cms-detail/:id" element={<CsaleDetail />}></Route>

          <Route path="/plot-list" element={<PlotList />}></Route>
          <Route path="/plot-detail/:id" element={<PlotDetail />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>

          <Route path='/user-detail' element={<UserDetail/>} ></Route>

          <Route path="/edit-rrent/:id" element={<EditRrent/>}></Route>
          <Route path="/edit-rsale/:id" element={<EditRsale/>}></Route>
          <Route path="/edit-rpg/:id" element={<EditRpg/>}></Route>
          <Route path="/edit-rfm/:id" element={<EditRfm/>}></Route>
          <Route path="/edit-cmr/:id" element={<EditCmr/>}></Route>
          <Route path="/edit-cms/:id" element={<EditCms/>}></Route>
          <Route path="/edit-plot/:id" element={<EditPlot/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>

        </Routes>

      </Router>
    </>


  );
}

export default App;
