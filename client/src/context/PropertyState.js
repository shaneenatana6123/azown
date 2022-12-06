import React, { useState } from "react";
import PropertyContext from "./PropertyContext";

const PropertyState = (props) => {
  const host = "http://localhost:5000";
  const rrpropInitial = [];
  const [rrprop, setrrprop] = useState(rrpropInitial);
  const [dash, setdash] = useState([]);

  const addservice = async (service_name, service_desc, service_charge) => {
    const responce = await fetch(`${host}/api/service/createservice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ service_name, service_desc, service_charge }),
    });
    const data = await responce.json();
    console.log(data);

  };
  const [allservice,setallservice ]= useState([])
  const fetchservice = async()=>{
    const responce = await fetch(`${host}/api/service/fetchservice`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
      },
      
    });
    const data = await responce.json();
    // console.log(data);
    setallservice(data)

  }

  const addrrProp = async (title, description, proptype) => {
    console.log(title, description, proptype);
    const responce = await fetch(`${host}/api/property/addprop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, proptype }),
    });
    const newnote = await responce.json();
    console.log(newnote);
    setrrprop(rrprop.concate(newnote));
    // setnote(notes.concat(newnote));
  };
  const fetchAllrrprop = async () => {
    const responce = await fetch(`${host}/api/property/fetchallprops`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newnote = await responce.json();
    console.log(newnote);
    setrrprop(newnote);
    // setrrprop(rrprop.concate(newnote))
    // setnote(notes.concat(newnote));
  };
  const [rrprolead, setrrprolead] = useState([]);
  const rrproplead = async (id) => {
    const responce = await fetch(`${host}/api/property/rrproplead/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const leaddata = await responce.json();
    setrrprolead(leaddata);
    // console.log(leaddata);

    // console.log(id);
  };
  const [userleadsdata, setuserleaddata] = useState([]);
  const userlead = async () => {
    const responce = await fetch(`${host}/api/property/userleaddata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userleaddata = await responce.json();
    // console.log(userleaddata);
    setuserleaddata(userleaddata);
  };
  const paymentreq = async (id) => {
    // console.log(id);
    const responce = await fetch(`${host}/api/property/paymentreq/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let paydata = await responce.json();
  };
  const Userrrprop = async () => {
    const responce = await fetch(`${host}/api/property/getuserrrprop`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetail = await responce.json();
    setdash(userdetail);
  };
  const lead = async (id) => {
    const responce = await fetch(`${host}/api/property/leadreq`, {
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
  const [userdetail, setuserdetail] = useState([]);

  const kycupdatefun = async (name, email, usertype, phone, adharno) => {
    const responce = await fetch(`${host}/api/auth/kycupdate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, email, usertype, phone, adharno }),
    });
    const updatedatares = await responce.json();
    console.log(updatedatares);
  };
  const handlereq = async (id) => {
    // console.log(id);
    const responce = await fetch(`${host}/api/property/handlerbreq/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const reqdata = await responce.json();
  };
  const [gethandle, sethandler] = useState([]);
  const gethandler = async () => {
    const responce = await fetch(`${host}/api/property/gethandler`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetail = await responce.json();
    sethandler(userdetail);
    // console.log(userdetail);
  };
  const [handlerowner, sethandlerowner] = useState([]);
  const handreq = async (id) => {
    const responce = await fetch(`${host}/api/property/handreqwithid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetail = await responce.json();
    sethandlerowner(userdetail);
    // sethandler(userdetail)
    // console.log(userdetail);
  };
  const [userdeatils, setuserdetails] = useState([]);
  const getuserdetail = async () => {
    const responce = await fetch(`${host}/api/auth/getuserdetail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetailed = await responce.json();
    console.log(userdetailed.usertype);
    setuserdetails(userdetailed);
  };
  const accepthandler = async (id) => {
    const responce = await fetch(`${host}/api/property/accepthandler/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const userdetail = await responce.json();
  };
  const [venderservice,setvenderservice]= useState([])
  const allvenderservice = async ()=>{
    const responce = await fetch(`${host}/api/service/allvenderservice`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      }, 
    });
    const updatedatares = await responce.json();
    setvenderservice(updatedatares);
    console.log(venderservice);

  }
    const addVenderService =async (service)=>{
      const responce = await fetch(`${host}/api/service/addvenderservice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(service),
      });
      const addservice = await responce.json();
      // console.log(updatedatares);
      setvenderservice(venderservice.concat(addservice))
    }
    const createservicelead = async(id)=>{
      // console.log(id);
      const responce = await fetch(`${host}/api/service/createservicelead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({id}),
      });
      const addservice = await responce.json(); 
    }
    const [client_lead_data, set_lead_data] = useState([])
    const client_service_lead = async()=>{
      const responce = await fetch(`${host}/api/service/clientservicelead`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const client_data = await responce.json(); 
      set_lead_data(client_data)
    }
  return (
    <PropertyContext.Provider
      value={{
        client_lead_data,
        client_service_lead,
        createservicelead,
        venderservice,
        allvenderservice,
        addVenderService,
        fetchservice,allservice,
        rrprop,
        addrrProp,
        handreq,
        handlerowner,
        fetchAllrrprop,
        lead,
        dash,
        gethandle,
        gethandler,
        Userrrprop,
        rrproplead,
        rrprolead,
        userlead,
        userleadsdata,
        paymentreq,
        userdetail,
        getuserdetail,
        userdeatils,
        kycupdatefun,
        handlereq,
        accepthandler,
        addservice,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
