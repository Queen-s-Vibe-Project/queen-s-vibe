import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import "./Map.css";

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

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 39.0997,
    lng: -94.5786,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return "Loading Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <GoogleMap
        className="map-container"
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
        options={options}
      >
      
      </GoogleMap>
    </>
  );
};

export default Map;
