import "@reach/combobox/styles.css";

import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";

import React from "react";

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
    width: "100vw",
    height: "100vh",
};
const

export default function App(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";
   return <div><GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap></div> 
}