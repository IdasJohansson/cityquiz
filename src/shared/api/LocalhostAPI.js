import axios from 'axios'; 

const LocalhostAPI = axios.create({
    baseURL: "https://localhost:5001/api/"
}); 

export default LocalhostAPI; 