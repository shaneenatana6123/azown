import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import Rpg from './Rpg'
import RpgFilter from './RpgFilter'

const RpgList = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [RpgData, setData] = useState([]);
  const [rpg, setrpg] = useState([])
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(() => {
    async function listrrsprop() {
      const responce = await fetch(`${host}/api/property/getrpg`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const resdata = await responce.json();
      setData(resdata);
      setrpg(resdata)
      console.log(resdata);
    }
    listrrsprop()
  }, []);
  return (
    <div id="main-wrapper">
    {showAlert && <Alert msg="Please Login Before!!"/> }
    
      <Navbar />
      {/* End Navigation */}
      <div className="clearfix" />
    
      <section className="gray pt-4">
        <div className="container">
          <div className="row m-0">
            <div className="short_wraping">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                  <ul className="shorting_grid">
                    {/* <li className="list-inline-item"><a href="grid-layout-with-sidebar.html" className="active"><span className="ti-layout-grid2" />Grid</a></li> */}
                    {/* <li className="list-inline-item"><a href="list-layout-with-sidebar.html"><span className="ti-view-list" />List</a></li> */}
                    <li className="list-inline-item"><a href="#"><span className="ti-map-at" />Residential PG</a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                  <div className="shorting_pagination">
                    <div className="shorting_pagination_laft">
                      <h5>Showing 1-25 of 72 results</h5>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a href="javascript:void(0);" className="active">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li><a href="javascript:void(0);">3</a></li>
                        <li><a href="javascript:void(0);">4</a></li>
                        <li><a href="javascript:void(0);">5</a></li>
                        <li><a href="javascript:void(0);">6</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2 col-sm-6">
              <div className="shorting-right">
                <label>Short By:</label>
                <div className="dropdown show">
                  <a className="btn btn-filter dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="selection">Most Rated</span>
                  </a>
                  <div className="drp-select dropdown-menu">
                    <a className="dropdown-item" href="JavaScript:Void(0);">Most Rated</a>
                    <a className="dropdown-item" href="JavaScript:Void(0);">Most Viewd</a>
                    <a className="dropdown-item" href="JavaScript:Void(0);">News Listings</a>
                    <a className="dropdown-item" href="JavaScript:Void(0);">High Rated</a>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            {/* property Sidebar */}
            <RpgFilter />
            <div className="col-lg-8 col-md-12 col-sm-12">
              
{RpgData &&  RpgData.map((property)=>{
  return (   
          <Rpg property={property} key={property._id} onAlert={handleAlert} />
          
          );
})}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default RpgList