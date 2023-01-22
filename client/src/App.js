import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProperty from './Components/Create_Property/CreateProperty';
import ResidentialRent from './Components/Create_Property/Property_Forms/ResidentialRent';
import ResidentialResale from './Components/Create_Property/Property_Forms/ResidentialResale';
import ResidentialPg from './Components/Create_Property/Property_Forms/ResidentialPg';
import ResidentialFlatmates from './Components/Create_Property/Property_Forms/ResidentialFlatmates';
import CommercialRent from './Components/Create_Property/Property_Forms/CommercialRent';
import CommercialSale from './Components/Create_Property/Property_Forms/CommercialSale';
import PlotResale from './Components/Create_Property/Property_Forms/PlotResale';



function App() {
  return (
    <>
 

  <Router>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/create-property' element={<CreateProperty/>} ></Route>
  <Route path='/residential-rent' element={<ResidentialRent/>} ></Route>
  <Route path='/residential-resale' element={<ResidentialResale/>} ></Route>
  <Route path='/residential-pg' element={<ResidentialPg/>} ></Route>
  <Route path='/residential-flatmate' element={<ResidentialFlatmates/>} ></Route>
  <Route path='/commercial-rent' element={<CommercialRent/>} ></Route>
  <Route path='/commercial-sale' element={<CommercialSale/>} ></Route>
  <Route path='/plot-resale' element={<PlotResale/>} ></Route>
  
 
  </Routes>
    
  </Router>
    </>
 

  );
}

export default App;
