import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import propertyContext from "../../context/PropertyContext";

const BrokerProfile = (props) => {
  const context = useContext(propertyContext);
  const {id} = useParams()
  const [clicked,setclick] = useState(false)
  const [reject, setreject ]= useState(false)
  const { user } = props;
  const { accepthandler } = context;
  
  return (
    

<div>
    <p> <b>Broker Name:</b>  {user.name}</p>
    <p> <b>Broker Email:</b> {user.email}</p>
    <button className={ clicked ? "btn btn-secondary disabled m-2":"btn btn-dark m-2"  } onClick={()=>{accepthandler(user._id,id,10); setclick(true)}}> Accept </button>
    <button className={ reject ? "btn btn-secondary disabled m-2":"btn btn-dark m-2"  } onClick={()=>{accepthandler(user._id,id,-10); setreject(true)}}> Reject </button>
    <hr />
    </div>
    
  );
};

export default BrokerProfile;
