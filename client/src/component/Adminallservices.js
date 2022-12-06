import React, { useContext, useEffect } from "react";
import propertyContext from "../context/PropertyContext";
const Adminallservices = () => {
  const context = useContext(propertyContext);
  const { fetchservice, allservice } = context;
  useEffect(() => {
    fetchservice();
  }, []);
  return (
    <div class="container p-5">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Service Name</th>
            <th scope="col">Discription</th>
            <th scope="col">Service Charge</th>
            <th scope="col">Total Payment</th>
            <th scope="col">No. of Vender</th>
            <th scope="col"> Edit Service</th>
            <th scope="col">Del Service</th>
          </tr>
        </thead>
        <tbody>
          
            {allservice.map((service) => {
              return (
                <>
                <tr>
                  <td>1</td>
                  <td>{service.service_name}</td>
                  <td>{service.service_desc}</td>
                  <td>Rs.{service.service_charge}</td>
                  <td>Rs. 6K</td>
                  <td>0</td>
                  <td class="btn  btn-light">Edit</td>
                  <td class=""> DEl</td>
                  </tr>
                </>
              );
            })}
         
        </tbody>
      </table>
    </div>
  );
};

export default Adminallservices;
