import "@reach/combobox/styles.css";

import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";

import React from "react";
import mapStyles from "../../pages/find-food-screen/style.module.scss"

// import { formatRelative } from "date-fns";

// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxList,
//     ComboboxOption,
//     ComboboxPopover,
// } from "@reach/combobox";

// import usePlacesAutoComplete, {
//     getGeoCode,
//     getLatLng
// } from "use-places-autocompletereach";


const libraries = ["places"];
const mapContainerStyle ={
    width: "50vw",
    height: "50vh",
};
const center = {
    lat:37.090240,
    lng: -95.712891,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function App(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers]

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";
   return (
   <div>
    <h1>Community{" "}
    <span role="img" aria-label="chef">
        🧑‍🍳
        </span>
        </h1>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    onClick={(event)=>{
        new Date().
       setMarkers(current => [
        ...current,
        {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        },
     ]); 
    }}
    >
        {markers.map(marker => <Marker key={marker.time}/>)}
    </GoogleMap>
    </div>
    );
}