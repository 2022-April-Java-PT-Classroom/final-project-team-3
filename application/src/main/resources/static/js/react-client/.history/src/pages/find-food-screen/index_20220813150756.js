import "@reach/combobox/styles.css";

import {
    Combobox,
    ComboboxInput,
    ComboboxList,
    ComboboxOption,
    ComboboxPopover,
} from "@reach/combobox";
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import AllPost from "../../components/all-posts";
import Popup from "../../components/popup";
import React from "react";
import compass from '../../assets/logo/1f9ed.png';
import { formatRelative } from "date-fns";
import mapStyles from "../../pages/find-food-screen/style.module.scss"
import style from './style.module.scss';

const libraries = ["places"];
const mapContainerStyle ={
    width: "100vw",
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

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    });
    // AIzaSyBmmiiSoq3uDOFcr3jyhuSZBlOvxbeyD6E
    
    const [markers, setMarkers]  = React.useState([]);
    
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
          ...current,
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
          },
        ]);
      }, []);
    

      const mapRef = React.useRef();
      const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);
    
      const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
      }, []);
    
      if (loadError) return "Error";
      if (!isLoaded) return "Loading...";


   return (
   <center><div>
    <h1>Community{" "}
    <span role="img" aria-label="chef">
        🧑‍🍳
    </span>
    </h1>
        
        

    <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
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
              url: `../../assets/logo/CardItem.jpeg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
        
{selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="chef">
                  🧑‍🍳
                  </span>{" "}
                Alert
              </h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div></center>
  );
}

function Locate({ panTo }) {
    return (
      <button 
        className={style.compassBtn}
        className={style.locate}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img className={style.compassimg} src={compass} alt="compass"  />
      </button>
    );
  }


function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 43.6532, lng: () => -79.3832 },
        radius: 100 * 1000,
      },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      };

      return (
        <div>
            <AllPost/>
            <center><div className="search" >
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Search your location"
                />
                <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
                </ComboboxPopover>
            </Combobox>
            </div>
            </center>
        </div>
      );
    }
