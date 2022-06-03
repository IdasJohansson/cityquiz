import http from "../GooglemapAPI";

const getGoogleMap = () => {
    const API_KEY = process.env.REACT_APP_API_KEY; 
    return http.get(`${API_KEY}`)
}; 

export default {getGoogleMap}

// Addera parametrar center, zoom, longitude and latitude i return så att api-anropet blir rätt