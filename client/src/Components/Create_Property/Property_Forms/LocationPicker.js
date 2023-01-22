import React, { useEffect, useState } from 'react';

import {  useJsApiLoader,  GoogleMap,  Marker,} from '@react-google-maps/api'


const LocationPicker = () => {
  const [mark,setmark] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setmark(true)
    }, 500);

  },[])
  
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })

  const [selectedLocation, setSelectedLocation] = useState({ lat: 26.477626, lng: 80.31696});
  
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }

  if (!isLoaded) {
    return <h4>Map is Loading....</h4>
  }
  return (
  <div>
    <div>
      <h4>Slect the Location</h4>
    
    </div>
    <GoogleMap
      zoom={10}
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={selectedLocation}
      options={{
        // zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        // fullscreenControl: false,

      }}
      onClick={handleMapClick}
      
      
    >
    
    {
      mark &&  <Marker position={selectedLocation}
       draggable={true}
     onDragEnd={(e) => {
  setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

}}
      />
    }
     
    
 
    </GoogleMap>
  </div>


  );
}

export default LocationPicker;