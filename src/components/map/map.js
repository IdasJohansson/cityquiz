import "./map.css"
import logo512 from "../img/logo512.png"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = (props) => {

    return (
    <div className="googleMap">

        <LoadScript
            googleMapsApiKey="AIzaSyBKZmbag9A7FWNg2e_A788n-g3lBri6FrY "
        >
            <GoogleMap
                mapContainerStyle={{
                    height: "400px",
                    width: "600px"
                }}
                center={
                    {lat: props.lat, lng: props.lng}
                }
                zoom={8}
            >
                <Marker title="My-Marker"
                    position={{lat: props.lat, lng: props.lng}}
                />
            </GoogleMap>
        </LoadScript>
         
    </div>); 
    }; 

// Addera parametrar center, zoom, longitude and latitude så att api-anropet blir rätt 
// 
    