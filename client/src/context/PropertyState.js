import React, { useState } from "react";
import PropertyContext from "./PropertyContext";


const PropertyState = (props) => {
  const host = "http://54.199.1.10:5000";
  
  const [rrprop, setrrprop] = useState([]);
  const [rrs,setrrs]  = useState([])
  const [ rpg, setrpg] = useState([])
  const [rfm ,setrfm] = useState([])
  const [ cmr , setcmr] = useState([])
  const [ cms , setcms] = useState([])
  const [ plot , setplot] = useState([])
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
    method: "POST",
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

const listrrs = async () => {
  const responce = await fetch(`${host}/api/property/getrrs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setrrs(resdata);
};

const listrfm = async () => {
  const responce = await fetch(`${host}/api/property/getrfm`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setrfm(resdata);
};

const listrpg = async () => {
  const responce = await fetch(`${host}/api/property/getrpg`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setrpg(resdata);
};


const listcms = async () => {
  const responce = await fetch(`${host}/api/property/getcms`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setcms(resdata);
};

const listcmr = async () => {
  const responce = await fetch(`${host}/api/property/getcmr`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setcmr(resdata);
};

const listplot = async () => {
  const responce = await fetch(`${host}/api/property/getplot`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const resdata = await responce.json();
  setplot(resdata);
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
       
        fetchAllrrprop,
        dash,
        gethandle,
        gethandler,
        Userrrprop,
        rrproplead,
        rrprolead,
        
        paymentreq,
        userdetail,
        getuserdetail,
        kycupdatefun,
        handlereq,
        addservice,
        userprofile,userdata,
        rrs,listrrs,
        rpg,listrpg,
        rfm,listrfm,
        cmr,listcmr,
        cms, listcms,
        plot,listplot,
        host,
        
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
