import React, { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext()

const UserState =(props)=>{
    // const host = "http://localhost:5000"
    const host = "https://azown.com"
    const kycupdate =async (formData)=>{
        console.log(formData)
        const responce = await axios.put(`${host}/api/auth/kycupdate`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            },
            

        });
        console.log(responce.data)
    }
  
    return (
        <UserContext.Provider value={{host,kycupdate}}>
            {props.children}
        </UserContext.Provider>
    )

}
export {UserContext, UserState} 