import Map from '../components/map';
import { useLoadScript } from "@react-google-maps/api";

export default function Home(){
    const {isLoaded} = useLoadScript({
       goog 
    })
    return <div>Map</div>;
}
