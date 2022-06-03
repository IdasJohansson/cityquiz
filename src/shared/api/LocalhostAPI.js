import axios from 'axios'; 

const LoginAPI = axios.create({
    baseURL: "http://localhost:5001/api/"
}); 

export default LoginAPI; 