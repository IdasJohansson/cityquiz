import "./map.css"
import logo512 from "../img/logo512.png"

export const Map = () => {

    return (
    <div className="googleMap">

         <img className='icon-questionmark' src ={logo512} alt = "Questionmarklogo"/> 
         
    </div>); 
    }; 

// Addera parametrar center, zoom, longitude and latitude så att api-anropet blir rätt 
// 
    