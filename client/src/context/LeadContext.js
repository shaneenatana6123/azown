import React, { createContext, useState } from "react";
const leadContext = createContext()

const LeadState =(props)=>{
    const [userleadsdata, setuserleadsdata] = useState([]);
    const [ownerleaddata, setownerleaddata] = useState([])
    const host = "http://localhost:5000"
    
    const leadcreate = async (id) => {
        const responce = await fetch(`${host}/api/leadprop/leadcreate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ property_id: id }),
        });
        const res = await responce.json();
        console.log(res);
      };
   
     
      const userlead = async () => {
        const responce = await fetch(`${host}/api/leadprop/userleaddata`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const resdata = await responce.json();
        setuserleadsdata(resdata);
      };
      const ownerlead = async (pid) => {
        const responce = await fetch(`${host}/api/leadprop/ownerlead`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ property_id:pid }),
        });
        const resdata = await responce.json();
        setownerleaddata(resdata);
      };
     const updateleadstage = async (lid,stage)=>{
        const responce = await fetch(`${host}/api/leadprop/updateleadstage`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ _id:lid,property_lead_stage:stage }),
          });
          const resdata = await responce.json();
          setuserleadsdata(resdata);

     }
    return (
        <leadContext.Provider value={{leadcreate,userlead,userleadsdata,updateleadstage,ownerlead, ownerleaddata}}>
            {props.children}
        </leadContext.Provider>
    )

}
export {leadContext, LeadState} 