import React, { useContext, useEffect } from "react";
import propertyContext from "../../context/PropertyContext";

const BrokerProfile = (props) => {
  const context = useContext(propertyContext);
  const { user } = props;
  const { accepthandler, userprofile,userdata } = context;
  useEffect(()=>{
    userprofile(user.broker_id)
  },[])
  
  return (
    <div>

    {userdata && userdata}
   
      <span>{user.broker_id}</span>      
      {user.stage === 0 && (
        <button onClick={() => accepthandler(user._id)}>Accept</button>
        
      )}
      <hr />
    </div>
  );
};

export default BrokerProfile;
