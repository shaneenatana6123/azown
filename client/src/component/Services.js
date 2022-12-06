import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import propertyContext from "../context/PropertyContext";

const Services = () => {
  const context = useContext(propertyContext);
  const {
    createservicelead,
    client_lead_data,
    client_service_lead,
    userdetail,
    getuserdetail,
  } = context;
  const [loading, setloading] = useState(false);
  const [service, setservice] = useState([]);
  const host = "http://localhost:5000";
  const { name } = useParams();
  const getservice = async () => {
    const responce = await fetch(`${host}/api/service/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const servicedata = await responce.json();
    setservice(servicedata);
    // setloading(false)
    // console.log(servicedata);
  };
  useEffect(() => {
    setloading(true);
    // setfetch(true)
    getservice();
    client_service_lead();
    //   console.log(client_lead_data);
    getuserdetail();
    setloading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div>Data Loading....</div>
      ) : (
        <div>
          {service.map((vender) => {
            return (
              <div className="row">
                <div className="col-4 border border-dark">
                  <p>{vender.service_name}</p>
                  <p>{vender.vender_id}</p>
                  <p>{vender.vendor_description}</p>
                  <p>{vender.vendor_location}</p>

                  {/* {vender.lead_req} */}
                  {vender.lead_req.includes(userdetail._id) ? (
                    <button>Pending...</button>
                  ) : (
                    <button onClick={() => createservicelead(vender._id)}>
                      lead
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Services;
