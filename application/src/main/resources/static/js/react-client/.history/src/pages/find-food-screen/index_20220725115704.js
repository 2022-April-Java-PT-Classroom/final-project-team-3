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
    const [markers, setMarkers]  = React.useState([]);
    
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event)=>{
        setMarkers(current => [
         ...current,
         {
             lat: event.latLng.lat(),
             lng: event.latLng.lng(),
             time: new Date(),
         },
      ]); 
     }, []);

     const mapRef = React.useRef();
     
     const onMapLoad = React.useCallback((map) =>{
        mapRef.current = map;
     }, []);

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
    onClick={onMapClick}
    onLoad={onMapLoad}
    >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `src/assets/logo/CardItem.jpeg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() =>{
                set
            }}
          />
        ))}

        {selected ? (
        <InfoWindow position={{ lat: selected.lat, lng: selected.lng}}>
            <div>
                <h2>Food pick up</h2>
                {/* <p>Pickup {formatRelative(selected.time, new Date())}</p> */}
            </div>
        </InfoWindow>
        ): null}
    </GoogleMap>
    </div>
    );
}