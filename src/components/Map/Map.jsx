import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import "./Map.css";
import { v4 as uuidv4 } from 'uuid';


const containerStyle = {
  width: "325px",
  height: "325px",
  borderRadius: "50%",
  margin: "20px auto",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

const libraries = ["places"];

const Map = ({instructors}) => {

  function classMarkers(instructors) {
    const newMarkers = [];
  for (let instructor of instructors) {
    instructor.classes && instructor.classes.map((classer) => {
      // console.log(`latitude ${classer.lat}, longitude ${classer.lng}`)
      newMarkers.push({ instructor:instructor.id, lat: classer.lat, lng: classer.lng })
    });
  }
  return newMarkers
}
  

    const [markers, setMarkers] = useState([])
    const [currentLocation, setCurrentLocation] = useState({
        lat: 39.0997,
        lng: -94.5786
      })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setCurrentLocation({
               lat: position.coords.latitude,
                lng:position.coords.longitude
        })
            
        })
    },[])
    useEffect(() => {
      setMarkers(classMarkers(instructors))
    },[instructors])

    console.log(markers)
    
  
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    })

    if(loadError) return "Loading Error"
    if(!isLoaded) return "Loading..."

  return (
    <>
      <GoogleMap
        className="map-container"
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
        options={options}
      >
      {markers.map((marker) => {
      return (
        <Marker 
          key={uuidv4()} 
          position={{ lat: marker.lat, lng: marker.lng}}
          />
      )
      })}
      
      
      </GoogleMap>
    </>
  );
};

export default Map;
