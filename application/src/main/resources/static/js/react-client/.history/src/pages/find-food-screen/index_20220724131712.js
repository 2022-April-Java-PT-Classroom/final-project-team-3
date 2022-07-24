import "@/combobox/styles.css";

import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";

import React from "react";
import { formatRelative } from "date-fns";

export default function App(){
    const {} = useLoadScript({
        googleMapsApiKey:
    })
    return <div>map</div>;
}