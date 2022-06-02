import axios from 'axios'; 

const GoogleMapAPI = axios.create({
    /*
    baseURL: "https://www.google.com/maps/@?api=1&map_action=map"
    */
    
    /*
    baseURL: "https://maps.googleapis.com/maps/api/js?key="
    */
}); 

export default GoogleMapAPI; 