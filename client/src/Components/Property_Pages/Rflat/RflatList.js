import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Navbar from '../../Header/Navbar'
import Rflate from './Rflate'
import RflateFilter from './RflateFilter'

const RflatList = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const { host } = context;

  const [RfmData, setData] = useState([]);
  const [rr, setrr] = useState([])
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(() => {
    async function listrrprop() {
      const responce = await fetch(`${host}/api/property/getrfm`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const resdata = await responce.json();
      setData(resdata);
      setrr(resdata)
    }
    listrrprop()
  }, []);

  return (
    <div id="main-wrapper">

      <Navbar />
      {showAlert && <Alert msg="Please Login Before!!" />}
      <div className="clearfix" />
      <section className="gray pt-4">
        <div className="container">
          <div className="row m-0">
            <div className="short_wraping">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                  <ul className="shorting_grid">

                    <li className="list-inline-item"><a href="#"><span className="ti-map-lt" />Residential Flatmates</a></li>
                  </ul>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
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

              </div>
            </div>
          </div>
          <div className="row">

            <RflateFilter />
            <div className="col-lg-8 col-md-12 col-sm-12">
            {RfmData.map((property) => {
          
          return (   
            
          <Rflate property={property} key={property._id}  onAlert={handleAlert}/>
          );
        })}
            </div>


          </div>
        </div>
      </section>
     

    </div>

  )
}

export default RflatList