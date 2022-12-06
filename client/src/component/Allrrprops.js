import React, { useContext, useEffect, useState } from "react";
import propertyContext from "../context/PropertyContext";
import { useNavigate } from "react-router-dom";
import image from "../iamge/image-main.jpg"
const Allrrprops = () => {
  let history = useNavigate();
  const context = useContext(propertyContext);
  const [isbroker, setbroker] = useState(true);
  const { rrprop, fetchAllrrprop, lead, handlereq, userdeatils } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllrrprop();
    } else {
      history("/login");
    }
  }, []);
  return (
    <div>
      <h3>All Props</h3>
      {rrprop.map((property) => {
        return (
          <div className="container">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="img-fluid rounded-start" alt="error" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6>{property.title}</h6>
                    <p>{property.description}</p>
                  
                    {/* {userdeatils[0].usertype === "broker" ? (
                      <button onClick={() => handlereq(property._id)}>
                        Handler Req
                      </button>
                    ) : (
                      <button onClick={() => lead(property._id)}>Lead</button>
                    )} */}
                    <h6 className="m-2">2BHK</h6>
                    <h6 className="m-2">2</h6>
                    <h6 className="m-2">north</h6>

                    <button onClick={() => lead(property._id)}>Lead</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Allrrprops;
