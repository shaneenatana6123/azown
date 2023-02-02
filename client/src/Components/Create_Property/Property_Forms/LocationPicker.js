import React, { useEffect, useRef, useState } from 'react';
import { useJsApiLoader, Autocomplete, GoogleMap, Marker, } from '@react-google-maps/api'



const LocationPicker = ({ onLocation}) => {
  const [mark, setmark] = useState(false)
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      setmark(true)
    }, 3000);

  }, [])

 




  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: ['places'],
  })

  const [selectedLocation, setSelectedLocation] = useState({ lat: 26.477626, lng: 80.31696 });
  
//  /** @type React.MutableRefObject<HTMLInputElement> */
//  const originRef = useRef()
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
       
        <div className="form-group col-md-6 my-3">
         
          


        </div>

        <div className="form-group col-md-12">
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
          mark && <Marker position={selectedLocation}
            draggable={true} 
            onDragEnd={onLocation}
            // onDragEnd={(e) => {
            //   setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

            // }}
          />
        }
      </GoogleMap>
        </div>


      </div>
    
    </div>


  );
}

export default LocationPicker;