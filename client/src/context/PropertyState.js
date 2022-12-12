import React, { useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from "axios";

const PropertyState = (props) => {
  const host = "http://localhost:5000";
  
  const [rrprop, setrrprop] = useState([]);
  const [dash, setdash] = useState([]);
  const [userdetail, setuserdetail] = useState([]);
  const [userdata , setuserdata] = useState([])

// userdetails
const getuserdetail = async () => {
  const responce = await fetch(`${host}/api/auth/getuserdetail`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setuserdetail(resdata);
};

const userprofile =async (id)=>{
  console.log(id);
  const responce = await fetch(`${host}/api/auth/userprofile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id:id }),
  });
  const resdata = await responce.json();
  setuserdata(resdata);
}

// rr property
const fetchAllrrprop = async () => {
  const responce = await fetch(`${host}/api/property/getrrprop`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setrrprop(resdata);
};




//Rrent leads data

// handler 
const handlereq = async (pid,uid,des) => {
  const responce = await fetch(`${host}/api/property/handlerreq`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({ property_id :pid,property_owner_id:uid }),
  });
  const resdata = await responce.json();
  console.log(resdata);
};

const [handlerowner, sethandlerowner] = useState([]);
  const handreq = async (id) => {
    // await axios({
    //   method: "get",
    //   url: `${host}/api/property/handreqwithid/${id}`,
    //   headers: {
    //         "Content-Type": "application/json",
    //         "auth-token": localStorage.getItem("token"),
    //       },

    // }).then( (response)=> {
    //   console.log(response.data);
    //   sethandlerowner(response.data);

    // });
    const responce = await fetch(`${host}/api/property/handreqwithid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const resdata = await responce.json();
    // console.log(resdata);
    sethandlerowner(resdata);
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
// services..


// service lead



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
    const [singlerrpropdata, setsinglerrpropdata] =useState([])
    const singleRrProp = async (id) => {
      // console.log(id);
      const responce = await fetch(`${host}/api/property/singlerrprop/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      });
      let propdata = await responce.json();
      console.log(propdata);
      setsinglerrpropdata(propdata)

    };
  return (
    <PropertyContext.Provider
      value={{
        singleRrProp,
        singlerrpropdata,
        client_lead_data,
        client_service_lead,
        createservicelead,
        venderservice,
        allvenderservice,
        addVenderService,
        fetchservice,allservice,
        rrprop,
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
        kycupdatefun,
        handlereq,
        accepthandler,
        addservice,
        userprofile,userdata
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
