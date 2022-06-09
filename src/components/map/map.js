import "./map.css"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = (props) => {

    return (
    <div className="googleMap">

        <LoadScript
            googleMapsApiKey="AIzaSyBKZmbag9A7FWNg2e_A788n-g3lBri6FrY " // Obs denna ligger nu synlig på github :) 
        >
            <GoogleMap
                mapContainerStyle={{
                    height: "400px",
                    width: "100%"
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

