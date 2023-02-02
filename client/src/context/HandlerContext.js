import React, { createContext, useState } from "react";
const HandlerContext = createContext()

const HandlerState =(props)=>{
    // const host = "https://azown.com"
    const host = "http://localhost:5000"
    const [handpropsdata , sethandpropsdata ] = useState([])

    const handprops = async ()=>{
        const responce = await fetch(`${host}/api/handler/handledprops`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          
          });
          const resdata = await responce.json();
       sethandpropsdata(resdata)
     }
     const [handleaddata , sethandleaddata] = useState([])
     const handleads = async (pid) => {
        const responce = await fetch(`${host}/api/handler/handlerleads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ property_id:pid }),
        });
        const resdata = await responce.json();
        sethandleaddata(resdata);
      };
const [handcondata,sethandcondata] = useState([])
      const handcontact = async () => {
        const responce = await fetch(`${host}/api/handler/handcontact`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const resdata = await responce.json();
        console.log(resdata)
        sethandcondata(resdata);
      };
      const [handlerowner, sethandlerowner] = useState([]);
  const handreq = async (id) => {
    const responce = await fetch(`${host}/api/handler/handreqwithid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const resdata = await responce.json();
    console.log(resdata);
    sethandlerowner(resdata);
  };
  const accepthandler = async (bid,pid,stage) => {
    const responce = await fetch(`${host}/api/handler/accepthandler`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ broker_id:bid,property_id:pid,stage:stage }),
    });
    const res = await responce.json();
    console.log(res);
  };
    return (
        <HandlerContext.Provider value={{handreq,handlerowner,accepthandler,handprops,handpropsdata,handleads,handleaddata,handcondata,handcontact}}>
            {props.children}
        </HandlerContext.Provider>
    )

}
export {HandlerContext, HandlerState} 