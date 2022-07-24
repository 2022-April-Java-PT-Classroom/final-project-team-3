import Map from '../components/map';
import { useLoadScript } from "@react-google-maps/api";

export default function Home(){
    const {isLoaded} = useLoadScript({
       googleMapsApiKey: process.env.NEXT_PUBLIC
    });
    return <div>Map</div>;
}
