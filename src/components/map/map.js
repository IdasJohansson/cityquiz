import "./map.css"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY; 
    return (
    <div className="googleMap">
        <LoadScript
            googleMapsApiKey={API_KEY} 
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

