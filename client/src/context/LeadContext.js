import React, { createContext, useState } from "react";
const leadContext = createContext()

const LeadState =(props)=>{
    const [userleadsdata, setuserleadsdata] = useState([]);
    const [ownerleaddata, setownerleaddata] = useState([])
    // const host = "https://azown.com"
    const host = "http://localhost:5000"
    
    const leadcreate = async (id,type) => {
        const responce = await fetch(`${host}/api/leadprop/leadcreate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ property_id: id, property_type: type }),
        });
        const res = await responce.json();
        console.log(res);
      };
   
     
      const userlead = async (ptype) => {
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
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMmYyYWY0ZTliMTQ5YzAwMTg5ODQ4In0sImlhdCI6MTY3NDMzOTI3MX0.xYzlIULGow26waQsg85OrAsJPRtSaeQ9HFe14XIahss
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
       console.log(resdata);
     }
    return (
        <leadContext.Provider value={{leadcreate,userlead,userleadsdata,updateleadstage,ownerlead, host,ownerleaddata}}>
            {props.children}
        </leadContext.Provider>
    )

}
export {leadContext, LeadState} 