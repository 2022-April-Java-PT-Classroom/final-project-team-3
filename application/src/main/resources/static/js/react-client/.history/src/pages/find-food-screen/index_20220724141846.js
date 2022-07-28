import "@reach/combobox/styles.css";

import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";

import React from "react";
import { formatRelative } from "date-fns";

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




export default function App(){
    const {} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS
    })
   return <div>map</div> 
}