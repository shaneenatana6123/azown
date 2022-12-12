import React, { useContext, useEffect } from "react";
import propertyContext from "../context/PropertyContext";
import DashRrentProp from "./MyRrentProp.js/DashRrentProp";
const Myrrprop = () => {
  const context = useContext(propertyContext);
  const {
    dash,
    Userrrprop,
    rrproplead,
    rrprolead,
    paymentreq,
    gethandle,
    gethandler,
    handreq,handlerowner,accepthandler
  } = context;
  useEffect(() => {
    Userrrprop();
    gethandler();
    // console.log(dash);
  }, []);

  return (
    <div className="">
      {dash.map((propert) => {
        return (
          <DashRrentProp propert={propert} />
        );
      })}
    </div>
  );
};

export default Myrrprop;
